import React from "react";
import NavSlider from "../components/NavSlider";
import INav from "../interfaces/navList";
import navLists from "../data/navLists";
import Card from "../components/ImgCard";
import SocialsBar from "../components/SocialsBar";
import ProfilePic from "../images/profile-pic.jpg";

const navListSmall: INav[] = [navLists[1], navLists[2]]; // about & works

const Home = () => {
  return (
    <div className="home-cont">
      <SocialsBar styleType={1} />
      <div className="sec-left">
        <div className="text">
          <div className="name-cont">
            <h1 className="right" id="lim">
              Isaac Lim
            </h1>
          </div>
          <p>
            On a mission to becoming a{" "}
            <span id="highlight"> Software Developer</span>,<br />
            with an interest in tasteful designs.
          </p>
        </div>
        <div className="navbar" id="big">
          <NavSlider navItems={navListSmall} navSize="big">
            Slide.
          </NavSlider>
        </div>
      </div>
      <div className="sec-right">
        <Card image={ProfilePic}></Card>
      </div>
    </div>
  );
};
export default Home;
