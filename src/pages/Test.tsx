import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

import styles from "./styles.module.css";

const left = {
  bg: `linear-gradient(120deg, #f093fb 0%, #f5576c 100%)`,
  justifySelf: "end", // pos white circle to right
  content: "About", // background text
};
const right = {
  bg: `linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)`,
  justifySelf: "start", // pos white circle to left
  content: "Works", //background text
};

const dst = 310;

const Slider: React.FC = ({ children }) => {
  const [{ x, bg, scale, justifySelf, content }, api] = useSpring(() => ({
    x: 0, // Render position, default for both left and right
    scale: 1, // Render size, default for both left and right
    // content: "not yet", // testing
    ...left, // Render with const Left first
    // ...text,
  }));
  const bind = useDrag(({ active, movement: [x] }) =>
    api.start({
      x: !active ? 0 : x < 0 ? (x <= -dst ? -dst : x) : x >= dst ? dst : x, // Cover position
      scale: active ? 1.1 : 1, // Cover size
      ...(x < 0 ? left : right), // Drag direction, calls the const
      // add State here
      immediate: (name) => active && name === "x",
    })
  );

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
      className={styles.item}
      style={{
        background: bg, // Green / Red background
      }}
    >
      {/* Menu Words */}
      <animated.div className={styles.text}>{content}</animated.div>
      {/* White circle */}
      <animated.div
        className={styles.av}
        style={{ scale: avSize, justifySelf }}
      />

      {/* Cover image */}
      <animated.div
        className={styles.fg}
        style={{
          x, //enable drag animation
          scale, // enable scale animation
        }}
      >
        {children}
        {/*  Display text passed from Slider element */}
      </animated.div>
    </animated.div>
  );
};

export default function Test() {
  return (
    <div className={styles.container}>
      <Slider>Menu.</Slider>
    </div>
  );
}
