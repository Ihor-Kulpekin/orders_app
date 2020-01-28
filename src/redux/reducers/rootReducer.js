import { combineReducers } from 'redux';

import orders from './orders';
import orderPositions from './orderPositions';

export default combineReducers({ orders, orderPositions });