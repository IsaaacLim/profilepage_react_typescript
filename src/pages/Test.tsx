import React from "react";
import Slider from "../components/NavSlider";
import INav from "../interfaces/navbar";

const NavItems: INav[] = [
  {
    navName: "About",
    navLink: "/about",
  },
  {
    navName: "Works",
    navLink: "/works",
  },
];

export default function Test() {
  return (
    <div className="navbar">
      <Slider NavItems={NavItems}>Slide.</Slider>
    </div>
  );
}
