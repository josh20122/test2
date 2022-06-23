<template>
  <v-container class="">
    <v-row>
      <v-col class="" cols="12" md="9">
        <v-card>
          <v-card-text class="pb-0"
            ><div class="text-xl text-gray-900">Cart</div></v-card-text
          >
          <v-divider class=""></v-divider>
          <v-card-text>
            <div class="text-lg" v-if="cart.data < 1">
              Sorry, no products found.
            </div>
          </v-card-text>
          <v-card-text>
            <v-row>
              <v-col
                v-for="(product, index) in cart.data"
                :key="index"
                cols="12"
              >
                <v-row dense>
                  <v-col cols="2">
                    <v-img height="100" :src="product.image[0].path"></v-img>
                  </v-col>
                  <v-col cols="6">
                    <Link :href="`/product/${product.id}`">
                      <div
                        class="text-lg text-gray-900 truncate"
                        v-text="product.title"
                      ></div>
                    </Link>

                    <div
                      v-if="product.shop[0]"
                      v-text="'seller :' + product.shop[0].name"
                    ></div>
                  </v-col>
                  <v-col cols="4" class="pa-0 ma-0">
                    <div class="grid justify-end">
                      <div
                        v-text="currency + product.price.toLocaleString()"
                        class="truncate grid justify-end text-gray-900"
                      ></div>
                      <div
                        class="grid justify-end text-xs line-through"
                        v-text="
                          currency + product.initial_price.toLocaleString()
                        "
                      ></div>
                      <div
                        class="px-1 grid justify-end font-semibold text-white"
                      >
                        <span
                          v-text="
                            (
                              ((product.initial_price - product.price) /
                                product.initial_price) *
                              100
                            ).toFixed(0) + '% OFF'
                          "
                          class="bg-green-500 rounded-md px-2"
                        >
                        </span>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" class="mt-2">
                    <v-row justify="space-between px-2">
                      <v-btn
                        small
                        elevation=""
                        outlined
                        @click="remove(product.id)"
                        color="blue lighten-1"
                      >
                        <v-icon left color="blue">mdi-delete</v-icon>
                        <span>remove</span>
                      </v-btn>
                      <div
                        class="
                          grid grid-cols-3
                          border-2 border-blue-500
                          rounded-md
                        "
                      >
                        <button
                          @click="minus(product.id)"
                          class="
                            bg-blue-500
                            px-2
                            rounded-sm
                            font-semibold
                            text-white
                          "
                        >
                          -
                        </button>

                        <div
                          class="mx-auto"
                          v-text="product.cart[0].pivot.amount"
                        ></div>
                        <button
                          @click="add(product.id)"
                          class="
                            bg-blue-500
                            px-2
                            rounded-sm
                            font-semibold
                            text-white
                          "
                        >
                          +
                        </button>
                      </div>
                    </v-row>
                  </v-col>
                  <v-col>
                    <v-divider
                      v-if="index + 1 != cart.data.length"
                      class="my-4"
                    ></v-divider>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <div class="pt-6">
          <Pagination class="pt-0" :links="cart.links" />
        </div>
      </v-col>
      <v-col cols="3" class="d-none d-sm-inline">
        <v-card>
          <v-card-text>
            <div class="uppercase">cart summary</div>
          </v-card-text>
          <v-divider class=""></v-divider>
          <v-card-text>
            <div class="grid justify-between">
              <span>Subtotal</span>
              <span class="text-gray-900 text-lg"
                >{{ currency + " " + total.toLocaleString() }}
              </span>
            </div>
            <div class="text-xs">Delivery fees not included</div>
          </v-card-text>
          <v-card-text>
            <v-btn
              elevation=""
              @click="order()"
              block
              color="blue"
              class="white--text"
            >
              Checkout
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="pt-0"> </v-col>
      <v-col cols="12" class="" v-if="$vuetify.breakpoint.xsOnly">
        <v-card>
          <v-card-text>
            <div class="uppercase">cart summary</div>
          </v-card-text>
          <v-divider class=""></v-divider>
          <v-card-text>
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span class="text-gray-900 text-lg"
                >{{ currency + " " + total.toLocaleString() }}
              </span>
            </div>
            <div class="text-xs">Delivery fees not included</div>
          </v-card-text>
          <v-card-text>
            <v-btn
              elevation=""
              @click="order()"
              block
              color="blue"
              class="white--text"
            >
              Checkout
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <Product :currency="'Ksh'" :products="featured" :title="'Featured'" />
      </v-col>
    </v-row>
    <v-row class="pt-0">
      <v-col class="pt-0"> </v-col>
    </v-row>
    <v-row> </v-row>
  </v-container>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import Product from "../Components/Product.vue";
import Navigation from "../Layouts/Navigation.vue";
import Pagination from "../Components/Pagination.vue";
export default {
  components: { Product, Pagination },
  layout: Navigation,
  props: ["cart", "total", "featured"],
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
  data() {
    return {
      currency: "Ksh",
      more: {
        link: "/featured",
      },
    };
  },
  methods: {
    remove(id) {
      Inertia.put(`/cart/remove/${id}`, null, {
        preserveScroll: true,
        preserveState: true,
        onStart: () => {
          this.loading = true;
        },
        onFinish: () => {
          this.loading = false;
        },
      });
    },
    order() {
      Inertia.put(`/account`, null);
    },
    add(id) {
      Inertia.put(`/cart/add/${id}`, null, {
        preserveScroll: true,
        preserveState: true,
        onStart: () => {
          this.loading = true;
        },
        onFinish: () => {
          this.loading = false;
        },
      });
    },
    minus(id) {
      Inertia.put(`/cart/minus/${id}`, null, {
        preserveScroll: true,
        preserveState: true,
        onStart: () => {
          this.loading = true;
        },
        onFinish: () => {
          this.loading = false;
        },
      });
    },
  },
};
</script>

<style>
</style>