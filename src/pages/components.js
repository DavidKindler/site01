import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout2"
import _ from "lodash"

const Headline = styled.h1`
  color: inline-block;
  color: cornflowerblue;
`
const components = ({ data }) => {
  console.log('component list data', data)
  return (
    <Layout aside={true}>
      <div>
        <Headline>Components</Headline>
        <h4>{data.components.totalCount} Components</h4>
        {data.components.edges.map(({ node }) => {
          return (
            <div key={node.id} id={_.camelCase(node.frontmatter.title)}>
              <hr />

              <h3 className='page-header'>{node.frontmatter.title}</h3>
              <Link
                to={node.fields.patternPage}
                className='-button btn btn-sm btn-white'
              >View Component Details <span className='icon-angle-right' /></Link>
              <p>{node.frontmatter.date}</p>
              <div dangerouslySetInnerHTML={{ __html: node.html }} />

            </div>
          )
        })}
      </div>
    </Layout>
  )
}
export default components

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
          html
          fields {
            slug
            patternPage
          }
        }
      }
    }
  }
`
