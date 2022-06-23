<template>
  <v-app>
    <v-main>
      <v-container class="">
        <v-row>
          <v-col>
            <v-card class="mx-auto" max-width="500">
              <v-card-title>New Seller Application form</v-card-title>
              <v-card-text>
                <v-form>
                  <v-row dense>
                    <v-col cols="12">
                      <v-text-field
                        label="Name of organisation"
                        outlined
                        dense
                        v-model="form.name"
                        :error-messages="errors.name"
                        :rules="required"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="City"
                        outlined
                        dense
                        v-model="form.city"
                        :error-messages="errors.city"
                        :rules="required"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Region"
                        outlined
                        dense
                        v-model="form.region"
                        :error-messages="errors.region"
                        :rules="required"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Sub Region"
                        outlined
                        dense
                        v-model="form.sub_region"
                        :error-messages="errors.sub_region"
                        :rules="required"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        label="Seller Description"
                        outlined
                        dense
                        v-model="form.description"
                        :error-messages="errors.description"
                        counter="256"
                        :rules="required"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Contact Email"
                        outlined
                        dense
                        v-model="form.email"
                        :error-messages="errors.email"
                        :rules="required"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Contact Phone Number"
                        outlined
                        dense
                        v-model="form.phone_number"
                        :error-messages="errors.phone_number"
                        :rules="required"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-file-input
                        label="Business Registration Document"
                        outlined
                        dense
                        v-model="form.document"
                        :error-messages="errors.document"
                        :rules="required"
                      ></v-file-input>
                    </v-col>
                    <v-col cols="12">
                      <v-file-input
                        label="Business Owner's Passport"
                        outlined
                        dense
                        v-model="form.passport"
                        :error-messages="errors.passport"
                        :rules="required"
                      ></v-file-input>
                    </v-col>
                    <v-col cols="12">
                      <v-checkbox>
                        <template v-slot:label>
                          <div>
                            Have read and understood Our
                            <Link href="/terms">Terms & Condintions</Link>
                          </div>
                        </template>
                      </v-checkbox>
                    </v-col>
                    <v-col cols="12">
                      <v-btn
                        class="white--text"
                        elevation=""
                        color="indigo"
                        block
                        @click="submit"
                        >submit</v-btn
                      >
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
    </v-main>
  </v-app>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
export default {
  props: ["errors"],
  methods: {
    submit() {
      Inertia.post(`/seller/create`, this.form, {
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
          this.text =
            "Submitted successfully, Please check your email address  ";
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
      form: {
        name: null,
        description: null,
        document: null,
        sub_region: null,
        region: null,
        city: null,
        passport: null,
        email: null,
        phone_number: null,
      },
    };
  },
};
</script>

<style>
</style>