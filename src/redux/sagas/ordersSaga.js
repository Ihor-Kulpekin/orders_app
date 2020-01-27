import {call, put} from "redux-saga/effects";
import {getOrders as apiGetOrders} from "../../api/api";
import {getOrders} from "../actions/actions";

export function* getOrdersSaga({ payload }) {
    try {
        const result = yield call(apiGetOrders, payload.filter);
        yield put(getOrders.success(result));
    } catch (error) {
        yield put(getOrders.failure(error));
        console.error(error);
    }
}