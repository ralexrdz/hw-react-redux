import React, { Component } from 'react';
import { connect } from 'react-redux'

class Counter extends Component {
  render() {
    console.log('Counter props', this.props)
    return (
      <div className="Counter">
        <h1>Counter: <span>{this.props.counter}</span></h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    counter: state
  };
}

export default connect(mapStateToProps)(Counter);
