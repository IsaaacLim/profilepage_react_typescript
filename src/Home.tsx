import React from "react";
import "./styles/css/style.css";
import { Parallax, Background } from "react-parallax";
import background from "./images/pear-dessert.jpg";

const Home = () => {
  return (
    <div>
      <Parallax strength={400}>
        <Background className="bg">
          <img src={background} alt="pear dessert" />
        </Background>
        <div className="main">
          <h1>Isaac Lim</h1>
          <div>
            <p>On a mission to becoming a Software Developer,</p>
            <p>with an interest in tasteful designs</p>
          </div>
        </div>
      </Parallax>
      <div style={{ height: "100vh" }}>something something</div>
    </div>
  );
};

export default Home;
