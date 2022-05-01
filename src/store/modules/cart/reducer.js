import { ADD_PRODUCT } from './actionTypes'

const cartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      const objectInCart = state.filter(cartItem => cartItem.id === payload.id)

      if (objectInCart.length <= 0) {
        return [...state, { quantity: 1, ...payload }]
      }

      objectInCart[0].quantity += 1
      objectInCart[0].price *= objectInCart[0].quantity
      return state
    default:
      return state;
  }
}

export { cartReducer }
