import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import { useNavigate } from "react-router-dom";
import INav from "../interfaces/navbar";

import styles from "./styles.module.css"; // tmp

const dst = 310;
const left = {
  bg: `linear-gradient(120deg, #f093fb 0%, #f5576c 100%)`,
  justifySelf: "end", // pos white circle to right
};
const right = {
  bg: `linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)`,
  justifySelf: "start", // pos white circle to left
};

const Slider: React.FC<{ NavItems: INav[] }> = ({ children, NavItems }) => {
  let navigate = useNavigate();
  let rightNav = NavItems[0];
  let leftNav = NavItems[1];
  const [{ x, scale, navText, bg, justifySelf }, api] = useSpring(() => ({
    x: 0, // Render position, default for both left and right
    scale: 1, // Render size, default for both left and right
    navText: leftNav.navName,
    ...left, // Render with const Left first
  }));
  const bind = useDrag(({ active, movement: [x], down }) => {
    if (!down) {
      if (x <= -dst) return navigate(leftNav.navLink);
      else if (x >= dst) return navigate(rightNav.navLink);
    }
    api.start({
      x: !active ? 0 : x < 0 ? (x <= -dst ? -dst : x) : x >= dst ? dst : x, // Cover position, with drag limits
      scale: active ? 1.1 : 1, // Cover size
      navText: x < 0 ? leftNav.navName : rightNav.navName,
      ...(x < 0 ? left : right), // !!!!Drag direction, calls the const!!!!!!!!
      immediate: (name) => active && name === "x",
    });
  });

  // White circle animation
  const avSize = x.to({
    map: Math.abs,
    range: [0, dst], // animation start - end range from Cover drag range
    output: [0.5, 1], // Growth speed
    extrapolate: "clamp", // Limit max size
  });

  return (
    <animated.div
      {...bind()}
      //   className={styles.item}
      className="nav-cont"
      id="big"
      style={{
        background: bg, // Green / Red background
      }}
    >
      {/* Menu Words */}
      <animated.div
        //   className={styles.text}
        className="text"
      >
        {navText}
      </animated.div>
      {/* White circle */}
      <animated.div
        // className={styles.av}
        className="circle"
        style={{ scale: avSize, justifySelf }}
      />

      {/* Cover image */}
      <animated.div
        // className={styles.fg}
        className="cover"
        style={{
          x, //enable drag animation
          scale, // enable scale animation
        }}
      >
        {children}
        {/* Display text passed from Slider element */}
      </animated.div>
    </animated.div>
  );
};

export default Slider;
