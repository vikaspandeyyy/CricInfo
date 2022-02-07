import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav">
          <h3>CricInfo</h3>
          <ul className="navUl">
            <li className="navlist">Home</li>
            <li className="navlist">About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
