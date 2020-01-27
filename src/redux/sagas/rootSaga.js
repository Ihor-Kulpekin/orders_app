import {
    all, takeLatest, debounce
} from 'redux-saga/effects';

import { AXIOS_ORDERS, AXIOS_ORDER_ITEMS } from '../actions/constants';
import {getOrdersSaga} from "./ordersSaga";
import {getOrderPositionsSaga} from "./orderPositionsSaga";



export function* rootSaga() {
    yield all([
        yield debounce(300, AXIOS_ORDERS, getOrdersSaga),
        yield takeLatest(AXIOS_ORDER_ITEMS, getOrderPositionsSaga)
    ]);
}