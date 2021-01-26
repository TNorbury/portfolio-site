import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const AboutWrapper = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  display: flex;

  @media (max-width: 960px) {
    align-items: center;
    flex-direction: column;
    margin-right: 2.5rem;
    margin-left: 2.5rem;
    padding-top: 5rem;
    margin-top: 2.5rem;
  }

  justify-content: space-between;
`

const PictureWrapper = styled.div`
  width: 25%;
  align-self: center;

  @media (max-width: 960px) {
    width: 75%;
  }
`

const BriefWrapper = styled.div`
  width: 25%;
  font-size: 15pt;

  @media (max-width: 960px) {
    width: 100%;
    margin-top: 2.5rem;
  }
`

const SkillsWrapper = styled.div`
  width: 25%;
  font-size: 15pt;

  @media (max-width: 960px) {
    width: 100%;
    margin-top: 1.5rem;
  }

  ul li {
    margin-left: 1rem;
  }
`

const SkillList = styled.ul`
  font-size: 15.5pt;
`

const Skill = styled.li`
  font-size: 15pt;
`

const About = () => {
  // The about markdown file has the text that we'll put into the brief.
  const query = useStaticQuery(graphql`
    query AboutQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/.about./" } }
        limit: 1
      ) {
        edges {
          node {
            html
          }
        }
      }
      allImageSharp(filter: { fluid: { originalName: { eq: "me.jpeg" } } }) {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const aboutMD = query.allMarkdownRemark.edges[0].node
  const aboutImage = query.allImageSharp.edges[0].node

  return (
    <>
      <div id="about">
        <AboutWrapper>
          <PictureWrapper>
            <Img fluid={aboutImage.fluid}></Img>
          </PictureWrapper>
          <BriefWrapper
            dangerouslySetInnerHTML={{ __html: aboutMD.html }}
          ></BriefWrapper>
          <SkillsWrapper>
            <h3>Skills</h3>
            <SkillList>
              <li>
                Languages
                <ul>
                  <Skill>Dart</Skill>
                  <Skill>Python</Skill>
                  <Skill>JavaScript</Skill>
                  <Skill>C++</Skill>
                  <Skill>CSS</Skill>
                  <Skill>HTML5</Skill>
                </ul>
              </li>
              <li>
                Tools & Frameworks
                <ul>
                  <Skill>Flutter</Skill>
                  <Skill>React.js</Skill>
                  <Skill>Gatsby.js</Skill>
                  <Skill>Vue.js</Skill>
                  <Skill>Node.js</Skill>
                  <Skill>QT</Skill>
                </ul>
              </li>
              <li>
                Misc.
                <ul>
                  <Skill>UX</Skill>
                  <Skill>Adobe Lightroom</Skill>
                </ul>
              </li>
            </SkillList>
          </SkillsWrapper>
        </AboutWrapper>
      </div>
    </>
  )
}

export default About
