import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getOrderItems} from '../../redux/actions/actions';
import OrderItem from '../components/ListOrders/OrderItem/OrderItem';

class OrderPositionsContainer extends Component {

  onToggle = (event, expanded) => {
    const {order, positions, getOrderItems} = this.props;
    if (expanded && !positions) {
      getOrderItems(order.id);
    }
  };

  render() {
    const {order,positions} = this.props;
    return (
      <>
        <OrderItem order={order} onToggle={this.onToggle}  positions={positions}/>
      </>
    )
  }
}

const mapStateToProps = (state, props) => ({
  positions: state.orderPositions[props.order.id]
});

const mapDispatchToProps = {getOrderItems};

OrderPositionsContainer.propTypes = {
  order:PropTypes.object.isRequired,
  getOrderItems:PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPositionsContainer)