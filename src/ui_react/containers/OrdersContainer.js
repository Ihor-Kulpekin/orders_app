import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getOrders} from '../../redux/actions/actions';
import ListOrders from '../components/ListOrders/ListOrders';
import Header from '../components/Header/Header';

class OrdersContainer extends Component {
  componentDidMount() {
    const {orders, getOrders} = this.props;
    if (orders === null) {
      getOrders();
    }
  }

  onFilterChange = (event) => {
    const {getOrders} = this.props;
    getOrders(event.target.value);
  };

  render() {
    const {orders} = this.props;
    return (
      <>
        <Header onFilterChange={this.onFilterChange}/>
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