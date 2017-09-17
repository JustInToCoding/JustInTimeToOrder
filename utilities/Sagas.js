import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getProducts, postPlaceOrder, getOrder } from './Api';

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
      const placeOrderResult = yield call(postPlaceOrder, action.payload.productIds, action.payload.amount);
      yield put({type: 'PRODUCT_ORDER_SUCCEEDED', ...placeOrderResult});
   } catch (e) {
      yield put({type: 'PRODUCT_ORDER_FAILED', message: e.message});
   }
}

const fetchOrder = function* (action) {
  try {
      const orderResult = yield call(getOrder, action.orderId);
      yield put({type: 'FETCH_ORDER_SUCCEEDED', ...orderResult});
   } catch (e) {
      yield put({type: 'FETCH_ORDER_FAILED', message: e.message});
   }
}

const fetchProductsSaga = function* () {
  yield takeLatest('PRODUCTS_FETCH_REQUESTED', fetchProducts);
};

const placeOrderSaga = function* () {
  yield takeEvery('PRODUCT_ORDER_REQUESTED', placeOrder);
};

const fetchOrderSaga = function* () {
  yield takeLatest('ORDER_FETCH_REQUESTED', fetchOrder);
};

export { fetchProductsSaga, placeOrderSaga, fetchOrderSaga };
