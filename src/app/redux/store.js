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
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
)

sagaMiddleware.run(allSagas)
window.Store = store
export default store
