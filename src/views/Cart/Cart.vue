<template>
	<div id="cart">
    <nav-bar class="cart-nav">
      <template v-slot:center>购物车({{cartLength}})</template>
    </nav-bar>
		<cart-list></cart-list>
		<cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
	import NavBar from "components/common/navbar/NavBar"
	import CartList from "./cartComps/CartList"
	import CartBottomBar from "./cartComps/CartBottomBar"
	
	import { mapGetters } from "vuex"

	export default {
		name: 'Cart',
		data(){
			return {}
		},
		components: {
			NavBar,
			CartList,
			CartBottomBar
		},
		computed: {
			...mapGetters(['cartLength'])
		}
	}
</script>

<style scoped>
	.cart {
		height: 100%;
	}

	

	.cart-nav {
		position: relative;
		color: #fff;
		z-index: 9;
		background-color: var(--color-tint);
	}
</style>
