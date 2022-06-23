<template>
  <v-row>
    <v-col
      v-for="(product, index) in products"
      cols="12"
      sm="4"
      md="3"
      :key="index"
    >
      <v-card height="" outlined>
        <v-img :src="'images/estate.jpg'"></v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { img: "images/electron.jpg" },
        { img: "images/cars.jpg" },
        { img: "images/estate.jpg" },
        { img: "images/estate.jpg" },
      ],
    };
  },
};
</script>

<style>
</style>