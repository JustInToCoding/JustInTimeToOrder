export function productsReducer(state, action) {
  switch (action.type) {
    case 'GET_PRODUCTS_SUCCEEDED':
      return { ...state, products: action.products };
    case 'SET_ORDERED':
      return { ...state, hasOrdered: action.hasOrdered };
    case 'PRODUCT_ORDER_SUCCEEDED':
      return { ...state, orders: action.data, orderedProducts: action.included };
    default:
      return state;
  }
}
