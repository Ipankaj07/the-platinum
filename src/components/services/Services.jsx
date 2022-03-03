import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Team Building</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor.</p>
            </li>
          </ul>
        </article>

        {/* ---1st end */}

        <article className="service">
          <div className="service__head">
            <h3>Plan Making</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor.</p>
            </li>

          </ul>
        </article>

        {/* ---2nd - END */}

        <article className="service">
          <div className="service__head">
            <h3> Respect ++</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor.</p>
            </li>

          </ul>
        </article>

        {/* --3rd - END */}
      </div>
    </section>
  );
}

export default Services;
