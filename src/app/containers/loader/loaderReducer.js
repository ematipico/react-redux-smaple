// @flow
import { NO_PROGRESS, PROGRESS } from './loaderActions'
import { Action, GenericState } from 'app/types'

export function selectLoaderState (state: GenericState) {
  return state.loader.showLoader
}

type State = {
  showLoader: boolean
}

const inititialState = {
  showLoader: false
}

export default function (state: State = inititialState, action: Action) {
  switch (action.type) {
    case PROGRESS: {
      return {
        showLoader: true
      }
    }
    case NO_PROGRESS: {
      return {
        showLoader: false
      }
    }
    default:
      return state
  }
}
