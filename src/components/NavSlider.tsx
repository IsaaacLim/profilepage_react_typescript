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
 *  left: css (bg & element pos) when slider slide to left
 *  right: css (bg & element pos) when slider slide to right
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
  bg: `linear-gradient(120deg, #f093fb 0%, #f5576c 100%)`,
  // bg: `linear-gradient(120deg, #fbe893 0%, #f59657 100%)`,
  justifySelf: "end",
};

const right = {
  // bg: `linear-gradient(120deg, #45c939 0%, #f9f586 100%)`,
  // bg: `linear-gradient(120deg, #7fff00 0%, #dfff00 100%)`,
  bg: `linear-gradient(120deg, #23b2d6 0%, #6addec 100%)`,
  // bg: `linear-gradient(120deg, #00c4cf 0%, #5aeee2 100%)`,
  // bg: `linear-gradient(120deg, #7c00cf 0%, #f83ef8 100%)`,
  // bg: `linear-gradient(120deg, #b149f7 0%, #f36ff3 100%)`,
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
  navSize === "small" ? (dst = width / 17) : (dst = width / 6);
  const [{ x, scale, navText, bg, justifySelf }, api] = useSpring(() => ({
    x: 0,
    scale: 1.05,
    navText: leftNav.name,
    ...left,
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
  return (
    <animated.div {...bind()} className="nav-cont" style={{ background: bg }}>
      <animated.div className="text" style={{ justifySelf }}>
        {navText}
      </animated.div>
      <animated.div className="circle" style={{ scale: crSize, justifySelf }} />
      <animated.div className="cover" style={{ x, scale }}>
        {children}
      </animated.div>
    </animated.div>
  );
};

export default Slider;
