import React from "react";
import { useRef, useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";

//default
// gentle
// wobbly
// stiff
// slow
// molasses
const calc = (
  x: number,
  y: number,
  rect: { top: number; height: number; left: number; width: number }
) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.4,
];
const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Card: React.FC = ({ children }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [xys, set] = useState([0, 0, 1]);

  const props = useSpring({ xys, config: config["slow"] });

  return (
    <div className="card-cont" ref={ref}>
      <animated.div
        className="card"
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          let rect: any;
          if (!!ref.current) {
            rect = ref.current.getBoundingClientRect();
          }
          set(calc(e.clientX, e.clientY, rect));
        }}
      >
        <p>{children}</p>
      </animated.div>
    </div>
  );
};

export default Card;
