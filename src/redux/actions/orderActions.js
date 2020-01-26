
import axios from 'axios';
import {FETCH_ORDERS, FETCH_POSITIONS} from "./types";

export const fetchOrders = () =>{
    return (dispatch)=>
        axios
            .get("http://127.0.0.1:8080/api/order")
            .then(response=> dispatch({
            type:FETCH_ORDERS,
            payload:[...response.data]
        }))
            .catch(err=>console.log(err))
};

export const fetchPositions = orderId=>dispatch=>{
        return axios
            .get("http://127.0.0.1:8080/api/order/"+orderId)
            .then(response=>dispatch({
            type:FETCH_POSITIONS,
            payload: response.data
        })).catch(error=>console.log(error))
};