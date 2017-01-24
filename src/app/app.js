import React from 'react'
import { Provider } from 'react-redux'
import store from 'app/redux/store'
import BrowserRouter from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Home from 'app/containers/home/home'
import Product from 'app/containers/product/product'

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept()
  }
}

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='container'>
            <h1>
              React Redux sample - eCommerce
            </h1>

            <Match exactly pattern='/' component={Home} />
            <Match pattern='/product/:productId' component={Product} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
