import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import Intro from "../components/intro/intro"
import Header from "../components/header/header"

import "bootstrap/dist/css/bootstrap.min.css"
import About from "../components/about/about"
import Projects from "../components/projects/projects"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Intro />
    <About />
    <Projects data={data.projects.edges} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    projects: allMarkdownRemark(
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
`
