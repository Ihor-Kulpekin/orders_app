import {
  GET_ORDER_ITEMS,
  GET_ORDER_ITEMS_FAILURE,
  GET_ORDER_ITEMS_SUCCESS,
  GET_ORDERS,
  GET_ORDERS_FAILURE,
  GET_ORDERS_SUCCESS
} from './constants';

export const getOrders = (filter) => ({
  type: GET_ORDERS,
  payload: {filter}
});

export const getOrderItems = (orderId) => ({
  type: GET_ORDER_ITEMS,
  payload: orderId
});

const addActions = (action, what) => {
  Object.keys(what).forEach((name) => {
    action[name] = payload => ({type: what[name], payload});
  });
};

addActions(getOrders, {
  success: GET_ORDERS_SUCCESS,
  failure: GET_ORDERS_FAILURE
});

addActions(getOrderItems, {
  success: GET_ORDER_ITEMS_SUCCESS,
  failure: GET_ORDER_ITEMS_FAILURE
});