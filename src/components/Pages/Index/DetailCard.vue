<template>
    <div class="detail-card">
        <div class="cover-img" :style="{backgroundImage:'url('+ cover.coverImg+')'}">
            <div class="cover-title">
                <span>{{cover.title}}</span>
            </div>
        </div>
        <div class="cover-content">

            <div class="cover-time">
                <span>{{cover.time}}</span>
            </div>
            <div class="cover-description">
                <span>{{cover.description}}</span>
            </div>
        </div>
        <div class="cover-thumb">
            <v-btn flat icon color="blue lighten-2">
                <v-icon>thumb_up</v-icon>
            </v-btn>
            <v-btn flat icon color="red lighten-2">
                <v-icon>thumb_down</v-icon>
            </v-btn>
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
  margin: 5px auto;
  background-color: #ffffff;
  box-shadow: 0px 1px 5px #888;
}
.cover-img {
  width: 100%;
  height: 120px;
  padding: 10px;
  background-position: center;
  background-size: cover;
}
.cover-title {
  padding-left: 15px;
  font-size: 20px;
  font-weight: 600;
  border-left: 5px solid #fff;
  color: #fff;
  text-shadow: 1px 1px 5px #000;
  letter-spacing: 3px;
}
.cover-content {
  padding: 10px;
}

.cover-time {
  font-size: 14px;
  margin: 3px 0;
  color: #888;
}
.cover-description {
  font-size: 14px;
  color: #888;
}
.cover-thumb {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #eee;
}
</style>