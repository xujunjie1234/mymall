<template>
		<swiper class="detail-swiper">
			<swiper-item v-for="item in topImages" :key="item.id">
				<img :src="item" alt="">
			</swiper-item>
		</swiper>
</template>

<script>
	import {Swiper,SwiperItem} from "components/common/swiper"

	export default {
		name: 'DetailSwiper',
		props: {
			topImages: {
					type: Array,
					default() {
						return []
					}
				}
		},
		data(){
			return {
			}
		},
		components: {
			Swiper,
			SwiperItem
		},
		methods: {}
	}
</script>
<style scoped>
	.detail-swiper {
		height: 200px;
	}
</style>
