export default {
    addToCart(context, payload) {
      return new Promise((resolve, reject) => {
        const oldproduct = context.state.cartList.find(x => x.iid === payload.iid )
        if (oldproduct){
          context.commit('addCounter', oldproduct)
          resolve('当前商品数量+1')
        }else{
          context.commit('addProduct', payload)
          resolve('当前商品已添加')
        }
      })
    }
}