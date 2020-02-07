import React from 'react';
import PropTypes from 'prop-types';

import ListItem from "@material-ui/core/ListItem";

const OrderPositionItem = (props) => {
  const {
    item
  } = props;

  return (
    <ListItem>
      {item.name} {item.qty} {item.price} {item.sum}
    </ListItem>
  );
};

OrderPositionItem.propTypes = {
  item:PropTypes.object.isRequired
};

export default OrderPositionItem