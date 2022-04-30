import { ADD_PRODUCT } from './actionTypes'

const cartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return [...state, payload]
    default:
      return state;
  }
}

export { cartReducer }
