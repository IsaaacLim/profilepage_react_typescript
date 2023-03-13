import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useNavigate } from "react-router-dom";
import INav from "../../interfaces/navList";
import isMobileView from "../../lib/isMobileView";

/**
 * Todo: refactor variables
 *
 * @var dst Sliding distance max/min, initialize within Slider
 * @var leftShadow Shadow of .text when slider slide to left
 * @var rightShadow Shadow of .text when slider slide to right
 */
var dst: number;
var leftShadow: string;
var rightShadow: string;

/**
 * @param children NavSlider cover display
 * @param navItems Redirection data
 * @param navSize nav size option for web view
 * @returns A slider navbar
 */
const NavSlider: React.FC<{
  children: React.ReactNode;
  navItems: INav[];
  navSize: "small" | "big";
}> = ({ children, navItems, navSize }) => {
  /**
   * @const isTouched Used to stop the Cover slide animation (True when useDrag(active))
   * @const windowWidth Used to limit dst
   */
  const [isTouched, setIsTouched] = React.useState(false);
  const { windowWidth } = useWindowWidth();
  const navigate = useNavigate();
  const rightNav = navItems[0];
  const leftNav = navItems[1];
  const isMobile = isMobileView();

  // Initialize slider variables for mobile view, or web view (small / large size)
  if (isMobile && navSize === "big") {
    dst = windowWidth / 5.3;
    leftShadow = leftNav.boxShadowSmall;
    rightShadow = rightNav.boxShadowSmall;
  } else if (isMobile) {
    dst = windowWidth / 8;
    leftShadow = leftNav.boxShadowSmall;
    rightShadow = rightNav.boxShadowSmall;
  } else if (navSize === "small") {
    dst = windowWidth / 17;
    leftShadow = leftNav.boxShadowSmall;
    rightShadow = rightNav.boxShadowSmall;
  } else {
    dst = windowWidth / 5.8;
    leftShadow = leftNav.boxShadowBig;
    rightShadow = rightNav.boxShadowBig;
  }

  /**
   * Slider animation
   * @param config Precision is used to prevent the 'jerk' effect after an animation
   * @param x Actual sliding distance (inital with 0) *lib var*
   * @param scale Cover size when active/inactive (initiate with 1) * lib var*
   * @param justifySelf Justify items to the left/right (initiate with left)
   * @param navText To display navbar names (initiate render with right val)
   * @param css Nav items css (initiate render with right nav item's css)
   */
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
    justifySelf: "start",
    navText: rightNav.name,
    boxShadow: rightShadow,
    ...rightNav.fixedCSS,
  }));

  // To hint user that NavSlider can slide left & right
  // Used for web view home page initial render
  React.useEffect(() => {
    if (navSize === "small" || isTouched) return;

    const timeoutId = window.setTimeout(() => {
      api({ x: 25 });
    }, 2000);
    const timeoutId2 = window.setTimeout(() => {
      api({
        x: -25,
        justifySelf: "end",
        navText: leftNav.name,
        boxShadow: leftShadow,
        ...leftNav.fixedCSS,
      });
    }, 3000);
    const timeoutId3 = window.setTimeout(() => {
      api({ x: 0 });
    }, 4000);
    return () => {
      window.clearTimeout(timeoutId);
      window.clearTimeout(timeoutId2);
      window.clearTimeout(timeoutId3);
    };
  }, [navSize, isTouched, leftNav.fixedCSS, leftNav.name, api]);

  // Redirect user to other pages
  // - changes 'x', limited to `dst` (-ve & +ve)
  // - changes `scale`
  // - changes `navText` based on left/right slide
  // - changes `left` or `right` css based of left/right slide
  const bind = useDrag(({ active, movement: [x], down }) => {
    if (active) setIsTouched(true);
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
      immediate: (name: string) => active && name === "x",
    });
  });

  /**
   * Circle animation (scale-up with Slider slide)
   * @param range Animation affected within this Slider range
   * @param output Animation speed
   * @param extrapolate "clamp" to Limit scale size
   */
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
      style={{
        background: background,
        boxShadow: boxShadow,
        touchAction: "pan-y",
      }}
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

/**
 * Helper function
 * @returns Media inner width
 */
function getWindowWidth() {
  const { innerWidth: windowWidth } = window;
  return { windowWidth };
}

/**
 * Helper function
 * @returns window width to limit Slider Cover dragging distance (`dst`)
 */
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

export default NavSlider;
