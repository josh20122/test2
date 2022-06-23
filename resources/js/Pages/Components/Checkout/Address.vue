<template>
  <v-form v-model="valid">
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-row dense>
            <v-col>
              <label for="" class="capitalize">first name</label>
              <v-text-field
                placeholder="First Name"
                dense
                v-model="form.first_name"
                outlined
                :rules="rules.required"
                :error-messages="errors.first_name"
              ></v-text-field>
            </v-col>
            <v-col>
              <label for="" class="capitalize">last name</label>
              <v-text-field
                placeholder="Last Name"
                dense
                :error-messages="errors.last_name"
                :rules="rules.required"
                v-model="form.last_name"
                outlined
              ></v-text-field
            ></v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <label for="">Contac Phone Number</label>
          <v-text-field
            outlined
            :prefix="'+' + phone"
            v-model="form.phone_number"
            :rules="rules.required"
            :error-messages="errors.phone_number"
            dense
            placeholder="+234******"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <label for="">Contact Phone Number 2 (optional)</label>
          <v-text-field
            :prefix="'+' + phone"
            outlined
            :error-messages="errors.second_phone_number"
            v-model="form.second_phone_number"
            :rules="rules.required"
            dense
            placeholder="+234******"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <label for="">City</label>
          <v-text-field
            outlined
            v-model="form.city"
            :rules="rules.required"
            dense
            :error-messages="errors.city"
            small-chips
            placeholder="Enter city"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <label for="">State / Region</label>
          <v-text-field
            :error-messages="errors.region"
            outlined
            v-model="form.region"
            :rules="rules.required"
            dense
            small-chips
            placeholder="Enter region"
          ></v-text-field>
        </v-col>
        {{ realPhone }}
        <v-col cols="12">
          <label for="">Sub-region</label>
          <v-text-field
            outlined
            :rules="rules.required"
            :error-messages="errors.sub_region"
            dense
            v-model="form.sub_region"
            small-chips
            placeholder="Enter sub-region"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <label for="">Delivery Address</label>
          <v-textarea
            outlined
            dense
            :error-messages="errors.delivery_address"
            v-model="form.delivery_address"
            :rules="rules.required"
            co
            placeholder="Street Name / Apartment No"
          ></v-textarea>
        </v-col>
        <v-col>
          <v-btn
            depressed
            elevation=""
            class="white--text"
            block
            color="purple "
            @click="next()"
          >
            <span>Next</span>
            <v-icon right color="">mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
export default {
  props: ["errors", "phone"],
  methods: {
    next() {
      Inertia.post("/checkout/address", this.form, {});
    },
  },
  computed: {
    realPhone() {
      if (this.form.phone_number && this.form.second_phone_number) {
        this.form.phone_number = this.phone.toString() + this.form.phone_number;
        this.form.second_phone_number =
          this.phone.toString() + this.form.second_phone_number;
      }
    },
  },
  data() {
    return {
      rules: {
        required: [(v) => !!v || "This field is required"],
      },
      valid: false,
      form: {
        first_name: null,
        last_name: null,
        phone_number: null,
        second_phone_number: null,
        city: null,
        sub_region: null,
        region: null,
        delivery_address: null,
      },
    };
  },
};
</script>

<style>
</style>