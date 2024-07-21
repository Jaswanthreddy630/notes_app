import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/archived">Archived</Link></li>
        <li><Link to="/bin">Bin</Link></li>
      </ul>
      <h1>NoteIT</h1>
    </nav>
  );
};

export default Navbar;
