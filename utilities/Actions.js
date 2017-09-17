export function fetchProductsActionCreator() {
  return { type: 'PRODUCTS_FETCH_REQUESTED' };
}

export function fetchOrderActionCreator(orderId) {
  return { type: 'ORDER_FETCH_REQUESTED', orderId };
}

export function orderProductActionCreator(productIds, amount) {
  return { type: 'PRODUCT_ORDER_REQUESTED', payload: { productIds, amount }};
}

export function setOrderedActionCreator(ordered = true) {
  return { type: 'SET_ORDERED', hasOrdered: ordered };
}
