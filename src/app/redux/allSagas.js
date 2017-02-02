import { watchGetProducts } from 'app/containers/list/productsSaga'
import { watchGetMessage } from 'app/components/notificationSaga'

export default function* root () {
  yield [
    watchGetProducts(),
    watchGetMessage()
  ]
}
