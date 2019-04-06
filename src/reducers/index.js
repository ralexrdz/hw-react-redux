import { combineReducers } from 'redux';
import ProductosReducer from './productos-reducer'
import CarritoReducer from './carrito-reducer'

const rootReducer = combineReducers({
	productos: ProductosReducer,
  carrito: CarritoReducer
});

export default rootReducer;