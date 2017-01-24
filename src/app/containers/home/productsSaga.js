import { take, put, fork } from 'redux-saga/effects'
import { GET_PRODUCTS, storeProducts } from 'app/containers/home/homeActions'

const forever = true

export function* watchGetProducts () {
  while (forever) {
    const action = yield take(GET_PRODUCTS)
    yield fork(getProducts, action)
  }
}

export function* getProducts () {
  const response = yield fetch('https://www.reddit.com/r/redditdev/.json')
  const data = yield response.json()
  yield put(storeProducts(data.data.children))
}
