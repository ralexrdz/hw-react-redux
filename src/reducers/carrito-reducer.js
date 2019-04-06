function carrito (state = [], action) {
  console.log('state carrito', state)

  switch (action.type) {
    case 'ADD_PRODUCT_TO_CARRITO':
      // action: {
      //   id,
      //   amount
      // }
      console.log('ADD_PRODUCT_TO_CARRITO action', action)
      let productoToIncreaseAmount = state.find(c => c.productoId == action.id)
      if (productoToIncreaseAmount) {
        console.log('ya existe producto en carrito, aumento amount')
        productoToIncreaseAmount.amount += action.amount 
        const filteredState = state.filter(c => c.productoId != action.id)
        return [...filteredState, productoToIncreaseAmount]
      } else {
        console.log('nuevo producto a carrito')
        const newProductoToCarrito = {
          productoId: action.id,
          amount: action.amount
        }
        return [...state, newProductoToCarrito]
      }
      
    case 'REMOVE_PRODUCT_FROM_CARRITO':
      // action: {
      //   id,
      //   amount
      // }

      let productToReduceAmount = state.find(c => c.productoId == action.id)

      if ( productToReduceAmount ) {
        console.log('tengo que reducir la cantidad en action.amount')
        productToReduceAmount.amount -= action.amount 
        const filteredState = state.filter(c => c.productoId != action.id)
        if (productToReduceAmount.amount == 0) {
          return filteredState
        } else {
          return [...filteredState, productToReduceAmount]
        }
        //
      } else {
        return state
      }
    default:
      return state
  }
}

export default carrito