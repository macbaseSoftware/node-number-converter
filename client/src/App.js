import React, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App=()=>{
    
    const [data, setData] = useState(0);

    useEffect( ()=>{
       fetch('/api/getBinary?id=49')
        .then(res => res.json())
       // .then(customers => setData(customers, () => console.log('Customers fetched...', customers)));
       .then(data => setData(data))
    }, []);
  

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Starter</h1>
          <h3>aa;: {JSON.stringify(data)}</h3>
          {data}
        </header>
      </div>
    );
  }


export default App;
