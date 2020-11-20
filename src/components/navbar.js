import React from 'react';

import '../styles/navbar.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
const h1Style = {
  textAlign:'center',
  position: 'relative',
  fontSize:'34px',
  fontFamily:'poppins,sans-serif',
  fontWeight:'300'
}
const liStyle = {
  display:'inline-block',
  marginLeft: '38px',
  position: 'relative',
  textAlign: 'center',
  whiteSpace: 'nowrap'

}
const ulStyle = {
  position: 'relative',
  display: 'block',
  textAlign:'center',
  marginBlockStart: '1em',
  marginBlockEnd: '1em',
  marginInlineStart: '1em',
  marginInlineEnd: '0px',
  paddingInlineStart: '40px'
}
const NavBar = () => (
    <header>
      <h1 style = {h1Style}>Karen Spencer</h1>
      <nav>
        <ul style = {ulStyle}>
          <li style = {liStyle}>Home</li>
          <li style = {liStyle}>About</li>
          <li style = {liStyle}>Works</li>
        </ul>
        
      </nav>
    </header>
);

export default NavBar;
