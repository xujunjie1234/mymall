<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>

  import MainTabBar from 'components/content/mainTarBar/mainTabBar'
  import NavBar from "components/common/navbar/NavBar"

  export default {
    name: 'App',
    data(){
      return {}
    },
    components: {
      MainTabBar,
      NavBar
    },
    methods: {}
  }
</script>
<style scoped>
  @import "assets/css/base.css";
</style>
