import React from "react"
import onClickOutside from "react-onclickoutside";
//https://www.npmjs.com/package/react-onclickoutside

class DropDown extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = { open: false }
    this.myRef = React.createRef();
    this.handleDropdown = this.handleDropdown.bind(this)
  }

  handleDropdown(e) {
    this.setState({ open: !this.state.open })
  }

  handleClickOutside(e) {
    this.setState({ open: false })
  }


  render() {
    return (
      <li
        style={{ display: "inline-block", marginRight: "1rem" }}
        onClick={this.handleDropdown} className={this.state.open ? "dropdown open" : "dropdown"}
      >
        <a >
          {this.props.label} <span className='caret' />
        </a>
        <ul className='dropdown-menu'>
          {this.props.children}
        </ul>
      </li>
    )
  }

}


export default onClickOutside(DropDown);