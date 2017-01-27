import { ADD_TO_CART, DELETE_FROM_CART } from './cartActions'

export function selectProductsInCart (state) {
  return state['cart']
}

export function selectProductFromCart (state, itemId) {
  return state['cart'][itemId]
}

export default function cartReducer (state = {}, action) {
  const { type, payload: {
    item
  } = {} } = action
  switch (type) {
    case ADD_TO_CART: {
      return {
        [item.id]: item,
        ...state
      }
    }
    case DELETE_FROM_CART: {
      let newState = Object.assign({}, state)
      delete newState[item.id]
      return newState
    }
    default:
      return state
  }
}