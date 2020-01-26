import React from "react";


const PositionItem = (props)=>{
  return (
      <div>
          <ul>
              <li>
                  {props.position.name}
              </li>
          </ul>
      </div>
  )
};

export default PositionItem