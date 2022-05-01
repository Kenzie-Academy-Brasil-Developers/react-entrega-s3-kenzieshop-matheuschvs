import {
  addProduct,
  increaseQuantity,
  decreaseQuantity,
  removeProduct
} from './actions'

export const addProductThunk = product => (dispatch, getState) => {
  const { cart } = getState()

  const objectInCart = cart.filter(cartItem => cartItem.id === product.id)[0]
  const rest = cart.filter(cartItem => cartItem.id !== product.id)

  let newCart = []
  if (!objectInCart) {
    newCart = [{ quantity: 1, ...product }, ...rest]
  } else {
    objectInCart.quantity += 1
    newCart = [objectInCart, ...rest]
  }

  localStorage.setItem('@kenzieShop:cart', JSON.stringify(newCart))
  dispatch(addProduct(newCart))
}

export const increaseQuantityThunk = product => (dispatch, getState) => {
  const { cart } = getState()

  const objectInCart = cart.filter(cartItem => cartItem.id === product.id)[0]
  const rest = cart.filter(cartItem => cartItem.id !== product.id)

  objectInCart.quantity += 1
  const newCart = [objectInCart, ...rest]
  localStorage.setItem('@kenzieShop:cart', JSON.stringify(newCart))
  dispatch(increaseQuantity(newCart))
}

export const decreaseQuantityThunk = product => (dispatch, getState) => {
  const { cart } = getState()

  const objectInCart = cart.filter(cartItem => cartItem.id === product.id)[0]
  const rest = cart.filter(cartItem => cartItem.id !== product.id)

  if (objectInCart.quantity > 1) {
    objectInCart.quantity -= 1
  }

  const newCart = [objectInCart, ...rest]
  localStorage.setItem('@kenzieShop:cart', JSON.stringify(newCart))
  dispatch(decreaseQuantity(newCart))
}

export const removeProductThunk = product => (dispatch, getState) => {
  const { cart } = getState()

  const rest = cart.filter(cartItem => cartItem.id !== product.id)

  localStorage.setItem('@kenzieShop:cart', JSON.stringify(rest))
  dispatch(removeProduct(rest))
}
