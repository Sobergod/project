<template>
  <main-page :title="config.title" :navOption="config.navOption">
    <detail-card v-for="(item,index) in test" :key="index"></detail-card>
  </main-page>
</template>

<script>
import MainPage from "../../MainPage/MainPage";
import DetailCard from "./DetailCard";
import { config } from "./config.js";
export default {
  components: {
    MainPage,
    DetailCard
  },
  data() {
    return {
      config: config,
      test: [],
      items: ["Foo", "Bar", "Fizz", "Buzz"]
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      for (let i = 0; i < 5; i++) {
        this.test.push(i);
      }
    }
  }
};
</script>

<style scoped>
.select-wrap {
  width: 100%;
}
</style>