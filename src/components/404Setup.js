import React from "react"

import StartDragon from "./dragon"
import "./dragon.css"

export default class Dragon extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    StartDragon()
  }

  render() {
    return (
      <React.Fragment>
        <div id="world" />
        <div id="pagenotfound">404 &mdash; Page Not Found</div>
        <div id="instructions">
          The longer you keep clicking, the harder he sneezes
          <br />
          <span className="lightInstructions">
            - Press and drag to turn around -
          </span>
        </div>
        <div id="credits">
          <p>
            <a href="http://codepen.io/Yakudoo/" target="blank">
              Thanks to Karim Maaloul
            </a>
          </p>
        </div>
        <div id="power">00</div>
      </React.Fragment>
    )
  }
}
