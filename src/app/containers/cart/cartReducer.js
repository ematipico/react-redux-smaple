// @flow
import { ADD_TO_CART, DELETE_FROM_CART } from './cartActions'
import { Action, GenericState } from 'app/types'

type State = Object

export function selectProductsInCart (state: GenericState) {
  return state.cart
}

export function selectProductFromCart (state: GenericState, itemId: number) {
  return state.cart[itemId]
}

export default function cartReducer (state: State = {}, action: Action) {
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
