<template>
	<div class="recommend">
		<div v-for="item in recommends" :key="item.id" class="recommend-item">
			<a :href="item.link">
				<img :src="item.image" alt="">
			</a>
			<div>{{item.title}}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RecommendView',
	props:{
		recommends: {
			type:Array,
			default() {
				return []
			}
		}
	},
	components: {},
	methods: {}
}
</script>
<style scoped>
	.recommend {
		display: flex;
		width: 100%;
		text-align: center;
		font-size: 12px;
		padding: 10px 0 15px;
		border-bottom: 5px solid #eee;
	}

	.recommend-item {
		flex:1;
	}

	.recommend img {
		width: 70px;
		height: 70px;
		margin-bottom: 10px;
	}
</style>
