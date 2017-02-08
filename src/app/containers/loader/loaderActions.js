export const PROGRESS = 'PROGRESS'

export const NO_PROGRESS = 'NO_PROGRESS'

export function progress () {
  return {
    type: PROGRESS
  }
}


export function stopProgress () {
  return {
    type: NO_PROGRESS
  }
}
