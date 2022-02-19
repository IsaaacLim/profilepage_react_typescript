import React from "react";
import { useSpring, animated } from "@react-spring/web";
import ISocial from "../interfaces/social";
import socials from "../data/socials";

/**
 * @function SocialsBar
 * @param: styleType: 1(spring entry), 2(wave in/out), or 3(wobble left/right)
 * @returns My LinkedIn, GitHub and email with 3 different react-spring styles
 *
 * --- HELPER FUNCTION ---
 * @function Spring
 * @param:
 * 	social: Interface with my social accounts
 * 	friction: Modify Spring friction coefficient
 * 	xFrom: Div starting position
 * 	scaleFrom: Div initial size
 * 	delay: Delays animation execution
 * @returns A single unique animated social div for:
 *  1. @const render: Entry effects
 *  2. @const hover:  Hover effects
 */

/* -------- Helper function --------------------------------------------------*/
const Spring: React.FC<{
  social: ISocial;
  friction?: number;
  xFrom?: number;
  scaleFrom?: number;
  delay?: number;
}> = ({ social, friction = 20, xFrom = 0, scaleFrom = 1, delay = 0 }) => {
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

  const [isHovered, setIsHovered] = React.useState(false);
  const hover = useSpring({
    transform: isHovered ? `scale(1.5)` : `scale(1)`,
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
    <div>
      <animated.div
        style={{ ...render, ...hover }}
        className="social-icon"
        onMouseEnter={enter}
        onMouseLeave={leave}
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

/* -------- Main function  ---------------------------------------------------*/
const SocialsBar: React.FC<{ styleType: number }> = ({ styleType }) => {
  if (styleType === 1) {
    return (
      <div className="socials-bar">
        <Spring social={socials[0]} xFrom={15} delay={600} />
        <Spring social={socials[1]} xFrom={15} delay={500} />
        <Spring social={socials[2]} xFrom={15} delay={700} />
      </div>
    );
  } else if (styleType === 2) {
    return (
      <div className="socials-bar">
        <Spring social={socials[0]} friction={15} scaleFrom={0.5} delay={0} />
        <Spring social={socials[1]} friction={15} scaleFrom={0.5} delay={100} />
        <Spring social={socials[2]} friction={15} scaleFrom={0.5} delay={200} />
      </div>
    );
  } else if (styleType === 3) {
    return (
      <div className="socials-bar">
        <Spring social={socials[0]} friction={4} xFrom={0.5} delay={0} />
        <Spring social={socials[1]} friction={4} xFrom={-0.5} delay={100} />
        <Spring social={socials[2]} friction={4} xFrom={0.5} delay={200} />
      </div>
    );
  } else {
    return (
      <div className="socials-bar">Invalid SocialsBar styleType number</div>
    );
  }
};

export default SocialsBar;
