<template>
    <div class="detail-card">
        <div class="cover-img" :style="{backgroundImage:'url('+ cover.coverImg+')'}"></div>
        <div class="cover-content">
            <div class="cover-title">
                <span>{{cover.title}}</span>
            </div>
            <div class="cover-time">
                <span>{{cover.time}}</span>
            </div>
            <div class="cover-description">
                <span>{{cover.description}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    cover: {
      type: Object,
      default() {
        return {
          title: "标题",
          coverImg: "https://cdn.vuetifyjs.com/images/cards/desert.jpg",
          description: "描述",
          time: "2018-10-27"
        };
      }
    }
  }
};
</script>

<style scoped>
.detail-card {
  max-width: 400px;
  margin: 0 auto;
  margin-top: 5px;
  background-color: #ffffff;
  box-shadow: 0px 1px 5px #888;
}
.cover-img {
  width: 100%;
  height: 120px;
  background-position: center;
  background-size: cover;
}
.cover-content {
  padding: 10px;
}
.cover-title {
  font-size: 20px;
  font-weight: 600;
}
.cover-time {
  font-size: 14px;
  margin: 3px 0;
  color: #888;
}
</style>