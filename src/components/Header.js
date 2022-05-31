import React from 'react';
import NavBar from './NavBar';
import Weather from './Weather';

function Header() {
  return (
    <div className="header">
      <div id="header-img">
        <img src="https://i.imgur.com/1DCtw8f.png" alt="place-jam header" />
      </div>
      <div>
        <NavBar />
        <br></br>
        <Weather />
      </div>
    </div>
  );
}

export default Header;
