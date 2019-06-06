import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const ReactList = ({ data }) => {
  console.log('data', data)
  const post = data.markdownRemark
  return (
    <Layout >
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.description}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export default ReactList

export const reactquery = graphql`
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
