import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../../sass/nxp-web.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`NXP.com`, `Web branding`, `react`]} />
    <h1>Overview page</h1>
  </Layout>
)

export default IndexPage
