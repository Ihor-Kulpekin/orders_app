import React from 'react';
import {connect} from 'react-redux';
import {compose, lifecycle, withProps} from "recompose";

import {getOrders} from '../../redux/actions/actions';
import ListOrders from '../components/ListOrders/ListOrders';

const mapStateToProps = state => ({
  orders: state.orders
});

const mapDispatchToProps = {getOrders};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withProps((props)=>({
        orders: props.orders
    })),
    lifecycle({
      componentDidMount(){
          const {orders, getOrders} = this.props;
          if (orders === null) {
              getOrders();
          }
      }
    })
)(ListOrders)
