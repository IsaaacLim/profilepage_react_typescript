import React from "react";
import "../styles/css/style.css";
import {
  Animator,
  batch,
  Fade,
  FadeIn,
  FadeUp,
  Move,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

export const HomeInfo = () => {
  return (
    <div className="home-info-cont">
      <ScrollContainer>
        <ScrollPage page={1}>
          <div className="page1">
            <Animator animation={batch(ZoomIn(), FadeIn())}>
              <h2 className="header">
                Making my way <br /> into the software development <br />
                industry.
              </h2>
            </Animator>
            <Animator animation={batch(FadeIn())}>
              <p className="text">
                My name is Isaac and I'm a work in progress. While I'm still
                <br /> gathering more experiences into my stash, I'm proud of my
                <br />
                skills in C, C++, HTML, CSS &amp; JavaScript
              </p>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "40px" }}>I'm FadeUp</span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default HomeInfo;
