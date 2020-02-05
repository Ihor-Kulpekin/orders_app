import {GET_ORDERS_SUCCESS} from '../actions/constants';

const initialState = null;

export default function orders(state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}