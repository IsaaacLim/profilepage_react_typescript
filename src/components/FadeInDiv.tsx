import React from "react";
import { useSpring, animated } from "@react-spring/web";

const FadeIn: React.FC<{
  className?: string;
  id?: string;
  yFrom?: string;
  scaleFrom?: number;
  delay?: number;
}> = ({
  children,
  className,
  id,
  yFrom = "5px",
  scaleFrom = 1,
  delay = 500,
}) => {
  const styles = useSpring({
    from: { y: yFrom, scale: scaleFrom, opacity: 0 },
    to: { y: "0", scale: 1, opacity: 1 },
    delay: delay,
  });

  return (
    <animated.div className={className} id={id} style={styles}>
      {children}
    </animated.div>
  );
};

export default FadeIn;
