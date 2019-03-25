/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

const ListLink = props => (
  <div>
    <Link to={props.to}>{props.children}</Link>
  </div>
)

const Aside = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        components: allMarkdownRemark {
          edges {
            node {
              id
              excerpt
              frontmatter {
                title
                description
                date
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => {
      console.log("aside data", data)
      return (
        <>
          <aside style={{ position: "fixed" }}>
            <h3 style={{ display: "inline" }}>Components</h3>
            <div>
              {data.components.edges.map(({ node }, index) => (
                <ListLink key={index} to={node.fields.slug}>
                  {node.frontmatter.title}
                </ListLink>
              ))}
              {/* <ListLink to="/">Home</ListLink>
              <ListLink to="/blog">Blog</ListLink>
              <ListLink to="/guidelines">Code Guidelines</ListLink> */}
            </div>
          </aside>
        </>
      )
    }}
  />
)

Aside.propTypes = {
  // children: PropTypes.node.isRequired,
}

export default Aside
