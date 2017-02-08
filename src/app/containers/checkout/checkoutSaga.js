import { delay } from 'redux-saga'
import { take, put, fork } from 'redux-saga/effects'
import { BUY_PRODUCTS, successfulTransition } from './checkoutActions'
import { progress, stopProgress } from 'app/containers/loader/loaderActions'

const forever = true

export function * whatchBuyProducts () {
  while (forever) { // eslint-disable-line
    const action = yield take(BUY_PRODUCTS)
    yield fork(buyProduct, action)
  }
}

function * buyProduct (action) {
  yield put(progress())
  yield delay(2000)
  yield put(successfulTransition())
  yield put(stopProgress())
}
