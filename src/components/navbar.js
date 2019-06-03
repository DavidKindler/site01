import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
    this.handleResources = this.handleResources.bind(this)
  }

  handleResources() {
    this.setState({ open: !this.state.open })
  }
  render() {

    return (
      <nav id='fsl-navbar-collapse' className='collapse navbar-collapse' >
        <ul className='nav navbar-nav'>
          <ListLink to='/guidelines'>Code Guidelines</ListLink>
          <ListLink to='/grids'>Grids</ListLink>
          <ListLink to='/css'>CSS</ListLink>
          <ListLink to='/sass'>SASS</ListLink>
          <ListLink to='/javascript'>Javascript</ListLink>
          <ListLink to='/components'>Components</ListLink>
          <ListLink to='/icons'>Icons</ListLink>
          <li
            style={{ display: "inline-block", marginRight: "1rem" }}
            onClick={this.handleResources} className={this.state.open ? "dropdown open" : "dropdown"}
          >
            <a >
              Resources <span className='caret' />
            </a>
            <ul className='dropdown-menu'>
              <ListLink to='/resources/templates'>Templates</ListLink>
              <li style={{ display: "inline-block", marginRight: "1rem" }}>
                <a target="_blank" href='/resources/Mobile_App_Style_Guide.pdf'>
                  Mobile Style Guidelines
              </a>
              </li>

              <li style={{ display: "inline-block", marginRight: "1rem" }}>
                <a target="_blank" href='/resources/Microsite_Guidance.pdf'>
                  Microsite Guidelines
              </a>
              </li>
              <li role='separator' className='divider' />
              <li>
                <a className='large bold'> PSP</a>
              </li>
              <ListLink to='/psp/psp-templates'>PSP Page Examples</ListLink>
              <ListLink to='/psp/psp-components'>PSP Components</ListLink>
              <ListLink to='/psp/psp-mockups'>PSP Mockups</ListLink>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
}


export default NavBar
