export type Action = {
  type?: string;
  payload?: any
}

export type GenericState = {
  products: *,
  cart: *,
  notification: *,
  checkout: *,
  loader: *,
  form: *
}
