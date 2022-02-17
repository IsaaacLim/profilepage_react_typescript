import React from "react";
import { useSpring, animated, config } from "@react-spring/web";
import ISocial from "../interfaces/social";
import socials from "../data/socials";

const InheritedProps: React.FC<{ social: ISocial; speed?: number }> = ({
  children,
  social,
  speed = 10,
}) => {
  const styles = useSpring({
    from: { x: 800, y: 20 },
    config: { config: config.wobbly, mass: speed },
    delay: 1000,
    // config: { mass: 5 },
    // config: { mass: 5, tension: 180, friction: 30 },
    to: { x: 500, y: 20 },
    //loop: {
    //x: 100,
    //},
  });

  return (
    <div>
      <animated.div
        style={{
          width: 80,
          height: 80,
          backgroundColor: "#46e891",
          borderRadius: 16,
          ...styles,
        }}
      >
        <a href={social.url}>
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
      <animated.div style={styles}>I will fade in and out</animated.div>
      <InheritedProps social={socials[0]} speed={5} />
    </div>
  );
}
