import React from "react"

import styled from "styled-components"

import ProjectCard from "./project_card"

import background from "../../assets/images/backgrounds/projects_background.svg"

const BackgroundWrapper = styled.div`
  background-image: url(${background});
  // height: 50%;
  background-size: cover;
  // background-position: right bottom;
  background-repeat: no-repeat;

  // margin-bottom: 1rem;
`

const ProjectsWrapper = styled.div`
  margin-left: 5rem;
  margin-right: 0.5rem;

  @media (max-width: 960px) {
    margin-right: 2.5rem;
    margin-left: 2.5rem;

    h2 {
      font-size: 20pt;
    }
  }

  h2 {
    font-size: 23pt;
  }
`

// Displays various projects that I've been working on. Takes in a collection of
// nodes which represent markdown files that contain information about
const Projects = ({ data: projects }) => {
  return (
    <BackgroundWrapper>
      <ProjectsWrapper id="projects">
        <h2>Here are some things I've been working on!</h2>
        {projects.map(({ node: project, index }) => {
          return <ProjectCard data={project} index={index} />
        })}
      </ProjectsWrapper>
    </BackgroundWrapper>
  )
}

export default Projects
