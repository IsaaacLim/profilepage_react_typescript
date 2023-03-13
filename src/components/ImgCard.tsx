import React from "react";
import { useRef, useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";

/**
 * @param image: Card image
 * @note other config options: gentle, wobbly, stiff, slow, molasses
 * @returns Image card that wobbles
 *
 * --- NOTES ---
 * @IMPORTANT
 * Deployment through Netlify calculates `cals` and `trans` differently
 * Original values:
 *  - rect x & y: ( ... ) / 5;
 *  - trans: perspective(600px)
 * Netlify values:
 *  - rect x & y: ( ... ) / 10;
 *  - trans: perspective(900px)
 */
const Card: React.FC<{ image: string }> = ({ image }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [xys, set] = useState([-5, -10, 1]);

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

/**
 * Helper function
 * @param x x-axis contact point
 * @pararm y y-axis contact point
 * @rect scale factor
 * @returns Mouse contact points
 */
 const calc = (
  x: number,
  y: number,
  rect: { top: number; height: number; left: number; width: number }
) => [
  -(y - rect.top - rect.height / 2) / 10,
  (x - rect.left - rect.width / 2) / 10,
  1.2,
];

/**
 * Helper function
 * @param x x-axis transformation
 * @param y y-axis transformation 
 * @param s scale transformation
 * @returns Card transformation style
 */
const trans = (x: number, y: number, s: number) =>
  `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default Card;
