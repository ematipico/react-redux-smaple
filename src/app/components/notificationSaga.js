import { take, put, fork } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { SEND_MESSAGE, deliverMessage, removeMessage } from 'app/components/notificationActions'

const forever = true

export function* watchGetMessage () {
  while (forever) {
    const action = yield take(SEND_MESSAGE)
    yield fork(getMessage, action)
  }
}

export function* getMessage (action) {
  yield put(deliverMessage(action.payload))
  yield delay(3000)
  yield put(removeMessage())
}
