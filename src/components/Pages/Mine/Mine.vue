<template>
  <main-page :title="config.title" :backPath="config.backPath" :navOption="config.navOption">
    <div class="head-box">
      <user-card :user="user"></user-card>
    </div>
  </main-page>
</template>

<script>
import MainPage from "../../MainPage/MainPage";
import UserCard from "./UserCard";
import { config } from "./config.js";
export default {
  components: {
    MainPage,
    UserCard
  },
  data() {
    return {
      config: config,
      user: {
        name: "陈敬衡",
        age: "1994年",
        email: "chenxin_work@outlook.com",
        avatar: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
      }
    };
  },
  methods: {
    testLink() {
      this.$router.push({
        path: "/a"
      });
    }
  }
};
</script>

<style scoped>
.head-box {
  position: relative;
  background: #fff;
}
</style>