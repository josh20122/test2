<template>
  <AdminNavigation>
    <v-container class="">
      <v-row>
        <v-col>
          <div class="title">Create Country</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card outlined max-width="500">
            <v-card-title>Country Information</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-form>
                <v-row dense>
                  <v-col cols="12">
                    <v-text-field
                      outlined
                      dense
                      prepend-inner-icon="mdi-flag"
                      label="Country Name"
                      :error-messages="errors.country_name"
                      v-model="form.country_name"
                      :rules="required"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      prepend-inner-icon="mdi-access-point"
                      v-model="form.status"
                      cache-items
                      :items="status"
                      :error-messages="errors.status"
                      :rules="required"
                      dense
                      label="Country Status"
                      outlined
                      item-text="name"
                      item-value="value"
                    >
                    </v-select>
                  </v-col>
                  <v-col>
                    <v-text-field
                      prefix="+"
                      prepend-inner-icon="mdi-phone"
                      v-model="form.phone_code"
                      :error-messages="errors.phone_code"
                      :rules="required"
                      outlined
                      dense
                      label="Phone number code"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      outlined
                      dense
                      v-model="form.currency_code"
                      prepend-inner-icon="mdi-currency-usd"
                      label="Currency Code"
                      :error-messages="errors.currency_code"
                      :rules="required"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-file-input
                      placeholder="Add Flag"
                      v-model="form.flag"
                      dense
                      :error-messages="errors.flag"
                      :rules="required"
                      outlined
                    >
                    </v-file-input>
                  </v-col>
                  {{ uppercase }}
                  <v-col>
                    <v-row justify="end" class="px-4 pb-4">
                      <div>
                        <v-btn
                          @click="create()"
                          elevation=""
                          class="white--text"
                          color="indigo"
                          >Create</v-btn
                        >
                      </div>
                    </v-row>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-snackbar
          v-model="processing"
          :timeout="timeout"
          :color="color"
          tile
          absolute
          right
          transition="slide-x-reverse-transition"
          class="white--text"
        >
          <div class="font-sembold text-lg" v-text="text"></div>
        </v-snackbar>
      </v-row>
    </v-container>
  </AdminNavigation>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import AdminNavigation from "../Layouts/AdminNavigation.vue";
export default {
  layout: AdminNavigation,
  props: ["errors"],
  data() {
    return {
      required: [(v) => !!v || "This Field is required"],
      form: {
        country_name: null,
        flag: null,
        currency_code: null,
        phone_code: null,
        status: null,
      },
      status: [
        { name: "Active", value: true },
        { name: "Inactive", value: false },
      ],
      processing: false,
      loading: false,
      redirect: false,
      text: null,
      color: null,
      timeout: null,
    };
  },
  methods: {
    create() {
      Inertia.post(`/admin/country/store`, this.form, {
        preserveScroll: true,
        forceFormData: true,
        preserveState: true,
        onStart: () => {
          this.processing = true;
          this.timeout = 100000;
          this.loading = true;

          this.color = "yellow darken-3";
          this.text = "Processing a new country";
        },
        onSuccess: () => {
          this.timeout = 3000;
          this.color = "green darken-3";
          this.text = "Country added successfully";
          this.redirect = true;
          this.loading = false;
        },
        onError: () => {
          this.timeout = 2000;
          this.loading = false;
          this.color = "red darken-2";
          this.text = "Failed, please check for any errors";
        },
      });
    },
  },
  computed: {
    uppercase() {
      if (this.form.currency_code) {
        this.form.currency_code = this.form.currency_code.toUpperCase();
      }
      if (this.form.country_name) {
        this.form.country_name = this.form.country_name.toUpperCase();
      }
    },
  },
  watch: {
    redirect() {
      Inertia.get("/admin/products");
    },
  },
};
</script>

<style>
</style>