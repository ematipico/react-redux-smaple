// @flow
export function applyPricesToData (data: Array<Object>) {
  const length = data.length
  for (let i = 0; i < length; i++) {
    const p = data[i].data
    p['price'] = Math.floor((Math.random() * 120) + 50)
  }
}
