import React from "react";
import { useSpring, animated } from "@react-spring/web";
import ISocial from "../interfaces/social";
import socials from "../data/socials";

const Spring: React.FC<{
  social: ISocial;
  friction?: number;
  xFrom?: number;
  scaleFrom?: number;
  delay?: number;
}> = ({ social, friction = 20, xFrom = 0, scaleFrom = 1, delay = 0 }) => {
  const movement = useSpring({
    config: {
      mass: 3,
      tension: 340,
      friction: friction,
    },
    from: { x: `${xFrom}vw`, scale: scaleFrom },
    to: { x: "0vw", scale: 1 },
    delay: 100 + delay,
  });

  return (
    <div>
      <animated.div
        style={{
          margin: "2vw 0 2vw 0", //move to sass?
          width: "1.5vw",
          height: "1.5vw",
          ...movement,
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

const SocialsBar: React.FC<{ styleType: number }> = ({ styleType }) => {
  if (styleType === 1) {
    return (
      <div style={{ position: "absolute", right: "2vw", top: "6vw" }}>
        <Spring social={socials[0]} xFrom={15} delay={600} />
        <Spring social={socials[1]} xFrom={15} delay={500} />
        <Spring social={socials[2]} xFrom={15} delay={700} />
      </div>
    );
  } else if (styleType === 2) {
    return (
      <div style={{ position: "absolute", right: "2vw", top: "6vw" }}>
        <Spring social={socials[0]} friction={15} scaleFrom={0.5} delay={0} />
        <Spring social={socials[1]} friction={15} scaleFrom={0.5} delay={100} />
        <Spring social={socials[2]} friction={15} scaleFrom={0.5} delay={200} />
      </div>
    );
  } else if (styleType === 3) {
    return (
      <div style={{ position: "absolute", right: "2vw", top: "6vw" }}>
        <Spring social={socials[0]} friction={4} xFrom={0.5} delay={0} />
        <Spring social={socials[1]} friction={4} xFrom={-0.5} delay={100} />
        <Spring social={socials[2]} friction={4} xFrom={0.5} delay={200} />
      </div>
    );
  } else {
    return (
      <div style={{ position: "absolute", right: "2vw", top: "6vw" }}>
        Invalid SocialsBar styleType number
      </div>
    );
  }
};

export default SocialsBar;
