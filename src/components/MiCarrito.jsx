import React, { Component } from 'react';

import { connect } from "react-redux";

import './MiCarrito.css'

class MiCarrito extends Component {

  reduceAmount = (productoId) => {
    this.props.dispatch({
      type: 'REMOVE_PRODUCT_FROM_CARRITO',
      id: productoId,
      amount: 1
    })
  }

  increaseAmount = (productoId) => {
    this.props.dispatch({
      type: 'ADD_PRODUCT_TO_CARRITO',
      id: productoId,
      amount: 1
    })
  }


  render() {
    let totalCarrito = 0
    const carrito = this.props.carrito
      .sort((a, b) => a.productoId - b.productoId)
      .map(c => {
        const producto = this.props.productos.find(p => p.id == c.productoId )
        totalCarrito += c.amount * producto.price
        return <div key={c.productoId} className="ProductoEnCarrito">
          <div>
            <b>{producto.name }</b>
          </div>
          <div>
            ${producto.price}
          </div> 
          <div>
            <button onClick={() => this.reduceAmount(c.productoId)}>-</button>
            <span> {c.amount} </span>
            <button onClick={() => this.increaseAmount(c.productoId)}>+</button>
          </div>
          <div> ${c.amount * producto.price} </div>
        </div>
      })
    return (
      <div className="MiCarrito">
        <h1>Mi Carrito</h1>
        { carrito.length > 0 ?
          carrito : 
          <span>no tienes productos en el carrito</span>
        }
        <div>
          TOTAL: ${totalCarrito}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    carrito: state.carrito,
    productos: state.productos
  }
}

export default connect(mapStateToProps)(MiCarrito);
