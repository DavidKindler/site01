import React from "react"
import { Link } from "gatsby"
import DropDown from './dropdown'

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <nav id='fsl-navbar-collapse' className='collapse navbar-collapse' >
        <ul className='nav navbar-nav'>
          <DropDown label="HTML">

            <ListLink to='/css'>CSS</ListLink>
            <ListLink to='/sass'>SASS</ListLink>
            <ListLink to='/grids'>Grids</ListLink>

          </DropDown>

          <DropDown label="JS">
            <ListLink to='/guidelines'>Code Guidelines</ListLink>
            <ListLink to='/javascript'>Javascript</ListLink>
            <ListLink to='/react'>React</ListLink>

          </DropDown>

          <ListLink to='/components'>Components</ListLink>
          <DropDown label="Resources">
            <ListLink to='/icons'>Icons</ListLink>
            <ListLink to='/resources/third-party-menu' >Third Party Menu</ListLink>
            <ListLink to='/examples'>Pattern Pages</ListLink>
            <ListLink to='/resources/templates'>Templates</ListLink>
            <li style={{ display: "inline-block", marginRight: "1rem" }}>
              <a target="_blank" href='/resources/Mobile_App_Style_Guide.pdf'>
                Mobile Style Guidelines (pdf)
              </a>
            </li>

            <li style={{ display: "inline-block", marginRight: "1rem" }}>
              <a target="_blank" href='/resources/Microsite_Guidance.pdf'>
                Microsite Guidelines (pdf)
              </a>
            </li>
            <li role='separator' className='divider' />
            <li>
              <a className='large bold'> PSP</a>
            </li>
            <ListLink to='/psp/psp-templates'>PSP Page Examples</ListLink>
            <ListLink to='/psp/psp-components'>PSP Components</ListLink>
            <ListLink to='/psp/psp-mockups'>PSP Mockups</ListLink>
          </DropDown>
        </ul>
      </nav>
    )
  }
}


export default NavBar
