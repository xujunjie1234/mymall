<template>
	<div class="good-list">
		<goods-list-item v-for="item in goods" :key="item.image" :goodsItem="item"></goods-list-item>
	</div>
</template>

<script>
	import GoodsListItem from "./GoodsListItem"

	export default {
		name: 'GoodsList',
		props: {
			goods: {
				type: Array,
				defualt() {
					return []
				}
			}
		}
		,
		data(){
			return {}
		},
		components: {
			GoodsListItem
		},
		methods: {}
	}
</script>
<style scoped>
.good-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: var(--color-background);

    padding: 2px;
  }

</style>
