import React from "react";
import ListItem from "@material-ui/core/ListItem";
import orderPositionItem from "./orderPositionItem.module.css";

const OrderPositionItem = (props) => {
    const {
        item
    } = props;

    return (
        <ListItem  className={orderPositionItem.listItem}>
            {item.name} {item.qty} {item.price} {item.sum}
        </ListItem>
    );
};

export default OrderPositionItem