import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Hotel Management</h2>

      <ul className="nav-links">
        <li><Link to="/add-customer">Add Customer</Link></li>
        <li><Link to="/add-room">Add Room</Link></li>
        <li><Link to="/customers">View Customer List</Link></li>
        <li><Link to="/rooms">View Room List</Link></li>
        <li><Link to="/edit-room">Edit Room</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
