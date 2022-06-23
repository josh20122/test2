<template>
  <div>
    <Cards
      :currency="currency"
      :products="products"
      v-if="$vuetify.breakpoint.smAndUp"
      :title="'Related Products'"
    />
    <Product
      v-if="$vuetify.breakpoint.xsOnly"
      :products="products"
      :currency="currency"
      :title="title"
    />
  </div>
</template>

<script>
import Cards from "../Home/Cards.vue";
import Product from "../Product.vue";
export default {
  components: { Cards, Product },
  props: ["currency", "products", "more", "title"],
};
</script>

<style>
</style>