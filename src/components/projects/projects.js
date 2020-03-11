import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import ProjectCard from "./project_card"
import background from "../../assets/images/backgrounds/projects_background.svg"

// The header for this section will be right above where the projects background starts
const ProjectsHeader = styled.h2`
  margin-left: 5rem;
  margin-right: 0.5rem;

  @media (max-width: 960px) {
    margin-right: 2.5rem;
    margin-left: 2.5rem;

    font-size: 20pt;
  }

  font-size: 23pt;
`

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
  }
`

// Displays various projects that I've been working on. Takes in a collection of
// nodes which represent markdown files that contain information about
const Projects = () => {
  // Gets our projects from graphql
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/.projects./" } }
      ) {
        edges {
          node {
            html
            frontmatter {
              title
              githubLink
              projectLink
              tech
            }
          }
        }
      }
    }
  `)
  const projects = data.allMarkdownRemark.edges

  return (
    <div id="projects">
      <ProjectsHeader>
        Here are some things I've been working on!
      </ProjectsHeader>
      <BackgroundWrapper>
        <ProjectsWrapper>
          {projects.map(({ node: project }, index) => {
            return <ProjectCard data={project} key={index} />
          })}
        </ProjectsWrapper>
      </BackgroundWrapper>
    </div>
  )
}

export default Projects
