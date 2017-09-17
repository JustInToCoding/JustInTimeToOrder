export function productsReducer(state, action) {
  switch (action.type) {
    case 'GET_PRODUCTS_SUCCEEDED':
      return { ...state, products: action.products };
    case 'SET_ORDERED':
      if(!action.hasOrdered) {
        return { ...state, hasOrdered: action.hasOrdered, order: undefined, orderedProducts: undefined };
      }
      return { ...state, hasOrdered: action.hasOrdered };
    case 'PRODUCT_ORDER_SUCCEEDED':
      return { ...state, order: action.data, orderedProducts: action.included };
    case 'FETCH_ORDER_SUCCEEDED':
      return { ...state, order: action.data, orderedProducts: action.included };
    default:
      return state;
  }
}
