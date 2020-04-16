<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>首页</template>
    </nav-bar>
    <tab-control class="home-tab-control" v-show="isloaded" :titles="['流行','新款','精选']" 
        @tabClick="itemClick" ref="tabControl1"></tab-control>

    <scroll class="content" ref="scroll" 
          :probe-type="3" @scroll="scrollClick" 
          :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @homeImageLoaded="homeImageLoaded" />
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" 
        @tabClick="itemClick" ref="tabControl2"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import TabControl from "components/content/tabControl/TabControl"
  import GoodsList from "components/content/goods/GoodsList"
  import Scroll from "components/common/scroll/Scroll"

  import HomeSwiper from "./childComps/HomeSwiper"
  import RecommendView from "./childComps/RecommendView"
  import FeatureView from "./childComps/FeatureView"
  import BackTop from "components/content/backTop/BackTop"
  import {getHomeMultidata, getHomeGoods} from "network/home"
  import {itemImageListener} from "common/mixins"
  

  export default {
    name: 'home',
    data() {
      return {
        banners: [],
        recommends:[],
        currentType: 'pop',
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        isShowBackTop: false,
        taboffsetTop: 0,
        isloaded: false,
        saveY: 0,
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    activated() {
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0, this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.scroll.y
      //离开界面时取消对全局事件的监听
      this.$bus.$off('imageLoaded',this.homeImageListener)
    },
    created() {
      //1、请求多条数据
      this.getHomeMultidata()

      //2、请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    mixins:[itemImageListener],
    mounted() {
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      /*
      *事件监听相关方法
      */
      backTopClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      itemClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.currentindex = index
        this.$refs.tabControl2.currentindex = index
      },
      scrollClick(position) {
        this.isShowBackTop = (-position.y) > 1000
        this.isloaded = (-position.y) >= this.taboffsetTop
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      
      homeImageLoaded() {
        this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop 
        // console.log(this.taboffsetTop)
      },
      

      /*
      /下面是网络请求相关方法
      */
      getHomeMultidata() {
        //获取数据的接口
        getHomeMultidata().then(res => {
          // console.log(res)
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        //获取数据的接口
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          if (res !== undefined) {

            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1 
            this.$refs.scroll && this.$refs.scroll.finishPullUp()
          }
        })
      }
    }
  }
</script>

<style scoped>
/* scoped:作用域 */
  #home {
    height: 100%;
    position: relative;
    
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  .home-tab-control {
    position: relative;
    z-index: 9;
  }

  .content {
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 49px;
    left: 0;
  }
</style>