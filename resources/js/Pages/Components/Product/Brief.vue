<template>
  <div class="grid space-y-2">
    <div class="text-2xl font-bold" v-text="product.title"></div>
    <div class="flex">
      <v-rating
        background-color="yellow"
        readonly
        :value="product.rating"
        color="yellow darken-4"
      ></v-rating>
    </div>
    <v-divider class="w-14"></v-divider>
    <div
      class="text-lg space-x-2 font-bold"
      :class="$vuetify.breakpoint.xs ? 'grid' : 'flex'"
    >
      <span v-text="currency + product.price.toLocaleString()"></span>
      <span
        class="line-through text-gray-500"
        v-text="currency + product.initial_price.toLocaleString()"
      >
      </span>
    </div>
    <div v-text="product.short_description">
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
      tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
      Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
    </div>
    <div class="flex d-none">
      <span> Color :</span>
    </div>
    <div class="flex d-none space-x-2">
      <div class="uppercase">size :</div>
      <div class="flex space-x-2">
        <div class="border-2 px-1 uppercase">l</div>
        <div class="border-2 px-1 uppercase">m</div>
        <div class="border-2 px-1 uppercase">s</div>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="inline-flex space-x-3">
      <div class="grid grid-cols-3 border-2 border-blue-500 rounded-md w-28">
        <button
          @click="amount -= 1"
          class="bg-blue-500 px-2 rounded-sm font-semibold text-white"
        >
          -
        </button>

        <div class="mx-auto" v-text="amount"></div>
        <button
          @click="amount += 1"
          class="bg-blue-500 px-2 rounded-sm font-semibold text-white"
        >
          +
        </button>
      </div>
      <v-btn
        elevation=""
        @click="toCart(product.id)"
        class="white--text"
        color="blue"
        >Add to cart</v-btn
      >
    </div>
  </div>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
export default {
  props: ["product", "currency"],
  data() {
    return {
      num: 626276272,
      amount: 1,
    };
  },

  methods: {
    toCart(id) {
      Inertia.put(
        `/cart/create/${id}`,
        { amount: this.amount },
        {
          preserveScroll: true,
          preserveState: true,
        }
      );
    },
    toLocaleString() {
      var str = num.toString().split(".");
      if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
      }
      if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, "$1 ");
      }
      return str.join(".");
    },
  },
};
</script>

<style>
</style>