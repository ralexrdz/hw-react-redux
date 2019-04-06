import React, { Component } from 'react';

import { connect } from "react-redux";

import styles from './ListaProductos.css'

class ListaProductos extends Component {

  addToCarrito = (productoId) => {
    console.log('productoId', productoId)
    this.props.dispatch({
      type: 'ADD_PRODUCT_TO_CARRITO',
      id: productoId,
      amount: 1
    })
  }

  render() {
    const productos = this.props.productos.map(p => {
      return <div key={p.id} className="Producto">
        <h3>{p.name}</h3>
        <p>{p.details}</p>
        <h4>$ {p.price}</h4>
        <div><span>{p.stock} en inventario</span></div>
        <div>
          <button onClick={() => this.addToCarrito(p.id)}>Agregar a carrito</button>
        </div>
      </div>
    })
    return (
      <div className="ListaProductos">
        <h1>Lista Productos</h1>
        <div>
          {
            productos.length > 0 ?
            productos : 
            <div>No hay productos registrados</div>
          }
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    productos: state.productos
  }
}

export default connect(mapStateToProps)(ListaProductos);
