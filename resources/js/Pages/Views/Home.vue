<template>
  <v-container class="">
    <v-row class="">
      <v-col cols="3" class="d-none d-sm-flex">
        <SideNav :category="categories" />
      </v-col>
      <v-col cols="12" sm="9" class="">
        <Carousel />
      </v-col>
      <v-col cols="12" class="" v-if="$vuetify.breakpoint.smAndUp">
        <Products />
      </v-col>
      <v-col cols="12" class="">
        <Featured :currency="currency" :products="featured" />
      </v-col>
      <v-col cols="12" class="">
        <TopRated :currency="currency" class="" :products="topRated" />
      </v-col>
      <v-col cols="12">
        <Like :currency="currency" :products="featured" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Carousel from "../Components/Home/Carousel.vue";
import Featured from "../Components/Home/Featured.vue";
import Like from "../Components/Home/Like.vue";
import Products from "../Components/Home/Products.vue";
import SideNav from "../Components/Home/SideNav.vue";
import TopRated from "../Components/Home/TopRated.vue";
import Navigation from "../Layouts/Navigation.vue";
export default {
  props: ["categories", "featured", "topRated"],
  layout: Navigation,
  components: {
    SideNav,
    Carousel,
    Products,
    Featured,
    TopRated,
    Like,
  },
  data() {
    return {
      currency: "Ksh",
    };
  },
};
</script>

<style>
</style>