import React from "react";
import { useSpring, animated } from "@react-spring/web";
import NavSlider from "../components/NavSlider";
import INav from "../interfaces/navList";
import navLists from "../data/navLists";
import Card from "../components/ImgCard";
import SocialsBar from "../components/SocialsBar";
import ProfilePic from "../images/profile-pic.jpg";

const navListSmall: INav[] = [navLists[1], navLists[2]]; // about & works

const Home = () => {
  const colorful = useSpring({
    loop: true,
    config: { duration: 5000 },
    to: [
      { opacity: 1, color: `#cffffe` },
      { opacity: 1, color: `#f9f7d9` },
      { opacity: 1, color: `#fce2ce` },
      { opacity: 1, color: `#ffc1f3` },
      { opacity: 1, color: `#ffffff` },
    ],
    from: { opacity: 1, color: `#ffffff` },
  });

  return (
    <div className="home-cont">
      <SocialsBar styleType={1} />
      <div className="sec-left">
        <div className="text">
          <div className="name-cont">
            {/* <animated.h1 style={colorful} id="林"> */}
            {/* <animated.h1 id="林">林</animated.h1>
            <div className="mid">
              <animated.h1 id="isaac">Isaac</animated.h1>
              <animated.h1 id="敬佳">敬佳</animated.h1>
            </div> */}
            <animated.h1 className="right" id="lim">
              Isaac Lim
            </animated.h1>
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
