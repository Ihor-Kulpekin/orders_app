import {FETCH_POSITIONS} from "../actions/types";

const initialState = {
    positions:[]
};

export default function (state=initialState,action) {
    if (action.type === FETCH_POSITIONS) {
        return {
            ...state,
            positions:action.payload
        };
    } else {
        return state;
    }
}