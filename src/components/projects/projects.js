import React from "react"

import styled from "styled-components"

import ProjectCard from "./project_card"

const ProjectsWrapper = styled.div`
  margin-left: 5rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 960px) {
    margin-right: 2.5rem;
    margin-left: 2.5rem;
  }
`

// Displays various projects that I've been working on. Takes in a collection of
// nodes which represent markdown files that contain information about
const Projects = ({ data: projects }) => {
  console.log(projects)

  return (
    <ProjectsWrapper id="projects">
      <h2>Here are some things I've been working on!</h2>
      {projects.map(({ node: project }) => {
        return <ProjectCard data={project} />
      })}
    </ProjectsWrapper>
  )
}

export default Projects
