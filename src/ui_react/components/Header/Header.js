import React from 'react';

const Header = (props) => {
  const {onFilterChange} = props;
  return (
    <p>
      Заказы Filter:<input style={{width: 386}} onChange={onFilterChange}/>
    </p>
  )
};

export default Header;