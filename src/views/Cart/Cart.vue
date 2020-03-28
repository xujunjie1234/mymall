<template>
	<div id="cart">
    <nav-bar class="cart-nav">
      <template v-slot:left>上一级</template>
      <template v-slot:center>购物车</template>
      <template v-slot:right>下一级</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
	name: 'Cart',
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
.cart-nav {
	background-color: pink;
}
</style>
