<template>
  <AdminNavigation>
    <v-container class="">
      <v-row>
        <v-col>
          <div class="title">All Sellers</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Products</th>
                  <th>City</th>
                  <th>Region</th>
                  <th>Subregion</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="shop in shops.data" :key="shop.id">
                  <td v-text="shop.name"></td>
                  <td v-text="shop.product_count"></td>
                  <td v-text="shop.city"></td>
                  <td v-text="shop.region"></td>
                  <td v-text="shop.sub_region"></td>
                  <td>
                    <Link :href="`/admin/shop/view/${shop.id}`">
                      <v-btn
                        small
                        elevation=""
                        rounded
                        class="white--text"
                        color="blue"
                        >view</v-btn
                      >
                    </Link>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <Pagination :links="shops.links" />
        </v-col>
      </v-row>
    </v-container>
  </AdminNavigation>
</template>

<script>
import Pagination from "../Components/Pagination.vue";
import AdminNavigation from "../Layouts/AdminNavigation.vue";
export default {
  components: { Pagination },
  props: ["shops"],
  layout: AdminNavigation,
};
</script>

<style>
</style>
AdminNavigation