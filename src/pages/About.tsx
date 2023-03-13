import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import FadeInDiv from "../components/FadeInDiv";
import NavSlider from "../layout/Navbar/NavSlider";
import INav from "../interfaces/navList";
import navLists from "../data/navLists";
import SocialsBar from "../layout/SocialsBar";
import HotAirBalloon from "../images/hot-air-balloon.svg";
import Mountains from "../images/mountains.svg";
import WorldTree from "../images/world-tree.svg";
import HourGlass from "../images/hourglass.svg";
import dots from "../data/coloredDots";
import isMobileView from "../lib/isMobileView";

/**
 * --- PAGE STRUCTURE ---
 * Sectioned into 3 pages (offset 0, 1, 2)
 * Each page has a Title, Description, & Decoration section
 * z-index:
 *  Mainly for the Title section to be at the front for on-click event
 *  - Title: >= 20
 *  - Description: >= 10 && < 20
 *  - Decoration: >= 0 && < 10
 * Title sections positioning uses PADDING to allow on-click event to register throughout the whole page
 *
 * --- PARALLAX LIB VARIABLES ---
 * @param offset: div end positioning
 * @param speed: animation speed (-ve for up-down, +ve for down up motion)
 *                may be used for div starting position
 *
 * --- CSS STRUCTURE ---
 * Modular styling for font size, color & div container size
 * Inline styling for positioning
 */
const navListSmall: INav[] = [navLists[0], navLists[2]]; // home & works
const spaceLeft = "21%";

