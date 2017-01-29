import { DELIVER_MESSAGE, REMOVE_MESSAGE } from './notificationActions'

export function selectMessage (state) {
  return state['notification']
}

export default function notificationReducer (state = {}, action) {
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
