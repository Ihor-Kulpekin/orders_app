import React from "react";
import PositionItem from "./PositionsItem";


 const ListPositionsOrder = (props)=>{
    return (
      <div>
          {
              props.positions.map((position)=>{
                  return (
                      <PositionItem key={position.id} position={position}/>
                  )
              })
          }
      </div>
  )
};

 export default ListPositionsOrder;