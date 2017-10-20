import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to="/" >Home </Link>
      <Link to="/students" >Students</Link>
      <Link to="/studententry">Student Entry</Link>
      <Link to="/campusentry">Campus Entry</Link>
    </div>
  )
}

export default Navbar;
