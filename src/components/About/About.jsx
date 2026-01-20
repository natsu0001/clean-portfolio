import './About.css';

const About = () => {
  return (
    <div className="about center">
      <div className="about__header">
        <img
          src="images/profile.jpg"
          alt="Abhishek Talukdar"
          className="about__picture"
        />

        <div className="about__intro">
          <h1>
            Hi, I am <span className="about__name">Abhishek Talukdar.</span>
          </h1>

          <h2 className="about__role">A Frontend Developer.</h2>

          <p className="about__desc">
            I am a fresher Frontend Developer with a strong foundation in HTML,
            CSS, and JavaScript, focused on building clean and responsive user
            interfaces.
          </p>
        </div>
      </div>

      <div className="about__contact center">
        <a href="resume.pdf">
          <span className="btn btn--outline">Resume</span>
        </a>

        <a
          href="https://github.com/natsu0001"
          aria-label="github"
          className="link link--icon"
        >
          GitHub
        </a>

        <a
          href="www.linkedin.com/in/abhishek-talukdar-890b13330"
          aria-label="linkedin"
          className="link link--icon"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default About;
