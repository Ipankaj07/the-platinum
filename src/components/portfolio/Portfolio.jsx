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
      "Paper origami birds.",
    image: P1,
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    title:
      "Successfully robbed the Bank of Spain.",
    image: P2,
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    title:
      "Exposing of Spanish State Secrets.",
    image: P3,
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    title:
      "I successfully robbed the Royal Mint of Spain, a robbery my father had planned.",
    image: P4,
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    title:
      "I would rarely be seen without a formal suit, overcoat and tie. But I would change occasionally to avoid being traced by the police.",
    image: P5,
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 6,
    title:
      "Oversaw the Bank of Spain Heist, which had been initially planned by Berlin.",
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
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  Dummy Button
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
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