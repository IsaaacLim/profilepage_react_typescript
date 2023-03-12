import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import IWork from "../interfaces/work";

/**
 * @param works Works Data
 * @returns Deck of Works card
 */
const WorksDeck: React.FC<{ works: IWork[] }> = ({ works }) => {
  // Flag when all cards are flickered out
  const [gone] = useState(() => new Set());

  // Create a bunch of Springs using the Helper functions
  const [props, api] = useSprings(works.length, (i: number) => ({
    ...to(i),
    from: from(i),
  }));

  // Create a gesture. Interested in down-state, delta(current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({
      args: [index],
      down,
      movement: [mx],
      direction: [xDir],
      velocity: [xVel],
    }: {
      args: [number],
      down: boolean,
      movement: [number],
      direction: [number],
      velocity: [number],
    }) => {
      // Force needed to flicker cards out
      const trigger = xVel > 0.3;
      // Flicker direction (left/right only)
      const dir = xDir < 0 ? -1 : 1;
      // Condition to throw card out
      if (!down && trigger) gone.add(index);

      /**
       * Only interested in changing spring-dat for the current Card 
       * @const isGone Used to trigger card flicker out effects
       * @const x If a card isGone, it flies out left/right, else return to 0
       * @const rot How much the card spins, flicking it harder increases rotations
       * @const scale Active cards are lifted up
       */
      api.start((i: number) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * xVel : 0);
        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });

      // Reset deck once all cards are flicked out
      if (!down && gone.size === works.length)
        setTimeout(() => {
          gone.clear();
          api.start((i: number) => to(i));
        }, 600);
    }
  );

  return (
    <>
      {props.map(({ x, y, rot, scale }: {x: number, y: number, rot: number, scale: number}, i: number) => (
        <animated.div className="deck" key={i} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            style={{ transform: interpolate([rot, scale], trans) }}
            className="cards"
          >
            <div className="content">
              <div className="img-placeholder">
                {i === works.length - 1 ? (
                  <img
                    src={works[i].img}
                    alt={works[i].alt}
                    id={"cover-full"}
                  />
                ) : (
                  <img src={works[i].img} alt={works[i].alt} />
                )}
              </div>
              {i === works.length - 1 ?
              // Top card
              (
                <div className="img-cover" id="cover-full" />
              ) : 
              // Every other cards
              (
                <div>
                  {/* todo: may be able to remove img-cover */}
                  <div className="img-cover" />
                  <div className="txt-placeholder">
                    <p id="title">{works[i].title}</p>
                    <div>
                      <p id="subtitle">Description:</p>
                      <ul>
                        {works[i].description.map((text, index) => {
                          return <li key={index}>{text}</li>;
                        })}
                      </ul>
                    </div>
                    <div>
                      <p id="subtitle">Tech:</p>
                      <p>{works[i].tech}</p>
                    </div>
                    <div>
                      <p id="subtitle">Example Features:</p>
                      <ul>
                        {works[i].features.map((text, index) => {
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

/**
 * Helper function
 * @returns To curate spring data/values that are later being interpolated into css
 */
const to = (i: number) => ({
 x: 0,
 y: i * -4,
 scale: 1,
 rot: -10 + Math.random() * 20,
 delay: i * 100,
});

/**
 * Helper function
 * @returns To curate spring data/values that are later being interpolated into css
 */
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

/**
 * Helper function
 * @returns Transforms the positions of the cards (add rotateX for x-axis rotations)
 */
const trans = (r: number, s: number) =>
 `perspective(1500px) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

export default WorksDeck;
