import React, { Component } from 'react';

import { connect } from 'react-redux'

class PlusMinusOne extends Component {

  increment = () => {
    console.log('dispatch INCREMENT')
    this.props.dispatch({type: 'INCREMENT'})
  }

  decrement = () => {
    console.log('dispatch DECREMENT')
    this.props.dispatch({type: 'DECREMENT'})
  }

  render() {
    console.log('PlusMinusOne props', this.props)
    return (
      <div className="PlusMinusOne">
        <button onClick={this.increment}>+ 1</button>
        <button onClick={this.decrement}>- 1</button>
      </div>
    )
  }
}


export default connect()(PlusMinusOne);
