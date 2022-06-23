<template>
  <v-card rounded="lg" outlined class="">
    <v-list color="transparent" class="">
      <v-list-item>
        <v-list-item-title> Categories </v-list-item-title>
      </v-list-item>
      <v-list-item v-for="item in category" :key="item.id">
        <Link :href="`/category/${item.id}`">
          <v-list-item-avatar>
            <v-img height="50" :src="item.image.path"></v-img>
          </v-list-item-avatar>
        </Link>
        <v-list-item-content>
          <Link :href="`/category/${item.id}`">
            <v-list-item-title>
              <span
                class="text-sm text-gray-900 truncate"
                v-text="item.title"
              ></span>
            </v-list-item-title>
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
      links: ["Dashboard", "Messages", "Profile", "Updates"],
    };
  },
};
</script>

<style>
</style>