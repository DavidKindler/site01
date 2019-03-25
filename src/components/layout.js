/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
// import "./layout.css"

const ListLink = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        SiteTitleQuery: site {
          siteMetadata {
            title
          }
        }
        slugs: allMarkdownRemark {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <Header siteTitle={data.SiteTitleQuery.siteMetadata.title} />
          <header style={{ marginBottom: "1.4rem" }}>
            {/* <Image2 /> */}
            <ul style={{ listStyle: "none" }}>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/components">Components</ListLink>
              <ListLink to="/guidelines">Code Guidelines</ListLink>
            </ul>
          </header>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 1200,
              padding: `0px 1rem 1rem`,
              paddingTop: 0,
            }}
          >
            <main>{children}</main>
          </div>
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
