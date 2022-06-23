<template>
  <v-card outlined class="">
    <v-card-title class="">
      <v-row justify="space-between " class="px-2 py-2">
        <div v-text="title"></div>
        <Link v-if="more" :href="more.link" class="text-base">
          <span> View More </span>
          <v-icon color="blue ">mdi-menu-right</v-icon>
        </Link>
      </v-row>
    </v-card-title>
    <v-divider> </v-divider>
    <v-card-text class="">
      <v-container fluid class="pa-0 ma-0">
        <v-row>
          <v-col
            class="pa-0"
            v-for="product in products"
            :key="product.title"
            lg="3"
            sm="4"
            cols="6"
          >
            <v-hover v-slot="{ hover }">
              <v-sheet rounded="sm" class="ma-1" :elevation="hover ? '3' : '0'">
                <div class="grid">
                  <v-img
                    class="rounded-sm"
                    contain
                    :src="product.image[0].path"
                  >
                    <div
                      class="
                        absolute
                        rounded-md
                        bg-green-500
                        text-white
                        right-1
                        top-1
                        px-1
                        text-[13px]
                      "
                      v-text="
                        (
                          ((product.initial_price - product.price) /
                            product.initial_price) *
                          100
                        ).toFixed(0) + '% OFF'
                      "
                    >
                      test discount
                    </div>
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="blue lighten-3"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                  <div class="grid px-2 pt-2 pb-6">
                    <Link :href="`/product/${product.id}`">
                      <div
                        :class="hover ? 'text-blue-500' : ''"
                        class="truncate text-gray-800"
                        v-text="product.title"
                      ></div>
                      <div
                        class="text-slate-700 font-semibold text-sm"
                        v-text="
                          product.category.country.currency +
                          ' ' +
                          product.price.toLocaleString()
                        "
                      ></div>
                      <div
                        class="line-through text-xs text-gray-500"
                        v-text="
                          product.category.country.currency +
                          ' ' +
                          product.initial_price.toLocaleString()
                        "
                      ></div>
                    </Link>
                    <div class="flex justify-between">
                      <v-rating
                        :value="product.rating"
                        background-color="yellow "
                        color="yellow darken-4"
                        small
                        dense
                        readonly
                      ></v-rating>

                      <v-btn
                        @click="wishlist(product.id)"
                        small
                        elevation="
                              "
                        icon
                        color="orange"
                      >
                        <v-icon color="orange"> mdi-heart </v-icon>
                      </v-btn>
                    </div>
                  </div>
                </div>
              </v-sheet>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["currency", "products", "more", "title"],
  data() {
    return {};
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