import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout2"

const Headline = styled.h1`
  color: inline-block;
  color: cornflowerblue;
`
export default ({ data }) => {
  return (
    <Layout>
      <div>
        <Headline>Components</Headline>
        <h4>{data.allMarkdownRemark.totalCount} Components</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div key={node.id}>
              <hr />
              <Link to={node.fields.slug} style={{ textDecoration: "none" }}>
                <h3>{node.frontmatter.title}</h3>
                <p>{node.frontmatter.date}</p>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
