import React from "react";
import { useSpring, animated } from "@react-spring/web";

const FadeIn: React.FC<{
  yFrom?: string;
  scaleFrom?: number;
  delay?: number;
}> = ({ children, yFrom = "5px", scaleFrom = 1, delay = 1000 }) => {
  const styles = useSpring({
    from: { y: yFrom, scale: scaleFrom, opacity: 0 },
    to: { y: "0", scale: 1, opacity: 1 },
    delay: delay,
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

export default FadeIn;
