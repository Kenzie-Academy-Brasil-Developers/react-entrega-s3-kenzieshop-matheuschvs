import {
  ADD_PRODUCT,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_PRODUCT
} from './actionTypes'

const cartReducer = (state = [], { type, payload }) => {
  const objectInCart = state.filter(cartItem => cartItem.id === payload.id)[0]
  const rest = state.filter(cartItem => cartItem.id !== payload.id)

  switch (type) {
    case ADD_PRODUCT:
      if (!objectInCart) {
        return [{ quantity: 1, ...payload }, ...rest]
      }

      objectInCart.quantity += 1
      return [objectInCart, ...rest]
    case INCREASE_QUANTITY:
      objectInCart.quantity += 1
      return [objectInCart, ...rest]
    case DECREASE_QUANTITY:
      if (objectInCart.quantity > 1) {
        objectInCart.quantity -= 1
        return [objectInCart, ...rest]
      }
      return state
    case REMOVE_PRODUCT:
      return rest
    default:
      return state;
  }
}

export { cartReducer }
