<template>
  <div class="detail-bottom-bar ignore">
    <div class="left">
      <div class="left-item">
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div class="left-item">
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div class="left-item">
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      addCart() {
        // console.log('add')
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  .detail-bottom-bar {
    background-color: #fff;
    height: 49px;
    position: fixed;
    bottom: -1px;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 9;
  }
  .left {
    width: 50vw;
		display: flex;
		justify-content: space-around;
  }
  .right {
		width: 50vw;
    display: flex;
  }
  .left .icon {
    display: block;
    width: 24px;
    height: 24px;
		margin-top: 2px;
		margin-bottom: 2px;
    background:url('~assets/images/detail/detail_bottom.png') 0 0/100%;
  }
  .left .shop {
    background-position: 0 57px;
  }
  .left .service {
    background-position: 0 107px;
  }
  .text {
    font-size: 14px;
		bottom: 0;
  }
  .cart {
    width: 60%;
    background-color: #fff737;
    text-align: center;
    color:#666;
    font-size: 16px;
    line-height: 49px;
  }
  .buy {
    width: 40%;
    background-color: var(--color-tint);
    text-align: center;
    color:#fff;
    font-size:16px;
    line-height: 49px;
  }
</style>