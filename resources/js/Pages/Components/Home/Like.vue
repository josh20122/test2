<template>
  <v-row>
    <v-col cols="12">
      <Cards
        :products="products"
        v-if="$vuetify.breakpoint.smAndUp"
        :currency="'Ksh'"
        :more="'/fearuesgs'"
        :title="'You may also like'"
      />

      <Product
        :more="'/featured'"
        :title="'You may also like'"
        :currency="'Ksh'"
        :products="products"
        v-if="$vuetify.breakpoint.xsOnly"
      />
    </v-col>
  </v-row>
</template>

<script>
import Product from "../Product.vue";
import Cards from "./Cards.vue";
export default {
  components: { Product, Cards },
  props: ["currency", "products"],
  data() {
    return {
      more: {
        link: "/featured",
      },
      // Like: [
      //   {
      //     title: "this is a test product which is featured",
      //     pricenow: 38889,
      //     offprice: 38398,
      //   },
      //   {
      //     title: "this is a test product which is featured",
      //     pricenow: 200,
      //     offprice: 500,
      //   },
      //   {
      //     title: "this is a test product which is featured",
      //     pricenow: 200,
      //     offprice: 500,
      //   },
      //   {
      //     title: "this is a test product which is featured",
      //     pricenow: 200,
      //     offprice: 500,
      //   },
      //   {
      //     title: "this is a test product which is featured",
      //     pricenow: 200,
      //     offprice: 500,
      //   },
      //   {
      //     title: "this is a test product which is featured",
      //     pricenow: 200,
      //     offprice: 500,
      //   },
      // ],
    };
  },
};
</script>

<style>
</style>