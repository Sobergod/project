<template>
  <main-page :title="config.title" :navOption="config.navOption">
  </main-page>
</template>

<script>
import MainPage from "../../MainPage/MainPage";
import { config } from "./config.js";
export default {
  components: {
    MainPage
  },
  data() {
    return {
      config: config
    };
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
</style>