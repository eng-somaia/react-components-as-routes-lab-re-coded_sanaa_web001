import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact />
      <NavLink to="/movies" exact />
      <NavLink to="/directors" exact />
      <NavLink to="/actors" exact />
    </div>
  );
};

export default NavBar;
