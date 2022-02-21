import React from "react";
import { useRef, useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";

/**
 * @function Card
 * @param image: Background image
 * @returns Image card that wobbles
 * other config options: gentle, wobbly, stiff, slow, molasses
 *
 * --- HELPER FUNCTION ---
 * @function calc
 * @returns Mouse contact points; 3rd variable is the scale factor
 *
 * @function trans
 * @returns Card transformation style
 */

/* -------- Helper functions -------------------------------------------------*/
const calc = (
  x: number,
  y: number,
  rect: { top: number; height: number; left: number; width: number }
) => [
  -(y - rect.top - rect.height / 2) / 10,
  (x - rect.left - rect.width / 2) / 10,
  1.2,
];

const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

/* -------- Main function  ---------------------------------------------------*/
const Card: React.FC<{ image: string }> = ({ image }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [xys, set] = useState([0, 0, 1]);

  const props = useSpring({ xys, config: config["gentle"] });

  return (
    <div className="card-cont" ref={ref}>
      <animated.div
        className="card"
        style={{
          transform: props.xys.to(trans),
          backgroundImage: `url(${image})`,
        }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          let rect: any;
          if (!!ref.current) {
            rect = ref.current.getBoundingClientRect();
          }
          set(calc(e.clientX, e.clientY, rect));
        }}
      />
    </div>
  );
};

export default Card;
