import React from "react";

const Header= (props)=>{
    const {onFilterChange} = props;
    return (
        <div className="header">
            <p>
              Заказы Filter:<input style={{width:386}} onChange={onFilterChange}/>
            </p>
        </div>
    )
};

export default Header;