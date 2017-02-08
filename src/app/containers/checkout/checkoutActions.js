export const CHECKOUT_ERROR = 'CHECKOUT_ERROR'

export const CHECKOUT_FULFIL = 'CHECKOUT_FULFIL'

export const BUY_PRODUCTS = 'BUY_PRODUCTS'

export const SUCCESSFUL_TRANSITION = 'SUCCESSFUL_TRANSITION'


export function checkoutError (err) {
  return {
    type: CHECKOUT_ERROR,
    payload: {
      error: err
    }
  }
}

export function fulfilCheckout () {
  return {
    type: CHECKOUT_FULFIL,
    payload: {
      fulfil: true
    }
  }
}

export function buyProducts (formInformation) {
  return {
    type: BUY_PRODUCTS,
    payload: {
      ...formInformation
    }
  }
}

export function successfulTransition () {
  return {
    type: SUCCESSFUL_TRANSITION
  }
}
