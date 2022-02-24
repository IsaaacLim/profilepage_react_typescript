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
var dst: number;
var leftShadow: string;
var rightShadow: string;

const Slider: React.FC<{ navItems: INav[]; navSize: string }> = ({
  children,
  navItems,
  navSize,
}) => {
  const { width } = useWindowWidth();
  let navigate = useNavigate();
  const rightNav = navItems[0];
  const leftNav = navItems[1];
  if (navSize === "small") {
    dst = width / 17;
    leftShadow = leftNav.boxShadowSmall;
    rightShadow = rightNav.boxShadowSmall;
  } else {
    dst = width / 5.8;
    leftShadow = leftNav.boxShadowBig;
    rightShadow = rightNav.boxShadowBig;
  }

  const [
    {
      x,
      scale,
      navText,
      justifySelf,
      background,
      boxShadow,
      textColor,
      circleColor,
    },
    api,
  ] = useSpring(() => ({
    config: { precision: 0.0001 },
    x: 0,
    scale: 1,
    justifySelf: "end",
    navText: leftNav.name,
    boxShadow: leftShadow,
    ...leftNav.fixedCSS,
  }));

  // const shake = useSpring(() => ({
  //   x: 0,
  // }));

  const bind = useDrag(({ active, movement: [x], down }) => {
    if (!down) {
      if (x <= -dst) return navigate(leftNav.path);
      else if (x >= dst) return navigate(rightNav.path);
    }
    api.start({
      x: !active ? 0 : x < 0 ? (x <= -dst ? -dst : x) : x >= dst ? dst : x,
      scale: active ? 1.15 : 1,
      justifySelf: x < 0 ? "end" : "start",
      navText: x < 0 ? leftNav.name : rightNav.name,
      boxShadow: x < 0 ? leftShadow : rightShadow,
      ...(x < 0 ? leftNav.fixedCSS : rightNav.fixedCSS),
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
  return (
    <animated.div
      {...bind()}
      className="nav-cont"
      style={{ background: background, boxShadow: boxShadow }}
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
