import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import NavSlider from "../components/NavSlider";
import INav from "../interfaces/navList";
import navLists from "../data/navLists";
import SocialsBar from "../components/SocialsBar";
// import Image1 from "../images/greens.png";
import Image2 from "../images/hot-air-balloon.svg";
import Image3 from "../images/mountains.svg";
import Image4 from "../images/world-tree.svg";
import Image5 from "../images/hourglass.svg";

import Cloud from "../images/cloud.svg";
import CirBlue from "../images/circles/blue.svg";
import CirBrown from "../images/circles/brown.svg";
import CirGrass from "../images/circles/green.svg";
import CirGrey from "../images/circles/grey.svg";
import CirLime from "../images/circles/lime.svg";
import CirMaroon from "../images/circles/maroon.svg";
import CirNavy from "../images/circles/navy.svg";
import CirPeach from "../images/circles/peach.svg";
import CirRed from "../images/circles/red.svg";
import CirSkin from "../images/circles/skin.svg";
import CirTea from "../images/circles/tea.svg";
import CirTeal from "../images/circles/teal.svg";
import CirYellow from "../images/circles/yellow.svg";

/**
 * @param navListSmall: navLists with only 2 items. Props for NavSlider
 *
 * --- PAGE STRUCTURE ---
 * Sectioned into 3 pages (offset 0, 1, 2)
 * Each page has a Title, Description, & Decoration section
 * z-index:
 *  Mainly for the Title section to be at the top for on-click event
 *  - Title: >= 20
 *  - Description: >= 10 && < 20
 *  - Decoration: >= 0 && < 10
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

const home = navLists[0];
const works = navLists[2];
const navListSmall: INav[] = [home, works];
const posLeft = "21vw"; //fix
// const posRight = "55vw"; //fix

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
        <ParallaxLayer
          sticky={{ start: 0, end: 2 }}
          style={{ width: "5", height: "5" }} //prevent layer from overlapping other pages
          className="nav-sticky"
        >
          <SocialsBar styleType={2} />
          <div className="navbar" id="small">
            <NavSlider navItems={navListSmall} navSize="small">
              Slide.
            </NavSlider>
          </div>
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
          style={{ backgroundColor: "#f6f6f6" }}
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
            paddingLeft: posLeft,
            paddingTop: "8vw",
            zIndex: "20",
          }}
        >
          <h2 style={{ fontSize: "4.5vw", maxWidth: "60vw" }}>
            Making my way into the software development industry.
          </h2>
        </ParallaxLayer>
        {/* --- Description --- */}
        <ParallaxLayer
          offset={0.45}
          speed={0.1}
          style={{ marginLeft: "49vw", zIndex: "10" }}
        >
          <div style={{ maxWidth: "28vw" }}>
            <p>
              My name is Isaac and I'm an upcoming Software Developer. While I'm
              still gathering more experiences into my stash, I'm proud of my
              skills in C, C++, HTML, CSS &amp; JavaScript
            </p>
            <p id="note">Continue scrolling to see what I'm made of</p>
          </div>
        </ParallaxLayer>
        {/* --- Decor --- */}
        <ParallaxLayer offset={0.05} speed={0.8}>
          <img
            src={CirRed}
            style={{ width: "2%", marginLeft: "12vw" }}
            alt="Hot air balloon"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.05} speed={-0.2}>
          <img
            src={CirSkin}
            style={{
              width: "2.2%",
              marginTop: "20vw",
              marginLeft: "95vw",
            }}
            alt="Hot air balloon"
          />
          <img
            src={CirTea}
            style={{
              width: "1.6%",
              marginTop: "10vw",
              marginLeft: "72vw",
            }}
            alt="Hot air balloon"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={0.3}>
          <img
            src={CirTeal}
            style={{ width: "2.6%", marginLeft: "52vw" }}
            alt="Hot air balloon"
          />
        </ParallaxLayer>
        {/* - from current to next page - */}
        <ParallaxLayer offset={0.8} speed={-0.1}>
          <img
            src={CirYellow}
            style={{ width: "5%", marginLeft: "12vw" }}
            alt="Hot air balloon"
          />
          <img
            src={CirGrey}
            style={{
              position: "absolute",
              width: "5.1%",
              marginTop: "7vw",
              marginLeft: "70vw",
            }}
            alt="Hot air balloon"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.05} speed={-0.5} style={{ zIndex: "9" }}>
          <img
            src={Image2}
            style={{ width: "25%", marginLeft: "22vw" }}
            alt="Hot air balloon"
          />
        </ParallaxLayer>
        {/*********************** Page 2 *************************************/}
        {/* --- Title --- */}
        <ParallaxLayer
          offset={1}
          speed={0.2}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            paddingLeft: "50vw",
            paddingTop: "8vw",
            zIndex: "21",
          }}
        >
          <h2>
            Chemical engineer,
            <br />
            Artist,
            <br />
            Gen Y/Z
          </h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.45}
          speed={0.15}
          style={{ marginLeft: posLeft, maxWidth: "40vw", zIndex: "20" }}
        >
          <h2>Something tells me I'm on the right path.</h2>
        </ParallaxLayer>
        {/* --- Description --- */}
        <ParallaxLayer
          offset={1.7}
          speed={0.1}
          style={{
            marginLeft: posLeft,
            paddingLeft: "10vw",
            maxWidth: "30vw",
            zIndex: "10",
          }}
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
        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 1 }}>
          <img
            src={CirPeach}
            style={{ display: "block", width: "5%", marginLeft: "10%" }}
            alt="nothing"
          />
          <img
            src={CirBlue}
            style={{ display: "block", width: "2.6%", marginLeft: "75%" }}
            alt="nothing"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.68} speed={0.8}>
          <img
            src={Image4}
            style={{ display: "block", width: "15vw", marginLeft: "15vw" }}
            alt="nothing"
          />
        </ParallaxLayer>
        {/* - from current to next page - */}
        <ParallaxLayer offset={1.4} speed={-0.1} style={{ zIndex: "1" }}>
          <img
            src={Image3}
            style={{
              display: "block",
              width: "25vw",
              marginLeft: "60vw",
              opacity: "0.9",
            }}
            alt="nothing"
          />
          <img
            src={CirBrown}
            style={{
              display: "block",
              width: "2%",
              marginLeft: "30%",
              // opacity: "0.1",
            }}
            alt="nothing"
          />
          <img
            src={CirGrass}
            style={{
              display: "block",
              width: "3%",
              marginLeft: "80%",
              // opacity: "0.4",
            }}
            alt="nothing"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.75}
          speed={0.5}
          style={{ opacity: 1, zIndex: "0" }}
        >
          <img
            src={CirGrey}
            style={{ display: "block", width: "2%", marginLeft: "70vw" }}
            alt="nothing"
          />
          <img //gets pushed below page view from img element above
            src={CirLime}
            style={{
              display: "block",
              width: "3%",
              marginLeft: "40vw",
              marginTop: "10vw",
            }}
            alt="nothing"
          />
        </ParallaxLayer>
        {/*********************** Page 3 *************************************/}
        {/* --- Title --- */}
        <ParallaxLayer
          offset={2}
          speed={-0.1}
          style={{
            paddingLeft: "52vw",
            paddingTop: "12vw",
            zIndex: "20",
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <h2 style={{ maxWidth: "20vw" }}>Facts my friends know about me</h2>
        </ParallaxLayer>
        {/* --- Description --- */}
        <ParallaxLayer
          offset={2.5}
          speed={-0}
          style={{
            marginLeft: posLeft,
            paddingLeft: "37vw",
            maxWidth: "21vw",
            zIndex: "10",
          }}
        >
          <p>
            Badminton, volleyball, taekwondo, skateboarding, snowboarding, rock
            climbing; hand crafting, hair cutting; roller coasters, sky diving;
            &amp;
            <br /> pet pug called PuiPui (a.k.a Fatty)
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
            marginLeft: "19vw",
            zIndex: "1",
          }}
        >
          <img src={Image5} alt="Hourglass" style={{ width: "30vw" }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.7 }}>
          <img
            src={CirNavy}
            style={{
              display: "block",
              width: "2.6%",
              marginLeft: "5%",
              // opacity: "0.3",
            }}
            alt="nothing"
          />
          <img
            src={CirMaroon}
            style={{ display: "block", width: "2.5%", marginLeft: "75%" }}
            alt="nothing"
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
