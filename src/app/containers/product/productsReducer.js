// @flow
import { STORE_PRODUCTS } from 'app/containers/list/listActions'

type State = {
  products: Array<any>
}

const inititialState = {
  products: []
}

export function selectProduct (state: State, id: number) {
  let theProduct = null
  state['products'].forEach(product => {
    if (product.data.id === id) {
      theProduct = product
      return
    }
  })
  return theProduct
}

export default function products (state: State = inititialState, action: Object) {
  switch (action.type) {
    case STORE_PRODUCTS: {
      let newState = action.payload
      return newState
    }
    default:
      return state

  }
}
