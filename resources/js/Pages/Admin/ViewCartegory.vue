<template>
  <AdminNavigation>
    <v-container class="">
      <v-row justify="end">
        <v-col>
          <div class="title">Categories</div>
        </v-col>
        <v-col>
          <div class="flex justify-end">
            <Link href="/admin/cartegory/create">
              <v-btn small elevation="" class="blue white--text" color=""
                >Add category</v-btn
              >
            </Link>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-text-field
            v-model="search"
            placeholder="Search..."
            outlined
            dense
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Country</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cartegory.data" :key="item.id">
                  <td v-text="item.title"></td>
                  <td v-text="item.country.country"></td>
                  <td>
                    <component
                      method="POST"
                      :is="loading ? 'span' : 'Link'"
                      preserve-scroll
                      preserve-state
                      :href="`/admin/cartegory/status/${item.id}`"
                    >
                      <v-switch
                        color="green"
                        inset
                        v-model="item.status"
                      ></v-switch>
                    </component>
                  </td>

                  <td>
                    <component
                      :is="loading ? 'span' : 'Link'"
                      :href="`/admin/cartegory/edit/${item.id}`"
                    >
                      <v-btn
                        small
                        elevation=""
                        rounded
                        class="white--text"
                        color="blue"
                        >view</v-btn
                      >
                    </component>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <pagination :links="cartegory.links" />
        </v-col>
      </v-row>
    </v-container>
  </AdminNavigation>
</template>

<script>
import Pagination from "../Components/Pagination.vue";
import AdminNavigation from "../Layouts/AdminNavigation.vue";
import { debounce } from "lodash";
export default {
  components: { Pagination },
  props: ["cartegory", "filter"],
  layout: AdminNavigation,
  data() {
    return {
      loading: false,
      search: this.filter,
    };
  },
  watch: {
    search: debounce(function (value) {
      this.$inertia.get(
        `/admin/cartegory`,
        { search: value },
        {
          preserveState: true,
          replace: true,
        }
      );
    }, 500),
  },
  methods: {
    switch() {},
    click() {
      alert("shshshhs");
    },
  },
};
</script>

<style>
</style>