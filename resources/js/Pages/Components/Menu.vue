<template>
  <v-card rounded="lg" outlined class="">
    <v-list color="transparent" class="">
      <v-list-item v-for="(page, index) in pages" :key="index">
        <v-list-item-content>
          <Link :href="page.link">
            <v-list-item-title>
              <span
                class="text-sm text-gray-900 truncate"
                v-text="page.name"
              ></span>
            </v-list-item-title>
          </Link>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-2"></v-divider>

      <v-list-item color="grey lighten-4" dense>
        <Link href="/auth/logout" method="POST">
          <v-list-item-icon>
            <v-icon color="">mdi-logout</v-icon>
          </v-list-item-icon>
        </Link>
        <v-list-item-content>
          <Link href="/auth/logout" method="POST">
            <v-list-item-title> Logout </v-list-item-title>
          </Link>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: ["category"],
  data() {
    return {
      pages: [
        {
          name: "Update records",
          icon: "mdi-rocket",
          link: "/update-details",
        },
        { name: "My Wishlist", icon: "mdi-rocket", link: "/auth/user-update" },
        { name: "My Cart", icon: "mdi-rocket", link: "/cart" },
        { name: "All Orders", icon: "mdi-rocket", link: "/auth/user-update" },
      ],
    };
  },
};
</script>

<style>
</style>