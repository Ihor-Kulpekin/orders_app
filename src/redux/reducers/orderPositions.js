import {GET_ORDER_ITEMS_SUCCESS} from '../actions/constants';

const initialState = {};

export default function orderPositions(state = initialState, action) {
  switch (action.type) {
    case GET_ORDER_ITEMS_SUCCESS: {
      const {orderId, positions} = action.payload;
      return {...state, [orderId]: positions};
    }

    default: {
      return state;
    }
  }
}