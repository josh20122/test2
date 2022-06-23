<template>
  <AdminNavigation>
    <v-container class="">
      <v-row>
        <v-col cols="12" sm="3">
          <v-row dense>
            <v-col>
              <div class="title">Cartegory Avatar</div>
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
                  <label for="">Update Avatar</label>
                </div>
                <v-file-input
                  outlined
                  dense
                  counter
                  show-size
                  v-model="file"
                  :rules="required"
                  :disabled="loading"
                  :loading="loading"
                  :error-messages="errors.avatar"
                  placeholder="Update Profile"
                ></v-file-input>
              </v-form>
            </v-col>
            <v-col>
              <v-btn
                elevation=""
                @click="uploadProfile"
                class="white--text"
                color="blue"
                :disabled="loading"
                >Update</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="9">
          <v-card outlined :loading="loading" :disabled="loading">
            <v-card-title> Edit Category Info </v-card-title>
            <v-divider class=""></v-divider>
            <v-card-text>
              <v-form>
                <v-row dense>
                  <v-col cols="12">
                    <label for="">Title</label>
                    <v-text-field
                      outlined
                      placeholder="Title"
                      :rules="required"
                      :error-messages="errors.title"
                      v-model="form.title"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <label for="">Category Description (optional)</label>
                    <v-textarea
                      outlined
                      placeholder="Description"
                      :rules="required"
                      v-model="form.description"
                      :error-messages="errors.description"
                    ></v-textarea>
                  </v-col>

                  <v-col cols="12">
                    <label for="">Status</label>
                    <v-select
                      outlined
                      placeholder="status"
                      :items="items.status"
                      :itemid="items.status.id"
                      v-model="form.status"
                      :value="items.status.id"
                      :error-messages="errors.status"
                      :rules="required"
                    ></v-select>
                  </v-col>
                  <v-col> </v-col>
                </v-row>
                <v-row justify="end" class="pr-4 pb-4">
                  <div class="grid justify-end grid-cols-2 space-x-2">
                    <v-btn
                      depressed
                      @click="reset()"
                      class="white--text"
                      elevation=""
                      color="yellow darken-2"
                      >Reset</v-btn
                    >
                    <v-btn
                      depressed
                      @click="updateInfo()"
                      class="white--text"
                      elevation=""
                      color="blue darken-2"
                      >Update</v-btn
                    >
                  </div>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-snackbar
            color="green darken-2"
            class="white--text"
            absolute
            transition="slide-x-reverse-transition"
            right
            top
            v-model="snack.value"
            :timeout="3000"
          >
            <div v-text="snack.text"></div>
            <template v-slot:action="{ attrs }">
              <v-btn
                color="red"
                text
                v-bind="attrs"
                @click="snack.text = false"
              >
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </v-col>
      </v-row>
    </v-container>
  </AdminNavigation>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import AdminNavigation from "../Layouts/AdminNavigation.vue";
export default {
  layout: AdminNavigation,
  props: ["errors", "path", "category", "countries"],
  data() {
    return {
      required: [(v) => !!v || "This field is required"],
      loading: false,
      processing: null,
      items: {
        countries: ["Kenya", "Nigeria", "Canada"],
        status: [
          { id: 1, text: "ACTIVE" },
          { id: 2, text: "INACTIVE" },
        ],
      },
      snack: {
        value: false,
        text: null,
      },
      file: null,
      form: {
        title: this.category.title,
        country: this.category.country,
        description: this.category.description,
        status: this.category.status ? "ACTIVE" : "INACTIVE",
      },
    };
  },
  methods: {
    reset() {
      this.form.title = this.category.title;
      this.form.country = this.category.country;
      this.form.description = this.category.description;
      this.form.status = this.category.status ? "ACTIVE" : "INACTIVE";
    },
    updateInfo() {
      Inertia.post(
        `/admin/cartegory/edit-info/${this.category.id}`,
        this.form,
        {
          preserveScroll: true,
          preserveState: true,
          onStart: () => {
            this.loading = true;
          },
          onFinish: () => {
            this.loading = false;
          },
          onSuccess: () => {
            this.snack.text = "Category Info has been successfully updated";
            this.snack.value = "true";
          },
        }
      );
    },
    uploadProfile() {
      Inertia.post(
        `/admin/cartegory/edit-avatar/${this.category.id}`,
        { avatar: this.file, trash: this.path },
        {
          forceFormData: true,
          preserveScroll: true,
          preserveState: true,
          onStart: () => {
            this.loading = true;
            this.processing = true;
          },
          onFinish: () => {
            this.loading = false;
            this.processing = false;
          },
          onSuccess: () => {
            this.snack.text = "Category Avatar has been successfully updated";
            this.snack.value = "true";
          },
        }
      );
    },
  },
};
</script>

<style>
</style>