<template>
  <SellerNavigation>
    <v-container class="">
      <v-row>
        <v-col>
          <div class="display-1">Create Product</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="4" cols="12" class="">
          <v-row dense>
            <v-col cols="12">
              <label for="">Cover Image *</label>
              <v-file-input
                type="file"
                outlined
                dense
                :loading="loading"
                :disabled="loading"
                :rules="required"
                v-model="form.image1"
                placeholder="Cover Image"
                :error-messages="errors.image1"
              >
              </v-file-input>
            </v-col>
            <v-col cols="12">
              <label for="">Image 2</label>
              <v-file-input
                type="file"
                outlined
                dense
                :loading="loading"
                :disabled="loading"
                :rules="required"
                v-model="form.image2"
                placeholder="Cover Image"
                :error-messages="errors.image2"
              >
              </v-file-input>
            </v-col>
            <v-col cols="12">
              <label for="">Image 3</label>
              <v-file-input
                type="file"
                outlined
                dense
                :rules="required"
                :loading="loading"
                :disabled="loading"
                v-model="form.image3"
                placeholder="Cover Image"
                :error-messages="errors.image3"
              >
              </v-file-input>
            </v-col>
            <v-col cols="12">
              <label for="">Image 4</label>
              <v-file-input
                type="file"
                outlined
                dense
                :rules="required"
                v-model="form.image4"
                :loading="loading"
                :disabled="loading"
                placeholder="Cover Image"
                :error-messages="errors.image4"
              >
              </v-file-input>
            </v-col>
            <v-col cols="12">
              <label for="">Image 5</label>
              <v-file-input
                type="file"
                outlined
                dense
                :rules="required"
                v-model="form.image5"
                :loading="loading"
                :disabled="loading"
                placeholder="Cover Image"
                :error-messages="errors.image5"
              >
              </v-file-input>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="8" class="">
          <v-card outlined :loading="loading" :disabled="loading">
            <v-card-title> Product Details </v-card-title>
            <v-divider class=""></v-divider>
            <v-card-text>
              <v-form>
                <v-container class="pa-0">
                  <v-row dense>
                    <v-col cols="12">
                      <label for="">Title *</label>
                      <v-text-field
                        placeholder="Product full title"
                        v-model="form.title"
                        outlined
                        dense
                        :error-messages="errors.title"
                        :rules="required"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <label for="">Country *</label>
                      <v-select
                        placeholder="Please Select"
                        v-model="form.country"
                        outlined
                        item-text="country"
                        item-value="id"
                        :items="countries"
                        :error-messages="errors.country"
                        :rules="required"
                      ></v-select>
                    </v-col>

                    <v-col cols="12" v-if="form.country">
                      <label for="">Product Category *</label>
                      <v-select
                        placeholder="Please Select"
                        v-model="form.category"
                        outlined
                        item-text="title"
                        item-value="id"
                        :items="category"
                        :error-messages="errors.category"
                        :rules="required"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" v-if="form.country">
                      <label for="">Confirm Currency</label>
                      <v-text-field
                        readonly
                        v-if="form.country"
                        outlined
                        dense
                        :value="currency"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <label for="">Initial Price *</label>
                      <v-text-field
                        placeholder="Product initial price"
                        v-model="form.initial_price"
                        outlined
                        dense
                        :error-messages="errors.initial_price"
                        :rules="required"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <label for="">Current Price *</label>
                      <v-text-field
                        placeholder="Product current price"
                        v-model="form.price"
                        outlined
                        dense
                        :error-messages="errors.price"
                        :rules="required"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <label for="">Available Stock *</label>
                      <v-text-field
                        placeholder="Available Stock"
                        v-model="form.stock"
                        outlined
                        dense
                        type="number"
                        :error-messages="errors.stock"
                        :rules="required"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-select
                        v-model="form.status"
                        :error-messages="errors.status"
                        label="Product status"
                        :items="status"
                        dense
                        outlined
                        item-text="name"
                        item-value="value"
                      ></v-select>
                    </v-col>

                    <v-col cols="12">
                      <label for="">Short Description *</label>
                      <v-textarea
                        placeholder="Short product description"
                        v-model="form.short_description"
                        outlined
                        dense
                        :error-messages="errors.short_description"
                        :rules="required"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                      <label for=""> Full Description (Optional)</label>
                      <VueEditor v-model="form.long_description"> </VueEditor>
                      <div
                        class="text-xs text-red-500"
                        v-text="errors.long_description"
                      ></div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <div class="flex justify-end pb-4 pr-4">
                      <v-btn
                        @click="create()"
                        elevation=""
                        color="blue"
                        class="white--text"
                        >Create Product</v-btn
                      >
                    </div>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-snackbar
        v-model="processing"
        :timeout="timeout"
        :color="color"
        tile
        absolute
        right
        transition="slide-x-reverse-transition"
        class="white--text"
      >
        <div class="font-sembold text-lg" v-text="text"></div>
      </v-snackbar>
    </v-container>
  </SellerNavigation>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import { VueEditor } from "vue2-editor";
import SellerNavigation from "../Layouts/SellerNavigation.vue";
export default {
  props: ["errors", "countries"],
  layout: SellerNavigation,
  components: { VueEditor },
  data() {
    return {
      required: [(v) => !!v || "This field is required"],
      content: null,
      color: null,
      timeout: null,
      processing: null,
      loading: false,
      text: null,
      redirect: false,
      status: [
        { name: "Active", value: true },
        { name: "Inactive", value: false },
      ],
      form: {
        image1: null,
        country: null,
        image2: null,
        image3: null,
        image4: null,
        stock: null,
        image5: null,
        title: null,
        category: null,
        country: null,
        status: null,
        short_description: null,
        long_description: null,
        price: null,
        initial_price: null,
      },
    };
  },
  methods: {
    create() {
      Inertia.post(`/seller/product/store`, this.form, {
        forceFormData: true,
        preserveScroll: true,
        preserveState: true,
        onStart: () => {
          this.processing = true;
          this.timeout = 100000;
          this.loading = true;

          this.color = "yellow darken-3";
          this.text = "Product Upload is Processing ...";
        },
        onSuccess: () => {
          this.timeout = 3000;
          this.color = "green darken-3";
          this.text = "Product added successfully";
          this.redirect = true;
          this.loading = false;
        },
        onError: () => {
          this.timeout = 2000;
          this.loading = false;
          this.color = "red darken-2";
          this.text = "Failed, please check for any errors";
        },
      });
    },
  },
  watch: {
    redirect() {
      Inertia.get("/seller/products");
    },
  },
  computed: {
    currency() {
      for (var country = 0; country < this.countries.length; country++) {
        if (this.countries[country].id === this.form.country) {
          return this.countries[country].currency;
        }
      }
    },
    category() {
      for (var country = 0; country < this.countries.length; country++) {
        if (this.countries[country].id === this.form.country) {
          console.log(this.countries[country].cartegory);
          return this.countries[country].cartegory;
        }
      }
    },
  },
};
</script>

<style>
</style>