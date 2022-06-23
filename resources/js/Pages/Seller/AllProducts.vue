<template>
  <SellerNavigation>
    <v-container class="">
      <v-row>
        <v-col>
          <div class="display-1">All Products</div>
        </v-col>
      </v-row>
      <v-row justify="start">
        <v-col cols="12" sm="4">
          <v-text-field
            outlined
            dense
            max-width="400"
            placeholder="Search..."
            v-model="search"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Stock</th>

                  <th>Price</th>
                  <th>Initial Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products.data" :key="product.id">
                  <td v-text="product.title"></td>
                  <td v-text="product.category.title"></td>
                  <td v-text="product.shop[0].pivot.stock"></td>
                  <td
                    v-text="
                      product.category.country.currency +
                      '' +
                      product.price.toLocaleString()
                    "
                  ></td>
                  <td
                    v-text="
                      product.category.country.currency +
                      product.initial_price.toLocaleString()
                    "
                  ></td>
                  <td>
                    <Link :href="`/seller/product/edit/${product.id}`">
                      <v-btn
                        small
                        elevation=""
                        rounded
                        color="blue"
                        class="white--text"
                      >
                        view
                      </v-btn>
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
          <pagination :links="products.links" />
        </v-col>
      </v-row>
    </v-container>
  </SellerNavigation>
</template>

<script>
import SellerNavigation from "../Layouts/SellerNavigation.vue";
import { debounce } from "lodash";
import Pagination from "../Components/Pagination.vue";
export default {
  layout: SellerNavigation,
  components: {
    Pagination,
  },
  data() {
    return {
      search: this.filters,
    };
  },
  props: ["products", "filters"],
  watch: {
    search: debounce(function (value) {
      this.$inertia.get(
        `/seller/products`,
        { search: value },
        {
          preserveState: true,
          replace: true,
        }
      );
    }, 500),
  },
  methods: {
    toLocaleString() {
      var str = num.toString().split(".");
      if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
      }
      if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, "$1 ");
      }
      return str.join(".");
    },
  },
};
</script>

<style>
</style>