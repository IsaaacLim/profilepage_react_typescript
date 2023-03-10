import React, { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";
import FlipCard from "./FlipCard";
import IWork from "../interfaces/work";

/**
 * @function WorksCards
 * @returns Mobile view of works done
 */

/* -------- Helper function --------------------------------------------------*/
function WorksButtons({
  works,
  handleSelectWork,
}: {
  works: Array<IWork>;
  handleSelectWork: (i: number) => void;
}) {
  return (
    <div className="works-buttons">
      {works.map((work, i) => {
        return (
          <button
            key={i}
            className="button"
            onClick={() => handleSelectWork(i)}
          >
            <div className="img-placeholder">
              <img src={work.img} alt={work.alt} />
            </div>
            <div>{work.title}</div>
          </button>
        );
      })}
    </div>
  );
}

function Modal({
  works,
  isModalActive,
  selectedWork,
  handleClose,
}: {
  works: Array<IWork>;
  isModalActive: boolean;
  selectedWork: number;
  handleClose: () => void;
}) {
  const transApi = useSpringRef();
  const modalApi = useSpringRef();
  const modalRender = useSpring({
    ref: modalApi,
    config: config.stiff,
    from: { y: "1000px", scale: "0" },
    to: {
      y: isModalActive ? "0px" : "1000px",
      scale: isModalActive ? "1" : "0",
    },
  });
  const transition = useTransition(isModalActive ? selectedWork : [], {
    ref: transApi,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  useChain(
    isModalActive ? [transApi, modalApi] : [modalApi, transApi],
    [0, 0.1]
  );

  return (
    <>
      {transition((style, selectedWork) => {
        const work = works[selectedWork];
        return (
          <animated.div className="modal-container" style={style}>
            <div className="modal-background">
              <p className="modal-close" onClick={handleClose}>
                X
              </p>
              <animated.div style={modalRender}>
                <FlipCard work={work} />
              </animated.div>
            </div>
          </animated.div>
        );
      })}
    </>
  );
}

/* -------- Main function --------------------------------------------------*/
const WorksMobileView: React.FC<{ works: IWork[] }> = ({ works }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedWork, setSelectedWork] = useState(0);

  const handleSelectWork = (i: number) => {
    setIsModalActive(true);
    setSelectedWork(i);
  };

  const handleClose = () => {
    setIsModalActive(false);
  };

  return (
    <>
      <Modal
        works={works}
        isModalActive={isModalActive}
        selectedWork={selectedWork}
        handleClose={handleClose}
      />
      <div className="works-cont-mobile">
        <h1>Latest Works</h1>
        <WorksButtons works={works} handleSelectWork={handleSelectWork} />
      </div>
    </>
  );
};

export default WorksMobileView;
