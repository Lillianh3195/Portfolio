import Carousel from "./Carousel";

const Projects = (props) => {
  const { projects, slides, projectRef } = props;

  return (
    <>
      {projects.map((project, index) => (
        <div
          id={project.name}
          ref={projectRef}
          className="card mb-5"
          key={index}
          style={{ width: "50rem" }}
        >
          <Carousel imageSrcs={slides} />
          {/*<img src={project.imageSrc} className="card-img-top" alt="..."/>*/}
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">{project.description}</p>
            <div>
              {project.name === "Rhythm Resonance" ? (
                <a
                  href={project.link}
                  target="_blank" rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ margin: "10px" }}
                >
                  Play Here
                </a>
              ) : null}
            </div>
            <a href={project.url} target="_blank" rel="noreferrer" className="btn btn-primary">
              {project.url}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Projects;
