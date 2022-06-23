<template>
  <v-carousel
    reverse-transition="fade-transition"
    class="ma-0 pa-0"
    interval="4000"
    hide-delimiter-background
    transition="fade-transition"
    cycle
    continuous
  >
    <v-carousel-item v-for="item in items" :key="item.image" :src="item.image">
      <div class="mt-64">
        <div class="display-3"></div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { image: "/images/edited-slide-2.jpg" },
        { image: "/images/slide-2.jpg" },
        { image: "/images/slide-3.png" },
      ],
    };
  },
};
</script>

<style>
</style>