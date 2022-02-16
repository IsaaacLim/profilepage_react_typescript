import React from "react";
import Slider from "../components/NavSlider";
import INav from "../interfaces/navbar";

import styles from "./styles.module.css"; // tmp

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
    <div className={styles.container}>
      <Slider NavItems={NavItems}>Slide.</Slider>
    </div>
  );
}
