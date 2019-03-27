import React from "react"
import Layout from "../components/layout2"
import { graphql } from "gatsby"
import GlobalBundle from "../components/globalBundle"
// import Breacrumb from "../components/breadcrumb"

const PatternPage = ({ data }) => {
  const post = data.markdownRemark
  return (
    <React.Fragment>
      <GlobalBundle />
      <Layout>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.description}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
      {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
    </React.Fragment>
  )
}

export default PatternPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
