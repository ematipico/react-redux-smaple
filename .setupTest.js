import sinon from 'sinon'

global.fetch = sinon.stub().returns(Promise.resolve({
  status: 200,
  json () {
    return Promise.resolve()
  }
}))
