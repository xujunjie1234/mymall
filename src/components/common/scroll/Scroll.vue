<template>
	<div class="wrapper" ref="wrapper" >
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import BScroll from "better-scroll"

export default {
	name: 'Scroll',
	props: {
		probeType: {
			Type: Number,
			default: 0,
		},
		pullUpLoad: {
			Type: Boolean,
			default: false
		}
	},
	data(){
		return {
			scroll: null
		}
	},
	mounted() {
		//1,创建bscoll对象
		this.scroll = new BScroll(this.$refs.wrapper, {
			probeType: this.probeType,
			click:true,
			pullUpLoad: this.pullUpLoad
		})
		//2,监听滚动位置
		this.scroll.on('scroll',(position) => {
			this.$emit('scroll',position)
		})
		//3,监听上拉事件
		this.scroll.on('pullingUp',() => {
			this.$emit('pullingUp')
		})
	},
	methods: {
		scrollTo(x, y, delay=200) {
			this.scroll && this.scroll.scrollTo(x, y, delay)
		},
		finishPullUp() {
			this.scroll && this.scroll.finishPullUp()
		},
		refresh() {
			this.scroll && this.scroll.refresh()
		}
	}
}
</script>
<style scoped>
</style>
