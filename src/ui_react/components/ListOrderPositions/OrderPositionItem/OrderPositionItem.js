import React from 'react';

import orderPositionItem from './OrderPositionItem.module.css';

const OrderPositionItem = (props) => {
  const {
    item
  } = props;

  return (
    <div className={orderPositionItem.listItem}>
      {item.name} {item.qty} {item.price} {item.sum}
    </div>
  );
};

export default OrderPositionItem