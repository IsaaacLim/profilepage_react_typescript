import React from "react";
import { useSpring, animated } from "@react-spring/web";
import ISocial from "../interfaces/social";
import socials from "../data/socials";

/**
 * @param styleType: 1(spring entry), 2(wave in/out), 3(wobble left/right), or 4 (web view)
 * @returns My LinkedIn, GitHub, email, and resume with 4 different react-spring styles
 */
const SocialsBar: React.FC<{ styleType: number }> = ({ styleType }) => {
  if (styleType === 1) {
    return (
      <div className="socials-bar" id="absolute">
        <SocialSpring social={socials[0]} xFrom={15} delay={1600} />
        <SocialSpring social={socials[1]} xFrom={15} delay={1800} />
        <SocialSpring social={socials[2]} xFrom={15} delay={1700} />
        <SocialSpring social={socials[3]} xFrom={15} delay={1500} />
      </div>
    );
  } else if (styleType === 2) {
    return (
      <div className="socials-bar" id="absolute">
        <SocialSpring
          social={socials[0]}
          friction={10}
          scaleFrom={0.1}
          delay={0}
        />
        <SocialSpring
          social={socials[1]}
          friction={10}
          scaleFrom={0.1}
          delay={100}
        />
        <SocialSpring
          social={socials[2]}
          friction={10}
          scaleFrom={0.1}
          delay={200}
        />
        <SocialSpring
          social={socials[3]}
          friction={10}
          scaleFrom={0.1}
          delay={300}
        />
      </div>
    );
  } else if (styleType === 3) {
    return (
      <div className="socials-bar" id="absolute">
        <SocialSpring social={socials[0]} friction={4} xFrom={0.5} delay={0} />
        <SocialSpring
          social={socials[1]}
          friction={4}
          xFrom={-0.4}
          delay={100}
        />
        <SocialSpring
          social={socials[2]}
          friction={4}
          xFrom={0.6}
          delay={200}
        />
        <SocialSpring
          social={socials[3]}
          friction={4}
          xFrom={-0.7}
          delay={300}
        />
      </div>
    );
  } else if (styleType === 4) {
    return (
      <div className="socials-bar" id="relative">
        <SocialSpring
          social={socials[0]}
          friction={10}
          scaleFrom={0.1}
          delay={0}
        />
        <SocialSpring
          social={socials[1]}
          friction={10}
          scaleFrom={0.1}
          delay={100}
        />
        <SocialSpring
          social={socials[2]}
          friction={10}
          scaleFrom={0.1}
          delay={200}
        />
        <SocialSpring
          social={socials[3]}
          friction={10}
          scaleFrom={0.1}
          delay={300}
        />
      </div>
    );
  } else {
    return (
      <div className="socials-bar">Invalid SocialsBar styleType number</div>
    );
  }
};

/**
 * Helper function
 * @param	social Social account data
 * @param friction Spring friction coefficient
 * @param xFrom Div x-axis starting position
 * @param scaleFrom Div initial size
 * @param delay Delay animation execution
 * @returns A single unique animated social div for:
 *  1. @const render: Entry effects
 *  2. @const hover:  Hover effects
 */
const SocialSpring: React.FC<{
  social: ISocial;
  friction?: number;
  xFrom?: number;
  scaleFrom?: number;
  delay?: number;
}> = ({ social, friction = 20, xFrom = 0, scaleFrom = 1, delay = 0 }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const render = useSpring({
    config: {
      mass: 3,
      tension: 340,
      friction: friction,
    },
    from: { x: `${xFrom}vw`, scale: scaleFrom },
    to: { x: "0vw", scale: 1 },
    delay: 100 + delay,
  });

  const hover = useSpring({
    transform: isHovered ? `scale(1.6)` : `scale(1)`,
    config: {
      mass: 3,
      tension: 340,
      friction: 15,
    },
  });

  React.useEffect(() => {
    if (!isHovered) {
      return;
    }
  }, [isHovered]);
  const enter = () => {
    setIsHovered(true);
  };
  const leave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <animated.div
        style={{ ...render, ...hover }}
        className="social-icon"
        onMouseEnter={enter}
        onMouseLeave={leave}
      >
        <span className="mouse-over-text">{social.name}</span>
        <a href={social.url} target="_blank" rel="noopener noreferrer">
          <svg xmlns={social.xmlns} viewBox={social.viewBox}>
            <path d={social.d} />
          </svg>
        </a>
      </animated.div>
    </>
  );
};

export default SocialsBar;
