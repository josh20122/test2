<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" color="drawer">
      <v-list>
        <v-list-item>
          <v-row justify="start" class="">
            <div>
              <v-img contain max-height="35" :src="'/storage/logo.png'"></v-img>
            </div>
          </v-row>
        </v-list-item>
        <v-divider class=""></v-divider>
        <v-list-item v-for="page in links" :key="page.links">
          <Link :href="page.link" preserve-state preserve-scroll>
            <v-list-item-icon class="">
              <v-icon color="grey lighten-4" v-text="page.icon"></v-icon>
            </v-list-item-icon>
          </Link>
          <v-list-item-content class="">
            <Link :href="page.link" preserve-state preserve-scroll>
              <v-list-item-title
                class="text-white capitalize"
                v-text="page.page"
              >
              </v-list-item-title>
            </Link>
          </v-list-item-content>
        </v-list-item>
        <v-list-group
          v-for="group in groups"
          :key="group.name"
          v-model="group.active"
          :prepend-icon="group.icon"
          class="white--text"
          color="white"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title
                class="white--text"
                v-text="group.title"
              ></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="page in group.pages" :key="page.name">
            <v-list-item-icon>
              <Link :href="page.link" preserve-state preserve-scroll>
                <v-icon color="white" v-text="page.icon"> </v-icon>
              </Link>
            </v-list-item-icon>
            <v-list-item-content>
              <Link :href="page.link" preserve-state preserve-scroll>
                <v-list-item-title
                  class="white--text"
                  v-text="page.name"
                ></v-list-item-title>
              </Link>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat color="blue darken-1" app hide-on-scroll>
      <v-container class="py-0 fill-height px-0">
        <v-row class="" justify="space-between">
          <v-col>
            <div class="grid justify-start">
              <v-btn
                @click="drawer = !drawer"
                icon
                elevation=""
                color="grey lighten-4"
              >
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <Link href="/auth/logout" v-if="info.auth" preserve-state preserve-scroll>
        <v-btn icon color="white">
          <v-icon color="white"> mdi-logout </v-icon>
        </v-btn>
      </Link>
      <v-avatar v-if="info.auth">
        <v-img :src="info.auth.avatarPath"></v-img>
      </v-avatar>
    </v-app-bar>

    <v-main>
      <slot> </slot>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
export default {
  props: ["info"],
  name: "AdminNavigation",
  data() {
    return {
      drawer: null,
      links: [
        { page: "dashboard", link: "/admin/dashboard", icon: "mdi-menu" },
        {
          page: "All Users",
          link: "/admin/users",
          icon: "mdi-account-multiple",
        },
        {
          page: "Update Admin",
          link: "/admin/update-admin",
          icon: "mdi-account-multiple",
        },
      ],
      groups: [
        {
          title: "Cartegories",
          active: false,
          icon: "mdi-menu",
          pages: [
            {
              name: "All Categories",
              link: "/admin/cartegory",
              icon: "mdi-menu",
            },
            {
              name: "Create Category",
              link: "/admin/cartegory/create",
              icon: "mdi-menu",
            },
          ],
        },
        {
          title: "Products",
          active: false,
          icon: "mdi-basket",
          pages: [
            {
              name: "All Products",
              link: "/admin/products",
              icon: "mdi-menu",
            },
            {
              name: "Add Product",
              link: "/admin/product/create",
              icon: "mdi-menu",
            },
          ],
        },
        {
          title: "Sellers",
          active: false,
          icon: "mdi-bike",
          pages: [
            {
              name: "All Sellers",
              link: "/admin/shops",
              icon: "mdi-menu",
            },
            {
              name: "Add Seller",
              link: "/admin/shop/create",
              icon: "mdi-menu",
            },
          ],
        },
        {
          title: "Countries",
          active: false,
          icon: "mdi-flag",
          pages: [
            {
              name: "All Countries",
              link: "/admin/country",
              icon: "mdi-menu",
            },
            {
              name: "Add Country",
              link: "/admin/country/create",
              icon: "mdi-plus",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>