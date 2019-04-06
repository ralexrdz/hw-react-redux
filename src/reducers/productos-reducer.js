function productos (state = [
  {
    details: 'Detalle de producto 1',
    name: 'Producto 1',
    price: 10,
    stock: 5,
    id: 1
  },
  {
    details: 'Detalle de producto 2',
    name: 'Producto 2',
    price: 20,
    stock: 5,
    id: 2
  },
  {
    details: 'Detalle de producto 3',
    name: 'Producto 3',
    price: 30,
    stock: 5,
    id: 3
  },
  {
    details: 'Detalle de producto 4',
    name: 'Producto 4',
    price: 40,
    stock: 5,
    id: 4
  },
], action) {
  console.log('state productos', state)

  switch (action.type) {
    case 'BUY':
      // action: {
      //   id,
      //   amount
      // }

      // decrementar en {amount} el stock del producto con {id}
      return state
    case 'SUPPLY':
      // action: {
      //   id,
      //   amount
      // }

      // incrementar en {amount} el stock del producto con {id}
      return state
    case 'ADD_PRODUCT':
      // action: {
      //   name,
      //   details,
      //   price,
      //   stock
      // }
      console.log('ADD_PRODUCT action',action)

      const newId = Math.max(...state.map(p => p.id)) + 1
      console.log('newId', newId)
      const newProduct = {
        id: newId,
        name: action.name,
        details: action.details,
        price: action.price,
        stock: action.stock
      }

      return [...state, newProduct ]
    default:
      return state
  }
}

export default productos