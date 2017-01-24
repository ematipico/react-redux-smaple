import { createStore, combineReducers, applyMiddleware } from 'redux'
import allReducers from './allReducers'
import allSagas from './allSagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers(allReducers),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(allSagas)
window.Store = store
export default store
