export default  {
    addCounter(state,payload) {
      payload.count += 1
    },
    addProduct(state,payload) {
      payload.count = 1
      payload.check = true
      state.cartList.push(payload)
    }
  }