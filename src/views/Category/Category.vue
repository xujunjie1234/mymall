<template>
	<div id="category">
    <nav-bar class="category-nav">
      <template v-slot:left>上一级</template>
      <template v-slot:center>分类</template>
      <template v-slot:right>下一级</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
	name: 'Category',
	data(){
		return {}
	},
	components: {
		NavBar
	},
	methods: {}
}
</script>
<style scoped>
.category-nav {
	background-color: pink;
}
</style>
