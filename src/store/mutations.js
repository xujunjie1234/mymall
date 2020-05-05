export default  {
    addCounter(state,payload) {
      payload.count += 1
    },
    addProduct(state,payload) {
      payload.count = 1
      payload.check = true
      state.cartList.push(payload)
    },
    sub(state,payload) {
      if (payload.count > 0) {
        payload.count -= 1
      }
    },
    add(state,payload) {
      payload.count += 1
    }
  }