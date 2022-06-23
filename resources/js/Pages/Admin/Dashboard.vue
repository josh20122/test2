<template>
  <AdminNavigation>
    <v-container class="">
      <v-row>
        <v-col v-for="card in cards" :key="card.link" cols="12" sm="6" md="4">
          <v-card :color="card.color">
            <v-card-text>
              <v-row>
                <v-col cols="7">
                  <div class="grid">
                    <div
                      class="text-gray-100 text-3xl font-extrabold"
                      v-text="card.value"
                    ></div>
                    <div
                      class="text-gray-50 capitalize text-lg font-semibold"
                      v-text="card.text"
                    ></div>
                  </div>
                </v-col>
                <v-col cols="5">
                  <div class="grid justify-end">
                    <v-icon x-large v-text="card.icon"></v-icon>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
            <v-row>
              <v-col cols="12">
                <Link :href="card.link">
                  <v-btn depressed tile block small :color="card.dark">
                    <span class="text-white font-semibold">Show more</span>
                    <v-icon class="white--text" small color="white"
                      >mdi-arrow-right</v-icon
                    >
                  </v-btn>
                </Link>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </AdminNavigation>
</template>

<script>
import AdminNavigation from "../Layouts/AdminNavigation.vue";
export default {
  layout: AdminNavigation,
  props: [
    "user",
    "seller",
    "allcountry",
    "allCountry",
    "activeCountry",
    "category",
    "product",
  ],
  data() {
    return {
      cards: [
        {
          label: "test card one",
          color: "orange",
          link: "/admin/users",
          dark: "orange darken-1",
          text: "All Users",
          value: this.user,
          icon: "mdi-account",
          amount: 353,
        },
        {
          label: "test card one",
          color: "yellow darken-2",
          link: "/admin/shops",
          dark: "yellow darken-3",
          text: "All Sellers",
          value: this.seller,
          icon: "mdi-basket",
          amount: 353,
        },
        {
          label: "test card one",
          color: "purple",
          link: "/admin/products",
          dark: "purple darken-1",
          text: "All Products",
          value: this.product,
          icon: "mdi-car",
          amount: 353,
        },
        {
          label: "test card one",
          color: "red",
          link: "/admin/cartegory",
          dark: "red darken-1",
          text: "All Categories",
          value: this.category,
          icon: "mdi-cart",
          amount: 353,
        },
        {
          label: "test card one",
          color: "indigo",
          link: "/admin/country",
          dark: "indigo darken-1",
          text: "All countries",
          value: this.allCountry,
          icon: "mdi-motorbike",
          amount: 353,
        },
      ],
    };
  },
};
</script>

<style>
</style>