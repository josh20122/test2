<template>
  <v-container class="">
    <v-row>
      <v-col class="d-none">
        <v-stepper outlined v-model="step">
          <v-stepper-step :step="step">
            <div>Delivery Adress</div>
            <small>hehehhe</small>
          </v-stepper-step>
          <v-stepper-content step="1">
            <Address :phone="phone" :errors="errors"></Address>
          </v-stepper-content>
          <v-stepper-step step="1">
            <div>Pick up Station</div>
            <small>hehehhe</small>
          </v-stepper-step>
          <v-stepper-content step="2"> </v-stepper-content>
        </v-stepper>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title> Confirm Products </v-card-title>
          <v-card-text>
            <v-sheet rounded="lg"> </v-sheet>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Address from "../Components/Checkout/Address.vue";
import Station from "../Components/Checkout/Station.vue";
import Navigation from "../Layouts/Navigation.vue";
export default {
  components: { Address, Station },
  props: ["errors", "phone"],
  layout: Navigation,
  data() {
    return {
      step: 1,
    };
  },
};
</script>

<style>
</style>