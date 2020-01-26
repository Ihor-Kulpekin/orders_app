import React from "react";
import "./orderItem.module.css";

const OrderItem = (props)=>{
  return (
      <div>
            <span>
                <button onClick={props.isOpen}/>
                <p>{props.order.docNum}</p>
                <p>{props.order.docDate}</p>
                <p>{props.order.description}</p>
            </span>
      </div>
  )
};

export default OrderItem;