export const ADD_TO_CART = 'ADD_TO_CART'

export const DELETE_FROM_CART = 'DELETE_FROM_CART'

export function addToCart (item) {
  return {
    type: ADD_TO_CART,
    payload: {
      item
    }
  }
}

export function deleteFromCart (item) {
  return {
    type: DELETE_FROM_CART,
    payload: {
      item
    }
  }
}
