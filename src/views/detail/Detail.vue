<template>
	<div id="detail">
		<detail-bar class="detail-nav" @topClick="titleClick" ref="nav"></detail-bar>
		<scroll class="content" ref="scroll" @scroll="detailScroll" :probe-type="3">
			<detail-swiper :top-images="topImages"></detail-swiper>
			<detail-base-info :goods="goods"></detail-base-info>
			<detail-shop-info :shop="shop"></detail-shop-info>
			<detail-images-info :images-info="detailImagesInfo" @imgLoad="imageLoad"></detail-images-info>
			<detail-param-info ref="param" :param-info="goodsParams"></detail-param-info>
			<detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
			<goods-list ref="recommend" :goods="recommendData"></goods-list>
		</scroll>
		<back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
		<detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
	</div>
</template>

<script>
	import DetailBar from "./detailComps/DetailBar"
	import DetailSwiper from "./detailComps/DetailSwiper"
	import DetailBaseInfo from "./detailComps/DetailBaseInfo"
	import DetailShopInfo from "./detailComps/DetailShopInfo"
	import DetailImagesInfo from "./detailComps/DetailImagesInfo"
	import DetailParamInfo from "./detailComps/DetailParamInfo"
	import DetailCommentInfo from "./detailComps/DetailCommentInfo"
	import DetailBottomBar from "./detailComps/DetailBottomBar.vue"
	import Scroll from "components/common/scroll/Scroll"
	import GoodsList from "components/content/goods/GoodsList"
	import BackTop from "components/content/backTop/BackTop"
	import {itemImageListener} from 'common/mixins'
	import {debounce} from 'common/utils'
	import {mapActions} from "vuex"

	import {getDetailData, Goods, Shop, GoodsParams, getRecommendData} from "network/detail"

	export default {
		name: 'Detail',
		data(){
			return {
				iid: null,
				topImages: [],
				goods: {},
				shop: {},
				detailImagesInfo: {},
				goodsParams: {},
				commentInfo: {},
				recommendData: [],
				saveTitleY: [],
				getTitleY: null,
				currentIndex: 0,
				isShowBackTop: false,
			}
		},
		created() {
			//1，保存传入的iid
			this.iid = this.$route.params.iid
			
			//2，根据iid获取数据
			getDetailData(this.iid).then(res => {
				const data = res.result
				this.topImages = data.itemInfo.topImages
				//3，获取商品信息
				this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
				//4，获取店铺信息
				this.shop = new Shop(data.shopInfo)
				//5获取商品详情数据
				this.detailImagesInfo = data.detailInfo
				//获取参数数据
				this.goodsParams = new GoodsParams(data.itemParams.info, data.itemParams.rule)
				//获取评论数据
				if (data.rate.cRate != 0){
					// console.log(data.rate.list)
					this.commentInfo = data.rate.list[0]
				}
			}).catch(err => console.log(err)),

			getRecommendData().then(res => {
				this.recommendData = res.data.list
			}),

			this.getTitleY = debounce(() => {
					this.saveTitleY = []
					this.saveTitleY.push(0)
					this.saveTitleY.push(this.$refs.param.$el.offsetTop)
					this.saveTitleY.push(this.$refs.comment.$el.offsetTop)
					this.saveTitleY.push(this.$refs.recommend.$el.offsetTop)
					this.saveTitleY.push(Number.MAX_VALUE)
			},200)
		},
		mixins: [itemImageListener],
		mounted() {
			// this.$bus.$on('imageLoaded')
		},
		destoyed() {
			this.$bus.$off('imageLoaded',this.homeImageListener)
		},
		components: {
			DetailBar,
			DetailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
			Scroll,
			DetailImagesInfo,
			DetailParamInfo,
			DetailCommentInfo,
			GoodsList,
			DetailBottomBar,
			BackTop,
		},
		methods: {
			...mapActions({"add":'addToCart'}),
			imageLoad() {
				this.$refs.scroll.refresh()
				this.getTitleY()
			},
			titleClick(index) {
				this.$refs.scroll.scrollTo(0, -this.saveTitleY[index], 100)
			},
			detailScroll(position) {
				let posy = -position.y 
				let length = this.saveTitleY.length
				for (let i=0; i<length-1; i++){
					if ((this.currentIndex !== i) && (i<length-1 && posy >= this.saveTitleY[i] && posy < this.saveTitleY[i+1])){
						this.currentIndex = i
						this.$refs.nav.currentIndex = this.currentIndex
					}
				}
				this.isShowBackTop = (-position.y) > 1000
			},
			backTopClick() {
				this.$refs.scroll.scrollTo(0,0)
			},
			addToCart() {
				const product = {}
				product.image = this.topImages[0]
				product.title = this.goods.title
				product.desc = this.goods.desc
				product.price = parseFloat(this.goods.nowPrice)
				product.iid = this.iid

				this.add(product).then(res => {
					this.$toast.show(res)
				})
			}
		}
	}
</script>
<style scoped>
	#detail {
		background-color: #fff;
		height: 100%;
	}

	.detail-nav {
		position: relative;
		z-index: 9;
		background-color: #fff;
	}

	.content {
		position: absolute;
		top: 44px;
		bottom: 49px;
	}
</style>
