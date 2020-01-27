import React from "react";
import ListItem from "@material-ui/core/ListItem";

const OrderPositionItem = (props) => {
    const {
        item
    } = props;

    return (
        <ListItem>
            {item.name} {item.qty} {item.price} {item.sum}
        </ListItem>
    );
};

export default OrderPositionItem