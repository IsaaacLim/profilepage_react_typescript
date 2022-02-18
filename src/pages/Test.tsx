import React from "react";
import { useSpring, animated, config } from "@react-spring/web";
import ISocial from "../interfaces/social";
import socials from "../data/socials";
import SocialsBar from "../components/SocialsBar";

/**
 * bounce in and out
 * friction: 15
 * scale: 0.5 to 1
 * delay: 0, 100, 200
 *
 * swing in
 * friction: 20
 * distance diff: 15vw
 *
 *
 * wobble for deck
 * friction: 2
 * distance diff 1vw
 * delay: 0, 100, 200
 * from: 1, -1, 1
 * @param param0
 * @returns
 */
const InheritedProps: React.FC<{
  social: ISocial;
  friction?: number;
  delay?: number;
  xFrom?: number;
  scaleFrom?: number;
}> = ({ social, friction = 15, delay = 0, xFrom = 0, scaleFrom = 0.5 }) => {
  const xEnd = 0;
  const xStart = xEnd + xFrom;
  const styles = useSpring({
    config: {
      mass: 3, // how heavy it feels
      tension: 340, //how much power
      friction: friction, //how long the frequency last
    },
    delay: 100 + delay,
    from: { x: `${xStart}vw`, scale: scaleFrom },
    to: { x: `${xEnd}vw`, scale: 1 },
  });

  return (
    <div>
      <animated.div
        style={{
          marginTop: "2vw",
          width: "1.5vw",
          height: "1.5vw",
          ...styles,
        }}
      >
        <a href={social.url} target="_blank" rel="noopener noreferrer">
          <svg xmlns={social.xmlns} viewBox={social.viewBox}>
            <path d={social.d} fill={social.fill} />
          </svg>
        </a>
      </animated.div>
    </div>
  );
};

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
      {/* <div style={{ position: "absolute", right: "2vw", top: "6vw" }}>
        <InheritedProps social={socials[0]} delay={0} />
        <InheritedProps social={socials[1]} delay={100} />
        <InheritedProps social={socials[2]} delay={200} />
      </div> */}
      <SocialsBar styleType={1} />
      <div
        style={{
          borderStyle: "solid",
          display: "inline-block",
          width: "50vw",
          height: "20vw",
        }}
      >
        line
      </div>
      <animated.div style={styles}>I will fade in and out</animated.div>
    </div>
  );
}
