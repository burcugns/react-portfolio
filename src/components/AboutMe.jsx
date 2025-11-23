function AboutMe() {
  return (
    <>
      <div className="about-me-container">
        <h2 className="about-me-title">Junior Full Stack Developer</h2>
        <div className="about-me-description">
          <p>
            Hello, I am Burcu. I am a career switcher from healthcare to
            software development. I'm eager and curious, and I build projects to
            practice and reinforce what I learn. I enjoy solving problems,
            exploring new technologies, and turning ideas into functional,
            user-focused applications.
          </p>
        </div>
      </div>

      <div className="tech-stacks-section">
        <h3 className="tech-stacks-title">Tech Stack</h3>
        <div className="tech-stacks-container">
          <div className="tech-category">
            <h4 className="tech-category-title">FRONTEND</h4>
            <div className="tech-names">
              <span className="tech-name">HTML</span>
              <span className="tech-name">CSS</span>
              <span className="tech-name">JavaScript</span>
              <span className="tech-name">React</span>
            </div>
          </div>

          <div className="tech-category">
            <h4 className="tech-category-title">BACKEND</h4>
            <div className="tech-names">
              <span className="tech-name">Node.js</span>
              <span className="tech-name">Express</span>
              <span className="tech-name">Python</span>
            </div>
          </div>

          <div className="tech-category">
            <h4 className="tech-category-title">DATABASE</h4>
            <div className="tech-names">
              <span className="tech-name">mySQL</span>
              <span className="tech-name">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
