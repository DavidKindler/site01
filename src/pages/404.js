import React from "react"
import Header from "../components/header"
import '../components/dragon.css';

import Layout from "../components/layout"
import SEO from "../components/seo"



class NotFoundPage extends React.Component {
  constructor(props) {
    super(props)
    this.loadJS = this.loadJS.bind(this)
  }

  loadJS = (url, implementationCode, location) => {
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


  jq = () => {
    this.loadJS(
      `/js/TweenMax.min.js`,
      env => {
        console.log("TweenMax loaded")
        this.bs()
      },
      document.head
    )
  }

  bs = () => {

    this.loadJS(
      `/js/three.min.js`,
      env => {
        console.log("three loaded")
        this.gb()
      },
      document.body
    )

  }

  gb = () => {
    this.loadJS(
      `/js/OrbitControls.js`,
      env => {
        console.log("orbitcontrols loaded")
      },
      document.body
    )

    this.loadJS(
      `/js/dragon.js`,
      env => {
        console.log("dragon loaded")
        setTimeout(function () { window.startdragon() }, 100)
      },
      document.body
    )

  }

  componentDidMount() {
    this.jq();

  }


  render() {

    return (
      <div style={{ marginTop: '80px' }} >
        <Header />
        <SEO title='404 - Page Not Found' />

        <div id='world'></div>
        <h1 className="text-center">404 &mdash; Page Not Found</h1>
        <div id='instructions'>The longer you keep clicking, the harder he sneezes<br /><span className='lightInstructions'>- Press and drag to turn around -</span></div>
        <div id='credits'>
          <p> <a href='http://codepen.io/Yakudoo/' target='blank'>Thanks to Karim Maaloul</a></p>
        </div>
        <div id='power'>00</div>


      </div>

    )
  }
}

export default NotFoundPage
