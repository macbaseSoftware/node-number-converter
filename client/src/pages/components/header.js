import React, { Component, useEffect, useState } from 'react';
import {Container, Alert } from 'reactstrap';

const Header = () => {


    return (
      <Container className="headerContainer text-center">
          <h2 className="headerText">TEXT to binary Converter</h2>
          <Alert color="green">Convert Text to binary</Alert>
       </Container> 
      
    );
  }


export default Header;
