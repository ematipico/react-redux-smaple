import products from 'app/containers/product/productsReducer'
import cart from 'app/containers/cart/cartReducer'
import notification from 'app/components/notificationReducer'
import checkout from 'app/containers/checkout/checkoutReducer'
import { reducer as formReducer } from 'redux-form'

export default {
  products,
  cart,
  notification,
  checkout,
  form: formReducer
}
