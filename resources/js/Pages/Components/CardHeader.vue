<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-text>
          <v-row justify="space-between">
            <div class="text-lg text-gray-900" v-text="title"></div>
            <Link :href="link">more </Link>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["title", "link"],
};
</script>

<style>
</style>