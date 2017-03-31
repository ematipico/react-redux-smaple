import jsdom from 'jsdom'
import sinon from 'sinon'

const window = jsdom.jsdom().defaultView

window.forEach(windowProperty => {
  if (!global[windowProperty]) {
    global[windowProperty] = window[windowProperty]
  }
})

global.fetch = sinon.stub().returns(Promise.resolve({
  status: 200,
  json () {
    return Promise.resolve()
  }
}))
