function counter (state = 2, action) {
  console.log('state counter', state)

  switch (action.type) {
    case 'INCREMENT':
      console.log('incrementamos en uno')
      return state + 1
    case 'DECREMENT':
      console.log('disminuimos en uno')
      return state - 1
    case 'INCREMENT_X':
      console.log(typeof(action.x))
      console.log('incrementamos en ' + action.x)
      return state + parseInt(action.x)
    case 'DECREMENT_X':
      console.log('disminuimos en ' + action.x)
      return state - action.x
    default:
      return state
  }
}

export default counter