import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import { useNavigate } from "react-router-dom";
import INav from "../interfaces/navList";

/**
 * @function Slider
 * @returns A slider navbar
 * --- VARIABLES & their FUNCTIONS ---
 * @const
 *  dst: Sliding distance max/min, initialize within Slider
 *  left: css when slider slide to left
 *  right: css when slider slide to right
 *  Slider{
 *   	@param:
 *   		children: Elements contained within the calling <Slider></Slider> element
 *   		navItems: An interface array containing navbar name & url link (max of 2)
 *   		navSize: A string used to change dst
 *   	@const
 *      navigate: used to Programmatically navigate React-router-dom
 *   	  rightNav: 1st navItems[] element
 *   	  leftNav: 2nd navItems[] element
 *   	@function useSpring {
 *  		@var
 *        x: Sliding distance actual (initiate with 0) *lib var*
 *  		  scale: Cover size when active/inactive (initiate with 1) * lib var*
 *  		  navText: To display navbar names (initiate render with Left val)
 *  		@css ...left:  Initiate render with Left `bg` & `justifySelf` css
 *   	}
 *   	@function useDrag {
 *      - Re-navigate user to other pages
 *   		- changes `x`, limited to `dst` (-ve & +ve)
 *  		- changes `scale`
 *  		- changes `navText` based on left/right slide
 *  		- changes `left` or `right` css based of left/right slide
 *   	}
 *  	@const crSize
 *      - Circle animation (scale-up upon slider slide)
 *  		@param
 *        range: Animation affected within this Slider range
 *  		  output: Animation speed
 *  		  extrapolate: "clamp": Limit scale size
 *   }
 *
 * --- HELPER FUNCTION ---
 * @function useWindowWidth
 * @returns window width to limit Slider Cover dragging distance (`dst`)
 */

/* -------- Helper function --------------------------------------------------*/
function getWindowWidth() {
  const { innerWidth: width } = window;
  return { width };
}

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return windowWidth;
}

/* -------- Main Function ----------------------------------------------------*/
let dst: number;

const left = {
  bg: "#85afd5",
  boxShadow: "inset 6px 6px 11px #6c8ead, inset -6px -6px 11px #9ed0fd",
  textColor: "#072299",
  circleColor: "#eaf9ff",
  // bg: "#9fd095",
  // boxShadow: "inset  6px 6px 11px #87b17f, inset -6px -6px 11px #b7efab",
  // textColor: "#106e08",

  justifySelf: "end",
};

const right = {
  // bg: "#9fd095",
  // boxShadow: "inset 2px 2px 4px #87b17f, inset -2px -2px 4px #b7efab",
  // textColor: "#106e08",
  bg: "#ba9cce",
  boxShadow: "inset 6px 6px 11px #9e85af, inset -6px -6px 11px #d6b3ed",
  textColor: "#6405a3",
  circleColor: "#f8ecff",

  justifySelf: "start",
};

const Slider: React.FC<{ navItems: INav[]; navSize: string }> = ({
  children,
  navItems,
  navSize,
}) => {
  const { width } = useWindowWidth();

  let navigate = useNavigate();
  const rightNav = navItems[0];
  const leftNav = navItems[1];
  navSize === "small" ? (dst = width / 17) : (dst = width / 5.8);
  const [
    { x, scale, navText, bg, boxShadow, textColor, circleColor, justifySelf },
    api,
  ] = useSpring(() => ({
    x: 0,
    scale: 1.05,
    navText: leftNav.name,
    ...(navSize === "small" ? left : right), // mod this
  }));
  const bind = useDrag(({ active, movement: [x], down }) => {
    if (!down) {
      if (x <= -dst) return navigate(leftNav.path);
      else if (x >= dst) return navigate(rightNav.path);
    }
    api.start({
      x: !active ? 0 : x < 0 ? (x <= -dst ? -dst : x) : x >= dst ? dst : x,
      scale: active ? 1.15 : 1.05,
      navText: x < 0 ? leftNav.name : rightNav.name,
      ...(x < 0 ? left : right),
      immediate: (name) => active && name === "x",
    });
  });

  const crSize = x.to({
    map: Math.abs,
    range: [0, dst],
    output: [0.5, 1],
    extrapolate: "clamp",
  });

  /**
   * Inline styling for custom css based on left/right slide
   *  1. Nav item text
   *  2. Circle animation
   *  3. Slider cover
   */
  if (navSize === "10") {
    return (
      <div>
        <div>go away</div>
        <div>and away</div>
      </div>
    );
  }
  return (
    <animated.div
      {...bind()}
      className="nav-cont"
      style={{ background: bg, boxShadow: boxShadow }}
    >
      <animated.div className="text" style={{ color: textColor, justifySelf }}>
        {navText}
      </animated.div>
      <animated.div
        className="circle"
        style={{ scale: crSize, backgroundColor: circleColor, justifySelf }}
      />
      <animated.div className="cover" style={{ x, scale }}>
        {children}
      </animated.div>
    </animated.div>
  );
};

export default Slider;
