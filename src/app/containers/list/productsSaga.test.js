import test from 'ava'
import { watchGetProducts, getProducts, mockFetch } from './productsSaga'
import { GET_PRODUCTS, storeProducts } from 'app/containers/list/listActions'
import { take, fork } from 'redux-saga/effects'
import sinon from 'sinon'

test('watchGetProducts should listen to GET_PRODUCTS action', assert => {
  const generator = watchGetProducts()

  assert.deepEqual(generator.next().value, take(GET_PRODUCTS))
})

test('watchGetProducts should fork to getMessage', assert => {
  const fakeGetState = () => {}
  const fakeAction = {}
  const generator = watchGetProducts(fakeGetState)

  // When
  generator.next(fakeAction)

  // Assert
  assert.deepEqual(generator.next(fakeAction).value, fork(getProducts, fakeAction))
})

test('watchGetMessage once fetched and forked should listen to the SEND_MESSAGE again', assert => {
  // When
  const generator = watchGetProducts()

  // Then
  generator.next() // fetch
  generator.next() // fork

  // Assert
  assert.deepEqual(generator.next().value, take(GET_PRODUCTS))
})

test.only('getProducts fetch correctly the data', t => {
  sinon.stub(global, 'fetch')
  global.fetch.returns(Promise.resolve({
    status: 200,
    json: () => {
      return Promise.resolve({
        ciao: 'ciao'
      })
    }
  }))
  const generator = getProducts()
  generator.next().value
  generator.next().value
})
