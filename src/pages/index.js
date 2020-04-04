import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"
import Intro from "../components/sections/intro/intro"
import About from "../components/sections/about/about"
import Projects from "../components/sections/projects/projects"
import Contact from "../components/sections/contact/contact"
import background from "../assets/images/backgrounds/background.svg"

import styled from "styled-components"

const Background = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 960px) {
    background-size: contain;
    background-repeat: repeat;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Intro />
    <About />
    <Background>
      <Projects />
      <Contact />
    </Background>
  </Layout>
)

export default IndexPage
