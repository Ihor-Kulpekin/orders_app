import React from 'react';
import {connect} from 'react-redux';

import {getOrderItems} from '../../redux/actions/actions';
import OrderItem from '../components/ListOrders/OrderItem/OrderItem';
import {compose, withHandlers, withProps} from "recompose";

const mapStateToProps = (state, props) => ({
    positions: state.orderPositions[props.order.id]
});

const mapDispatchToProps = {getOrderItems};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withProps(({order, positions, getOrderItems}) => ({
        order,
        positions,
        getOrderItems
    })),
    withHandlers({
        onToggle: ({order, positions, getOrderItems}) => () => {
            if (!positions) {
                getOrderItems(order.id);
            }
        }
    })
)(OrderItem)
