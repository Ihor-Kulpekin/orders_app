import React, {Component} from "react";
import {connect} from "react-redux";
import {getOrders} from "../../redux/actions/actions";
import OrderCard from "../components/orderItem/OrderItem";


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
        const { orders } = this.props;
        return (
            <div className="application">
                <div className="header">
                    <p>Заказы Filter:<input  onChange={this.onFilterChange}/></p>
                </div>
                {orders !== null && (
                    orders.length
                        ? orders.map(order => <OrderCard key={order.id} {...order} />)
                        : (<h2>Таких заказов нет</h2>)
                )}
            </div>
        );
    }
}

const mstp = state => ({
    orders: state.orders
});

const mdtp = { getOrders };

export default connect(mstp,mdtp)(OrdersContainer)