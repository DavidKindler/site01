import React from "react"
import PropTypes from "prop-types"

const Greeting = ({ greeting, name }) => {
  console.log("greeting", greeting)
  console.log("name", name)

  // if (name.length) {
  //   console.log("length is", name.length)
  // }
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
  // name: "George",
}

export default Greeting
