import React from "react";
import { useSpring, animated, config } from "@react-spring/web";
import NavSlider from "../components/NavSlider";
import INav from "../interfaces/navList";
import navLists from "../data/navLists";
import Card from "../components/ImgCard";

const about = navLists[1];
const works = navLists[2];
const navListSmall: INav[] = [about, works];

const Home = () => {
  const styles = useSpring({
    loop: {
      reverse: true,
    },
    config: config.molasses,
    to: [
      { opacity: 1, color: `#cffffe` },
      { opacity: 1, color: `#f9f7d9` },
      { opacity: 1, color: `#fce2ce` },
      { opacity: 1, color: `#ffc1f3` },
    ],
    from: { opacity: 0, color: `white` },
  });

  return (
    <div className="home-cont">
      <div className="section1">
        <div className="text">
          <div className="name-cont">
            <h1 id="林">林</h1>
            <animated.div style={styles} className="mid">
              <h1>Isaac</h1>
              <h1 id="敬佳">敬佳</h1>
            </animated.div>
            <h1 className="right" id="lim">
              Lim
            </h1>
          </div>
          <animated.div style={styles}>
            On a mission to becoming a Software Developer, <br />
            with an interest in tasteful designs
          </animated.div>
        </div>
        <div className="navbar" id="big">
          <NavSlider navItems={navListSmall} navSize="big">
            Slide.
          </NavSlider>
        </div>
      </div>
      <div>
        <Card>
          <img src="../images/forkey.jpg" alt="sample pic" />
          <p>Text</p>
        </Card>
      </div>
    </div>
  );
};
export default Home;
