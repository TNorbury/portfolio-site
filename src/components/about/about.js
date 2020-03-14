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
  }

  justify-content: space-between;
`

const PictureWrapper = styled.div`
  width: 25%;
  @media (max-width: 960px) {
    width: 75%;
  }
`

const BriefWrapper = styled.div`
  width: 25%;
  font-size: 15pt;

  @media (max-width: 960px) {
    width: 100%;
  }
`

const SkillsWrapper = styled.div`
  width: 25%;
`

const About = () => {
  // The about markdown file has the text that we'll put into the breif.
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

  // console.log(aboutImage);

  // console.log(data[0].node)

  // dangerouslySetInnerHTML={{ __html: project.html }}

  return (
    <AboutWrapper id="about">
      <PictureWrapper>
        <Img fluid={aboutImage.fluid}></Img>
      </PictureWrapper>
      <BriefWrapper
        dangerouslySetInnerHTML={{ __html: aboutMD.html }}
      ></BriefWrapper>
      <SkillsWrapper>Skillz</SkillsWrapper>
    </AboutWrapper>
  )
}

export default About
