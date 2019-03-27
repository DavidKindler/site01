/* eslint-disable jsx-quotes */
import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
// import NavBar from "./navbar"
import Header from "./header"
// import Header from "./header"
import Aside from "./aside"

const ListLink = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout2 = ({ children }) => (
  <>
    <Header />

    <Aside />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 650,
        padding: `60px 1.0875rem 1.45rem`,
        // paddingTop: 0,
      }}
    >
      {children}
    </div>
  </>
)

Layout2.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout2
