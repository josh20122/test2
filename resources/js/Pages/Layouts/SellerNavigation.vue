<template>
  <v-app>
    <v-navigation-drawer color="drawer" app :value="drawer">
      <v-list>
        <v-list-item>
          <v-img max-width="100" :src="'/images/logo.png'"></v-img>
        </v-list-item>
        <v-divider> </v-divider>
        <v-list-item v-for="page in pages" :key="page.link">
          <Link :href="page.link">
            <v-list-item-icon>
              <v-icon color="white" v-text="page.icon"></v-icon>
            </v-list-item-icon>
          </Link>
          <v-list-item-content>
            <Link :href="page.link">
              <v-list-item-title v-text="page.name" class="white--text">
              </v-list-item-title>
            </Link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app hide-on-scroll flat color="blue darken-1">
      <v-row justify="space-between">
        <div>
          <v-app-bar-nav-icon
            class="white--text"
            @click="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </div>
        <div class="inline-flex space-x-2">
          <div class="white--text pt-3">Jpsnsnsnn</div>
          <v-avatar>
            <v-img :src="$page.props.user.auth.avatarPath" alt="" />
          </v-avatar>
        </div>
      </v-row>
    </v-app-bar>

    <v-main>
      <slot> </slot>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      pages: [
        { name: "Dashboard", icon: "mdi-menu", link: "/seller" },
        { name: "All Products", icon: "mdi-menu", link: "/seller/products" },
        {
          name: "Create Product",
          icon: "mdi-menu",
          link: "/seller/product/create",
        },
        {
          name: "Pending Orders",
          icon: "mdi-menu",
          link: "/seller/pending-orders",
        },
        { name: "All Orders", icon: "mdi-menu", link: "/seller/orders" },
        { name: "Update Seller", icon: "mdi-menu", link: "/seller/shop/view" },
        {
          name: "Completed Orders",
          icon: "mdi-menu",
          link: "/seller/completed-orders",
        },
      ],
    };
  },
};
</script>

<style>
</style>