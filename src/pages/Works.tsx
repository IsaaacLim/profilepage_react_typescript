import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import cards from "../config/works";

// HELPERS to curate spring data/values that are later being interpolated into css
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// Transforms the positions of the cards (remove rotateX for flat-view)
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`; //rotateX(30deg)

function Deck() {
  const [gone] = useState(() => new Set()); // Flag when all cards are flickered out
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the HELPERS above
  // Create a gesture. Interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.3; // Force needed to flicker cards out
      const dir = xDir < 0 ? -1 : 1; // Flicker direction to left/right only
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, card ready to fly out
      api.start((i) => {
        if (index !== i) return; // Only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; // When a card is 'gone' it flies out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );

  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className="deck" key={i} style={{ x, y }}>
          {
            <animated.div
              {...bind(i)}
              style={{
                transform: interpolate([rot, scale], trans),
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="content">
                <div className="img-placeholder">
                  <img src={cards[i].img} alt={cards[i].alt} />
                </div>
                <div className="img-cover" />
                <div className="txt-placeholder">
                  <p id="title">{cards[i].title}</p>
                  <div>
                    <p id="subtitle">Description:</p>
                    <ul>
                      {cards[i].description.map((text, index) => {
                        return <li key={index}>{text}</li>;
                      })}
                    </ul>
                  </div>
                  <div>
                    <p id="subtitle">Tech:</p>
                    <p>{cards[i].tech}</p>
                  </div>
                  <div>
                    <p id="subtitle">Example features:</p>
                    <ul>
                      {cards[i].features.map((text, index) => {
                        return <li key={index}>{text}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </animated.div>
          }
        </animated.div>
      ))}
    </>
  );
}

const Works = () => {
  return (
    <div className="works-cont">
      <Deck />
      {/* <NavBar /> */}
    </div>
  );
};

export default Works;
