import React from "react"
import Layout from "../components/Layout"
import About from "../components/About"
import Work from "../components/Work"
import SEO from "../components/seo"
import "../styles/styles.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <Work />
  </Layout>
)

export default IndexPage
