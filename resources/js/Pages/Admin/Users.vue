<template>
  <AdminNavigation>
    <v-container class="">
      <v-row>
        <v-col>
          <div class="display-1">All Users ({{ count + " Users" }})</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="3" md="4">
          <v-text-field
            v-model="search"
            outlined
            color="blue"
            dense
            placeholder="Search..."
          ></v-text-field>
        </v-col>
        <v-col v-if="query"> {{ filterCount }} Results Found. </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Country</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users.data" :key="user.id">
                  <td v-text="user.id"></td>
                  <td v-text="user.name"></td>
                  <td v-text="user.country.country"></td>
                  <td v-text="user.email"></td>
                  <td v-text="user.mobile"></td>
                  <td>
                    <v-btn
                      small
                      rounded
                      elevation=""
                      outlined
                      class=""
                      color="green"
                      >active</v-btn
                    >
                  </td>
                  <td>
                    <Link :href="`/admin/users/${user.id}`">
                      <v-btn
                        small
                        rounded
                        elevation=""
                        class="white--text"
                        color="blue"
                        >view</v-btn
                      >
                    </Link>
                  </td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <Pagination :links="users.links" />
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
  data() {
    return {
      search: this.query,
    };
  },
  props: ["users", "query", "count", "filterCount"],
  watch: {
    search(value) {
      Inertia.get(
        "/admin/users",
        { filter: value },
        {
          preserveScroll: true,
          preserveState: true,
        }
      );
    },
  },
};
</script>

<style>
</style>