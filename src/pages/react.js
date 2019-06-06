import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const Headline = styled.h1`
  color: inline-block;
  color: cornflowerblue;
`

const ReactIndex = ({ data }) => {
  console.log('react data', data)
  return (
    <Layout>
      <div>
        <Headline>React</Headline>
        <h4>{data.components.totalCount} React Docs</h4>
        {data.components.edges.map(({ node }) => {
          return (
            <div key={node.id} id={_.camelCase(node.frontmatter.title)}>
              <hr />
              <Link
                to={node.fields.slug}
                style={{ textDecoration: "none" }}
              >
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


export default ReactIndex;


export const reactquery = graphql`
  query {
    components: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/docs/" } }
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
            # patternPage
          }
        }
      }
    }
  }
`
