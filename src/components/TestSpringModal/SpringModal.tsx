import React, { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";
import works from "../../data/works";
import FlipCard from "../TestFlipCard/FlipCard";

function SpringModal() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [index, setIndex] = useState(0);
  const transApi = useSpringRef();
  const modalApi = useSpringRef();
  const render = useSpring({
    ref: modalApi,
    config: config.stiff,
    from: { y: "1000px", scale: "0" },
    to: {
      y: isModalActive ? "0px" : "1000px",
      scale: isModalActive ? "1" : "0",
    },
  });
  const transition = useTransition(isModalActive ? index : [], {
    ref: transApi,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const handleClick = (i: number) => {
    setIsModalActive(true);
    setIndex(i);
  };

  const handleClose = () => {
    setIsModalActive(false);
  };

  useChain(
    isModalActive ? [transApi, modalApi] : [modalApi, transApi],
    [0, 0.1]
  );

  return (
    <div>
      {transition((style, i) => {
        const work = works[i];
        return (
          <animated.div id="modal-container" style={style}>
            <div className="modal-background">
              <p className="modal-close" onClick={handleClose}>
                X
              </p>
              <animated.div style={render}>
                <FlipCard work={work} />
              </animated.div>
            </div>
          </animated.div>
        );
      })}
      <div className="contentzz">
        <h1>Latest Works</h1>
        <div className="buttons">
          {works.map((work, i) => {
            return (
              <button key={i} className="button" onClick={() => handleClick(i)}>
                <div className="img-placeholder">
                  <img src={work.img} alt={work.alt} />
                </div>
                <div>{work.title}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SpringModal;
