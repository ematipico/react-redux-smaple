import test from 'ava'
import { getProducts, GET_PRODUCTS, storeProducts, STORE_PRODUCTS } from './listActions'

test('getProducts returns the expected action', t => {
  const expectedAction = {
    type: GET_PRODUCTS
  }
  const action = getProducts()
  t.deepEqual(expectedAction, action)
})

test('storeProducts returns the expected action', t => {
  const items = [
    {
      id: 2
    },
    {
      id: 4
    }
  ]
  const expectedAction = {
    type: STORE_PRODUCTS,
    payload: items
  }
  const action = storeProducts(items)
  t.deepEqual(expectedAction, action)
})
