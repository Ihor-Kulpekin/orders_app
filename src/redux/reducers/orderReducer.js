import {FETCH_ORDERS} from "../actions/types";


const initialState = {
   orders:[],
};

export default function (state=initialState,action) {
    if (action.type === FETCH_ORDERS) {
        return {
            ...state,
            orders:action.payload
        };
    } else {
        return state;
    }
}