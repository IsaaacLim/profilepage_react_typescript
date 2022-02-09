import React from "react";
import "./styles/css/style.css";
import { Parallax, Background } from "react-parallax";
import background from "./images/pear-dessert.jpg";
import { HomeInfo } from "./components/HomeInfo";

const Home = () => {
  return (
    <div>
      <Parallax strength={400}>
        <Background className="bg">
          <img src={background} alt="pear dessert" />
        </Background>
        <div className="main">
          <h1>Isaac Lim</h1>
          <p>
            On a mission to becoming a Software Developer, <br />
            with an interest in tasteful designs
          </p>
        </div>
      </Parallax>
      <HomeInfo />
    </div>
  );
};

export default Home;
