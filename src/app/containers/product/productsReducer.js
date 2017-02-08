// @flow
import { STORE_PRODUCTS } from 'app/containers/list/listActions'
import { Action } from 'app/types'
type State = {
  products?: Array<any>
}

export function selectProduct (state: State, id: number) {
  let theProduct = null
  if (state.products) {
    state.products.forEach(product => {
      if (product.data.id === id) {
        theProduct = product
        return
      }
    })
  }
  return theProduct
}


export default function products (state: State = {}, action: Action) {
  switch (action.type) {
    case STORE_PRODUCTS: {
      let newState = action.payload
      return newState
    }
    default:
      return state

  }
}
