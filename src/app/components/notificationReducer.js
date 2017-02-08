// @flow
import { DELIVER_MESSAGE, REMOVE_MESSAGE } from './notificationActions'
import { GenericState, Action } from 'app/types'

export function selectMessage (state: GenericState) {
  return state.notification
}

export default function notificationReducer (state: GenericState = {}, action: Action) {
  switch (action.type) {
    case DELIVER_MESSAGE: {
      return Object.assign({}, state, action.payload)
    }
    case REMOVE_MESSAGE: {
      return Object.assign({})
    }
    default:
      return state
  }
}
