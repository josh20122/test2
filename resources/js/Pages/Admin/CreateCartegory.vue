<template>
  <AdminNavigation>
    <v-container class="">
      <v-row>
        <v-col>
          <div class="display-1">Create Cartegory</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="3">
          <v-row dense>
            <v-col>
              <div class="title">Cartegory Avatar</div>
            </v-col>
            <v-col cols="12">
              <v-img :src="'/test/category-demo.jpeg'" aspect-ratio="1"></v-img>
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
                  <label for="">Enter avatar</label>
                </div>
                <v-file-input
                  outlined
                  dense
                  counter
                  show-size
                  v-model="form.avatar"
                  :rules="required"
                  :disabled="loading"
                  :loading="loading"
                  :error-messages="errors.avatar"
                  placeholder="Edit avatar"
                ></v-file-input>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="9">
          <v-card outlined :loading="loading" :disabled="loading">
            <v-card-title> Category Info </v-card-title>
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
                      v-model="form.title"
                      :error-messages="errors.title"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <label for="">Country</label>
                    <v-select
                      :rules="required"
                      :items="countries"
                      item-text="country"
                      item-value="id"
                      :error-messages="errors.country"
                      v-model="form.country"
                      outlined
                      placeholder="Please select"
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <label for="">Status</label>
                    <v-select
                      :rules="required"
                      :items="items.status"
                      :error-messages="errors.status"
                      v-model="form.status"
                      outlined
                      placeholder="Please select"
                    ></v-select>
                  </v-col>
                  <v-col cols="12"> </v-col>
                  <v-col> </v-col>
                </v-row>
                <v-row justify="end" class="pr-4 pb-4">
                  <div class="grid justify-end grid-cols-1 space-x-2">
                    <v-btn
                      depressed
                      @click="create()"
                      class="white--text"
                      elevation=""
                      color="blue darken-2"
                      >create</v-btn
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
                close
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
  props: ["errors", "countries"],
  layout: AdminNavigation,
  data() {
    return {
      items: {
        status: [
          { id: 1, text: "ACTIVE" },
          { id: 2, text: "INACTIVE" },
        ],
      },
      loading: false,
      processing: false,
      required: [(v) => !!v || "This field is required"],
      snack: {
        text: null,
        value: false,
      },
      form: {
        avatar: null,
        title: null,
        status: null,
        country: null,
      },
    };
  },
  methods: {
    create() {
      Inertia.post(`/admin/cartegory/create`, this.form, {
        forceFormData: true,
        onStart: () => {
          this.loading = true;
          this.processing = true;
        },
        onFinish: () => {
          this.loading = false;
          this.processing = false;
        },
      });
    },
  },
};
</script>

<style>
</style>