import React from "react"
import Helmet from "react-helmet"

var loadJS = function (url, implementationCode, location) {
  //url is URL of external file, implementationCode is the code
  //to be called from the file, location is the location to
  //insert the <script> element
  if (!url) return
  var scriptTag = document.createElement("script")
  scriptTag.src = url
  if (implementationCode) {
    scriptTag.onload = implementationCode
    scriptTag.onreadystatechange = implementationCode
  }
  var location = location || document.body

  location.appendChild(scriptTag)
}

export default class GlobalBundle extends React.Component {
  constructor(props) {
    super(props)
  }

  jq = () =>
    loadJS(
      `//www.nxp.com/resources/scripts/jquery.min3.1.js`,
      env => {
        console.log("jquery loaded")
        this.bs()
      },
      document.head
    )

  bs = () =>
    loadJS(
      `//www.nxp.com/resources/scripts/bootstrap.min.3.3.7.js`,
      env => {
        console.log("bootstrap loaded")
        this.gb()
      },
      document.body
    )

  gb = () =>
    loadJS(
      `//www.nxp.com/resources/scripts/nxp-cms/global-bundle.js`,
      env => {
        console.log("global-bundle loaded")
      },
      document.body
    )

  componentDidMount() {
    this.jq()
  }

  render() {
    return (
      <Helmet>
        {/* <link
          type="text/css"
          rel="stylesheet"
          href="//www.nxp.com/css/nxp_containers_no_left_nav.css"
        /> */}
      </Helmet>
    )
  }
}
