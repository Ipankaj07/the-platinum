import React from "react";
import "./about.css";
import { FaAward, FaUserSecret } from "react-icons/fa";
import { SiNounproject } from "react-icons/si";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="https://tinyurl.com/296nsafz" alt="prof" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__card-icon" />
              <h5>Experience</h5>
              <small>10+ Years Working </small>
            </article>

            <article className="about__card">
              <FaUserSecret className="about__card-icon" />
              <h5>History</h5>
              <small>300+ Successfull Worldwide </small>
            </article>

            <article className="about__card">
              <SiNounproject className="about__card-icon" />
              <h5>Projects</h5>
              <small>Royal Mint , Bank of Spain </small>
            </article>
          </div>
          <p>
            The Professor (Sergio Marquina) is a fictional character in the
            Netflix series Money Heist, portrayed by Álvaro Morte. He is the
            mastermind of the heist who assembled the group, as well as Berlin's
            brother.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
