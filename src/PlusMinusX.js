import React, { Component } from 'react';
import { connect } from "react-redux";
class PlusMinusX extends Component {

  constructor (props) {
    super(props)
    this.state = {
      x: 0
    }
  }

  setX = (e) => {
    console.log('x vale:' + e.target.value)
    this.setState({
      x: e.target.value
    })
  }

  incrementX = () => {
    console.log('dispatch INCREMENT X:' + this.state.x )
    this.props.dispatch({
      type: 'INCREMENT_X',
      x: this.state.x
    })
  }

  decrementX = () => {
    console.log('dispatch DECREMENT X:' + this.state.x )
    this.props.dispatch({
      type: 'DECREMENT_X',
      x: this.state.x
    })
  }

  render() {
    return (
      <div className="PlusMinusX">
        <label htmlFor="">X: </label>
        <input type="number" id="x" onChange={this.setX}/>
        <button onClick={this.incrementX}>+ {this.state.x}</button>
        <button onClick={this.decrementX}>- {this.state.x}</button>
      </div>
    )
  }
}

export default connect()(PlusMinusX);
