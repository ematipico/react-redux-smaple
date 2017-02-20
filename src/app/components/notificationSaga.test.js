import test from 'ava'
import { watchGetMessage, getMessage } from './notificationSaga'
import { SEND_MESSAGE } from './notificationActions'
import { take, fork } from 'redux-saga/effects'

test('watchGetMessage should listen to SEND_MESSAGE action', assert => {
  const generator = watchGetMessage()

  assert.deepEqual(generator.next().value, take(SEND_MESSAGE))
})

test('watchGetMessage should fork to getMessage', assert => {
  const fakeGetState = () => {}
  const fakeAction = {}
  const generator = watchGetMessage(fakeGetState)

  // When
  generator.next(fakeAction)

  // Assert
  assert.deepEqual(generator.next(fakeAction).value, fork(getMessage, fakeAction))
})

test('watchGetMessage once fetched and forked should listen to the SEND_MESSAGE again', assert => {
  // When
  const generator = watchGetMessage()

  // Then
  generator.next() // fetch
  generator.next() // fork

  // Assert
  assert.deepEqual(generator.next().value, take(SEND_MESSAGE))
})
