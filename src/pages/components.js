import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout2"
import _ from "lodash"

const Headline = styled.h1`
  color: inline-block;
  color: cornflowerblue;
`
export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <Headline>Components</Headline>
        <h4>{data.components.totalCount} Components</h4>
        {data.components.edges.map(({ node }) => {
          return (
            <div key={node.id} id={_.camelCase(node.frontmatter.title)}>
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
    components: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/components/" } }
      sort: { fields: [fields___slug], order: ASC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
    patterns: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/patterns/" } }
      sort: { fields: [fields___slug], order: ASC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
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
