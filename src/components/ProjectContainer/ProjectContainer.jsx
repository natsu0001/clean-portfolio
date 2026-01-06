const ProjectContainer = () => {
  return (
    <div className="project">
      <img
        src="images/project-image.jpg"
        alt="Project Name screenshot"
        style={{ width: "100%", objectFit: "cover" }}
      />

      <h3>Project Name</h3>

      <p className="project__description">
        This project is a responsive web application built using modern frontend
        technologies.
      </p>

      <ul className="project__stack">
        <li className="project__stack-item">HTML</li>
        <li className="project__stack-item">CSS</li>
        <li className="project__stack-item">JavaScript</li>
        <li className="project__stack-item">React</li>
      </ul>

      <a
        href="https://github.com/yourusername/project-repo"
        aria-label="source code"
        className="link link--icon"
      >
        GitHub
      </a>

      <a
        href="https://yourproject.live"
        aria-label="live preview"
        className="link link--icon"
      >
        Live
      </a>
    </div>
  );
};

export default ProjectContainer;
