import React from "react";
import { useSpring, animated } from "@react-spring/web";

/**
 * @param yFrom initial render with y-axis offset
 * @param scaleFrom initial render with scale
 * @param delay render component after delay
 * @returns Div component that fades in according to settings
 */
const FadeInDiv: React.FC<{
  className?: string;
  id?: string;
  yFrom?: string;
  scaleFrom?: number;
  delay?: number;
}> = ({ children, className, id, yFrom = "5px", scaleFrom = 1, delay = 0 }) => {
  const styles = useSpring({
    from: { y: yFrom, scale: scaleFrom, opacity: 0 },
    to: { y: "0", scale: 1, opacity: 1 },
    delay: 500 + delay,
  });

  return (
    <animated.div className={className} id={id} style={styles}>
      {children}
    </animated.div>
  );
};

export default FadeInDiv;
