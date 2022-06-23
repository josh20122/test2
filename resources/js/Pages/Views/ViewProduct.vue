<template>
  <v-container class="">
    <v-row>
      <v-col cols="12" sm="6" class="">
        <Carousel :images="images" :product="product" />
      </v-col>
      <v-col cols="12" sm="6" class="mt-md-6">
        <Brief :product="product" :currency="'Ksh'" />
      </v-col>

      <v-col cols="12" class="">
        <Description :product="product" />
      </v-col>
      <v-col cols="12" class="">
        <!-- <CustomerReviews v-if="comments" /> -->
      </v-col>
      <v-col cols="12" class="">
        <product
          :products="related.data"
          :title="'Related Products'"
          :more="`/category/${id}`"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <pagination :links="related.links" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Pagination from "../Components/Pagination.vue";
import Product from "../Components/Product.vue";
import Brief from "../Components/Product/Brief.vue";
import Carousel from "../Components/Product/Carousel.vue";
import CustomerReviews from "../Components/Product/CustomerReviews.vue";
import Description from "../Components/Product/Description.vue";
import RelatedProducts from "../Components/Product/RelatedProducts.vue";
import Navigation from "../Layouts/Navigation.vue";
export default {
  props: ["product", "images", "related", "comments", "id"],
  layout: Navigation,
  components: {
    Carousel,
    Brief,
    Product,
    RelatedProducts,
    Description,
    CustomerReviews,
    Pagination,
  },
};
</script>

<style>
</style>