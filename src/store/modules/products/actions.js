import { LOAD_PRODUCTS } from './actionTypes'

export const loadProducts = products => {
  return { type: LOAD_PRODUCTS, payload: products }
}