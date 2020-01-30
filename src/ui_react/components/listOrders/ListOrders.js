import React, {useContext} from "react";
import OrderPositionsContainer from "../../containers/OrderPositionsContainer";
import OrdersContext from "../../context/OrdersContext";

const ListOrders = ()=>{
    const context = useContext(OrdersContext);
    const orders = context.orders;
    return(
        <div>
            {orders !== null && (
                orders.length
                    ? orders.map(order => <OrderPositionsContainer key={order.id} {...order} />)
                    : (<h1>The orders are absent</h1>)
            )}
        </div>
    )
};

export default ListOrders;