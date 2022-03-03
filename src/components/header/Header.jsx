import React from "react";
import "./header.css";
import CTA from "./CTA";
import Prof from "../../assets/prof.png";
import HeaderSocial from "./HeaderSocial";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>The Professor</h1>
        <h5 className="text-light">Criminal Mastermind - Heist Planner</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={Prof} alt="profile-pic" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
