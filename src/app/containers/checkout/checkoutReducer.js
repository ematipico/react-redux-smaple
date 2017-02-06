import { CHECKOUT_ERROR, CHECKOUT_FULFIL } from './checkoutActions'

export function selectCheckoutError (state) {
  return state.checkout.error
}

function checkoutReducer (state = {}, action) {
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
    default:
      return state
  }
}

export default checkoutReducer
