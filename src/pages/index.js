import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"
import Intro from "../components/sections/intro/intro"
import About from "../components/sections/about/about"
import Projects from "../components/sections/projects/projects"
import Contact from "../components/sections/contact/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Intro />
    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
