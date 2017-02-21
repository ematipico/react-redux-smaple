import test from 'ava'
import cartReducer from './cartReducer'
import { addToCart, deleteFromCart } from './cartActions'

test('cartReducer handles the empty state', assert => {
  const newState = cartReducer(undefined, {})

  assert.deepEqual(newState, {})
})

test('cartReducer handles the ADD_TO_CART action', assert => {
  const state = {}
  const item = {
    id: 'id',
    data: {
      kind: 'myDummyKind'
    }
  }
  const action = addToCart(item)

  const newState = cartReducer(state, action)

  const expectedState = {
    id: item
  }

  assert.deepEqual(newState, expectedState)
})

test('cartReducer handles the DELETE_FROM_CART action', assert => {
  const state = {
    id: {
      id: 'id',
      data: {
        kind: 'myDummyKind'
      }
    }
  }
  const item = {
    id: 'id',
    data: {
      kind: 'myDummyKind'
    }
  }
  const action = deleteFromCart(item)

  const newState = cartReducer(state, action)

  const expectedState = {}

  assert.deepEqual(newState, expectedState)
})
