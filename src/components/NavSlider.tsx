import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import { useNavigate } from "react-router-dom";
import INav from "../interfaces/navbar";

/**
 * --- VARIABLES & their FUNCTIONS ---
 * dst: Sliding distance max/min
 * left: css (bg & element pos) when slider slide to left
 * right: css (bg & element pos) when slider slide to right
 *
 * Slider{
 * 	Passed props {
 * 		children: Elements contained within the calling <Slider></Slider> element
 * 		navItems: An interface array containing navbar name & url link (max of 2)
 * 		navSize: A string used to change dst
 * 	}
 * 	variables within {
 * 		navigate: used to Programmatically navigate React-router-dom
 * 		rightNav: 1st navItems[] element
 * 		leftNav: 2nd navItems[] element
 * 	}
 *  useSpring {
 *		x: Sliding distance actual (initiate with 0) *lib var*
 *		scale: Cover size when active/inactive (initiate with 1) *lib var*
 *		navText: To display navbar names (initiate render with Left val)
 *		...left:  Initiate render with Left `bg` & `justifySelf`
 * 	}
 * 	useDrag {
 * 		active: whether useDrag is active or not
 * 			- changes `x`, limited to `dst` (-ve & +ve)
 *			- changes `scale`
 *		- `navText` changed based on left/right slide
 *		- changes `left` or `right` css based of left/right slide
 * 	}
 *	crSize: Circle animation (scale-up upon slider slide)
 *		- range: Animation affected within this Slider range
 *		- output: Animation speed
 *		- extrapolate: "clamp": Limit scale size
 *
 * }
 */

let dst = 310;

const left = {
  bg: `linear-gradient(120deg, #f093fb 0%, #f5576c 100%)`,
  justifySelf: "end",
};

const right = {
  bg: `linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)`,
  justifySelf: "start",
};

const Slider: React.FC<{ navItems: INav[]; navSize: string }> = ({
  children,
  navItems,
  navSize,
}) => {
  let navigate = useNavigate();
  let rightNav = navItems[0];
  let leftNav = navItems[1];
  if (navSize === "small") dst = 150;
  const [{ x, scale, navText, bg, justifySelf }, api] = useSpring(() => ({
    x: 0,
    scale: 1,
    navText: leftNav.navName,
    ...left,
  }));
  const bind = useDrag(({ active, movement: [x], down }) => {
    if (!down) {
      if (x <= -dst) return navigate(leftNav.navLink);
      else if (x >= dst) return navigate(rightNav.navLink);
    }
    api.start({
      x: !active ? 0 : x < 0 ? (x <= -dst ? -dst : x) : x >= dst ? dst : x,
      scale: active ? 1.1 : 1,
      navText: x < 0 ? leftNav.navName : rightNav.navName,
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
   * 1. Nav item text
   * 2. Circle animation
   * 3. Slider cover
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
