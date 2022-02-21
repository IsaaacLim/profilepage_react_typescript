import React from "react";
import WorksDone from "../data/works";
import NavSlider from "../components/NavSlider";
import INav from "../interfaces/navList";
import navLists from "../data/navLists";
import SocialsBar from "../components/SocialsBar";
import Deck from "../components/WorksDeck";
import FadeIn from "../components/FadeIn";
import PugLife from "../images/pug-life.png";

const navListSmall: INav[] = [navLists[0], navLists[1]]; // home & about

const Works = () => {
  return (
    <div>
      <div className="works-cont">
        <div className="navbar" id="small">
          <NavSlider navItems={navListSmall} navSize="small">
            Slide.
          </NavSlider>
        </div>
        <SocialsBar styleType={3} />
        <Deck cards={WorksDone} />
        <div>
          <FadeIn>
            <img src={PugLife} alt="Pug life" id="pug-life" />
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Works;
