import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [repos, setRepos] = useState([]);
  const [searchProject, setsearchProject] = useState("");

  const username = "burcugns";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
      })
      .catch((err) => console.error(err));
  }, [username]);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLocaleLowerCase().includes(searchProject.toLocaleLowerCase())
  );

  return (
    <div className="home-page projects-page">
      <h2 className="projects-title">GITHUB PROJECTS</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchProject}
          onChange={(e) => setsearchProject(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="projects-container">
        {filteredRepos.map((repo) => (
          <div key={repo.id} className="project-item">
            <h3 className="project-name">
              {repo.name
                .replaceAll("-", " ")
                .replaceAll("_", " ")
                .toUpperCase()}
            </h3>
            <a href={repo.html_url} target="_blank" className="project-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
