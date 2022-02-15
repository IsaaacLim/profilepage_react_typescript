import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Image1 from "../images/greens.png";
import Image2 from "../images/hot-air-balloon.png";
import Image3 from "../images/mountains.png";
import Image4 from "../images/world-tree.png";
import Image5 from "../images/hourglass.png";

const posLeft = "21vw";
const posRight = "55vw";

// Little helpers ...
const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function Test() {
  const parallax = useRef<IParallax>(null!);
  return (
    <div
      style={{ width: "100%", height: "100%", background: "#253237" }}
      className="about-cont"
    >
      <Parallax ref={parallax} pages={3}>
        {/******************* Background *************************************/}
        <ParallaxLayer // bg 1
          offset={0}
          speed={1}
          style={{ backgroundColor: "#000000" }}
        />
        <ParallaxLayer // bg 2
          offset={1}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />
        <ParallaxLayer // bg 3
          offset={2}
          speed={1}
          style={{ backgroundColor: "#87BCDE" }}
        />
        <ParallaxLayer // bg main, placed here to overlap
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
        {/******************* Filler pg2 *************************************/}
        <ParallaxLayer
          offset={1.1} // pushes it higher on pg 2
          speed={-0.5} // -ve goes from top down
          style={{ pointerEvents: "none" }}
        >
          <img
            // src={url("satellite4")}
            src={Image2}
            style={{ width: "25%", marginLeft: "20%" }}
            alt="Hot air balloon"
          />
        </ParallaxLayer>

        {/* cloud 3, top*/}
        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
            alt="nothing"
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
            alt="nothing"
          />
        </ParallaxLayer>
        {/* cloud 2, bottom */}
        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
            alt="nothing"
          />
          <img //gets pushed below page view from img element above
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
            alt="nothing"
          />
        </ParallaxLayer>
        {/* cloud 1, top */}
        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
            alt="nothing"
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
            alt="nothing"
          />
        </ParallaxLayer>
        {/******************* Filler pg2 to 3 ********************************/}
        <ParallaxLayer
          offset={1.6}
          speed={-0.1} //top down motion
          style={{ opacity: 0.4 }}
        >
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
            alt="nothing"
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
            alt="nothing"
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
            alt="nothing"
          />
        </ParallaxLayer>
        {/******************* Filler pg3 *************************************/}
        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
            alt="nothing"
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
            alt="nothing"
          />
        </ParallaxLayer>

        <ParallaxLayer //earth
          offset={2.5}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <img src={url("earth")} style={{ width: "60%" }} alt="nothing" />
        </ParallaxLayer>

        <ParallaxLayer //clients
          offset={2.3}
          speed={-0.3}
          style={{ marginLeft: posLeft }}
        >
          <img src={Image5} alt="Hourglass" style={{ width: "30%" }} />
        </ParallaxLayer>

        {/******************* Main Content ***********************************/}
        {/* --- Page 1 --- */}
        {/* <ParallaxLayer // Image
          offset={0}
          speed={0.1}
          style={
            {
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
            }
          }
          className="section"
          id="sec1"
        >
          <img src={Image1} alt="Winter greens" />
          // <img src={url("server")} style={{ width: "20%" }} alt="nothing" />
          
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0.4}
          speed={0.1}
          style={{ marginLeft: posRight }}
          className="section"
          id="sec1"
        >
          <div className="text">
            <p>
              My name is Isaac and I'm an upcoming Software Developer. While I'm
              still gathering more experiences into my stash, I'm proud of my
              skills in C, C++, HTML, CSS &amp; JavaScript
            </p>
            <p id="note">Continue scrolling to see what I'm made of</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={-0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            paddingLeft: posLeft,
            paddingTop: "8vw",
          }}
          className="section"
          id="sec1"
        >
          <h2>Making my way into the software development industry.</h2>
        </ParallaxLayer>

        {/* --- Page 2 --- */}
        <ParallaxLayer
          offset={1.7}
          speed={0.1}
          style={{
            marginLeft: posLeft,
            paddingLeft: "8vw",
            maxWidth: "30vw",
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

        <ParallaxLayer
          offset={1.45}
          speed={0.1}
          style={{ marginLeft: posLeft, maxWidth: "40vw" }}
          // className="section"
          // id="sec2"
        >
          {/* <div id="head2"> */}
          <h2>Something tells me I'm on the right path.</h2>
          {/* </div> */}
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            paddingLeft: posRight,
            paddingTop: "8vw",
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

        {/* --- Page 3 --- */}
        <ParallaxLayer
          offset={2.6}
          speed={-0}
          style={{
            marginLeft: posLeft,
            paddingLeft: "35vw",
            maxWidth: "21vw",
          }}
        >
          <p>
            Badminton, volleyball, taekwondo, skateboarding, snowboarding, rock
            climbing; hand crafting, hair cutting; roller coasters, sky diving;
            &amp;
            <br /> pet pug called PuiPui (a.k.a Fatty)
          </p>
          <p id="note">If I'm reborn, let me be a gymnast. Tq</p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            paddingLeft: "50vw",
            paddingTop: "10vw",
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <h2 style={{ maxWidth: "20vw" }}>Facts my friends know about me</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
