import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to="/" >Home___</Link>
      <Link to="/students" >Students___</Link>
      <Link to="/studententry">Student Entry___</Link>
      <Link to="/login">Login</Link>
      {
        logStatus &&
        <Link to="/">Logout</Link>
        // see if link tag can redirect and invoke a function
        // bring state here and change log and admin status
        // redirect to home page
      }
    </div>
  )
}

export default Navbar;
