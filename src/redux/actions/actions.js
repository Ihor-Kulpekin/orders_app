import {
    AXIOS_ORDERS, AXIOS_ORDERS_SUCCESS, AXIOS_ORDERS_FAILURE,
    AXIOS_ORDER_ITEMS, AXIOS_ORDER_ITEMS_SUCCESS, AXIOS_ORDER_ITEMS_FAILURE
} from './constants';

/**
 * Получить список заказов
 * @param {string} filter - необязательно
 */
export const getOrders = filter => ({
    type: AXIOS_ORDERS,
    payload: { filter }
});

/**
 * Получить позиции заказа
 * @param {int} orderId
 */
export const getOrderItems = orderId => ({
    type: AXIOS_ORDER_ITEMS,
    payload: orderId
});

/**
 * Добавить дополнительные действия
 * @param {function} action
 * @param {object} what - { action: 'ACTION_CONST' }
 */
const addActions = (action, what) => {
    Object.keys(what).forEach((name) => {
        action[name] = payload => ({ type: what[name], payload });
    });
};

addActions(getOrders, {
    success: AXIOS_ORDERS_SUCCESS,
    failure: AXIOS_ORDERS_FAILURE
});

addActions(getOrderItems, {
    success: AXIOS_ORDER_ITEMS_SUCCESS,
    failure: AXIOS_ORDER_ITEMS_FAILURE
});