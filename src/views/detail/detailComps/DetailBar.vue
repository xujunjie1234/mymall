<template>
	<div id="detail-nav-bar">
		<nar-bar>
			<template v-slot:left>
				<div class="back" @click="backClick">
					<img src="~assets/images/common/back.svg" alt="">
				</div>
			</template>
			<template v-slot:center>
				<div class="title">
					<div v-for="(item,index) in titles" :key="index" 
							class="title-item" :class="{active:index == currentIndex}" 
							@click="itemClick(index)">
							{{item}}
						</div>
				</div>
			</template>
		</nar-bar>
	</div>
</template>

<script>
import NarBar from "components/common/navbar/NavBar"
export default {
	name: 'DetailBar',
	data(){
		return {
			titles: ['商品','参数','评论','推荐'],
			currentIndex: 0
		}
	},
	components: {
		NarBar
	},
	methods: {
		itemClick(index) {
			this.currentIndex = index
			this.$emit('topClick',index)
		},
		backClick() {
			this.$router.back()
		}
	}
}
</script>
<style scoped>
	#detail-nav-bar {
		left: 0;
		right: 0;
		top: 0;
	}

	.title {
		display: flex;
		font-size: 14px;
	}

	.title-item {
		flex: 1;
	}

	.active {
		color: var(--color-high-text);
		/* border-bottom: 5px solid pink; */
	}

	.back {
		margin-top: 6px;
	}
</style>
