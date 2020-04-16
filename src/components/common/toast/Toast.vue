<template>
	<div class="toast" v-show="isShow">
		<div>{{ message }}</div>
	</div>
</template>

<script>
	export default {
		name: 'Toast',
		props: {
		},
		data(){
			return {
				message: '',
				isShow: false
			}
		},
		components: {},
		methods: {
			show(message="默认信息", duration=2000) {
				this.message = message
				this.isShow = true

				setTimeout(() => {
					this.message = ''
					this.isShow = false
				}, duration);
			}
		}
	}
</script>
<style scoped>
	.toast {
		position: fixed;
		left: 50%;
		top: 50%;
		z-index: 90;
		padding: 8px 10px;
		transform: translate(-50% ,-50%);
		color: #fff;
		background-color: rgba(0,0,0,.75);
	}
</style>
