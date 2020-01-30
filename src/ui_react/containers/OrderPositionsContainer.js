import React, {Component} from "react";
import {getOrderItems} from "../../redux/actions/actions";
import {connect} from "react-redux";
import OrderItem from "../components/listOrders/orderItem/OrderItem";
import OrderPositionsContext from "../context/OrderPositionsContext";

class OrderPositionsContainer extends Component{

    onToggle = (event, expanded) => {
        const { id, positions, getOrderItems } = this.props;
        if (expanded && !positions) {
            getOrderItems(id);
        }
    };

    render() {
        const arrayProps = {
            onToggle:this.onToggle,
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

const mapDispatchToProps = { getOrderItems };

export default connect(mapStateToProps,mapDispatchToProps)(OrderPositionsContainer)