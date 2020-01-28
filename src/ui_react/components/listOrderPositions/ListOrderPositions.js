import React, {useContext} from "react";
import OrderPositionItem from "./orderPositionItem/OrderPositionItem";
import List from "@material-ui/core/List";
import OrderPositionsContext from "../../context/OrderPositionsContext";


const ListOrderPositions = ()=>{
    const {positions} = useContext(OrderPositionsContext);
    return(
      <List>
          {
              positions
                  ?positions.map(position => <OrderPositionItem key={position.id} item={position}/>)
                  :<p>The List is Empty</p>
          }
      </List>
  )
};

export default ListOrderPositions;