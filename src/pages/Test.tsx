import React from "react";
import NavSlider from "../components/NavSlider";
import INav from "../interfaces/navList";
import navLists from "../data/navLists";

import { useRef, useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";

import "./styles.css";

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

export default function Card() {
  const ref = useRef<HTMLInputElement>(null);
  const [xys, set] = useState([0, 0, 1]);

  const props = useSpring({ xys, config: config["wobbly"] });

  return (
    <div className="ccard-main" ref={ref}>
      <animated.div
        className="ccard"
        style={{ transform: props.xys.to(trans) }}
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
}

// const about = navLists[1];
// const works = navLists[2];

// const navListSmall: INav[] = [about, works];

// export default function Test() {
//   return (
//     <div className="navbar" id="big">
//       <NavSlider navItems={navListSmall} navSize="big">
//         Slide.
//       </NavSlider>
//     </div>
//   );
// }
