import test from 'ava'
import { progress, stopProgress } from './loaderActions'
import loaderReducer, { selectLoaderState } from './loaderReducer'

test('loaderReducer handles the empty state', t => {
  const newState = loaderReducer(undefined, {})
  t.deepEqual(newState, {
    showLoader: false
  })
})

test('loaderReducer shows the loader', t => {
  const action = progress()
  const newState = loaderReducer(undefined, action)
  const expectedState = {
    showLoader: true
  }
  t.deepEqual(expectedState, newState)
})

test('loaderReducer does not show the loader', t => {
  const action = stopProgress()
  const newState = loaderReducer(undefined, action)
  const expectedState = {
    showLoader: false
  }
  t.deepEqual(expectedState, newState)
})

test('selectLoaderState gives the slice of state wanted', t => {
  const state = {
    loader: {
      showLoader: true
    }
  }
  const selector = selectLoaderState(state)
  t.is(state.loader.showLoader, selector)
})
