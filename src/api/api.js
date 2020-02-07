import * as axios from 'axios';

const commonGetJsonData = (url) =>axios.default(url)
  .then((result) => {
    return result.data;
  })
  .catch(error => Promise.reject(error));

export const getOrders = (filter) => {
  const env = process.env.REACT_APP_API_ROOT;
  let url = env+'/order';
  if (filter) {
    url += '?filter=' + encodeURIComponent(filter);
  }
  return commonGetJsonData(url);
};

export const getOrderItems = (orderId) => commonGetJsonData(`${process.env.REACT_APP_API_ROOT}/order/${orderId}`);
