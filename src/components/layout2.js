import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
// import Image2 from "./image2"

// import Header from "./header"
import Aside from "./aside"

const ListLink = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout2 = ({ children }) => (
  <>
    <header
      style={{ marginBottom: "1.4rem", background: "#e7e7e7", display: "flex" }}
    >
      <h3 style={{ display: "inline" }}>NXP Web Branding</h3>
      <ul style={{ listStyle: "none", float: "right" }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/components">Components</ListLink>
        <ListLink to="/guidelines">Code Guidelines</ListLink>
      </ul>
    </header>
    <Aside />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 650,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
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
