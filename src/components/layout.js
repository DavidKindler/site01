import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql, Link } from "gatsby"
import Header from "./header"



const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `60px 1rem 1rem`,
        // paddingTop: 0,
      }}
    >
      <main>{children}</main>
    </div>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
