
export function applyPricesToData (data) {
  const length = data.length
  console.log('generating price');
  for (let i = 0; i < length; i++) {
    const p = data[i].data
    p['price'] = Math.floor((Math.random() * 120) + 50)
  }
}
