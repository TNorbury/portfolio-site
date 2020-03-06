import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Intro from "../components/intro/intro"

const IndexPage = () => (
  // <Intro></Intro>

  <Layout>
    <SEO title="Home" />
    <Intro></Intro>
  </Layout>
)

export default IndexPage
