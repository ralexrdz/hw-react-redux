import React, { Component } from 'react';

import { connect } from "react-redux";

class PreviewCarrito extends Component {
  render() {
    console.log('carrito', this.props.carrito)
    let totalPrice = 0
    this.props.carrito.forEach(c => {
      const producto = this.props.productos.find(p => p.id == c.productoId)
      console.log(producto)
      totalPrice += c.amount * producto.price
    })
    console.log('precioTotal', totalPrice)
    return (
      <span className="PreviewCarrito">
        En Carrito: {this.props.carrito ? this.props.carrito.length : 0}. Total ${totalPrice}
      </span>
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

export default connect(mapStateToProps)(PreviewCarrito);
