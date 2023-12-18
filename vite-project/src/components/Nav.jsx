import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="nav">
    
    <div className="brand">
      <Link to="/" className="logo">Kalvian <span className="heart">❤️</span></Link>
    </div>
    <div className="menu">
      <ul className="nav">
        <NavItem to="/contacts">Contact</NavItem>
        <NavItem to="/about" className="link-about">About Us</NavItem>
      </ul>
    </div>
  </nav>
);
const NavItem = ({ to, className, children }) => (
  <li className="item">
    <Link to={to} className={`link ${className || ""}`}>{children}</Link>
  </li>
);

export default Nav;