import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Royal Mint of Spain</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Organiser</h4>
                <small className="text-light">The Professor</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Second-in command</h4>
                <small className="text-light">Berlin</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Goal</h4>
                <small className="text-light">To print their own untraceable banknotes (approx. €2.4 billion)</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Outcome</h4>
                <small className="text-light">Escaped with €984 million</small>
              </div>
            </article>
          </div>
        </div>

        {/* ---- */}

        <div className="experience__backend">
          <h3>The Bank of Spain</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Organiser</h4>
                <small className="text-light">The Professor</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Second-in command</h4>
                <small className="text-light">Palermo</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Goal</h4>
                <small className="text-light">To steal all the gold from Bank of Spain</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Outcome</h4>
                <small className="text-light">Escaped with 90 tons of gold (approx. €4.355 billion)</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
