import React from "react";
import Slider from "../components/NavSlider";
import routes from "../config/routes";
import INav from "../interfaces/navList";

// const about = routes[1];
// const works = routes[2];

// const NavItems: INav[] = [
//   {
//     name: about.name,
//     path: about.path,
//   },
//   {
//     name: works.name,
//     path: works.path,
//   },
// ];

const NavItems: INav[] = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Works",
    path: "/works",
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
