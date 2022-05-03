import { toast } from 'react-toastify';

import {
  LOAD_PRODUCTS,
  ADD_PRODUCT,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_PRODUCT
} from './actionTypes'

const cartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case LOAD_PRODUCTS:
    case ADD_PRODUCT:
      toast.success('Produto adicionado ao carrinho!')
    case INCREASE_QUANTITY:
    case DECREASE_QUANTITY:
    case REMOVE_PRODUCT:
      toast.success('Produto removido do carrinho!')
      return payload
    default:
      return state;
  }
}

export { cartReducer }
