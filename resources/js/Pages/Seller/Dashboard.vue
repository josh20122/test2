<template>
  <SellerNavigation>
    <v-container class="">
      <v-row>
        <v-col>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Product Name</th>
                </tr>
              </thead>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </SellerNavigation>
</template>

<script>
import SellerNavigation from "../Layouts/SellerNavigation.vue";
export default {
  layout: SellerNavigation,
};
</script>

<style>
</style>