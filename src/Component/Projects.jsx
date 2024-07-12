import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <header className="projects-header">
        <h1>My Projects</h1>
      </header>
      <section className="projects-content">
        <p>Here are some of the projects I've worked on:</p>

        <div className="project">
          <h2>Medical Landing Page</h2>
          <p>
            <strong>Description:</strong> This project involved creating a
            landing page for a medical website.
          </p>
        </div>

        <div className="project">
          <h2>My Portfolio</h2>
          <p>
            <strong>Description:</strong> This project involved creating a
            portfolio website for my personal portfolio.
          </p>
          <p>
            <strong>Technologies Used:</strong> HTML, CSS, JavaScript, React
          </p>
        </div>
      </section>
    </div>
  );
};

export default Projects;
