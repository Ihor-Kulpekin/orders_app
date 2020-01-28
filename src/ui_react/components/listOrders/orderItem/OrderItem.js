import React from "react";
import {ExpansionPanel} from "@material-ui/core";
import orderItem from "./orderItem.module.css";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ListOrderPositions from "../../listOrderPositions/ListOrderPositions";


const OrderItem = (props)=>{
    const {docNum, docDate, description,onToggle} = props;
    return (
        <ExpansionPanel  onChange={onToggle} className={orderItem.expansionPanel}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                {docNum} {docDate} {description}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                    <ListOrderPositions/>
            </ExpansionPanelDetails>
        </ExpansionPanel >
  )
};



export default OrderItem