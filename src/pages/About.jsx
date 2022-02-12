import React from "react";
import "../styles/css/style.css";
import Image1 from "../images/greens.png";
import Image2 from "../images/hot-air-balloon.png";
import Image3 from "../images/mountains.png";
import Image4 from "../images/world-tree.png";
import Image5 from "../images/hourglass.png";

export const About = () => {
  return (
    <div className="about-cont">
      <div className="section" id="sec1">
        <h2>Making my way into the software development industry.</h2>
        <div className="text">
          <p>
            My name is Isaac and I'm a work in progress. While I'm still
            gathering more experiences into my stash, I'm proud of my skills in
            C, C++, HTML, CSS &amp; JavaScript
          </p>
          <p id="note">Continue scrolling to see what I'm made of</p>
        </div>
        <img src={Image1} alt="Winter greens" />
      </div>
      <div className="section" id="sec2">
        <img src={Image2} alt="Hot air balloon" id="img1" />
        <div id="head1">
          <h2>
            Chemical engineer,
            <br />
            Artist,
            <br />
            Gen Y/Z
          </h2>
        </div>
        <div id="head2">
          <h2>Something tells me I'm on the right path.</h2>
        </div>
        <img src={Image3} alt="Sun over mountains" id="img2" />
        <div className="group1">
          <img src={Image4} alt="Huge trees on earth" id="img3" />
          <div className="text">
            <p>
              My talent lies within my ability to think critically.
              <br />
              My passion is in creating aesthetically pleasing work. Technology
              sector? Yes please!
            </p>
            <p id="note">Don't forget to check out my 'Works'</p>
          </div>
        </div>
      </div>
      <div className="section" id="sec3">
        <img src={Image5} alt="Hourglass" />
        <div>
          <h2>Facts my friends know about me</h2>
          <div className="text">
            <p>
              Badminton, volleyball, taekwondo, skateboarding, snowboarding,
              rock climbing; hand crafting, hair cutting; roller coasters, sky
              diving; &amp;
              <br /> pet pug called PuiPui (a.k.a Fatty)
            </p>
            <p id="note">If I'm reborn, let me be a gymnast. Tq</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
