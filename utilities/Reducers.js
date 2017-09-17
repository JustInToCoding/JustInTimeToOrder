export function productsReducer(state, action) {
  switch (action.type) {
    case 'GET_PRODUCTS_SUCCEEDED':
      return { ...state, products: action.products }
    default:
      return state
  }
}
