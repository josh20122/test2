<template>
  <v-container class="">
    <v-row>
      <v-col v-for="loop in loops" cols="12" :key="loop">
        <v-row>
          <v-col cols="12">
            <v-checkbox
              v-model="test"
              class="pa-0"
              label="test label"
              :value="loop"
              color="green"
            ></v-checkbox>
          </v-col>
          <v-col
            ><span class="text-gray-900">Customer Service :</span>
            <span class="text-gray-500 text-xs">dddddddddddddd</span></v-col
          >
          <v-col
            ><span class="text-gray-900">Customer Service :</span>
            <span class="text-gray-500 text-xs">dddddddddddddd</span>
          </v-col>
          <v-col
            ><span class="text-gray-900">Customer Service :</span>
            <span class="text-gray-500 text-xs">dddddddddddddd</span>
          </v-col>
          <v-col
            ><span class="text-gray-900">Customer Service :</span>
            <span class="text-gray-500 text-xs">dddddddddddddd</span>
          </v-col>
          <v-col
            ><span class="text-gray-900">Customer Service :</span>
            <span class="text-gray-500 text-xs">dddddddddddddd</span></v-col
          >
          <v-col cols="12"> <v-divider class=""></v-divider></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      test: "dgdgd",
      loops: ["malal", "dhdhdh", "dhdhdhd"],
    };
  },
};
</script>

<style>
</style>