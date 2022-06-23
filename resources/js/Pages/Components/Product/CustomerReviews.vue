<template>
  <v-card outlined>
    <v-card-text class="pb-0">
      <div class="text-xl font-semibold">Customer Reviews</div>
    </v-card-text>
    <v-card-text>
      <v-sheet outlined class="green lighten-4" height="100" tile>
        <v-container fluid class="fill-height">
          <v-row justify="center" align="center">
            <div class="grid pr-2">
              <div>
                <span class="text-3xl font-semibold text-orange-500">4.3 </span
                >out of 5
              </div>
              <v-rating
                :value="4"
                readonly
                background-color="yellow lighten-2"
                color="yellow darken-3"
              ></v-rating>
            </div>
            <div>
              <v-btn
                large
                tile
                elevation=""
                outlined
                depressed
                color="blue"
                class="blue--text"
                >View all</v-btn
              >
            </div>
          </v-row>
        </v-container>
      </v-sheet>
    </v-card-text>
    <v-card-text>
      <v-container class="">
        <v-row>
          <v-col v-for="n in 7" :key="n" cols="12">
            <v-row dense>
              <v-col cols="2" class="pa-0 ma-0">
                <v-avatar class="pa-0">
                  <img :src="'images/slide-1.jpg'" alt="" />
                </v-avatar>
              </v-col>
              <v-col cols="10" class="pa-0 ma-0">
                <div class="grid">
                  <div class="capitalize">msmsms</div>
                  <v-rating
                    :value="5"
                    readonly
                    small
                    dense
                    background-color="yellow lighten-4"
                    color=" yellow darken-3"
                  ></v-rating>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores debitis ducimus
                  </div>
                </div>
                <v-divider class="my-4"></v-divider>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
</style>