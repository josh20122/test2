<template>
  <AdminNavigation>
    <v-container class="">
      <v-row>
        <v-col>
          <div class="display-1">All Countries</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Country Name</th>
                  <th>Currency Code</th>
                  <th>Phone Code</th>
                  <th>Users Count</th>
                  <th>Categories Count</th>
                  <th>Product Count</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="country in country.data" :key="country.id">
                  <td v-text="country.country"></td>
                  <td v-text="country.currency"></td>
                  <td v-text="country.country_code"></td>
                  <td v-text="country.user_count"></td>
                  <td v-text="country.cartegory_count"></td>
                  <td v-text="country.product_count"></td>
                  <td>
                    <v-switch
                      @click="status(country.id, country.country)"
                      inset
                      color="indigo"
                      :disabled="loading"
                      v-model="country.status"
                    >
                    </v-switch>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <pagination :links="country.links" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-snackbar
            v-model="processing"
            :timeout="timeout"
            transition="slide-x-reverse-transition"
            :color="color"
            right
            class="white--text"
          >
            <div class="font-sembold text-lg" v-text="text"></div>
          </v-snackbar>
        </v-col>
      </v-row>
    </v-container>
  </AdminNavigation>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import AdminNavigation from "../Layouts/AdminNavigation.vue";
import Pagination from "../Components/Pagination.vue";
export default {
  components: { Pagination },
  layout: AdminNavigation,
  props: ["country"],
  data() {
    return {
      content: null,
      color: null,
      timeout: null,
      processing: null,
      loading: false,
      text: null,
      redirect: false,
    };
  },
  methods: {
    status(id, name) {
      console.log("malalalla");
      Inertia.put(`/admin/country/status/${id}`, null, {
        preserveScroll: true,
        preserveState: true,
        onStart: () => {
          this.processing = true;
          this.timeout = 100000;
          this.loading = true;
          this.color = "yellow darken-3";
          this.text = "Please wait, update in progress";
        },
        onSuccess: () => {
          this.timeout = 3000;
          this.color = "green darken-1";
          this.loading = false;
          this.text = `Country "${name}" status has been updated successfully`;
          this.redirect = true;
        },
        onError: () => {
          this.timeout = 5000;
          this.loading = false;
          this.color = "red darken-2";
          this.text = "Failed, please try again later";
        },
      });
    },
  },
};
</script>

<style>
</style>