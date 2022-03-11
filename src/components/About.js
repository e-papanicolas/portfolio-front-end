import React from "react";
import "../App.css";

export default function About() {
  return (
    <div id="about-container">
      <h1>full stack developer</h1>
      <div className="blurb">
        For the past 16 years I've called various restaurants home. When the
        pandemic hit, and restaurants closed down, I had an unusual opportunity
        to use my newfound free time to learn something new. I started taking
        coding courses and was totally hooked on creating cool stuff from
        scratch. It was then that I decided that this was something I wanted to
        pursue full time. I recently graduated from the software engineering
        program at Flatiron School and am looking for my first job as a
        developer. I like building things that are accessible, inclusive,
        responsive and dynamic.
      </div>
      <div className="stacks">
        <div className="front-end">
          <h3>front-end</h3>
          <ul className="list">
            <li>
              JavaScript <i className="fab fa-js-square"></i>
            </li>
            <li>
              React.js <i className="fab fa-react"></i>
            </li>
            <li>
              HTML <i className="fab fa-html5"></i>
            </li>
            <li>
              CSS <i className="fab fa-css3-alt"></i>
            </li>
          </ul>
        </div>
        <div>
          <p className="and">&</p>
        </div>
        <div className="back-end">
          <h3>back-end</h3>
          <ul className="list">
            <li>
              Ruby <i className="fas fa-gem"></i>
            </li>
            <li>
              Ruby on Rails <i className="far fa-gem"></i>
            </li>
            <li>Sinatra</li>
            <li>
              PostgreSQL <i className="fas fa-database"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
