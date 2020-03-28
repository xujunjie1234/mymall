<template>
	<div id="profile">
    <nav-bar class="profile-nav">
      <template v-slot:left>上一级</template>
      <template v-slot:center>资料</template>
      <template v-slot:right>下一级</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
	name: 'Profile',
	data(){
		return {}
	},
	components: {
		NavBar
	},
	methods: {}
}
</script>
<style scoped>
.profile-nav {
	background-color: pink;
}
</style>
