import test from 'ava'
import { progress, PROGRESS, NO_PROGRESS, stopProgress } from './loaderActions'

test('progress returns the expected action', t => {
  const expectedAction = {
    type: PROGRESS
  }

  t.deepEqual(progress(), expectedAction)
})

test('stopProgress returns the expected action', t => {
  const expectedAction = {
    type: NO_PROGRESS
  }

  t.deepEqual(stopProgress(), expectedAction)
})
