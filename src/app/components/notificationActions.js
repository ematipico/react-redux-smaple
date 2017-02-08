// @flow
export const DELIVER_MESSAGE = 'DELIVER_MESSAGE'

export const SEND_MESSAGE = 'SEND_MESSAGE'

export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'

export function deliverMessage (inbox: Object) {
  return {
    type: DELIVER_MESSAGE,
    payload: inbox
  }
}

export function sendMessage (message: string) {
  return {
    type: SEND_MESSAGE,
    payload: {
      type: 'positive',
      message: message
    }
  }
}

export function removeMessage () {
  return {
    type: REMOVE_MESSAGE,
    payload: {}
  }
}
