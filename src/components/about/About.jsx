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
              <small>
                I planned and succeeded in the biggest robbery in human history.{" "}
              </small>
            </article>

            <article className="about__card">
              <FaUserSecret className="about__card-icon" />
              <h5>History</h5>
              <small>
                At the age of 19, he stopped renewing his identity card, so that
                he would not be registered{" "}
              </small>
            </article>

            <article className="about__card">
              <SiNounproject className="about__card-icon" />
              <h5>Projects</h5>
              <small>
                Rob the Royal Mint of Spain , Rob the Bank of Spain (all
                succeeded){" "}
              </small>
            </article>
          </div>
          <p>
          I'm the Professor (Sergio Marquina) which is a fictional character in the Netflix series Money Heist, portrayed by Lavro Morte. And in the series I am the mastermind who assembled the group, as well as my brother Berlin.
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
