<template>
  <v-carousel continuous hide-delimiter-background show-arrows interval="4000">
    <v-carousel-item
      v-for="(image, index) in images"
      :key="image.id"
      :src="image.path"
      role=""
    >
      <div class="grid mt-3 ml-3 space-y-1">
        <div
          class="
            bg-blue-400
            max-w-min
            px-2
            rounded-2xl
            text-white
            font-semibold
            text-sm
          "
        >
          HOT
        </div>
        <div
          class="
            bg-green-400
            max-w-min
            px-2
            rounded-2xl
            text-white
            font-semibold
            text-sm
          "
        >
          {{
            (
              ((product.initial_price - product.price) /
                product.initial_price) *
              100
            ).toFixed(0) + "%"
          }}
        </div>
        <div class="text-xs font-semibold text-red-500">
          {{ index + 1 + "/" + images.length }}
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: ["images", "product"],
  data() {
    return {
      innitialPrice: 36363,
      price: 38383,
    };
  },
};
</script>

<style>
</style>