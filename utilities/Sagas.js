import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getProducts, postPlaceOrder } from './Api';

// worker Saga: will be fired on PRODUCTS_FETCH_REQUESTED actions
const fetchProducts = function* (action) {
   try {
      const products = yield call(getProducts);
      yield put({type: 'GET_PRODUCTS_SUCCEEDED', products});
   } catch (e) {
      yield put({type: 'GET_PRODUCTS_FAILED', message: e.message});
   }
}

const placeOrder = function* (action) {
  try {
      const placeOrderResult = yield call(postPlaceOrder, action.payload.productIds, action.payload.ammount);
      yield put({type: 'PRODUCT_ORDER_SUCCEEDED', ...placeOrderResult});
   } catch (e) {
      yield put({type: 'PRODUCT_ORDER_FAILED', message: e.message});
   }
}

const fetchProductsSaga = function* () {
  yield takeLatest('PRODUCTS_FETCH_REQUESTED', fetchProducts);
};

const placeOrderSaga = function* () {
  yield takeEvery('PRODUCT_ORDER_REQUESTED', placeOrder);
};

export { fetchProductsSaga, placeOrderSaga };
