export function fetchProductsActionCreator() {
  return { type: 'PRODUCTS_FETCH_REQUESTED' };
}

export function orderProductActionCreator(productIds, ammount) {
  return { type: 'PRODUCT_ORDER_REQUESTED', payload: { productIds, ammount }};
}

export function setOrderedActionCreator(ordered = true) {
  return { type: 'SET_ORDERED', hasOrdered: ordered };
}
