import { LOAD_PRODUCTS } from './actionTypes'

const productsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case LOAD_PRODUCTS:
      return payload
    default:
      return state
  }
}

export { productsReducer }
