import React, {useContext} from "react";
import OrderPositionsContainer from "../../containers/OrderPositionsContainer";
import OrdersContext from "../../context/OrdersContext";

const ListOrders = ()=>{
    const orders = useContext(OrdersContext);
    return(
        <div>
            {orders !== null && (
                orders.length
                    ? orders.map(order => <OrderPositionsContainer key={order.id} {...order} />)
                    : (<h2>Таких заказов нет</h2>)
            )}
        </div>
    )
};

export default ListOrders;