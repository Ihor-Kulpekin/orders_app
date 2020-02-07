import React from 'react';
import PropTypes from 'prop-types';

import {ExpansionPanel} from '@material-ui/core';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import makeStyles from '@material-ui/core/styles/makeStyles';

import ListOrderPositions from '../../ListOrderPositions/ListOrderPositions';

const useStyles = makeStyles(() => ({
  typography: {
    '&:hover': {
      background: "#f5fcf4",
    }
  }
}));

const OrderItem = (props) => {
  const {order,onToggle,positions} = props;
  const classes = useStyles();
  return (
    <ExpansionPanel onChange={onToggle}>
      <Typography className={classes.typography} >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
          {order.docNum} {order.docDate} {order.description}
        </ExpansionPanelSummary>
      </Typography>
      <ExpansionPanelDetails>
        <List>
          <ListOrderPositions positions={positions}/>
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
};

OrderItem.propTypes = {
  order:PropTypes.object.isRequired,
  onToggle:PropTypes.func.isRequired,
};

export default OrderItem