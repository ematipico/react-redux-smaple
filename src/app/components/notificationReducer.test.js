import test from 'ava'
import notificationReducer from 'app/components/notificationReducer'
import * as notificationActions from 'app/components/notificationActions'

test('notificationReducer handles empty state gracefully', assert => {
  const newState = notificationReducer(undefined, {})

  assert.deepEqual(newState, {})
})

test('notificationReducer handles DELIVER_MESSAGE action as expected', assert => {
  const state = {}
  const inbox = {
    type: 'positive',
    message: 'Dummy message'
  }
  const expectedState = {
    ...inbox
  }
  const action = notificationActions.deliverMessage(inbox)

  const newState = notificationReducer(state, action)

  assert.deepEqual(expectedState, newState)
})
