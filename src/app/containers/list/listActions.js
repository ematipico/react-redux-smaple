// @flow
export const GET_PRODUCTS = 'GET_PRODUCTS'

export const STORE_PRODUCTS = 'STORE_PRODUCTS'

export const getProducts = () => {
  return {
    type: GET_PRODUCTS
  }
}

export const storeProducts = (products: Array<Object>) => {
  return {
    type: STORE_PRODUCTS,
    payload: products
  }
}
