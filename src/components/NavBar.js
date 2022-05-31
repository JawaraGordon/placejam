import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <NavLink exact to="/">
        <button className="nav-btn">
          <h3>Home</h3>
        </button>
      </NavLink>
      <NavLink exact to="/about">
        <button className="nav-btn">
          <h3>About</h3>
        </button>
      </NavLink>
      <NavLink exact to="/login">
        <button className="nav-btn">
          <h3>Sign Up</h3>
        </button>
      </NavLink>
      <NavLink exact to="/courts/new">
        <button className="nav-btn">
          <h3>Add</h3>
        </button>
      </NavLink>
    </div>
  );
}

export default NavBar;
