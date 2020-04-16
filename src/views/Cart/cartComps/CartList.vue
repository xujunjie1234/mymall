<template>
	<div class="cart-list">
		<scroll class="content" ref="scroll">
			<cart-list-item v-for="item in cartList" :key="item.id" :item-info="item"></cart-list-item>
		</scroll>
	</div>
</template>

<script>
	import Scroll from "components/common/scroll/Scroll"
	import CartListItem from "./CartListItem"
	import {mapGetters} from "vuex"

	export default {
		name: 'CartList',
		data(){
			return {}
		},
		components: {
			Scroll,
			CartListItem
		},
		activated() {
			this.$refs.scroll.refresh()
		},
		computed: {
			...mapGetters(['cartList'])
		}
	}
</script>
<style scoped>
	.cart-list {
		height: calc(100vh - 44px - 49px - 40px);
	}

	.content {
		height: 100%;
	}
</style>
