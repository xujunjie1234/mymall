<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:left>上一级</template>
      <template v-slot:center>首页</template>
      <template v-slot:right>下一级</template>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import HomeSwiper from "./childComps/HomeSwiper"
  import RecommendView from "./childComps/RecommendView"
  import {getHomeMultidata} from "network/home"
  

  export default {
    name: 'home',
    data() {
      return {
        banners: [],
        recommends:[],
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    created() {
      //1、请求多条数据
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
        })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: pink;
  }
</style>