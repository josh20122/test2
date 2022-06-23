<template>
  <v-app>
    <v-app-bar app flat fade-img-on-scroll>
      <div class="flex justify-end" v-if="$vuetify.breakpoint.xsOnly">
        <v-responsive min-width="340">
          <v-text-field
            clearable
            v-model="query"
            v-if="$vuetify.breakpoint.xsOnly"
            prepend-inner-icon="mdi-magnify"
            placeholder="Search ..."
            rounded
            dense
            hide-details=""
            outlined
          >
          </v-text-field>
        </v-responsive>
      </div>
      <v-container class="py-0 fill-height">
        <v-row>
          <v-col>
            <div class="inline-flex">
              <v-img
                max-width="70"
                transition="expand-transition"
                contain
                v-if="$vuetify.breakpoint.smAndUp"
                :src="'/essantials/logo.png'"
              ></v-img>
              <div class="mx-6">
                <v-menu
                  offset-y
                  v-if="$vuetify.breakpoint.smAndUp"
                  class="mx-6"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <div class="flex">
                      <v-avatar right v-if="info.country.flag" size="x-small">
                        <img :src="info.country.flag" alt="" />
                      </v-avatar>
                      <v-btn
                        depressed
                        v-bind="attrs"
                        v-on="on"
                        elevation=""
                        color=""
                        v-text="info.country.name"
                      >
                        <div v-text="info.country.name"></div>
                      </v-btn>
                    </div>
                  </template>
                  <v-list dense>
                    <v-list-item
                      dense
                      v-for="(country, index) in info.countries"
                      :key="index"
                    >
                      <v-list-item-avatar>
                        <v-img
                          v-if="country.image"
                          :src="country.image.path"
                        ></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <Link
                          href="/set-country"
                          :data="{ id: country.id }"
                          method="PUT"
                          preserve-scroll
                          as="button"
                        >
                          <v-list-item-title>{{
                            country.country
                          }}</v-list-item-title>
                        </Link>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </div>
          </v-col>
          <v-col> </v-col>
          <v-spacer></v-spacer>
          <v-col class="mx-auto">
            <v-responsive min-width="340" v-if="$vuetify.breakpoint.smAndUp">
              <v-text-field
                clearable
                v-model="query"
                width="100"
                prepend-inner-icon="mdi-magnify"
                placeholder="Search ..."
                rounded
                dense
                hide-details=""
                outlined
              >
              </v-text-field>
            </v-responsive>
          </v-col>
          <v-col class="flex space-x-3" v-if="$vuetify.breakpoint.mdAndUp">
            <Link
              v-for="link in topLinks"
              :href="link.link"
              class="capitalize"
              :key="link.link"
            >
              <v-btn large elevation="" color="" icon>
                <v-icon large color="" v-text="link.icon"></v-icon>
              </v-btn>
            </Link>
          </v-col>
        </v-row>
      </v-container>
      <Link
        href="/auth/logout"
        v-if="$vuetify.breakpoint.smAndUp && $page.props.info.auth"
      >
        <v-btn icon>
          <v-icon color="blue lighten-1"> mdi-logout </v-icon>
        </v-btn>
      </Link>
      <v-avatar v-if="$vuetify.breakpoint.smAndUp && $page.props.info.auth">
        <v-img :src="$page.props.info.auth.avatarPath"></v-img>
      </v-avatar>
    </v-app-bar>
    <v-app-bar
      v-if="$vuetify.breakpoint.xsOnly"
      bottom
      app
      dense
      hide-on-scroll
    >
      <div class="flex justify-between">
        <Link
          v-for="bottom in buttons"
          class="text-center"
          :key="bottom.link"
          :href="bottom.link"
        >
          <v-icon v-text="bottom.icon"></v-icon>
          <div class="text-xs capitalize" v-text="bottom.page"></div>
        </Link>
      </div>
    </v-app-bar>

    <v-main class="main pb-8">
      <slot> </slot>
    </v-main>

    <v-footer padless color="drawer" class="pt-12">
      <v-container class="">
        <v-row>
          <v-col cols="6" sm="4" md="3">
            <div class="font-bold capitalize text-gray-200">contact</div>
            <div v-for="contact in contacts" :key="contact.item">
              <div
                class="font-bold text-gray-200"
                v-text="contact.item + ' :'"
              ></div>
              <div v-text="contact.value" class="text-gray-200"></div>
            </div>
          </v-col>
          <v-col cols="6" sm="4" md="3">
            <div class="font-bold capitalize text-gray-200">About Us</div>
            <div v-for="item in links.about" :key="item.page">
              <Link v-text="item.page" :href="item.link" class="text-gray-200">
              </Link>
            </div>
          </v-col>
          <v-col cols="6" sm="4" md="3">
            <div class="font-bold capitalize text-gray-200">My Account</div>
            <div v-for="item in links.account" :key="item.page">
              <Link v-text="item.page" :href="item.link" class="text-gray-200">
              </Link>
            </div>
          </v-col>
          <v-col cols="6" sm="4" md="3">
            <div class="font-bold capitalize text-gray-200">
              Customer Service
            </div>
            <div v-for="item in links.customer" :key="item.page">
              <Link v-text="item.page" class="text-gray-200" :href="item.link">
              </Link>
            </div>
          </v-col>
          <v-col>
            <div class="grid text-center">
              <div class="underline font-bold capitalize mb-2 text-gray-200">
                follow us
              </div>
              <div>
                <Link v-for="icon in icons" :key="icon.link" :href="icon.link">
                  <v-btn small elevation="" icon color="">
                    <v-icon color="main" v-text="icon.icon"></v-icon>
                  </v-btn>
                </Link>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import Link from "@inertiajs/inertia-vue";
