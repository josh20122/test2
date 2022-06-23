<template>
  <div>
    <Cards
      :products="products"
      v-if="$vuetify.breakpoint.smAndUp"
      :currency="currency"
      :title="'Top Rated'"
      :more="'/fearuesgs'"
    />

    <Product
      :more="'/featured'"
      :title="'Top Rated'"
      :currency="'Ksh'"
      :products="products"
      v-if="$vuetify.breakpoint.xsOnly"
    />
  </div>
</template>

<script>
import Product from "../Product.vue";
import Cards from "./Cards.vue";
export default {
  components: { Cards, Product },
  props: ["currency", "products"],
  data() {
    return {
      more: {
        link: "/featured",
      },
    };
  },
};
</script>

<style>
</style>