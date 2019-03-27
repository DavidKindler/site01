import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavBar from "./navbar"

const Header = ({ siteTitle }) => (
  <header className="navbar navbar-default megamenu navbar-fixed-top" id="top">
    <div className="navbar-header">
      <button
        className="navbar-toggle"
        type="button"
        data-toggle="collapse"
        data-target="#fsl-navbar-collapse"
      >
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
      <Link to="/" className="navbar-brand">
        <img
          src="//www.nxp.com/resources/images/nxp-logo.svg"
          style={{ height: "25px", display: "inline-block" }}
        />
        Web Branding
      </Link>
    </div>
    <NavBar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
