<template>
  <v-app>
    <v-main class="pic">
      <v-container fluid class="fill-height">
        <v-row justify="center">
          <v-col>
            <v-card outlined class="pa-0 mx-auto border-red" max-width="500">
              <v-card-text class="text-center pb-0 display-1">
                Register
              </v-card-text>
              <v-card-text>
                <v-card-subtitle class="pa-0 text-center"
                  >Create your account. It's free and only takes a
                  minute.</v-card-subtitle
                >
                <v-form class="mx-auto">
                  <v-container class="pa-0">
                    <v-row dense>
                      <v-col cols="12">
                        <v-text-field
                          label="Name"
                          :rules="required"
                          outlined
                          dense
                          v-model="form.name"
                          :error-messages="errors.name"
                          :counter="10"
                          prepend-inner-icon="mdi-account"
                          hint="Name must be less than 10 characters"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="E-mail"
                          outlined
                          dense
                          v-model="form.email"
                          :error-messages="errors.email"
                          prepend-inner-icon="mdi-mail"
                          hint="please enter a valid email"
                          :rules="required"
                          counter="50"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-select
                          label="Country"
                          outlined
                          dense
                          v-model="form.country"
                          :error-messages="errors.country"
                          prepend-inner-icon="mdi-flag"
                          hint="please enter a valid email"
                          :rules="required"
                          :items="countries"
                          item-text="country"
                          item-value="id"
                          counter="50"
                          required
                        ></v-select>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Phone Number"
                          outlined
                          dense
                          v-model="form.phone_number"
                          :error-messages="errors.phone_number"
                          :prefix="'+' + countryCode"
                          prepend-inner-icon="mdi-phone"
                          hint="please enter a valid Phone Number"
                          :rules="required"
                          counter="50"
                        ></v-text-field>
                      </v-col>
                      <div class="d-none" v-text="realPhoneNumber"></div>
                      <v-col cols="12">
                        <v-text-field
                          label="Password"
                          v-model="form.password"
                          outlined
                          dense
                          :error-messages="errors.password"
                          :type="showeye ? 'password' : 'text'"
                          prepend-inner-icon="mdi-lock"
                          :append-icon="showeye ? 'mdi-eye' : 'mdi-eye-off'"
                          @click:append="showeye = !showeye"
                          hint="Password must be at least 8 characters"
                          counter="50"
                          :rules="required"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Confirm Password"
                          v-model="form.password_confirmation"
                          type="password"
                          :error-messages="errors.password_confirmation"
                          prepend-inner-icon="mdi-lock"
                          hint="Password Confirmation must match the given password"
                          :rules="required"
                          outlined
                          dense
                          counter="50"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col> </v-col>
                    </v-row>

                    <v-btn
                      block
                      color="indigo"
                      class="white--text"
                      @click="submit()"
                      >submit</v-btn
                    >
                    <v-card-subtitle>
                      Already have an account,
                      <Link href="/auth/login"> login</Link>
                    </v-card-subtitle>
                  </v-container>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue";
import { Inertia } from "@inertiajs/inertia";
export default {
  components: {
    Link,
  },
  props: ["countries", "errors"],

  methods: {
    submit() {
      Inertia.post("/auth/register", this.form, {
        onStart: () => {
          this.loading = true;
        },
      });
    },
  },
  computed: {
    countryCode() {
      for (var country = 0; country < this.countries.length; country++) {
        if (this.form.country === this.countries[country].id) {
          return this.countries[country].country_code;
        }
      }
    },
    realPhoneNumber() {
      if (this.form.phone_number) {
        this.form.real_phone =
          this.countryCode.toString() + this.form.phone_number.toString();
        return this.countryCode.toString() + this.form.phone_number.toString();
      }
    },
  },
  data() {
    return {
      loading: false,
      required: [(v) => !!v || "This Field is required"],
      showeye: true,
      value: false,
      test: "ssjjss",
      form: {
        real_phone: null,
        name: null,
        email: null,
        password: null,
        phone_number: null,
        country: null,
        password_confirmation: null,
      },
    };
  },
};
</script>

<style>
</style>