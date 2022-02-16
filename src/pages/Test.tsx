import React from "react";
import Slider from "../components/NavSlider";

import styles from "./styles.module.css"; // tmp

// export default function Test(props: NavItems) {
export default function Test() {
  return (
    <div className={styles.container}>
      {/* <Slider Inter={Navs}>Slide.</Slider> */}
      <Slider>Slide.</Slider>
    </div>
  );
}
