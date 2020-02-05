import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getOrderItems} from '../../redux/actions/actions';
import OrderItem from '../components/ListOrders/OrderItem/OrderItem';
import OrderPositionsContext from '../context/OrderPositionsContext';

class OrderPositionsContainer extends Component {

  onToggle = (event, expanded) => {
    const {id, positions, getOrderItems} = this.props;
    if (expanded && !positions) {
      getOrderItems(id);
    }
  };

  render() {
    const arrayProps = {
      onToggle: this.onToggle,
      props: this.props
    };
    return (
      <OrderPositionsContext.Provider value={arrayProps}>
        <OrderItem/>
      </OrderPositionsContext.Provider>
    )
  }
}

const mapStateToProps = (state, props) => ({
  positions: state.orderPositions[props.id]
});

const mapDispatchToProps = {getOrderItems};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPositionsContainer)