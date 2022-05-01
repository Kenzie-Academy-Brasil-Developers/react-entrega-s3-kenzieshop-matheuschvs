import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from 'redux-thunk'

import { productsReducer } from './modules/products/reducer'
import { cartReducer } from './modules/cart/reducer'

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export { store }
