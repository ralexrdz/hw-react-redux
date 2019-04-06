import React, { Component } from 'react';

import { connect } from "react-redux";

import { Redirect } from "react-router-dom"

class FormularioProducto extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      details: '',
      price: 0,
      stock: 0
    }
  }

  onFieldChanged = (e) => {
    const field = e.target.name
    const stateToUpdate = {}
    stateToUpdate[field] = e.target.value
    this.setState(stateToUpdate)
  }

  addProduct = () => {
    this.props.dispatch({
      type: 'ADD_PRODUCT',
      name:  this.state.name,
      details: this.state.details,
      price: this.state.price,
      stock: this.state.stock
    })
    this.setState({
      redirect: true
    })
  }

  render() {
    if (this.state.redirect) return <Redirect to="/"/>

    return (
      <div className="FormularioProducto">
        <h1>Formulario Producto</h1>

        <div className="Formulario">
          <div>
            <label htmlFor="">Name</label>
            <input name="name" onChange={this.onFieldChanged} type="text"/>
          </div>
          <div>
            <label htmlFor="">Details</label>
            <input name="details" onChange={this.onFieldChanged} type="text"/>
          </div>
          <div>
            <label htmlFor="">Price</label>
            <input name="price" onChange={this.onFieldChanged} type="number"/>
          </div>
          <div>
            <label htmlFor="">Stock</label>
            <input name="stock" onChange={this.onFieldChanged} type="number"/>
          </div>
        </div>
        <div>
          <button onClick={this.addProduct}>Agregar Producto</button>
        </div>
      </div>
    )
  }
}

export default connect()(FormularioProducto);
