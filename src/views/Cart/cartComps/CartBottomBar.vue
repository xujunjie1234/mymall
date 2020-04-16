<template>
	<div class="cart-bottom-bar">
		<div class="check">
			<check-button class="check-all" :is-check="isSelectAll" @click.native="checkClick"></check-button>
			<span>全选</span>
		</div>
		<div class="total-price">合计:￥{{totalPrice | Priceformat}}</div>
		<div class="total-count" @click="countClick">去结算:{{totalLength}}</div>
	</div>
</template>

<script>
	import CheckButton from "components/content/checkButton/CheckButton"
	import {mapGetters} from "vuex"

	export default {
		name: 'CartBottomBar',
		data(){
			return {
			}
		},
		components: {
			CheckButton
		},
		
		computed: {
			...mapGetters(['cartList','cartLength']),
			totalPrice() {
				return this.cartList.filter(x => x.check).reduce((a,b) => {
					return a + b.price*b.count
				}, 0)
			},
			totalLength() {
				return this.cartList.filter(x => x.check).length
			},
			isSelectAll() {
				if (!this.cartList.length) return false
				return !this.cartList.find(x => !x.check)
			},
		},
		methods: {
			checkClick() {
				if (this.isSelectAll){
					this.cartList.forEach(x => x.check = false)
				}else{
					this.cartList.forEach(x => x.check = true)
				}
			},
			countClick() {
				if (!this.totalLength){

					this.$toast.show('请选择购买的商品')
				}
			}
		},
		filters: {
			Priceformat(price) {
				return price.toFixed(2)
			}
		}
	}
</script>
<style scoped>
	.cart-bottom-bar {
		position: absolute;
		display: flex;
		bottom: 49px;
		width: 100vw;
		height: 40px;
		background-color: #eee;
	}

	.check {
		width: 80px;
		display: flex;
		align-items: center;
		
	}

	.check-all {
		width: 20px;
		margin-left: 10px;
		margin-bottom: 2px;
	}
	
	.check span {
		margin: auto;
	}

	.total-price {
		flex: 1;
		margin: auto;
		margin-left: 20px;
	}
	.total-count {
		/* flex: 1; */
		width: 90px;
		text-align: center;
		line-height: 40px;
		color: #fff;
		background-color: red;
	}

	.active {
		background-color: red;
	}

</style>
