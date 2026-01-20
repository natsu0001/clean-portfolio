import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css' ;
const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>

      <div className="projects__grid">
        <ProjectContainer />
        <ProjectContainer />
      </div>
    </section>
  )
}

export default Projects
