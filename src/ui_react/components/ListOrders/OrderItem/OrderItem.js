import React, {useContext} from 'react';

import {ExpansionPanel} from '@material-ui/core';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import orderItem from './OrderItem.module.css';
import ListOrderPositions from '../../ListOrderPositions/ListOrderPositions';
import OrderPositionsContext from '../../../context/OrderPositionsContext';


const OrderItem = () => {
  const context = useContext(OrderPositionsContext);
  const {docNum, docDate, description} = context.props;
  return (
    <ExpansionPanel onChange={context.onToggle} className={orderItem.expansionPanel}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
        {docNum} {docDate} {description}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <ListOrderPositions/>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
};


export default OrderItem