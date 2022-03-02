import React from "react";
import "./portfolio.css";
import P1 from "../../assets/p1.jpg";
import P2 from "../../assets/p33.jpg";
import P3 from "../../assets/p3.jpg";
import P4 from "../../assets/p4.jpg";
import P5 from "../../assets/p5.jpg";
import P6 from "../../assets/p6.jpg";

const data = [
  {
    id: 1,
    title:
      "Money Heist’s Professor, Sergio (Alvaro Morte) has a habit of creating origami birds while negotiating with any officer. Many fans tried to decode this action and they have some interesting theories.",
    image: P1,
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    title:
      "Money Heist’s Professor, Sergio (Alvaro Morte) has a habit of creating origami birds while negotiating with any officer. Many fans tried to decode this action and they have some interesting theories.",
    image: P2,
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    title:
      "Money Heist’s Professor, Sergio (Alvaro Morte) has a habit of creating origami birds while negotiating with any officer. Many fans tried to decode this action and they have some interesting theories.",
    image: P3,
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    title:
      "Money Heist’s Professor, Sergio (Alvaro Morte) has a habit of creating origami birds while negotiating with any officer. Many fans tried to decode this action and they have some interesting theories.",
    image: P4,
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    title:
      "Money Heist’s Professor, Sergio (Alvaro Morte) has a habit of creating origami birds while negotiating with any officer. Many fans tried to decode this action and they have some interesting theories.",
    image: P5,
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 6,
    title:
      "Money Heist’s Professor, Sergio (Alvaro Morte) has a habit of creating origami birds while negotiating with any officer. Many fans tried to decode this action and they have some interesting theories.",
    image: P6,
    github: "https://github.com",
    demo: "https://github.com",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, title, image, github, demo }) => {
          return (
            <article key={id} className="porfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt="project-img" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;

/* 

 <article className="porfolio__item">
          <div className="portfolio__item-img">
            <img src={P1} alt="p-1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>


*/
