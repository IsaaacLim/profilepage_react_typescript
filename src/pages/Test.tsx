import React from "react";
import { useSpring, animated, config } from "@react-spring/web";
import ISocial from "../interfaces/social";
import socials from "../data/socials";

/**
 * bounce in and out
 * mass: 5
 * tension: 340
 * friction: 13
 * scale: x
 *
 * swing in
 * mass: 3
 * tension: 340:
 * friction: 20
 * distance diff: 15vw
 *
 *
 * wobble for deck
 * friction: 2
 * distance diff 1vw
 * delay: 0, 100, 400
 * @param param0
 * @returns
 */
const InheritedProps: React.FC<{
  social: ISocial;
  mass?: number;
  tension?: number;
  friction?: number;
  delay?: number;
}> = ({ social, mass = 3, tension = 340, friction = 2, delay = 0 }) => {
  const styles = useSpring({
    from: { x: "46vw", scale: 1 },
    config: {
      mass: mass, // how heavy it feels
      tension: tension, //how much power
      friction: friction, //how long the frequency last
      // bounce: 1,
    },
    // config: { config: config.molasses, mass: speed },
    // config: config.wobbly,
    delay: 100 + delay,
    to: { x: "45vw", scale: 1 },
  });

  return (
    <div>
      <animated.div
        style={{
          marginTop: "2vw",
          width: "2vw",
          height: "2vw",
          // backgroundColor: "#46e891",
          borderRadius: 16,
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
      <div style={{ position: "absolute" }}>
        <InheritedProps social={socials[0]} delay={0} />
        <InheritedProps social={socials[1]} delay={100} />
        <InheritedProps social={socials[2]} delay={400} />
      </div>
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
