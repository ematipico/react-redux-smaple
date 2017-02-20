import test from 'ava'
import * as notificationActions from './notificationActions'

test('deliverMessage action returns the expected action', assert => {
  const inbox = {
    message: 'I am a dummy mesage',
    type: 'message'
  }

  const action = notificationActions.deliverMessage(inbox)

  const expectedAction = {
    type: notificationActions.DELIVER_MESSAGE,
    payload: {...inbox}
  }

  assert.deepEqual(action, expectedAction)
})

test('sendMessage action returns the expected action', assert => {
  const message = 'I am a dummy mesage'

  const action = notificationActions.sendMessage(message)

  const expectedAction = {
    type: notificationActions.SEND_MESSAGE,
    payload: {
      type: 'positive',
      message: message
    }
  }

  assert.deepEqual(action, expectedAction)
})

test('removeAction action returns the expected action', assert => {
  const action = notificationActions.removeMessage()

  const expectedAction = {
    type: notificationActions.REMOVE_MESSAGE,
    payload: {}
  }

  assert.deepEqual(action, expectedAction)
})
