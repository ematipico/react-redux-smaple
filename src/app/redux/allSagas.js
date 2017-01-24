import { watchGetProducts } from 'app/containers/home/productsSaga'
import { fork } from 'redux-saga/effects'

export default function* root () {
  yield [
    watchGetProducts()
  ]
}
