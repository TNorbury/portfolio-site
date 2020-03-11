import React from "react"

import styled from "styled-components"

import githubIcon from "../../assets/icons/github/GitHub-Mark-120px-plus.png"

const Wrapper = styled.div`
  display: flex;
`

const CardWrapper = styled.div`
  height: auto;
  width: 500px;
  @media (max-width: 500px) {
    width: 100%;
    margin-left: 0rem;
  }

  align-content: right;

  margin-bottom: 5rem;
  margin-left: 2.5rem;

  padding-bottom: 0.5rem;
  padding-top: 0.5rem;

  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.35);

  background-color: white;
`

const ProjectTitle = styled.a`
  font-size: 20pt;
  font-weight: bold;
  margin-left: 0.5rem;

  color: black;
  line-height: 100%;

  @media (max-width: 500px) {
    font-size: 16pt;
  }

  :hover {
    color: black;
  }
`

const ProjectInfo = styled.div`
  font-size: 15pt;

  margin-left: 1rem;
  margin-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.25rem;

  @media (max-width: 500px) {
    font-size: 13pt;
  }

  p {
    margin-bottom: 1rem;
    line-height: normal;
  }
`

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;

  margin-left: 1rem;
  margin-right: 1rem;
`

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  // margin-left: 1rem;
  // margin-bottom
  li {
    align-self: flex-end;
    margin-right: 15px;
    line-height: 100%;
    font-size: 12pt;
  }
`

const GithubIcon = styled.div`
  :hover {
    color: blue;
  }

  img {
    width: 32px;
    height: 32px;
    margin-bottom: 0;

    :hover {
      color: blue;
    }
  }
`

const ProjectCard = ({ data: project }) => {
  return (
    <Wrapper>
      <CardWrapper>
        {/* Clicking on the title will open the website associated with this 
            project. This may just be the github link... */}
        <ProjectTitle href={project.frontmatter.projectLink}>
          {project.frontmatter.title}
        </ProjectTitle>
        <ProjectInfo
          dangerouslySetInnerHTML={{ __html: project.html }}
        ></ProjectInfo>
        <CardFooter>
          <TechList>
            {/* List of the tech that I used for this project */}
            {project.frontmatter.tech.map(tech => (
              <li>{tech}</li>
            ))}
          </TechList>

          {/* A link to the github repo for this project */}
          <GithubIcon>
            <a href={project.frontmatter.githubLink}>
              <img src={githubIcon} alt="Icon-link to github" />
            </a>
          </GithubIcon>
        </CardFooter>
      </CardWrapper>
    </Wrapper>
  )
}

export default ProjectCard
