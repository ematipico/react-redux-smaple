import { watchGetProducts } from 'app/containers/list/productsSaga'
import { watchGetMessage } from 'app/components/notificationSaga'
import { whatchBuyProducts } from 'app/containers/checkout/checkoutSaga'

export default function * root () {
  yield [
    watchGetProducts(),
    watchGetMessage(),
    whatchBuyProducts()
  ]
}
