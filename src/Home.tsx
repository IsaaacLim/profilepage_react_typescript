import React from "react";
import "./styles/css/style.css";
import { NavLinks } from "./data/NavLinks";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      <h1>Isaac Lim</h1>
      <p>
        On a mission to becoming a Software Developer, <br />
        with an interest in tasteful designs
      </p>
      <Router>
        <ul>
          {NavLinks.map((x, i) => (
            <li key={i}>
              <Link to={x.path}>
                <span>{x.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Router>
    </div>
  );
};

export default Home;
