import React, { Component, useEffect, useState } from 'react';
import Calculations from './components/calculations';
import Header from './components/header';
import logo from './logo.svg';
import './App.css';

const App=()=>{

    return (
      <div className="App">
      <Header></Header>
        <Calculations></Calculations>
      </div>
    );
  }


export default App;
