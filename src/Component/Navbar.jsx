import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-logo">
          MyPortfolio
        </NavLink>
      </div>
      <div className="navbar-links">
        <NavLink to="/" exact activeClassName="active" className="navbar-link">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active" className="navbar-link">
          About
        </NavLink>
        <NavLink to="/projects" activeClassName="active" className="navbar-link">
          Projects
        </NavLink>
        <NavLink to="/contact" activeClassName="active" className="navbar-link">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
