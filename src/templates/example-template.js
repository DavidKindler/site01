import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import GlobalBundle from "../components/globalBundle"
// import Breacrumb from "../components/breadcrumb"

const ExamplePage = ({ data }) => {
  // console.log('example data', data)
  const post = data.markdownRemark
  // console.log('example post', post)
  return (
    <React.Fragment>
      <GlobalBundle />

      <Layout >
        <h2>HTML Markup below</h2>
        {/* <Layout aside> */}
        {/* <Link to={() => window.history.back()}>Back</Link> */}
        {/* <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.description}</p> */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <pre><code>{post.html}</code></pre>
      </Layout>
      {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
    </React.Fragment>
  )
}

export default ExamplePage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        aside
      }
    }
  }
`
