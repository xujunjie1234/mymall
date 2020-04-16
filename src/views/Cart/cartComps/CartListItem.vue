<template>
	<div class="cart-list-item">
		<div class="item-select">
			<check-button :is-check="itemInfo.check" @click.native="checkClick"></check-button>
		</div>
		<div class="item-img" @click="itemClick">
			<img :src="itemInfo.image" alt="">
		</div>
		<div class="item-info">
			<p class="item-title">{{itemInfo.title}}</p>
			<p class="item-desc">{{itemInfo.desc}}</p>
			<span class="item-price">￥{{itemInfo.price}}</span>
			<span class="item-count">x{{itemInfo.count}}</span>
		</div>
	</div>
</template>

<script>
	import CheckButton from "components/content/checkButton/CheckButton"
	export default {
		
		name: 'CartListItem',
		props: {
			itemInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data(){
			return {}
		},
		components: {
			CheckButton
		},
		methods: {
			itemClick() {
				this.$router.push('/detail/' + this.itemInfo.iid)
			},
			checkClick() {
				this.itemInfo.check = !this.itemInfo.check
			}
		}
	}
</script>
<style scoped>
	.cart-list-item {
		width: 100%;
		height: 21vh;
		border-bottom: 0.04rem solid rgba(128, 128, 128, 0.4);
		display: flex;
		padding: 5px;

	}

	.item-select {
		display: flex;
		width: 5vw;
		justify-content: center;
		align-items: center;
		margin-right: 5px;
		margin-left: 5px;
	}
	
	.item-img {
		width: 25vw;
		height: 100%;
		margin-left: 5px;
		padding-top: 5px;
		padding-bottom: 5px;
		/* padding: 5px; */
	}

	.item-img img {
		width: 100%;
		height: 100%;
		border-radius: 8px;
	}

	.item-info {
		width: 65vw;
		height: 100%;
		position: relative;
		overflow: hidden;
		margin-top: 5px;
		margin-left: 10px;
		margin-right: 10px;
		text-align: center;
		font-size: 14px;
	}

	.item-info p {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.item-title {
		font-size: 18px;
		padding-bottom: 10px;
	}

	.item-desc {
		color: gray;
		padding-bottom: 20px;
	}

	.item-price {
		font-size: 18px;
		color: var(--color-tint);
		position: absolute;
		left: 0;
	}

	.item-count {
		position: absolute;
		right: 0px;
	}
</style>
