<template>
  <Navigation>
    <v-container class="">
      <v-row>
        <v-col v-if="search.data.length === 0">
          <div class="title">Product with name "{{ filter }}" not found</div>
        </v-col>
        <v-col v-else>
          <Product
            v-if="$vuetify.breakpoint.xsOnly"
            :title="'Search Results'"
            :products="search.data"
            :currency="'ksh'"
          />
          <Cards
            v-if="$vuetify.breakpoint.smAndUp"
            :products="search.data"
            :currency="'Ksh'"
            :title="'Search Results'"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <Pagination v-if="search.data.length > 0" :links="search.links" />
        </v-col>
      </v-row>
    </v-container>
  </Navigation>
</template>

<script>
import Cards from "../Components/Home/Cards.vue";
import Pagination from "../Components/Pagination.vue";
import Product from "../Components/Product.vue";
import Navigation from "../Layouts/Navigation.vue";
export default {
  components: { Product, Cards, Pagination },
  layout: Navigation,
  props: ["search", "filter"],
};

Product;
</script>

<style>
</style>