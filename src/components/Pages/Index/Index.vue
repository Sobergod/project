<template>
  <main-page :title="config.title" :navOption="config.navOption" :setHeaderHeight="config.setHeaderHeight">
    <!-- <van-tabs v-model="active" sticky :offset-top="config.setHeaderHeight"> -->
    <!-- <van-tab v-for="index in 4" :title="'选项 ' + index" :key="index"> -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" @load="onLoad">
        <detail-card v-for="(item,index) in test" :key="index"></detail-card>
      </van-list>
    </van-pull-refresh>
    <!-- </van-tab> -->
    <!-- </van-tabs> -->
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
  props: {
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      config: config,
      test: [],
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      isLoading: false,
      active: 0,
      finished: false,
      loading: true
    };
  },
  created() {
    this.getData();
    this.onLoad();
  },
  methods: {
    getData() {
      // for (let i = 0; i < 5; i++) {
      //   this.test.push(i);
      // }
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.test.push(i);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.test.length >= 11) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    }
  }
};
</script>

<style scoped>
.select-wrap {
  width: 100%;
}
</style>