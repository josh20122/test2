<template>
  <Navigation>
    <v-container class="">
      <v-row>
        <v-col cols="2" class="d-none d-md-inline">
          <Menu />
        </v-col>
        <v-col cols="12" md="10">
          <v-card outlined>
            <v-card-title class="py-6 pl-6">
              <v-row>
                <div class="text-lg text-gray-900">Wishlist</div>
              </v-row>
            </v-card-title>
            <v-divider class=""></v-divider>
            <v-card-text v-if="wishlist.data.length < 1">
              <div class="text-lg">Sorry, no products Found</div>
            </v-card-text>
            <v-card-text class="px-2">
              <v-row>
                <v-col
                  v-for="product in wishlist.data"
                  :key="product.id"
                  cols="12"
                  lg="3"
                  md="4"
                  sm="6"
                >
                  <v-hover v-slot="{ hover }">
                    <v-sheet
                      outlined
                      :elevation="hover ? '3' : '0'"
                      class="rounded-md"
                      rounded=""
                    >
                      <v-row dense>
                        <v-col cols="3" sm="12"
                          ><v-img
                            :src="product.image[0].path"
                            class="rounded-md"
                            alt=""
                            height="140"
                          >
                          </v-img>
                        </v-col>
                        <v-col class="">
                          <div class="py-2 px-2">
                            <Link :href="`product/${product.id}`">
                              <div
                                class="
                                  line-clamp-2
                                  text-slate-900
                                  hover:text-blue-600
                                "
                                v-text="product.title"
                              >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quis possimus animi eum
                                reprehenderit, ipsa fugit natus qui sit odio
                                aliquid fugiat, alias totam iste praesentium
                                esse sed dolorum. Officia, veniam.
                              </div>
                            </Link>
                          </div>
                          <div class="text-right px-2 pr-2">
                            <Link :href="`product/${product.id}`">
                              <div
                                class="
                                  text-slate-600 text-sm
                                  hover:text-blue-600
                                "
                                v-text="
                                  product.category.country.currency +
                                  product.price.toLocaleString()
                                "
                              ></div>
                              <div
                                class="
                                  line-through
                                  text-xs text-slate-400
                                  hover:text-blue-600
                                "
                                v-text="
                                  product.category.country.currency +
                                  product.initial_price.toLocaleString()
                                "
                              ></div>
                            </Link>
                          </div>
                          <div class="flex justify-between">
                            <v-btn
                              @click="remove(product.id)"
                              elevation=""
                              color=""
                              icon
                            >
                              <v-icon color="red">mdi-delete</v-icon>
                            </v-btn>
                            <v-btn
                              @click="cart(product.id)"
                              elevation=""
                              icon
                              color="red"
                            >
                              <v-icon color="blue ">mdi-cart</v-icon>
                            </v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </v-sheet>
                  </v-hover>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <Pagination
            :links="wishlist.links"
            v-if="wishlist.links.length > 3"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <Product :products="featured" :title="'Featured Products'" />
        </v-col>
      </v-row>
    </v-container>
  </Navigation>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import Product from "../Components/Product.vue";
import Navigation from "../Layouts/Navigation.vue";
import Menu from "../Components/Menu.vue";
import Pagination from "../Components/Pagination.vue";
export default {
  props: ["wishlist", "currency", "featured"],
  layout: Navigation,
  components: {
    Product,
    Menu,
    Pagination,
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
    remove(id) {
      Inertia.put(`/wishlist/remove/${id}`, null, {
        preserveScroll: true,
        preserveState: true,
      });
    },
    cart(id) {
      Inertia.put(`/cart/create/${id}`, null, {
        preserveScroll: true,
        preserveState: true,
      });
    },
  },
};
</script>

<style>
</style>
