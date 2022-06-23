<template>
  <v-container class="">
    <v-row>
      <v-col>
        <Product :products="product.data" :title="title" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Pagination :links="product.links" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Pagination from "../Components/Pagination.vue";
import Product from "../Components/Product.vue";
import Navigation from "../Layouts/Navigation.vue";
export default {
  components: { Product, Pagination },
  props: ["product", "title"],
  layout: Navigation,
};
</script>

<style>
</style>