import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import FadeInDiv from "../components/FadeInDiv";
import NavSlider from "../components/NavSlider";
import INav from "../interfaces/navList";
import navLists from "../data/navLists";
import SocialsBar from "../components/SocialsBar";
import HotAirBalloon from "../images/hot-air-balloon.svg";
import Mountains from "../images/mountains.svg";
import WorldTree from "../images/world-tree.svg";
import HourGlass from "../images/hourglass.svg";
import dots from "../data/coloredDots";

/**
 * @param navListSmall: navLists with only 2 items. Props for NavSlider
 *
 * --- PAGE STRUCTURE ---
 * Sectioned into 3 pages (offset 0, 1, 2)
 * Each page has a Title, Description, & Decoration section
 * z-index:
 *  Mainly for the Title section to be at the front for on-click event
 *  - Title: >= 20
 *  - Description: >= 10 && < 20
 *  - Decoration: >= 0 && < 10
 * Title sections positioning uses PADDING to allow on-click event to register throughout the whole page
 * @function Dot: used to give circle dot images
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

export default function About() {
  const parallax = useRef<IParallax>(null!);
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
            paddingTop: "8%",
            zIndex: "20",
          }}
        >
          <FadeInDiv>
            <h2 style={{ fontSize: "4.5vw", maxWidth: "62%" }}>
              Making my way into the software development industry.
            </h2>
          </FadeInDiv>
        </ParallaxLayer>
        {/* --- Description --- */}
        <ParallaxLayer
          offset={0.45}
          speed={0.1}
          style={{ left: "50%", zIndex: "10" }}
        >
          <FadeInDiv yFrom="20px">
            <div style={{ maxWidth: "28%" }}>
              <p>
                My name is Isaac and I'm a Software Developer. While I'm still
                gathering more experiences into my stash, I'm proud of my skills
                in C, C++, HTML, CSS &amp; JavaScript
              </p>
              <p id="note">Continue scrolling to know more about me</p>
            </div>
          </FadeInDiv>
        </ParallaxLayer>
        {/* --- Decor --- */}
        <ParallaxLayer offset={0.73} speed={-0.18}>
          <Dot color="tea" width="1.6%" left="72%" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.05} speed={-0.23}>
          <Dot color="red" width="2%" left="10%" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.26} speed={-0.3}>
          <Dot color="skin" width="2.2%" left="48%" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.45} speed={0.4}>
          <Dot color="teal" width="2.6%" left="95%" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={0.6}>
          <Dot color="grass" width="5%" left="12%" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <Dot color="butter" width="10%" top="-5%" left="85%" />
        </ParallaxLayer>
        {/* - from current to next page - */}
        <ParallaxLayer offset={1.05} speed={-0.5} style={{ zIndex: "9" }}>
          <FadeInDiv yFrom="0" scaleFrom={0.8} delay={100}>
            <img
              src={HotAirBalloon}
              style={{ width: "25%", marginLeft: "22%" }}
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
            paddingLeft: "51%",
            paddingTop: "8%",
            zIndex: "21",
          }}
        >
          <h2>
            Chemical engineer,
            <br />
            Artist,
            <br />
            Millennial
          </h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.45}
          speed={0.15}
          style={{ left: spaceLeft, maxWidth: "40%", zIndex: "20" }}
        >
          <h2>Something tells me I'm on the right path.</h2>
        </ParallaxLayer>
        {/* --- Description --- */}
        <ParallaxLayer
          offset={1.7}
          speed={0.1}
          style={{ left: "32%", maxWidth: "32%", zIndex: "10" }}
        >
          <div>
            <p>
              My talent lies within my ability to think critically.
              <br />
              My passion is in creating aesthetically pleasing work. Technology
              sector? Yes please!
            </p>
            <p id="note">Don't forget to check out my 'Works'</p>
          </div>
        </ParallaxLayer>
        {/* --- Decor --- */}
        <ParallaxLayer offset={1.68} speed={0.8} style={{ zIndex: "2" }}>
          <img
            src={WorldTree}
            style={{ width: "15%", marginLeft: "15%" }}
            alt="Tree on globe"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.4} speed={-0.1} style={{ zIndex: "1" }}>
          <img
            src={Mountains}
            style={{ width: "25vw", marginLeft: "61%", opacity: "0.9" }}
            alt="Mountains"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.75} speed={0.15}>
          <Dot color="brown" width="1%" left="30%" />
        </ParallaxLayer>
        <ParallaxLayer offset={1.05} speed={0.18}>
          <Dot color="blue" width="1.6%" left="65%" />
        </ParallaxLayer>
        <ParallaxLayer offset={1.3} speed={0.45}>
          <Dot color="peach" width="3%" left="11%" />
        </ParallaxLayer>
        <ParallaxLayer offset={1.45} speed={-0.5}>
          <Dot color="grey" width="3.7%" left="92%" />
        </ParallaxLayer>
        {/* - from current to next page - */}
        <ParallaxLayer offset={1.9} speed={-0.23}>
          <Dot color="grass" width="2%" left="60%" />
        </ParallaxLayer>
        {/*********************** Page 3 *************************************/}
        {/* --- Title --- */}
        <ParallaxLayer
          offset={2}
          speed={-0.1}
          style={{
            paddingLeft: "52%",
            paddingTop: "12%",
            zIndex: "20",
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <h2 style={{ maxWidth: "25%" }}>Facts my friends know about me</h2>
        </ParallaxLayer>
        {/* --- Description --- */}
        <ParallaxLayer
          offset={2.5}
          speed={-0}
          style={{ left: "58%", maxWidth: "25%", zIndex: "10" }}
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
            left: "19%",
            zIndex: "1",
          }}
        >
          <img src={HourGlass} alt="Hourglass" style={{ width: "30%" }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.66} speed={0.15}>
          <Dot color="maroon" width="1%" left="75%" />
        </ParallaxLayer>
        <ParallaxLayer offset={2.4} speed={-0.17}>
          <Dot color="teal" width="1.3%" left="91%" />
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={0.3}>
          <Dot color="navy" width="2.6%" left="5%" />
        </ParallaxLayer>
        <ParallaxLayer offset={2.95} speed={-0.55}>
          <Dot color="red" width="4.3%" left="50%" />
        </ParallaxLayer>
        <ParallaxLayer offset={2.05} speed={1}>
          <Dot color="butter" width="10%" top="-10%" left="85%" />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
