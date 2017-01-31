import products from 'app/containers/product/productsReducer'
import cart from 'app/containers/cart/cartReducer'
import notification from 'app/components/notificationReducer'
import { reducer as formReducer } from 'redux-form'

export default {
  products,
  cart,
  notification,
  form: formReducer
}
