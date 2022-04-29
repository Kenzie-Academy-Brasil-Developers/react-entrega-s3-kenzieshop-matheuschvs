import { combineReducers, legacy_createStore as createStore } from "redux";

import { productsReducer } from './modules/products/reducer'

const reducers = combineReducers({ products: productsReducer })

const store = createStore(reducers)

export { store }
