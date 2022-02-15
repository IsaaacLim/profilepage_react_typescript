import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

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
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
      <Parallax ref={parallax} pages={3}>
        {/******************* Background *************************************/}
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
        <ParallaxLayer // bg 1, placed here to overlap
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
          offset={1.3} // pushes it higher on pg 2
          speed={-0.3} // -ve goes from top down
          style={{ pointerEvents: "none" }}
        >
          <img
            src={url("satellite4")}
            style={{ width: "15%", marginLeft: "70%" }}
            alt="nothing"
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
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundImage: url("clients", true),
          }}
        />
        {/******************* Main Content ***********************************/}
        <ParallaxLayer // Main 1
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={url("server")} style={{ width: "20%" }} alt="nothing" />
        </ParallaxLayer>
        <ParallaxLayer // Main 2
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={url("bash")} style={{ width: "40%" }} alt="nothing" />
        </ParallaxLayer>
        <ParallaxLayer // Main 3
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <img
            src={url("clients-main")}
            style={{ width: "40%" }}
            alt="nothing"
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
