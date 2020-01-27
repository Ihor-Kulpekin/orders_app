import * as axios from "axios";


const commonGetJsonData = url => axios.default(url)
    .then((result) => {
        if (result.status!==200) {
            return Promise.reject(result);
        }
        return result.data;
    })
    .catch(error => Promise.reject(error));


export const getOrders = (filter) => {
    let url = 'http://127.0.0.1:8080/api/order';
    if (filter) {
        url += '?filter=' + encodeURIComponent(filter);
    }
    return commonGetJsonData(url);
};


export const getOrderItems = orderId => commonGetJsonData(`http://127.0.0.1:8080/api/order/${orderId}`);