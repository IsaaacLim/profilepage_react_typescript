import React from "react";
import works from "../data/works";
import NavSlider from "../components/NavSlider";
import INav from "../interfaces/navList";
import navLists from "../data/navLists";
import SocialsBar from "../components/SocialsBar";
import Deck from "../components/WorksDeck";
import FadeInDiv from "../components/FadeInDiv";
import PugLife from "../images/pug-life.png";
import isMobile from "../components/isMobile";
import WorksMobileView from "../components/WorksMobileView";

// const navListSmall: INav[] = [navLists[0], navLists[1]]; // home & about
const navListSmall: INav[] = [navLists[0], navLists[3]]; // home & about

const Works = () => {
  const worksWithoutCover = works.slice(1);
  const worksReverse = Array.prototype.slice.call(works).reverse();

  return (
    <>
      {isMobile() ? (
        <WorksMobileView works={worksWithoutCover} />
      ) : (
        <>
          <div className="navbar small" id="works">
            <NavSlider navItems={navListSmall} navSize="small">
              Slide.
            </NavSlider>
          </div>
          <SocialsBar styleType={3} />
          <div className="works-cont">
            <Deck cards={worksReverse} />
            <FadeInDiv>
              <img src={PugLife} alt="Pug life" id="pug-life" />
            </FadeInDiv>
          </div>
        </>
      )}
    </>
  );
};

export default Works;
