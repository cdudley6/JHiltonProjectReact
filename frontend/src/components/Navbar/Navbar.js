import React from 'react';
import '//Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/app">Home</Link>
        </li>
        <li>
          <Link to="/blah">Movies</Link>
        </li>
        <li>
          <Link to="/pod">BaconSale</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
