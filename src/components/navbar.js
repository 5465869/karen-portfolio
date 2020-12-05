import React from 'react';

import '../styles/navbar.css';


const NavBar = () => (
    <header class= 'nav-bar'>
      <h1 style = {{marginLeft: '2rem'}}>Karen Spencer</h1>
      <nav>
        <ul style = {{display:'flex',justifyContent:'space-between',marginRight:'2rem'}}>
          <li className='list'><a class='link' href = '/'>Home</a></li>
          <li className = 'list'>About</li>
          <li className='list'>Works</li>
        </ul>
        
      </nav>
    </header>
);

export default NavBar;
