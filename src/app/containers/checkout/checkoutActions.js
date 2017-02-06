export const CHECKOUT_ERROR = 'CHECKOUT_ERROR'

export const CHECKOUT_FULFIL = 'CHECKOUT_FULFIL'

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
