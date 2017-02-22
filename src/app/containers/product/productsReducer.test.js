import test from 'ava'
import productsReducer from './productsReducer'
import { storeProducts } from 'app/containers/list/listActions'

test('productsReducer handles empty state', assert => {
  const newState = productsReducer(undefined, {})

  assert.deepEqual(newState, {})
})

test('productsReducer handles the STORE_PRODUCTS action', assert => {
  const state = {}
  const products = [
    {
      id: 2
    },
    {
      id: 5
    }
  ]
  const expectedState = products
  const action = storeProducts(products)
  const newState = productsReducer(state, action)
  assert.deepEqual(newState, expectedState)
})
