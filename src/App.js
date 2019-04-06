import React, { Component } from 'react';
import './App.css';


import {Switch, Route, Link} from 'react-router-dom';

import ListaProductos from "./components/ListaProductos";
import FormularioProductos from "./components/FormularioProducto";
import MiCarrito from "./components/MiCarrito";
import PreviewCarrito from "./components/PreviewCarrito";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Link to="/"> Prodcutos </Link>
          <Link to="/new-product"> + Producto </Link>
          <Link to="/carrito">
            <PreviewCarrito/>
          </Link>
        </header>
        <Switch>
          <Route exact path="/" component={ListaProductos}/>
          <Route exact path="/new-product" component={FormularioProductos}/>
          <Route exact path="/carrito" component={MiCarrito}/>
        </Switch>
      </div>
    )
  }
}

export default App;