import { Inertia } from "@inertiajs/inertia";
import { debounce } from "lodash";
export default {
  props: ["filter", "title", "info"],
  watch: {
    query: debounce(function (value) {
      this.$inertia.get(
        `/search`,
        { search: value },
        {
          preserveState: true,
          replace: true,
          preserveScroll: true,
        }
      );
    }, 300),
  },
  data() {
    return {
      query: this.filter,
      buttons: [
        { page: "home", icon: "mdi-home-circle", link: "/" },
        // { page: "cartegories", icon: "mdi-menu", link: "/categories" },
        { page: "wishlist", icon: "mdi-heart", link: "/wishlist" },

        { page: "cart", icon: "mdi-cart", link: "/cart" },
        {
          page: "Account",
          icon: "mdi-account-circle-outline",
          link: "/account",
        },
      ],
      topLinks: [
        { page: "home", icon: "mdi-home-circle", link: "/" },
        { page: "wishlist", icon: "mdi-heart", link: "/wishlist" },

        { page: "cart", icon: "mdi-cart", link: "/cart" },
        {
          page: "Account",
          icon: "mdi-account-circle-outline",
          link: "/account",
        },
      ],

      drawer: false,
      icons: [
        { icon: "mdi-facebook", link: "www.facebook.com" },
        { icon: "mdi-twitter", link: "www.twitter.com" },
        { icon: "mdi-instagram", link: "www.instagrem.com" },
        { icon: "mdi-pintrest", link: "www.pintrest.com" },
      ],
      contacts: [
        { item: "contact", value: "Thika 9999" },
        { item: "phone", value: "+254627272" },
        { item: "email", value: "sgshshsj@sjsjs.com" },
        { item: "hours", value: "all time" },
      ],
      links: {
        about: [
          { page: "about us", link: "/about" },
          { page: "privacy policy", link: "/privacy" },
          { page: "terms & conditions", link: "/terms" },
          { page: "Contact us", link: "/contact" },
        ],
        account: [
          { page: "my account", link: "/account" },
          { page: "view cart", link: "/cart" },
          { page: "order history", link: "/orders" },
          { page: "wish list", link: "/orders" },
          { page: "newsletter", link: "/newsletter" },
        ],
        customer: [
          { page: "help center", link: "/help" },
          { page: "returns", link: "/return " },
          { page: "shipping", link: "/shipping" },
          { page: "gift card", link: "/gift" },
          { page: "Track order", link: "/track" },
        ],
      },
    };
  },
};
</script>

<style>
</style>