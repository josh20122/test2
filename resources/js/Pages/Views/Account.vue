<template>
  <v-container class="">
    <v-row>
      <v-col cols="12" sm="3">
        <v-row dense>
          <v-col>
            <div class="title">Profile Photo</div>
          </v-col>
          <v-col cols="12">
            <v-img :src="path" aspect-ratio="1" max-height=""></v-img>
          </v-col>
          <v-col cols="12">
            <v-form>
              <div class="grid space-y-2">
                <label
                  for=""
                  v-if="processing"
                  v-text="processing"
                  class="text-green-700"
                ></label>
                <label for="">Update Profile</label>
              </div>
              <v-file-input
                outlined
                dense
                v-model="userProfile"
                :rules="rules.required"
                counter
                show-size
                :disabled="loading"
                :loading="loading"
                :error-messages="errors.image"
                placeholder="Update Profile"
              ></v-file-input>
            </v-form>
          </v-col>
          <v-col>
            <v-btn
              elevation=""
              @click="uploadProfile()"
              class="white--text"
              color="blue"
              :disabled="loading"
              >Update</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="9">
        <v-card>
          <v-tabs v-model="tab" background-color="deep-purple accent-4" dark>
            <v-tabs-slider></v-tabs-slider>
            <v-tab href="#tab-1"> Personal Information </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item :value="1" id="tab-1">
              <v-card outlined :loading="loading">
                <v-card-title>User Personal Details</v-card-title>
                <v-divider class=""></v-divider>
                <v-card-text>
                  <v-row dense>
                    <v-col cols="6">
                      <label for="">Full Name</label>
                      <v-text-field
                        :rules="rules.required"
                        placeholder="Name"
                        dense
                        outlined
                        :error-messages="errors.name"
                        v-model="form.name"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <label for="">Email</label>
                      <v-text-field
                        :rules="rules.required"
                        dense
                        placeholder="Email"
                        :error-messages="errors.email"
                        outlined
                        v-model="form.email"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <label for="">Country</label>
                      <v-text-field
                        :rules="rules.required"
                        dense
                        placeholder="Country"
                        :error-messages="errors.country"
                        outlined
                        :value="country"
                        readonly
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <label for="">Mobile </label>
                      <v-text-field
                        :rules="rules.required"
                        dense
                        placeholder="Mobile"
                        :error-messages="errors.mobile"
                        outlined
                        v-model="form.mobile"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <label for="">Role</label>
                      <v-select
                        :rules="rules.required"
                        placeholder="Please Select"
                        outlined
                        :error-messages="errors.role"
                        :items="roles"
                        v-model="form.role"
                      >
                      </v-select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-btn
                        elevation=""
                        depressed
                        @click="updateInfo()"
                        color="blue"
                        :disabled="loading"
                        class="white--text"
                        >Update</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card>
                <v-card-text>
                  <v-row>
                    <v-col> </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
      <v-col>
        <v-snackbar
          color="green darken-1"
          class="white--text"
          absolute
          right
          top
          v-model="snackbar"
          :timeout="3000"
        >
          <div v-text="snacktext"></div>
          <template v-slot:action="{ attrs }">
            <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import Navigation from "../Layouts/Navigation.vue";
export default {
  props: ["user", "path", "errors", "country"],
  layout: Navigation,
  data() {
    return {
      roles: ["admin", "delivery"],
      rules: {
        required: [(v) => !!v || "This Field is required"],
      },
      snackbar: false,
      snacktext: "",
      userProfile: null,
      profileval: false,
      test: true,
      tab: null,
      processing: null,
      loading: false,
      form: {
        name: this.user.name,
        email: this.user.email,
        role: this.user.role,
        country: this.user.country,
        mobile: this.user.mobile,
      },
    };
  },
  methods: {
    updateInfo() {
      Inertia.post(`/admin/update-user-info/${this.user.id}`, this.form, {
        preserveScroll: true,
        preserveState: true,
        onFinish: () => {
          this.loading = false;
        },
        onStart: () => {
          this.loading = true;
        },
        onProgress: () => {},

        onSuccess: () => {
          this.snacktext = "User Personal Information successfully updated";
          this.snackbar = true;
        },
      });
    },
    uploadProfile() {
      Inertia.post(
        `/admin/update-user-profile/${this.user.id}`,
        { image: this.userProfile, trash: this.path },
        {
          forceFormData: true,
          preserveScroll: true,
          preserveState: true,
          onFinish: () => {
            this.loading = false;
            this.processing = null;
          },
          onStart: () => {
            this.loading = true;
            this.processing = "Upload in progress";
          },
          onProgress: () => {},

          onSuccess: () => {
            this.snacktext = "Profile has been successfully updated";
            this.snackbar = true;
          },
        }
      );
    },
  },
};
</script>

<style>
</style>