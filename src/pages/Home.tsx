import React from "react";
import NavSlider from "../layout/Navbar/NavSlider";
import INav from "../interfaces/navList";
import navLists from "../data/navLists";
import ImgCard from "../layout/ImgCard";
import SocialsBar from "../layout/SocialsBar";
import ProfilePic from "../images/profile-pic.jpg";
import FadeInDiv from "../components/FadeInDiv";
import isMobileView from "../lib/isMobileView";

const navListSmall: INav[] = [navLists[1], navLists[2]]; // about & works

const Home = () => {
  const isMobile = isMobileView();

  return (
    <div className="home-cont">
      {!isMobile && <SocialsBar styleType={1} />}
      <div className="sec-left">
        <FadeInDiv className="text">
          {/* update this */}
          <div className="name-cont">
            <h1>Isaac Lim</h1>
          </div>
          <p>
            Master's in CS &<span id="highlight"> fullstack Developer</span>
          </p>
          <p>Experienced in software houses and fintech</p>
          <p>Passionate about problem-solving and design</p>
        </FadeInDiv>
        <div className="navbar" id="big">
          <NavSlider navItems={navListSmall} navSize="big">
            Slide.
          </NavSlider>
        </div>
        {isMobile && <SocialsBar styleType={4} />}
      </div>
      <ProfileImage />
    </div>
  );
};

const ProfileImage = () => {
  const isMobile = isMobileView();

  if (isMobile) {
    return (
      <FadeInDiv className="sec-right" yFrom="0">
        <div className="img-card-cont" id="mobile">
          <div
            className="img-card"
            style={{
              backgroundImage: `url(${ProfilePic})`,
            }}
          />
        </div>
      </FadeInDiv>
    );
  }
  return (
    <FadeInDiv className="sec-right" yFrom="0" scaleFrom={1.2} delay={200}>
      <ImgCard image={ProfilePic} />
    </FadeInDiv>
  );
};

export default Home;
