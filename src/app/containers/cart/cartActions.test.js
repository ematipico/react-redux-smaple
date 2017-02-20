import test from 'ava'
import {addToCart, ADD_TO_CART, deleteFromCart} from './cartActions'

test('addToCart return the expected action', assert => {
  const item = {
    kind: 'aaa',
    data: {}
  }
  const action = addToCart(item)

  const expectedAction = {
    type: ADD_TO_CART,
    payload: {
      item
    }
  }

  assert.deepEqual(action, expectedAction)
})
