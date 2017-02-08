// @flow
import { CHECKOUT_ERROR, CHECKOUT_FULFIL, SUCCESSFUL_TRANSITION } from './checkoutActions'
import { GenericState, Action } from 'app/types'

export function selectCheckoutError (state: GenericState) {
  return state.checkout.error
}

function checkoutReducer (state: Object = {}, action: Action) {
  const { type, payload } = action
  switch (type) {
    case CHECKOUT_ERROR: {
      return {
        ...payload
      }
    }
    case CHECKOUT_FULFIL: {
      return {
        ...payload
      }
    }
    case SUCCESSFUL_TRANSITION: {
      return state
    }
    default:
      return state
  }
}

export default checkoutReducer
