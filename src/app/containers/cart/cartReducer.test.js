import test from 'ava'
import cartReducer, {selectProductsInCart, selectProductFromCart} from './cartReducer'
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

test('selectProductsInCart returns all the items', t => {
  const products = {
    1: {
    },
    2: {
    }
  }
  const state = {
    cart: products
  }
  const items = selectProductsInCart(state)
  t.deepEqual(items, products)
})

test('selectProductFromCart returns the item searched', t => {
  const products = {
    '11aee': {
      text: 'dummy',
      title: '2'
    },
    '22ddd': {
      text: 'dummy'
    }
  }
  const state = {
    cart: products
  }
  const item = selectProductFromCart(state, '11aee')
  t.deepEqual(item, {text: 'dummy', title: '2'})
})
