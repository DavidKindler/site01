import React from "react"
import PropTypes from "prop-types"

const Greeting = ({ greeting, name }) => {
  return (
    <div style={{ color: "teal" }}>
      <h2>
        {greeting} {name}
      </h2>
    </div>
  )
}

Greeting.PropTypes = {
  greeting: PropTypes.string,
  name: PropTypes.string,
}

Greeting.defaultProps = {
  greeting: "hello",
}

export default Greeting
