import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import "../styles/styles.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my page</p>
  </Layout>
)

export default IndexPage
