import {combineReducers} from "redux";
import orderReducer from "./orderReducer";
import positionsOrderByOrderIdReducer from "./positionsOrderByOrderIdReducer";
import visibilityPositionsReducer from "./visibilityPositionsReducer";

export default combineReducers({
    orders: orderReducer,
    positions: positionsOrderByOrderIdReducer,
    isOpen:visibilityPositionsReducer
})