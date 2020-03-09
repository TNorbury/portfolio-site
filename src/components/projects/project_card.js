import React from "react"

import styled from "styled-components"

const CardWrapper = styled.div`
//   border-style: solid;
//   border-width: 1px;
  height: auto;
  width: 500px;

  -webkit-box-shadow: 0px 3px 3px 0px rgba(50, 50, 50, 0.75);
  -moz-box-shadow: 0px 3px 3px 0px rgba(50, 50, 50, 0.75);
  box-shadow: 0px 3px 3px 0px rgba(50, 50, 50, 0.75);
`

const ProjectTitle = styled.div`
  font-size: 20pt;
  font-weight: bold;
  margin-left: 0.25rem;
`

const ProjectInfo = styled.div`
  font-size: 15pt;

  margin-left: 0.5rem;
  margin-right: 0.5rem;

  p {
    margin-bottom: 0.5rem;
    line-height: normal;
  }
`

const ProjectCard = ({ data: project }) => {
  return (
    <CardWrapper>
      <ProjectTitle>{project.frontmatter.title}</ProjectTitle>
      <ProjectInfo
        dangerouslySetInnerHTML={{ __html: project.html }}
      ></ProjectInfo>
    </CardWrapper>
  )
}

export default ProjectCard