const About = () => {
  const parallax = useRef<IParallax>(null!);
  const isMobile = isMobileView();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
      className="about-cont"
    >
      <Parallax ref={parallax} pages={3}>
        {/******************* Sticky Nav & Social Bar ************************/}
        {!isMobile ? (
          <ParallaxLayer
            sticky={{ start: 0, end: 2 }}
            style={{ width: "5", height: "5" }} //prevent layer from overlapping other pages
            className="nav-sticky"
          >
            <div className="navbar small" id="about">
              <NavSlider navItems={navListSmall} navSize="small">
                Slide.
              </NavSlider>
            </div>
            <SocialsBar styleType={2} />
          </ParallaxLayer>
        ) : (
          <></>
        )}
        {/******************* Background *************************************/}
        <ParallaxLayer // Page 1
          offset={0}
          speed={0}
          style={{ backgroundColor: "#FFFFFF" }}
        />
        <ParallaxLayer // Page 2
          offset={1}
          speed={1}
          style={{ backgroundColor: "#f9f7d98f" }}
        />
        <ParallaxLayer // Page 3
          offset={2}
          speed={0}
          style={{ backgroundColor: "#FFFFFF" }}
        />
        {/*********************** Page 1 *************************************/}
        {/* --- Title --- */}
        <ParallaxLayer
          offset={0}
          speed={-0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            paddingLeft: spaceLeft,
            paddingTop: `${isMobile ? "20%" : "8%"}`,
            zIndex: "20",
          }}
        >
          <FadeInDiv>
            <h2
              style={{
                fontSize: `${isMobile ? "26px" : "4.5vw"}`,
                maxWidth: "62%",
              }}
            >
              Making my way into the software development industry.
            </h2>
          </FadeInDiv>
        </ParallaxLayer>
        {/* --- Description --- */}
        <ParallaxLayer
          offset={0.45}
          speed={0.1}
          style={{ left: `${isMobile ? "35%" : "50%"}`, zIndex: "10" }}
        >
          <FadeInDiv yFrom="20px">
            <div style={{ maxWidth: `${isMobile ? "50%" : "28%"}` }}>
              <p>
                My name is Isaac and I'm a Fullstack Developer. While I'm still
                gathering more experiences into my stash, I'm proud of my skills
                in React, TypeScript, NodeJs, CSS, C &amp; C++
              </p>
              <p id="note">Continue scrolling to know more about me</p>
            </div>
          </FadeInDiv>
        </ParallaxLayer>
        {/* --- Decor --- */}
        <ParallaxLayer offset={0.73} speed={-0.18}>
          <Dot
            color="tea"
            width={`${isMobile ? "6.4%" : "1.6%"}`}
            left={`${isMobile ? "80%" : "72%"}`}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.05} speed={-0.23}>
          <Dot color="red" width={`${isMobile ? "8%" : "2%"}`} left="10%" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.26} speed={-0.3}>
          <Dot
            color="skin"
            width={`${isMobile ? "8.8%" : "2.2%"}`}
            left="48%"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.45} speed={0.4}>
          <Dot
            color="teal"
            width={`${isMobile ? "10.4%" : "2.6%"}`}
            left="95%"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={0.6}>
          <Dot
            color="grass"
            width={`${isMobile ? "6.4%" : "1.6%"}`}
            left="12%"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <Dot
            color="butter"
            width={`${isMobile ? "40%" : "10%"}`}
            top="-5%"
            left="85%"
          />
        </ParallaxLayer>
        {/* - from current to next page - */}
        <ParallaxLayer offset={1.05} speed={-0.5} style={{ zIndex: "9" }}>
          <FadeInDiv yFrom="0" scaleFrom={0.8} delay={100}>
            <img
              src={HotAirBalloon}
              style={{
                width: `${isMobile ? "45%" : "25%"}`,
                marginLeft: `${isMobile ? "2%" : "22%"}`,
              }}
              alt="Hot air balloon"
            />
          </FadeInDiv>
        </ParallaxLayer>
        {/*********************** Page 2 *************************************/}
        {/* --- Title --- */}
        <ParallaxLayer
          offset={1}
          speed={0.2}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            paddingLeft: `${isMobile ? "42%" : "51%"}`,
            paddingTop: `${isMobile ? "20%" : "8%"}`,
            zIndex: "21",
          }}
        >
          <h2>
            Chemical engineer,
            <br />
            Artist,
            <br />
            Programmer
          </h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={isMobile ? 1.4 : 1.45}
          speed={0.15}
          style={{
            left: `${isMobile ? "12%" : spaceLeft}`,
            maxWidth: "60%",
            zIndex: "20",
          }}
        >
          <h2>
            Ecole 42 Cadet,
            <br />
            Cradle Fund Award Winner
          </h2>
        </ParallaxLayer>
        {/* --- Description --- */}
        <ParallaxLayer
          offset={isMobile ? 1.65 : 1.7}
          speed={0.1}
          style={{
            left: `${isMobile ? "30%" : "32%"}`,
            maxWidth: `${isMobile ? "60%" : "32%"}`,
            zIndex: "10",
          }}
        >
          <div>
            <p>
              My talent lies within my ability to think critically.
              <br />
              My passion is in creating aesthetically pleasing work.
            </p>
            <p id="note">Don't forget to check out my 'Works'</p>
          </div>
        </ParallaxLayer>
        {/* --- Decor --- */}
        <ParallaxLayer offset={1.68} speed={0.8} style={{ zIndex: "2" }}>
          <img
            src={WorldTree}
            style={{
              width: `${isMobile ? "27%" : "15%"}`,
              marginLeft: `${isMobile ? "0%" : "15%"}`,
            }}
            alt="Tree on globe"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={isMobile ? 1.45 : 1.4}
          speed={-0.1}
          style={{ zIndex: "1" }}
        >
          <img
            src={Mountains}
            style={{
              width: `${isMobile ? "40%" : "25%"}`,
              marginLeft: "61%",
              opacity: "0.9",
            }}
            alt="Mountains"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.75} speed={0.15}>
          <Dot color="brown" width={`${isMobile ? "4%" : "1%"}`} left="30%" />
        </ParallaxLayer>
        <ParallaxLayer offset={1.05} speed={0.18}>
          <Dot
            color="blue"
            width={`${isMobile ? "6.4%" : "1.6%"}`}
            left="65%"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.3} speed={0.45}>
          <Dot color="peach" width={`${isMobile ? "12%" : "3%"}`} left="11%" />
        </ParallaxLayer>
        <ParallaxLayer offset={1.45} speed={-0.5}>
          <Dot
            color="grey"
            width={`${isMobile ? "14.8%" : "3.7%"}`}
            left="92%"
          />
        </ParallaxLayer>
        {/* - from current to next page - */}
        <ParallaxLayer offset={1.9} speed={-0.23}>
          <Dot color="grass" width={`${isMobile ? "8%" : "2%"}`} left="60%" />
        </ParallaxLayer>
        {/*********************** Page 3 *************************************/}
        {/* --- Title --- */}
        <ParallaxLayer
          offset={2}
          speed={-0.1}
          style={{
            paddingLeft: `${isMobile ? "20%" : "52%"}`,
            paddingTop: `${isMobile ? "30%" : "12%"}`,
            zIndex: "20",
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <h2 style={{ maxWidth: `${isMobile ? "50%" : "25%"}` }}>
            Facts my friends know about me
          </h2>
        </ParallaxLayer>
        {/* --- Description --- */}
        <ParallaxLayer
          offset={2.5}
          speed={-0}
          style={{
            left: `${isMobile ? "35%" : "58%"}`,
            maxWidth: `${isMobile ? "60%" : "25%"}`,
            zIndex: "10",
          }}
        >
          <p>
            Badminton, volleyball, taekwondo, skateboarding, snowboarding, rock
            climbing; hand crafting, hair cutting;
            <br />
            roller coasters, sky diving;
            <br />
            &amp; pet pug called PuiPui (a.k.a Fatty)
          </p>
          <p id="note">If I'm reborn, let me be a gymnast. Thx</p>
        </ParallaxLayer>
        {/* --- Decor --- */}
        <ParallaxLayer
          offset={2}
          speed={0.2}
          style={{
            display: "flex",
            alignItems: "center",
            left: `${isMobile ? "4%" : "19%"}`,
            zIndex: "1",
            opacity: `${isMobile && 0.5}`,
          }}
        >
          <img
            src={HourGlass}
            alt="Hourglass"
            style={{ width: `${isMobile ? "50%" : "30%"}` }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.66} speed={0.15}>
          <Dot color="maroon" width={`${isMobile ? "4%" : "1%"}`} left="75%" />
        </ParallaxLayer>
        <ParallaxLayer offset={2.4} speed={-0.17}>
          <Dot
            color="teal"
            width={`${isMobile ? "5.2%" : "1.3%"}`}
            left="91%"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={0.3}>
          <Dot
            color="navy"
            width={`${isMobile ? "10.4%" : "2.6%"}`}
            left="5%"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.95} speed={-0.55}>
          <Dot
            color="red"
            width={`${isMobile ? "17.2%" : "4.3%"}`}
            left="50%"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.05} speed={1}>
          <Dot
            color="butter"
            width={`${isMobile ? "40%" : "10%"}`}
            top="-10%"
            left="85%"
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

/**
 * Helper function
 * @returns circle dot images
 */
const Dot: React.FC<{
  color: string;
  width?: string;
  top?: string;
  left?: string;
}> = ({ color = "a", width = "2%", top = "0%", left = "0%" }) => {
  for (var i = 0; i < dots.length; i++) {
    if (color === dots[i].color)
      return (
        <img
          src={dots[i].img}
          alt={dots[i].alt}
          style={{ position: "absolute", width: width, top: top, left: left }}
        />
      );
  }
  return <div>No such color dot</div>;
};

export default About;
