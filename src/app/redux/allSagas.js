import { watchGetProducts } from 'app/containers/home/productsSaga'
import { watchGetMessage } from 'app/components/notificationSaga'

export default function* root () {
  yield [
    watchGetProducts(),
    watchGetMessage()
  ]
}
