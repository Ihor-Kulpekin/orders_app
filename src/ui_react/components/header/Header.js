import React from "react";
import header from "./header.module.css";

const Header = (props)=>{

    const  handlerChange = ()=>{};
  return(
      <div className={header}>
          <p>Orders</p>
          <p>Filter:</p>
          <input value="Filter" onChange={handlerChange}/>
      </div>
  )
};

export default Header;