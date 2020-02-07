import React from 'react';

import OrderPositionItem from './OrderPositionItem/OrderPositionItem';

const ListOrderPositions = (props) => {
  const {positions} = props;
  return (
    <div>
      {
        positions
          ? positions.map(position => <OrderPositionItem key={position.id} item={position}/>)
          : <p>The List is Empty</p>
      }
    </div>
  )
};

export default ListOrderPositions;