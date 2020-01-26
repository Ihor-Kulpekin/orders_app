import {IS_VISIBILITY} from "../actions/types";

const initialState = {
    isOpen:false
};

export default function (state=initialState,action) {
    if (action.type === IS_VISIBILITY) {
        return {
            ...state,
            isOpen: !action.payload
        };
    } else {
        return state;
    }
}