import React, {useContext} from 'react';

import OrderPositionItem from './OrderPositionItem/OrderPositionItem';
import OrderPositionsContext from '../../context/OrderPositionsContext';

const ListOrderPositions = () => {
  const context = useContext(OrderPositionsContext);
  const {positions} = context.props;
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