export const GET_PRODUCTS = 'GET_PRODUCTS'

export const STORE_PRODUCTS = 'STORE_PRODUCTS'

export const getProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    payload: products
  }
}

export const storeProducts = (products) => {
  return {
    type: STORE_PRODUCTS,
    payload: products
  }
}
