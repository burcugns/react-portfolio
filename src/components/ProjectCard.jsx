import { Link } from "react-router-dom";
import notesapp from "../img/notesapp.png";
import blogapp from "../img/blogapp.png";
import booktracker from "../img/booktracker.png";
import stressflow from "../img/stressflow.png";

function ProjectCard() {
  const myProjects = [
    {
      name: "Book Tracker",
      tech: "Typescript, Python, MongoDB, Tailwind CSS",
      img: booktracker,
    },
    {
      name: "Notes Application",
      tech: "Node/Express, HTML5, CSS3, JavaScript",
      img: notesapp,
    },
    {
      name: "Blog Application",
      tech: "Node/Express, MySQL, HTML, CSS, JavaScript",
      img: blogapp,
    },
    {
      name: "Stress Flow",
      tech: "React, Tailwind CSS, Firebase",
      img: stressflow,
    },
  ];

  return (
    <div className="project-cards-section">
      <div className="project-cards-container">
        <h3 className="my-projects-title">My Projects</h3>
        <div className="projects-container">
          {myProjects.map((project, index) => (
            <div key={index} className="project-item">
              <h3 className="project-name">{project.name}</h3>
              <img
                src={project.img}
                alt={project.name}
                className="project-image"
              />

              <p className="project-description">{project.tech}</p>
            </div>
          ))}
        </div>

        <div className="see-more-container">
          <Link to="/projects" className="see-more-link">
            See more projects →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
