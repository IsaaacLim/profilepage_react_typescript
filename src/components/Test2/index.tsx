import React, { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

import data from "./data";
import styles from "./styles.module.css";
import IWork from "../../interfaces/work";

export default function App({ work }: { work: IWork }) {
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  // const { size, ...rest } = useSpring({
  // const { width, height, ...rest } = useSpring({
  const { ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    // from: { size: "10%", background: "hotpink" },
    from: {
      background: "hotpink",
      width: "30px",
      height: "30px",
      // scale: "10%",
    },
    to: {
      // size: open ? "100%" : "10%",
      width: open ? "100%" : "30px",
      height: open ? "100%" : "30px",
      // scale: open ? "100%" : "20%",
      background: open ? "rgba(0,0,0,.3)" : "hotpink",
      borderRadius: open ? "0px" : "999px",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.2,
    // open ? 1 : 2,
  ]);

  // console.log({ size });
  return (
    <div className={styles.wrapper}>
      <animated.div
        // style={{ ...rest, width: size, height: size }}
        // style={{ ...rest, width: width, height: height }}
        style={{ ...rest }}
        className={styles.container}
        onClick={() => set((open) => !open)}
      >
        {transition((style, item) => {
          return (
            <animated.div
              className={(styles.item, `cards`)}
              style={{ ...style, background: item.css }}
              // style={{ ...style, background: item.css }}
            >
              <div className="txt-placeholder">
                <p id="title">{work.title}</p>
                <div>
                  <p id="subtitle">Description:</p>
                  <ul>
                    {work.description.map((text, index) => {
                      return <li key={index}>{text}</li>;
                    })}
                  </ul>
                </div>
                <div>
                  <p id="subtitle">Tech:</p>
                  <p>{work.tech}</p>
                </div>
                <div>
                  <p id="subtitle">Example Features:</p>
                  <ul>
                    {work.features.map((text, index) => {
                      return <li key={index}>{text}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </animated.div>
          );
        })}
      </animated.div>
    </div>
  );
}
