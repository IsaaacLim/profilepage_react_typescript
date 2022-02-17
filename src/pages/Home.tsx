import React from "react";
import navLists from "../data/navLists";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      <h1>Isaac Lim</h1>
      <p>
        On a mission to becoming a Software Developer, <br />
        with an interest in tasteful designs
      </p>
      <nav>
        <ul>
          {navLists.map((routes, index) => (
            <li key={index}>
              <Link to={routes.path}>
                <span>{routes.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Home;
