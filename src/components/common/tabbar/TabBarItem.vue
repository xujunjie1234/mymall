<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isactive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<div :style="activestyle">
			<slot name="item-text"></slot>
		</div>
		
	</div>
</template>

<script>
export default {
	name: 'TabBarItem',
	props:{
		path:String,
		activecolor: {
				type:String,
				default:"red"
			}
	},
	data(){
		return {
		}
	},
	computed:{
		isactive() {
			return this.$route.path.indexOf(this.path) != -1
		},
		activestyle() {
			return this.isactive ? {color: this.activecolor} : {}
		}
	},
	components: {},
	methods: {
		itemClick() {
			if (this.$route.path != this.path){
				this.$router.replace(this.path)
			}
		}
	}
}
</script>
<style scoped>
  
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    color:black;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin: 4px 0 2px 0;
  }

  .actived {
    color:coral;
    font-weight: bolder;
  }

</style>
