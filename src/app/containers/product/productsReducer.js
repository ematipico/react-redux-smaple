import { STORE_PRODUCTS } from 'app/containers/home/homeActions'

export function selectProduct (state, id) {
  let theProduct = null
  state['products'].forEach(product => {
    if (product.data.id === id) {
      theProduct = product
      return
    }
  })
  return theProduct
}

export default function products (state = {}, action) {
  switch (action.type) {
    case STORE_PRODUCTS: {
      let newState = action.payload
      return newState
    }
    default:
      return state

  }
}
