<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
        <v-row>
          <v-col>
            <v-card
              :disabled="loading"
              elevation="14"
              :loading="loading"
              outlined
              class="mx-auto"
              max-width="500px"
            >
              <v-card-text class="text-center pb-0">
                <v-icon x-large color="">mdi-lock</v-icon>
              </v-card-text>
              <v-card-text class="title text-center pb-0">
                Forgot Password?
              </v-card-text>
              <v-card-subtitle class="text-center subtitle">
                <div v-if="message == null">
                  {{ card.text }}
                </div>
                <div class="text-green-400" v-else>
                  {{ message }}
                </div>
              </v-card-subtitle>

              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="form.email"
                    label="E-mail"
                    outlined
                    placeholder="Enter a valid email adress"
                    :error-messages="errors.email"
                    prepend-inner-icon="mdi-email"
                    :disabled="loading"
                  >
                  </v-text-field>
                </v-form>
                <v-btn
                  @click="submit()"
                  block
                  elevation=""
                  color="indigo"
                  class="white--text"
                  :disabled="loading"
                >
                  Send My Password
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
export default {
  props: {
    status: {
      required: false,
      default: null,
    },
    errors: {
      type: Object,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      card: {
        text: "Enter the email address you use to sign in to Ollie Microcredits and we'll send you a link to reset your password. ",
      },

      loading: false,
      form: {
        email: null,
      },
      done: false,
    };
  },
  computed: {
    message() {
      if (this.done == true) {
        return "We have emailed your password reset link!";
      }
      return null;
    },
  },
  methods: {
    submit() {
      Inertia.post("/auth/forgot-password", this.form, {
        onStart: () => {
          this.loading = true;
        },
        onFinish: () => {
          this.loading = false;
        },
        onSuccess: () => {
          this.done = true;
        },
      });
    },
  },
};
</script>

<style>
</style>