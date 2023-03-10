import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";

import styles from "./styles.module.css";

import IWork from "../../interfaces/work";

export default function App({ work }: { work: IWork }) {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div className={styles.container}>
      <div
        onClick={() => setFlipped((state) => !state)}
        className={styles.cont}
      >
        <a.div
          className={`${styles.c} ${styles.d} ${styles.image}`}
          style={{ opacity: opacity.to((o) => 1 - o), transform }}
        >
          <img
            src={work.img}
            alt={work.alt}
            className={`${styles.image}`}
            // id={"cover-full"}
          />
        </a.div>
        <a.div
          className={`${styles.c} ${styles.d}`}
          style={{
            opacity,
            transform,
            rotateY: "180deg",
          }}
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
        </a.div>
      </div>
    </div>
  );
}
