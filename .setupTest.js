import jsdom from 'jsdom'
import sinon from 'sinon'

const defaultView = jsdom.jsdom().defaultView
Object.keys(defaultView).forEach(option => {
  if (!global[option]) {
    global[option] = defaultView[option]
  }
})

global.fetch = sinon.stub().returns(Promise.resolve({
  status: 200,
  json () {
    return Promise.resolve()
  }
}))
