import { STORE_PRODUCTS } from 'app/containers/home/homeActions'

export default function products(state = {}, action) {

  switch (action.type) {
    case STORE_PRODUCTS: {
      let newState = action.payload
      return newState
    }
    default:
      return state

  }
}
