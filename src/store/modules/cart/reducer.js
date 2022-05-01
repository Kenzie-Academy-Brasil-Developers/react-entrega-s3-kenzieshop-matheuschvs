import { ADD_PRODUCT, INCREASE_QUANTITY, DECREASE_QUANTITY } from './actionTypes'

const cartReducer = (state = [], { type, payload }) => {
  const objectInCart = state.filter(cartItem => cartItem.id === payload.id)[0]
  const rest = state.filter(cartItem => cartItem.id !== payload.id)

  switch (type) {
    case ADD_PRODUCT:
      if (!objectInCart) {
        return [...rest, { quantity: 1, ...payload }]
      }

      objectInCart.quantity += 1
      return [...rest, objectInCart]
    case INCREASE_QUANTITY:
      objectInCart.quantity += 1
      return [...rest, objectInCart]
    case DECREASE_QUANTITY:
      objectInCart.quantity -= 1
      return [...rest, objectInCart]
    default:
      return state;
  }
}

export { cartReducer }
