import React from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import {SiNetflix} from "react-icons/si";
import {FaWikipediaW} from "react-icons/fa";

function HeaderSocial() {
  return (
    <div className="header__social">

      <a href="https://www.netflix.com/in/title/80192098" target="_blank">
        <SiNetflix />
      </a>

      <a href="https://en.wikipedia.org/wiki/Professor_(Money_Heist)" target="_blank">
        <FaWikipediaW />
      </a>

      <a href="https://github.com/ipankaj07" target="_blank">
        <FiGithub />
      </a>

      <a href="https://www.instagram.com" target="_blank">
        <FiInstagram />
      </a>
    </div>
  );
}

export default HeaderSocial;
