import React from "react";
import OrderItem from "./orderItem/OrderItem";
import PositionsOrderContainer from "../../containers/PositionsOrderContainer";

const ListOrders = (props)=>{

  return (
      <div>
          {
              props.orders.map((order)=>{
                  return (
                      <div>
                          <OrderItem key = {order.id} order = {order} isOpen={props.isOpen}/>
                          <PositionsOrderContainer order_id={order.id}/>
                      </div>
                      )
              })
          }
      </div>
  )
};

export default ListOrders;