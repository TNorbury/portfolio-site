import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"
import Intro from "../components/intro/intro"
import About from "../components/about/about"
import Projects from "../components/projects/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Intro />
    <About />
    <Projects />
  </Layout>
)

export default IndexPage
