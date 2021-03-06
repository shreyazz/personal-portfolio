import React, { useState, useEffect } from "react";
import { projectSource } from "../projectSource";
import { ProjectWrapper, ProjectCardWrapper } from "../styles/ProjectLElements";

const Projects = ({ theme }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setProjects(projectSource);
      setIsLoading(false);
    }, 325);
  }, []);
  return (
    <ProjectWrapper theme={theme}>
      {!isLoading ? (
        projects.map((project, id) => {
          return (
            <ProjectCardWrapper key={id.toString()} theme={theme} className={project.wip && 'wip-div'}>
              <img src={project.image} alt=""/>
              {project.wip && <div class="ribbon ribbon-top-right"><span>Work in progress</span></div>}
              <div className="wip"></div>
              <h1>{project.name}</h1>
              <p>{project.desc}</p>
              {!project.wip && <div className="links">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <p>Use It</p>
                </a>
                <a href={project.repo} target="_blank" rel="noreferrer">
                  <p>Repository</p>
                </a>
              </div>}
            </ProjectCardWrapper>
          );
        })
      ) : (
        <div className="loading">
          {" "}
          <div className="blinker"></div>{" "}
        </div>
      )}
    </ProjectWrapper>
  );
};

export default Projects;
