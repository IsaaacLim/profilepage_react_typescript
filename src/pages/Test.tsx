import React, { useRef } from "react";
import { useSpring, animated, config } from "@react-spring/web";

function InheritedProps() {
  const n = useRef(0);
  const styles = useSpring({
    from: { x: 0, y: 0 },
    config: { mass: 10, tension: 180, friction: 12 },
    to: { x: 100, y: 10 },
    //loop: {
    //x: 100,
    //},
  });

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        backgroundColor: "#46e891",
        borderRadius: 16,
        ...styles,
      }}
    />
  );
}

export default function Test() {
  const styles = useSpring({
    loop: {
      reverse: true,
    },
    config: config.molasses,
    to: [
      { opacity: 1, color: `#cffffe` },
      { opacity: 1, color: `#f9f7d9` },
      { opacity: 1, color: `#fce2ce` },
      { opacity: 1, color: `#ffc1f3` },
    ],
    from: { opacity: 0, color: `white` },
  });

  return (
    <div>
      <animated.div style={styles}>I will fade in and out</animated.div>
      <InheritedProps />
    </div>
  );
}
