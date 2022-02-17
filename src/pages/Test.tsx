import React from "react";
import NavSlider from "../components/NavSlider";
import INav from "../interfaces/navList";
import navLists from "../data/navLists";

const about = navLists[1];
const works = navLists[2];

const navListSmall: INav[] = [about, works];

export default function Test() {
  return (
    <div className="navbar" id="small">
      <NavSlider navItems={navListSmall} navSize="small">
        Slide.
      </NavSlider>
    </div>
  );
}
