// @flow
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import allReducers from './allReducers'
import allSagas from './allSagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  combineReducers(allReducers),
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

sagaMiddleware.run(allSagas)
window.Store = store
export default store
