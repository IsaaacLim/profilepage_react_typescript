import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div id="navbar">
      <Link to="/about">About</Link>
      <Link to="/works">Works</Link>
    </div>
  );
};

export default NavBar;
