import React from 'react';

import './App.css';
import OrdersContainer from './ui_react/containers/OrdersContainer';
import Header from "./ui_react/components/Header/Header";

const App = ()=>{
      return (
        <div>
            <Header />
            <OrdersContainer/>
        </div>
    );
};

export default App;
