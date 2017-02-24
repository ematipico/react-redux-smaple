import test from 'ava'
import { watchGetProducts, getProducts } from './productsSaga'
import { GET_PRODUCTS, storeProducts } from 'app/containers/list/listActions'
import { take, fork } from 'redux-saga/effects'
import sinon from 'sinon'
import jsdom from 'jsdom'


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

test('getProducts fetch correctly the data', t => {
  const window = jsdom.jsdom().defaultView
  window.fetch = sinon.stub().returns(
    Promise.resolve({
    status: 200,
    json: () => Promise.resolve({})
  }))
  const generator = getProducts()
  generator.next()
})
