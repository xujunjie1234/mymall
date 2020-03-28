<template>
  <div id="app">
    <!-- <nav-bar class="home-nav">
      <template v-slot:left>上一级</template>
      <template v-slot:center>
        标题栏
        <!-- <div class="home-nav">标题栏</div> -->
      <!-- </template>
      <template v-slot:right>下一级</template>
    </nav-bar> -->
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>

// import TabBar from "./components/common/tabbar/TabBar"
// import TabBarItem from "./components/common/tabbar/TabBarItem"
//别名
import MainTabBar from 'components/content/mainTarBar/mainTabBar'
import NavBar from "components/common/navbar/NavBar"

export default {
  name: 'App',
  data(){
    return {}
  },
  components: {
    // TabBar,
    // TabBarItem,
    MainTabBar,
    NavBar
  },
  methods: {}
}
</script>
<style scoped>
  /* @import "./assets/css/base.css"; */
  /* @import "./assets/css/.." */
  .home-nav{
    background-color: pink;
  }
</style>
