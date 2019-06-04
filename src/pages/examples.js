import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout2"
import _ from "lodash"

const Headline = styled.h1`
  color: inline-block;
  color: cornflowerblue;
`
const examples = ({ data }) => {
  console.log('examples list data', data)
  return (
    <Layout>
      <div className='row'>

        <Headline>Pattern Page Examples</Headline>
        {/* <h4>{data.examples.totalCount} examples</h4> */}
        {data.examples.edges.map(({ node }) => {
          return (
            <div className="col-sm-4" key={node.id} id={_.camelCase(node.frontmatter.title)}>
              <hr />
              <Link
                to={node.fields.slug}
                style={{ textDecoration: "none" }}
              >
                <h3>{node.frontmatter.title}</h3>
                <p>{node.frontmatter.description}</p>

              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
export default examples

export const query = graphql`
  query {
    examples: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/examples/" } }
      sort: { fields: [fields___slug], order: ASC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
          }
          excerpt
          fields {
            slug
            patternPage
          }
        }
      }
    }
  }
`
