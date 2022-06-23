<template>
  <div>
    <v-card outlined>
      <v-card-text>
        <div class="text-lg font-semibold">Full Description</div>
      </v-card-text>
      <v-divider class=""></v-divider>
      <v-card-text v-html="product.long_description"> </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style>
</style>