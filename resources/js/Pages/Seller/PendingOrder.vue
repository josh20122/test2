<template>
  <SellerNavigation>
    <v-container class="">
      <v-row>
        <v-col>
          <div class="title">Pending Orders</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div v-if="product.data.length < 1" class="">
            Your Pending Orders will appear here
          </div>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col
          v-for="order in product.data"
          :key="order.id"
          cols="12"
          md="4"
          sm="6"
        >
          <v-card>
            <v-card-text>
              <v-row>
                <v-col cols="4">
                  <v-img :src="order.product[0].image[0].path"></v-img>
                </v-col>
                <v-col>
                  <div>
                    <div
                      class="text-gray-900 line-clamp-2"
                      v-text="order.product[0].title"
                    ></div>
                    <div
                      class="text-left text-gray-500"
                      v-text="'Amount: ' + order.amount"
                    ></div>
                    <div
                      class="text-right text-gray-600"
                      v-text="'Ksh ' + order.total.toLocaleString()"
                    ></div>
                    <div class="grid justify-end">
                      <v-btn small rounded outlined elevation="" color="blue"
                        >Shipp</v-btn
                      >
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </SellerNavigation>
</template>

<script>
import SellerNavigation from "../Layouts/SellerNavigation.vue";
export default {
  props: ["product"],
  layout: SellerNavigation,
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