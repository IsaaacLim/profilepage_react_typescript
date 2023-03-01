import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import IWork from "../interfaces/work";

/**
 * @function Deck
 * @returns Deck of Works card
 * @const
 * 	gone: Flag when all cards are flickered out
 * 	[props, api]: Create a bunch of springs using the Helper functions
 * 	bind{
 * 		Create a gesture. Interested in down-state, delta(current-pos - click-pos), direction and velocity
 * 		@const
 * 			trigger: Force needed to flicker cards out
 * 			dir: Flicker direction (left/right only)
 * 		@param if(!down & trigger): Condition to throw card out
 * 		@function api.start
 * 			Only interested in changing spring-dat for the current Card
 * 			@const
 * 				isGone: Used to trigger card flicker out effects
 * 				x: If a card isGone, it flies out left/right, else return to 0
 * 				rot: How much the card spins, flicking it harder increases rotations
 * 				scale: Active cards are lifted up
 * 	}
 0-*
 *
 * --- HELPER FUNCTION ---
 * @const to & @const from: To curate spring data/values that are later being interpolated into css
 * @const trans: Transforms the positions of the cards (add rotateX for x-axis rotations)
 */

/* -------- Helper functions -------------------------------------------------*/
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

const trans = (r: number, s: number) =>
  `perspective(1500px) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

/* -------- Main function  ---------------------------------------------------*/
const Deck: React.FC<{ cards: IWork[] }> = ({ cards }) => {
  const [gone] = useState(() => new Set());

  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.3;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) gone.add(index);
      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1;
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
          <animated.div
            {...bind(i)}
            style={{ transform: interpolate([rot, scale], trans) }}
            className="cards"
          >
            <div className="content">
              <div className="img-placeholder">
                {i === cards.length - 1 ? (
                  <img
                    src={cards[i].img}
                    alt={cards[i].alt}
                    id={"cover-full"}
                  />
                ) : (
                  <img src={cards[i].img} alt={cards[i].alt} />
                )}
              </div>
              {/* Top card */}
              {i === cards.length - 1 ? (
                <div className="img-cover" id="cover-full" />
              ) : (
                <div>
                  {/* todo: may be able to remove img-cover */}
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
                      <p id="subtitle">Example Features:</p>
                      <ul>
                        {cards[i].features.map((text, index) => {
                          return <li key={index}>{text}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </animated.div>
        </animated.div>
      ))}
    </>
  );
};

export default Deck;
