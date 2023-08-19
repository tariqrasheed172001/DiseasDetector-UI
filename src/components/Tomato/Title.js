import React from 'react';
import './title.css'

const Navbar = () => {
  return (
    <nav className='navT'>
      <ul className='ulT'>
        <li className='liT'><a className='aT' href="/tomatoPrediction">Tomato Disease Classification</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
