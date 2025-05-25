import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className="flex justify-between items-center p-4 shadow-xl">
    <ul className="flex gap-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </ul>
  </nav>
);

export default Navigation;
