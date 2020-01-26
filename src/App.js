import React from 'react';
import './App.css';
import Header from "./ui_react/components/header/Header";
import OrdersContainer from "./ui_react/containers/OrdersContainer";

const App = ()=>{
      return (
        <div className="App">
            <Header/>
            <OrdersContainer/>
        </div>
    );
};

export default App;
