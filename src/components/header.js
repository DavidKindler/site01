import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import ScrollUpButton from "react-scroll-up-button";
import NavBar from "./navbar"
import favicon from '../images/favicon.ico';

const Header = ({ siteTitle }) => (
  <>
    <Helmet>
      <link rel="icon" href={favicon} type="image/x-icon" />
    </Helmet>
    <ScrollUpButton />
    <div className="navbar navbar-default megamenu navbar-fixed-top">
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
    </div>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
