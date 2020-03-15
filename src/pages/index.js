import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"
import Intro from "../components/sections/intro/intro"
import About from "../components/sections/about/about"
import Projects from "../components/sections/projects/projects"

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
