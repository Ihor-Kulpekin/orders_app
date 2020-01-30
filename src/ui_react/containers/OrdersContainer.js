import React, {Component} from "react";
import {connect} from "react-redux";
import {getOrders} from "../../redux/actions/actions";
import ListOrders from "../components/listOrders/ListOrders";
import Header from "../components/header/Header";
import OrdersContext from "../context/OrdersContext";


class OrdersContainer extends Component {
    componentDidMount() {
        const { orders, getOrders } = this.props;
        if (orders === null) {
            getOrders();
        }
    }

    onFilterChange = (event) => {
        const { getOrders } = this.props;
        getOrders(event.target.value);
    };

    render() {
        const orders= this.props;
        return (
            <OrdersContext.Provider value={orders}>
                <Header onFilterChange={this.onFilterChange}/>
                <ListOrders/>
            </OrdersContext.Provider>
        );
    }
}

const mapStateToProps = state => ({
    orders: state.orders
});

const mapDispatchToProps = { getOrders };

export default connect(mapStateToProps,mapDispatchToProps)(OrdersContainer)