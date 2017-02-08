import { take, put, fork } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { BUY_PRODUCTS, progress, stopProgress, successfulTransition } from './checkoutActions'

const forever = true

export function* whatchBuyProducts () {
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
