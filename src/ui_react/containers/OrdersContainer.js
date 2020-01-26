import React, {Component} from "react";
import {fetchOrders} from "../../redux/actions/orderActions";
import {connect} from "react-redux";
import ListOrders from "../components/listOrders/ListOrders";
import {handleChangeVisibility} from "../../redux/actions/visibilityPositionsAction";

class OrdersContainer extends Component{

    componentDidMount() {
        this.props.fetchOrders();
    }

    render() {
        return(
            <div>
                <ListOrders orders = {this.props.orders} isOpen = {this.props.handleChangeVisibility.bind(this)}/>
            </div>
        )
    }

}

const mapStateToProps = (state)=>({
    orders:state.orders.orders,
    isOpen:state.isOpen.isOpen
});



export default connect(mapStateToProps,{fetchOrders,handleChangeVisibility})(OrdersContainer);
