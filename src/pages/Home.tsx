import React from "react";
import NavSlider from "../components/NavSlider";
import INav from "../interfaces/navList";
import navLists from "../data/navLists";
import Card from "../components/ImgCard";

const about = navLists[1];
const works = navLists[2];
const navListSmall: INav[] = [about, works];

const Home = () => {
  return (
    <div className="home-cont">
      <div className="text">
        <h1>Isaac Lim</h1>
        <p>
          On a mission to becoming a Software Developer, <br />
          with an interest in tasteful designs
        </p>
      </div>
      <div>
        <Card>Hello</Card>
      </div>
      <div className="navbar" id="big">
        <NavSlider navItems={navListSmall} navSize="big">
          Slide.
        </NavSlider>
      </div>
    </div>
  );
};
export default Home;
