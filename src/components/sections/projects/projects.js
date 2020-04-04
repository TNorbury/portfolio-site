import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import ProjectCard from "./project_card"

// The header for this section will be right above where the projects background starts
const ProjectsHeader = styled.h2`
  margin-left: 5rem;
  margin-right: 0.5rem;

  @media (max-width: 960px) {
    margin-right: 2.5rem;
    margin-left: 2.5rem;

    font-size: 20pt;
    text-shadow: 0px 0px 1px #FFFFFF;
  }

  font-size: 23pt;
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
        sort: { fields: frontmatter___title }
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
        <ProjectsWrapper>
          {projects.map(({ node: project }, index) => {
            return <ProjectCard data={project} key={index} />
          })}
        </ProjectsWrapper>
    </div>
  )
}

export default Projects
