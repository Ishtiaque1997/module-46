import React from 'react';
import './Header.css';
const Header = () => {
 return (
  <div>
   <nav className='menu'>
    <a href="/home">Home</a>
    <a href="/countries">Countries</a>
    <a href="/home">Home</a>
    <a href="/about-us">About us</a>
   </nav>
   <p className='subtitle'>Visit us</p>

  </div>
 );
};

export default Header;
