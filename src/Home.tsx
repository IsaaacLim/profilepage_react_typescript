import React from "react";
import "./styles/css/style.css";
import { HomeInfo } from "./components/HomeInfo";

const Home = () => {
  return (
    <div>
      <div className="main">
        <h1>Isaac Lim</h1>
        <p>
          On a mission to becoming a Software Developer, <br />
          with an interest in tasteful designs
        </p>
      </div>
      <HomeInfo />
    </div>
  );
};

export default Home;
