import { AXIOS_ORDER_ITEMS_SUCCESS } from '../actions/constants';

const initialState = {};

/*  Элементы заказов:
    {
        orderId: [
            { id, name, price, qty, sum },
            ...
        ],
        ...
    }
*/

export default function orderPositions(state = initialState, action) {
    switch (action.type) {
        case AXIOS_ORDER_ITEMS_SUCCESS: {
            const { orderId, items } = action.payload;
            return { ...state, [orderId]: items };
        }

        default: {
            return state;
        }
    }
}