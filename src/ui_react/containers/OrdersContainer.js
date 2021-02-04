import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getOrders} from '../../redux/actions/actions';
import ListOrders from '../components/ListOrders/ListOrders';

class OrdersContainer extends Component {
  componentDidMount() {
    const {orders, getOrders} = this.props;
    if (orders === null) {
      getOrders();
    }
  }

  render() {
    const {orders} = this.props;
    return (
      <>
        <ListOrders orders={orders}/>
      </>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders
});

const mapDispatchToProps = {getOrders};

OrdersContainer.propTypes = {
  getOrders:PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer)
