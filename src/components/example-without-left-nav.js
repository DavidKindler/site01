/* eslint-disable jsx-quotes */
import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"
// import NavBar from "./navbar"
import Header from "./header"
// import Header from "./header"
import "../../sass/nxp_containers_no_left_nav.scss"


const ExampleLayoutNoLeftNav = ({ children }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
  </>
)

ExampleLayoutNoLeftNav.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ExampleLayoutNoLeftNav
