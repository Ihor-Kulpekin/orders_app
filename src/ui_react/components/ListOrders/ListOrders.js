import React from 'react';

import OrderPositionsContainer from '../../containers/OrderPositionsContainer';

const ListOrders = (props) => {
  const {orders} = props;
  return (
    <div style={{marginTop:65+'px'}}>
      {orders !== null && (
        orders.length
          ? orders.map(order => <OrderPositionsContainer key={order.id} order={order}/>)
          : (<h1>The orders are absent</h1>)
      )}
    </div>
  )
};

export default ListOrders;