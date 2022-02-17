import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import NavBar from "../components/NavBar";
import NavSlider from "../components/NavSlider";
import navLists from "../config/navLists";
import INav from "../interfaces/navList";
import Image1 from "../images/greens.png";
import Image2 from "../images/hot-air-balloon.png";
import Image3 from "../images/mountains.png";
import Image4 from "../images/world-tree.png";
import Image5 from "../images/hourglass.png";
import Cloud from "../images/cloud.svg";

/**
 * --- STRUCTURE ---
 * Sectioned into 3 pages (offset 0, 1, 2)
 * Each page has a Title, Description, & Decoration section
 * z-index:
 *  Mainly for the Title section to be at the top for on-click event
 *  - Title: >= 20
 *  - Description: >= 10 && < 20
 *  - Decoration: >= 0 && < 10
 *
 * --- PARALLAX LIB ---
 * Offset for end positioning, may use speed for starting position
 * Speed: -ve val for up-down motion, +ve val for down-up motion
 */

const home = navLists[0];
const works = navLists[2];
const navList_small: INav[] = [home, works]; //passed as props to NavSlider
const posLeft = "21vw";
const posRight = "55vw";

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
          style={{ inset: "1.5vw 65vw", width: "25vw", height: "0" }}
        >
          {/* <NavBar /> */}
          <div className="navbar" id="small">
            <NavSlider navItems={navList_small} navSize="small">
              Slide.
            </NavSlider>
          </div>
        </ParallaxLayer>

        {/******************* Background *************************************/}
        <ParallaxLayer // Page 1
          offset={0}
          speed={0}
          style={{ backgroundColor: "#000000" }}
        />
        <ParallaxLayer // Page 2
          offset={1}
          speed={1}
          style={{ backgroundColor: "#121516" }}
        />
        <ParallaxLayer // Page 3
          offset={2}
          speed={0}
          style={{ backgroundColor: "#000000" }}
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
          offset={0.4}
          speed={0.1}
          style={{ marginLeft: "49vw", zIndex: "10" }}
        >
          <div style={{ maxWidth: "25vw" }}>
            <p>
              My name is Isaac and I'm an upcoming Software Developer. While I'm
              still gathering more experiences into my stash, I'm proud of my
              skills in C, C++, HTML, CSS &amp; JavaScript
            </p>
            <p id="note">Continue scrolling to see what I'm made of</p>
          </div>
        </ParallaxLayer>
        {/* --- Decor --- */}
        {/* - from current to next page - */}
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
        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={Cloud}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
            alt="nothing"
          />
          <img
            src={Cloud}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
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
            src={Cloud}
            style={{
              display: "block",
              width: "25%",
              marginLeft: "30%",
              opacity: "0.1",
            }}
            alt="nothing"
          />
          <img
            src={Cloud}
            style={{
              display: "block",
              width: "10%",
              marginLeft: "80%",
              opacity: "0.4",
            }}
            alt="nothing"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.75}
          speed={0.5}
          style={{ opacity: 0.35, zIndex: "0" }}
        >
          <img
            src={Cloud}
            style={{ display: "block", width: "15vw", marginLeft: "70vw" }}
            alt="nothing"
          />
          <img //gets pushed below page view from img element above
            src={Cloud}
            style={{
              display: "block",
              width: "17vw",
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
          speed={0.1}
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
          speed={-0.2}
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "19vw",
            zIndex: "1",
          }}
        >
          <img src={Image5} alt="Hourglass" style={{ width: "30vw" }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.3 }}>
          <img
            src={Cloud}
            style={{
              display: "block",
              width: "20%",
              marginLeft: "5%",
              opacity: "0.3",
            }}
            alt="nothing"
          />
          <img
            src={Cloud}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
            alt="nothing"
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
