import React, { useRef } from "react";
import { useSprings, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";
import { useDrag } from "@use-gesture/react";
import clamp from "lodash.clamp";

import styles from "./styles.module.css";

import Testing2 from "../Test2";
import works from "../../data/works";

function Viewpager() {
  const index = useRef(0);
  const [ref, { width }] = useMeasure();
  const worksReversed = works.reverse();

  const [props, api] = useSprings(
    worksReversed.length,
    (i) => ({
      x: i * width,
      scale: width === 0 ? 0 : 1,
      display: "block",
    }),
    [width]
  );
  const bind = useDrag(
    ({
      active,
      movement: [mx],
      direction: [xDir],
      distance: [xDist],
      cancel,
    }) => {
      if (active && xDist > width / 2) {
        index.current = clamp(
          index.current + (xDir > 0 ? -1 : 1),
          0,
          worksReversed.length - 1
        );
        cancel();
      }
      api.start((i) => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: "none" };
        const x = (i - index.current) * width + (active ? mx : 0);
        const scale = active ? 1 - xDist / width / 2 : 1;
        return { x, scale, display: "block" };
      });
    }
  );
  return (
    <div ref={ref} className={styles.wrapper}>
      {props.map(({ x, display, scale }, i) => (
        <animated.div
          className={styles.page}
          {...bind()}
          key={i}
          style={{ display, x }}
        >
          <animated.div
            style={{ scale, backgroundImage: `url(${worksReversed[i].img})` }}
          >
            <Testing2 work={worksReversed[i]} />
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className={styles.container}>
      <Viewpager />
    </div>
  );
}
