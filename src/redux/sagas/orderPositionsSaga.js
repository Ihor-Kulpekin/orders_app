import {call, put} from "redux-saga/effects";
import {getOrderItems as apiGetOrderItems} from "../../api/api";
import {getOrderItems} from "../actions/actions";

export function* getOrderPositionsSaga({ payload }) {
    try {
        const orderId = payload;
        const result = yield call(apiGetOrderItems, orderId);
        yield put(getOrderItems.success({
            orderId,
            positions: result
        }));
    } catch (error) {
        yield put(getOrderItems.failure(error));
        console.error(error);
    }
}