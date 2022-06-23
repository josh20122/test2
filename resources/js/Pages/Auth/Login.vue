<template>
  <v-app>
    <v-container class="fill-height">
      <v-row>
        <v-col>
          <v-card outlined class="mx-auto" max-width="500px">
            <v-card-text class="display-1 text-center pb-0">
              Login
            </v-card-text>
            <v-card-text>
              <v-card-subtitle class="text-center pt-0">
                Login to your Account
              </v-card-subtitle>
              <v-form>
                <label for="">Email</label>
                <v-text-field
                  v-model="form.email"
                  prepend-inner-icon="mdi-mail"
                  type="text"
                  outlined
                  dense
                  :rules="required"
                  :error-messages="errors.email"
                  placeholder="Email"
                >
                </v-text-field>
                <label for="">Password</label>
                <v-text-field
                  v-model="form.password"
                  :error-messages="errors.password"
                  :type="showeye ? 'password' : 'text'"
                  :rules="required"
                  outlined
                  placeholder="Password"
                  dense
                  prepend-inner-icon="mdi-lock"
                  @click:append="showeye = !showeye"
                  :append-icon="showeye ? 'mdi-eye' : 'mdi-eye-off'"
                >
                </v-text-field>
                <v-checkbox
                  v-model="form.remember_me"
                  label="Remember me"
                  :rules="required"
                  small
                  color="blue"
                  outlined
                  dense
                ></v-checkbox>
              </v-form>

              <v-btn
                @click="submit()"
                block
                color="indigo"
                depressed
                class="white--text"
              >
                <v-icon left color="white">mdi-account</v-icon>
                {{ remember_me }}

                Login</v-btn
              >
              <v-card-text>
                Already have an account
                <Link :preserve-scroll="true" href="/auth/register"
                  >Register</Link
                >
              </v-card-text>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
export default {
  components: {},
  props: {
    errors: {
      required: false,
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      showeye: true,
      required: [(v) => !!v || "This field is required"],
      form: {
        email: null,
        password: null,
        remember_me: false,
      },
    };
  },
  methods: {
    submit() {
      Inertia.post(`/auth/login`, this.form, {
        preserveState: true,
      });
    },
  },
};
</script>

<style>
</style>