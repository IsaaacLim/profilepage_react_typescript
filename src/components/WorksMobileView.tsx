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
import NavPopup from "./NavPopup";
import INav from "../interfaces/navList";

/**
 * @function WorksCards
 * @returns Mobile view of works done
 */
const WorksMobileView: React.FC<{
  works: IWork[];
  navItems: INav[];
}> = ({ works, navItems }) => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [selectedWork, setSelectedWork] = useState<IWork | undefined>();

  const handleSelectWork = (i: number) => {
    setIsModalActive(true);
    setSelectedWork(works[i]);
  };

  const handleClose = () => {
    setIsModalActive(false);
  };

  return (
    <>
      <Modal
        isModalActive={isModalActive}
        work={selectedWork}
        handleClose={handleClose}
      />
      <NavPopup bgColor="steel" navItems={navItems}>
        <div className="works-cont-mobile">
          <h1>Latest Works</h1>
          <WorksButtons works={works} handleSelectWork={handleSelectWork} />
        </div>
      </NavPopup>
    </>
  );
};

/**
 * Helper function
 * @param works Works data
 * @param handleSelectWork Open selected work details
 * @returns Selected work
 */
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

/**
 * Helper function
 * @param isModalActive True when user selects a work
 * @param work Selected work
 * @param handleClose close modal function 
 * @returns Modal of selected work details
 */
function Modal({
  isModalActive,
  work,
  handleClose,
}: {
  isModalActive: boolean;
  work: IWork;
  handleClose: () => void;
}) {
  const transApi = useSpringRef();
  const modalApi = useSpringRef();

  // Modal and background animation
  const transition = useTransition(isModalActive ? work : [], {
    ref: transApi,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  // Modal animation
  const modalRender = useSpring({
    ref: modalApi,
    config: config.stiff,
    from: { y: "1000px", scale: "0" },
    to: {
      y: isModalActive ? "0px" : "1000px",
      scale: isModalActive ? "1" : "0",
    },
  });

  // Sequence of animations on open & on close
  useChain(
    isModalActive ? [transApi, modalApi] : [modalApi, transApi],
    [0, 0.1]
  );

  return (
    <>
      {transition((style: {opacity: number}, work: IWork) => {
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

export default WorksMobileView;
