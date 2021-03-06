import React from "react"
import Layout from "../components/layout2"
import { graphql } from "gatsby"

const ComponentList = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout aside={true}>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.description}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export default ComponentList

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
