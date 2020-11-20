import React from 'react';

import '../styles/navbar.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
const h1Style = {
  textAlign:'center'
}
const NavBar = () => (
    <header>
      <h1 style = {h1Style}>Karen Spencer</h1>
    </header>
);

export default NavBar;
