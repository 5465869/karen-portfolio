import React from 'react';

import '../styles/navbar.css';


const NavBar = () => (
    <header className= 'nav-bar'>
      <h1 style = {{marginLeft: '2rem'}}>Karen Spencer</h1>
      <nav>
        <ul style = {{display:'flex',justifyContent:'space-between',marginRight:'2rem'}}>
          <li className='list'><a className='link' href = '/'>Home</a></li>
          <li className = 'list'><a className='link' href = '/'>About</a></li>
          <li className='list'><a className='link' href = '/'>Works</a></li>
        </ul>
        
      </nav>
    </header>
);

export default NavBar;
