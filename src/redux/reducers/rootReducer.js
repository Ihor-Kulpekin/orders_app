import { combineReducers } from 'redux';

import orders from './orders';
import orderPositions from './order-positions';

export default combineReducers({ orders, orderItems: orderPositions });