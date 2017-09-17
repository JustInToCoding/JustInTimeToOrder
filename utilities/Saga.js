import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getProducts } from './Api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
const fetchProducts = function* (action) {
   try {
      const products = yield call(getProducts);
      yield put({type: 'GET_PRODUCTS_SUCCEEDED', products});
   } catch (e) {
      yield put({type: 'GET_PRODUCTS_FAILED', message: e.message});
   }
}

const fetchProductsSaga = function* () {
  yield takeLatest('USER_FETCH_REQUESTED', fetchProducts);
};

export { fetchProductsSaga };
