import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to="/" >Home___</Link>
      <Link to="/students" >Students___</Link>
      <Link to="/studententry">Student Entry___</Link>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default Navbar;
