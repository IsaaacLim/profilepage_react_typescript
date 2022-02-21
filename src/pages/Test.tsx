import React, { useRef, useEffect, useMemo } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";
import Forkey from "../images/forkey.jpg";

import styles from "./styles.module.css";

const calcX = (y: number, ly: number) =>
  -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 2) / 20;

export default function App() {
  const domTarget = useRef(null);
  const [isMoved, setIsMoved] = React.useState(false);
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      // config: { mass: 5, tension: 350, friction: 40 },
      config: { mass: 5, tension: 700, friction: 80 },
    })
  );
  // React.useEffect(() => {
  //   if (!isMoved) return;
  //   const timeoutId = window.setTimeout(() => {
  //     api({
  //       x: 0,
  //       y: 0,
  //     });
  //     setIsMoved(false);
  //   }, 2000);
  //   return () => {
  //     window.clearTimeout(timeoutId);
  //   };
  // }, [isMoved, api]);
  const enter = () => {
    api({ x, y });
    console.log(x);
    setIsMoved(true);
  };
  const leave = () => {
    setIsMoved(false);
  };

  useGesture(
    {
      onDrag: ({ active, movement: [x, y] }) =>
        api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
      onDragEnd: ({ delta: [x, y] }) => api({ x, y }),
      onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.1,
        }),
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
    },
    { domTarget, eventOptions: { passive: false } }
  );

  return (
    <div className={styles.container}>
      <animated.div
        ref={domTarget}
        className={styles.card}
        style={{
          transform: "perspective(600px)",
          x,
          y,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
          rotateZ,
        }}
        // onMouseUp={enter}
        // onMouseDown={leave}
      >
        <animated.div>
          <div style={{ backgroundImage: `url(${Forkey})` }} />
        </animated.div>
      </animated.div>
    </div>
  );
}
