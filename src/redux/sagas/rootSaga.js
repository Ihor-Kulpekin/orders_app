import {all, debounce, takeLatest} from 'redux-saga/effects';

import {GET_ORDER_ITEMS, GET_ORDERS} from '../actions/constants';
import {getOrdersSaga} from './ordersSaga';
import {getOrderPositionsSaga} from './orderPositionsSaga';

export function* rootSaga() {
  yield all([
    yield debounce(300, GET_ORDERS, getOrdersSaga),
    yield takeLatest(GET_ORDER_ITEMS, getOrderPositionsSaga)
  ]);
}