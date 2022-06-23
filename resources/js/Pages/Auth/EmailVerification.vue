<template>
  <v-app class="verify">
    <v-main class="verify">
      <v-container class="fill-height">
        <v-row justify="center">
          <v-col>
            <v-card
              :class="$vuetify.breakpoint.smAndUp ? 'px-8' : ''"
              elevation="10"
              max-width="500"
              class="mx-auto py-8"
            >
              <v-card-title class="">
                <div class="text-2xl font-bold">Please confirm your email</div>
              </v-card-title>
              <v-card-text>
                <div class="grid space-y-2">
                  <div class="font-semibold">
                    Click the link in the message sent to your email addrsss
                  </div>
                  <div>Can't find the email?</div>
                  <div>
                    Make sure you have typed your email address correctly.
                  </div>
                  <div>Check your spam folder.</div>
                  <div>
                    Still no email? Try again
                    <v-btn
                      small
                      elevation=""
                      class="blue--text"
                      @click="verify()"
                      depressed
                      color="white"
                      >here</v-btn
                    >

                    <div
                      :class="textColor ? textColor : ''"
                      class="text-sm green--text"
                      v-text="text"
                    ></div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-row>
        <v-snackbar
          v-model="processing"
          :timeout="timeout"
          :color="color"
          tile
          absolute
          right
          top
          transition="slide-x-reverse-transition"
          class="white--text"
        >
          <div class="font-sembold text-lg" v-text="text"></div>
        </v-snackbar>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
export default {
  data() {
    return {
      processing: null,
      text: null,
      timeout: null,
      textColor: null,
      loading: null,
      color: null,
    };
  },
  methods: {
    verify() {
      Inertia.post(`/auth/email/verification-notification`, null, {
        preserveScroll: true,
        preserveState: true,
        onStart: () => {
          this.processing = true;
          this.timeout = 100000;
          this.textColor = "text-green-600";
          this.loading = true;
          this.color = "yellow darken-3";
          this.text = "Sending verification email ...";
        },
        onSuccess: () => {
          this.timeout = 3000;
          this.color = "green darken-3";
          this.textColor = "text-green-600";
          this.text = "Email sent successfully";
          this.loading = false;
        },
        onError: () => {
          this.timeout = 2000;
          this.loading = false;
          this.textColor = "error--text";
          this.color = "red darken-2";
          this.text = "Failed, try again";
        },
      });
    },
  },
};
</script>

<style>
</style>