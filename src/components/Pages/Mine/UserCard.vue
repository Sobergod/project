<template>
    <!-- 用户资料卡 -->
    <div class="card-wrap">
        <div class="user-card">
            <div class="user-msg">
                <p>
                    <span>{{user.name}}</span>
                </p>
                <p>
                    <span>{{user.email}}</span>
                </p>
                <p>
                    <span>{{user.age}}</span>
                </p>
            </div>
            <div class="user-avatar__wrap">
                <div class="user-avatar" :style="{backgroundImage:'url('+ user.avatar+')'}"></div>
            </div>
        </div>
        <div class="tools-bar">
            <v-btn class="item" flat color="indigo">
                <div class="item-content">
                    <span>10</span>
                    <span>文章</span>
                </div>
            </v-btn>
            <v-btn class="item" flat color="indigo">
                <div class="item-content">
                    <span>10</span>
                    <span>影评</span>
                </div>
            </v-btn>
            <v-btn class="item" flat color="indigo">
                <div class="item-content">
                    <span>10</span>
                    <span>喜欢</span>
                </div>
            </v-btn>
            <v-btn class="item" flat color="indigo">
                <div class="item-content">
                    <span>10</span>
                    <span>推荐</span>
                </div>
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default() {
        return {
          name: "默认名字",
          email: "默认邮箱",
          age: "1994年",
          avatar: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
        };
      }
    }
  }
};
</script>

<style scoped>
.card-wrap {
  position: relative;
  background-color: #039be5;
}
.user-card {
  padding: 25px 25px 10px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;
  box-shadow: 0 1px 5px #ccc;
}
.user-msg {
  flex: 1;
  margin-top: 10px;
  text-align: center;
  color: #fff;
}
.user-msg p {
  margin: 5px;
}
.user-msg p:first-child {
  font-size: 30px;
  font-weight: 700;
}
.user-msg p:nth-child(2) {
  font-size: 17px;
}
.user-msg p:nth-child(3) {
  font-size: 14px;
}
.user-avatar__wrap {
  flex: 1;
}
.user-avatar {
  height: 80px;
  width: 80px;
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: 1px 1px 5px #333;
  background-size: cover;
  background-position: center;
}
.tools-bar {
  display: flex;
  width: 100%;
  background: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 0 1px 5px #ccc;
}
.item {
  flex: 1;
  margin: 0;
  padding: 5px 0;
  height: 100%;
}
.item-content {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100%;
  border-right: 1px solid #eee;
}
.item:last-child .item-content {
  border-right: unset;
}
.item-content span:first-child {
  text-decoration: underline;
}
</style>