import React from "react";
import works from "../data/works";
import NavSlider from "../components/Navbar/NavSlider";
import INav from "../interfaces/navList";
import navLists from "../data/navLists";
import SocialsBar from "../components/SocialsBar";
import WorksDeck from "../components/Works/WorksDeck";
import FadeInDiv from "../components/FadeInDiv";
import PugLife from "../images/pug-life.png";
import isMobile from "../lib/isMobile";
import WorksGrid from "../components/Works/WorksGrid";

const navListSmall: INav[] = [navLists[0], navLists[1]]; // home & about

/**
 * Todo: Refactor mobile view such that NavPopup is rendered at this level.
 *        Current issue is with the modal
 */
const Works = () => {
  const worksWithoutCover = works.slice(1);
  const worksReverse = Array.prototype.slice.call(works).reverse();

  return (
    <>
      {isMobile() ? (
        <>
          {/* <NavPopup bgColor="steel"> */}
          <WorksGrid works={worksWithoutCover} navItems={navListSmall} />
          {/* </NavPopup> */}
        </>
      ) : (
        <>
          <div className="navbar small" id="works">
            <NavSlider navItems={navListSmall} navSize="small">
              Slide.
            </NavSlider>
          </div>
          <SocialsBar styleType={3} />
          <div className="works-cont">
            <WorksDeck works={worksReverse} />
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
