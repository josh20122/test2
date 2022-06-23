<template>
  <div>
    <div v-for="user in user.data" :key="user.id">
      <div class="text-4xl text-blue-400 py-40">
        {{ user.name }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["user"],
  data() {
    return {
      test: this.user,
    };
  },
  mounted() {
    window.addEventListener("scroll", (e) => {
      let pixelsFromBottom =
        document.documentElement.offsetHeight -
        document.documentElement.scrollTop -
        window.innerHeight;

      if (pixelsFromBottom < 200) {
        console.log(pixelsFromBottom);
        axios.get(this.test.next_page_url).then((response) => {
          this.test = {
            ...response.data,
            data: [...this.test.data, ...response.data.data],
          };
        });
      }
    });
  },
};
</script>

<style>
</style>