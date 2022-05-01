import {
  ADD_PRODUCT,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_PRODUCT
} from "./actionTypes";

export const addProduct = product => ({ type: ADD_PRODUCT, payload: product })

export const increaseQuantity = product => ({ type: INCREASE_QUANTITY, payload: product })

export const decreaseQuantity = product => ({ type: DECREASE_QUANTITY, payload: product })

export const removeProduct = product => ({ type: REMOVE_PRODUCT, payload: product })
