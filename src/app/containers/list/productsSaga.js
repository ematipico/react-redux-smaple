import { take, put, fork } from 'redux-saga/effects'
import { GET_PRODUCTS, storeProducts } from 'app/containers/list/listActions'
import { applyPricesToData } from 'app/utils'

const forever = true

let mockedFetch

export function mockFetch (func) {
  mockedFetch = func
}

export function * watchGetProducts () {
  while (forever) { // eslint-disable-line
    const action = yield take(GET_PRODUCTS)
    yield fork(getProducts, action)
  }
}

export function * getProducts () {
  const api = mockedFetch || fetch
  const response = yield api('https://www.reddit.com/r/redditdev/.json')
  const data = yield response.json()
  const { children } = data.data
  applyPricesToData(children)
  yield put(storeProducts(children))
}
