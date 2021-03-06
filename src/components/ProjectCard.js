import React from "react";
import "../App.css";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {/* <a href={project.url}> */}
      <img src={project.preview} alt={project.name} />
      {/* </a> */}
      <div className="project-context">
        <div className="links">
          <h3>{project.name}</h3>

          <a href={project.github} className="project-link">
            <i
              className="fab fa-github-square fa-2x"
              style={{ color: "black" }}
            ></i>
          </a>
          {project.demo.length > 0 ? (
            <a href={project.demo} className="project-link">
              <i
                className="fab fa-brands fa-youtube fa-2x"
                style={{ color: "black" }}
              ></i>
            </a>
          ) : null}
        </div>
        <p>{project.description}</p>
        <ul className="tech-list">
          {project.tech.map((t) => {
            return <li key={t}>{t}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
