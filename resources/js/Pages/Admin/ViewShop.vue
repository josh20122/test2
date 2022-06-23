<template>
  <AdminNavigation>
    <v-container class="">
      <v-row justify="start">
        <v-col cols="12" sm="5">
          <v-card>
            <v-card-title> Application Documents </v-card-title>
            <v-card-text>
              <div class="grid space-y-6">
                <v-btn
                  elevation=""
                  :href="`/admin/download-seller-business-document/${form.id}`"
                  color="blue"
                  class="white--text"
                >
                  <v-icon left color="">mdi-download</v-icon>
                  <span> Registration Document</span>
                </v-btn>
                <v-btn
                  :href="`/admin/download-seller-passport/${form.id}`"
                  elevation=""
                  color="blue"
                  class="white--text"
                >
                  <v-icon left color="">mdi-download</v-icon>
                  <span>Owner's Passport</span>
                </v-btn>
                <Link :href="`/admin/users/${user.id}`">
                  <v-btn block elevation="" color="blue" class="white--text">
                    <v-icon left color="">mdi-upload</v-icon>
                    <span>view User</span>
                  </v-btn>
                </Link>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="7">
          <v-card class="mx-auto" max-width="500">
            <v-card-title>New Seller Application form</v-card-title>
            <v-card-text>
              <v-form>
                <v-row dense>
                  <v-col cols="12">
                    <v-text-field
                      label="Country"
                      outlined
                      dense
                      readonly
                      :value="country.country"
                      :rules="required"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Name of User"
                      outlined
                      dense
                      readonly
                      :value="user.name"
                      :rules="required"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Email of User"
                      outlined
                      dense
                      readonly
                      :value="user.email"
                      :rules="required"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Phone Number"
                      outlined
                      dense
                      readonly
                      :value="user.mobile"
                      :rules="required"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Name of organisation"
                      outlined
                      dense
                      readonly
                      :value="form.name"
                      :error-messages="errors.name"
                      :rules="required"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="City"
                      outlined
                      dense
                      readonly
                      :value="form.city"
                      :error-messages="errors.city"
                      :rules="required"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Region"
                      outlined
                      dense
                      readonly
                      :value="form.region"
                      :error-messages="errors.region"
                      :rules="required"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Sub Region"
                      outlined
                      readonly
                      dense
                      :value="form.sub_region"
                      :error-messages="errors.sub_region"
                      :rules="required"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      label="Seller Description"
                      outlined
                      dense
                      :value="form.description"
                      :error-messages="errors.description"
                      counter="256"
                      readonly
                      :rules="required"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Contact Email"
                      outlined
                      dense
                      readonly
                      :value="form.email"
                      :error-messages="errors.email"
                      :rules="required"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Contact Phone Number"
                      outlined
                      dense
                      readonly
                      :value="form.phone_number"
                      :error-messages="errors.phone_number"
                      :rules="required"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-row justify="end">
                      <div
                        class="grid justify-end grid-cols-2 space-x-2 pb-4 pr-4"
                      >
                        <v-btn
                          class="white--text"
                          elevation=""
                          color="error"
                          @click="reject(form.id)"
                          >Reject</v-btn
                        >
                        <v-btn
                          class="white--text"
                          elevation=""
                          color="blue"
                          @click="approve(form.id)"
                          >Approve</v-btn
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
    </v-container>
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
  </AdminNavigation>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import Address from "../Components/Checkout/Address.vue";
import AdminNavigation from "../Layouts/AdminNavigation.vue";
export default {
  layout: AdminNavigation,
  components: { Address },
  props: ["errors", "form", "country", "user"],
  methods: {
    approve(id) {
      Inertia.put(`/admin/shop/approve/${id}`, null, {
        forceFormData: true,
        preserveScroll: true,
        preserveState: true,
        onStart: () => {
          this.processing = true;
          this.timeout = 100000;
          this.loading = true;
          this.color = "yellow darken-3";
          this.text = "  Processing ...";
        },
        onSuccess: () => {
          this.timeout = 3000;
          this.color = "green darken-3";
          this.text = "Application has been Approved";
          this.redirect = true;
          this.loading = false;
        },
        onError: () => {
          this.timeout = 2000;
          this.loading = false;
          this.color = "red darken-2";
          this.text = "Failed, please try again later";
        },
      });
    },
    reject(id) {
      Inertia.put(`/admin/shop/reject/${id}`, null, {
        forceFormData: true,
        preserveScroll: true,
        preserveState: true,
        onStart: () => {
          this.processing = true;
          this.timeout = 100000;
          this.loading = true;
          this.color = "yellow darken-3";
          this.text = "  Processing ...";
        },
        onSuccess: () => {
          this.timeout = 3000;
          this.color = "green darken-3";
          this.text = "Application has been Rejected.";
          this.redirect = true;
          this.loading = false;
        },
        onError: () => {
          this.timeout = 2000;
          this.loading = false;
          this.color = "red darken-2";
          this.text = "Failed, please try again later";
        },
      });
    },
  },
  data() {
    return {
      required: [(v) => !!v || "This field is required"],
      content: null,
      color: null,
      timeout: null,
      processing: null,
      loading: false,
      text: null,
      redirect: false,
    };
  },
};
</script>

<style>
</style>