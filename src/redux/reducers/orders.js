import { AXIOS_ORDERS_SUCCESS } from '../actions/constants';

const initialState = null;

/*  Описание заказов:
    [
        { id, docNum, docDate, description },
        ...
    ]
*/

export default function orders(state = initialState, action) {
    switch (action.type) {
        case AXIOS_ORDERS_SUCCESS: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
}