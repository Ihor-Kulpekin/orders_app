import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPositions} from "../../redux/actions/orderActions";
import ListPositionsOrder from "../components/listPositions/ListPositionsOrder";

class PositionsOrderContainer extends Component{

    componentDidMount() {
        this.props.fetchPositions(this.props.order_id);
    }

    render() {
        return (
            <div>
                <ListPositionsOrder positions={this.props.positions}/>
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    positions:state.positions.positions,
    isOpen:state.isOpen.isOpen
});


export default connect(mapStateToProps,{fetchPositions})(PositionsOrderContainer)