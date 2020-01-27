import React, {Component} from "react";
import {getOrderItems} from "../../../redux/actions/actions";
import {connect} from "react-redux";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {CircularProgress, ExpansionPanel} from "@material-ui/core";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import OrderPositionItem from "../orderPositionItem/OrderPositionItem";


class OrderItem extends Component{
    onToggle = (event, expanded) => {
        const { id, items, getOrderItems } = this.props;
        if (expanded && !items) {
            getOrderItems(id);
        }
    };

    render() {
        const {
            docNum, docDate, description, items
        } = this.props;


        return (
            <ExpansionPanel onChange={this.onToggle}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                        {docNum} {docDate} {description}
                    </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List>
                        {
                            items
                                ?items.map(item => <OrderPositionItem key={item.id} item={item} />)
                                : <CircularProgress />
                        }
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

const mapStateToProps = (state, props) => ({
    items: state.orderItems[props.id]
});

const mapDispatchToProps = { getOrderItems };

export default connect(mapStateToProps,mapDispatchToProps)(OrderItem)