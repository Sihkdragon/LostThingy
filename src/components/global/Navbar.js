import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="brand">LostThingy</h1>
        <ul className="navbar-menu">
          <li>Home</li>
          <li>Usage</li>
          <li>Contact</li>
          <li>FaQ</li>
        </ul>
      </div>
      <button className="btn  absolute top-3 right-10 text-mygreen-1  bg-white hover:bg-slate-100 hover:text-mygreen-2">
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;
