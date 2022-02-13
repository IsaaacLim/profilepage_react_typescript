import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  // window.onscroll = function () {
  //   myFunction();
  // };
  // var navbar = document.getElementById("navbar");
  // var sticky = document.querySelector("#navbar");
  // if (sticky !== null) {
  //   if (sticky instanceof HTMLElement) var element = sticky.offsetTop;
  // }
  // function myFunction() {
  //   if (navbar !== null) {
  //     if (window.scrollY >= element) {
  //       navbar.classList.add("sticky");
  //       console.log("added");
  //     } else {
  //       navbar.classList.remove("sticky");
  //       console.log("removed");
  //     }
  //   }
  // }
  return (
    <div id="navbar">
      <Link to="/about">About</Link>
      <Link to="/works">Works</Link>
    </div>
  );
};

export default NavBar;
