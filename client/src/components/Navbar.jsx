import React from "react";
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand fs-1" href="ks">LOGO</a>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link to='/' className="nav-link fs-20 active" aria-current="page" href="logo">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/news' className="nav-link fs-20" aria-current='page' href='logo'>News</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
