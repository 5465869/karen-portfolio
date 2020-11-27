import React from 'react';

import '../styles/navbar.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
const styles = {
  backgroundColor:'black',
  color:'white',
  textAlign:'center',
  display:'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '5rem'
 // marginBottom: '2rem'

}
const liStyle = {
  listStyleType: 'none',
  paddingLeft: '1rem'

}
const aStyle = {
  color:'white',
   textDecoration: 'none',
   backgroundColor: 'none'
}
const NavBar = () => (
    <header style = {styles}>
      <h1 style = {{marginLeft: '2rem'}}>Karen Spencer</h1>
      <nav>
        <ul style = {{display:'flex',justifyContent:'space-between',marginRight:'2rem'}}>
          <li style = {liStyle} ><a style = {aStyle} href = '/'>Home</a></li>
          <li style = {liStyle}>About</li>
          <li style = {liStyle}>Works</li>
        </ul>
        
      </nav>
    </header>
);

export default NavBar;
