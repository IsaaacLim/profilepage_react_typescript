import React from "react";
import Slider from "../components/NavSlider";
import routes from "../config/routes";
import INav from "../interfaces/navbar";

const about = routes[1];
const works = routes[2];

const NavItems: INav[] = [
  {
    navName: about.name,
    navLink: about.path,
  },
  {
    navName: works.name,
    navLink: works.path,
  },
];

export default function Test() {
  return (
    <div className="navbar" id="small">
      <Slider navItems={NavItems} navSize="small">
        Slide.
      </Slider>
    </div>
  );
}
