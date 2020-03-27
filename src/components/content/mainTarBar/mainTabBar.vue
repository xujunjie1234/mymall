<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home">首页
        <img slot="item-icon" src="" alt="a">
        <!-- <span class="icon-io"></span> -->
        <img slot="item-icon-active" src="" alt="aa">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="" alt="a">
        <img slot="item-icon-active" src="" alt="aa">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="" alt="a">
        <img slot="item-icon-active" src="" alt="aa">
        <div slot="item-text">购物</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="" alt="a">
        <img slot="item-icon-active" src="" alt="aa">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>

import TabBar from "./components/tabbar/TabBar"
import TabBarItem from "./components/tabbar/TabBarItem"

export default {
  name: 'App',
  data(){
    return {}
  },
  components: {
    TabBar,
    TabBarItem
  },
  methods: {}
}
</script>
<style scoped>
  @import "./assets/css/base.css";
  /* @import "./assets/css/.." */
</style>
