/* eslint-disable jsx-quotes */
import React, { Component, PureComponent } from "react"
import { Waypoint } from "react-waypoint"

class Scrollspy extends Component {
  constructor(props) {
    super(props)
    this.topWaypointLeave = this.topWaypointLeave.bind(this)
    this.bottomWaypointEnter = this.bottomWaypointEnter.bind(this)
  }
  topWaypointLeave(currentPosition) {
    if (currentPosition === Waypoint.above) {
      console.log(this.props.anchor + " Enter the section, normal case")
      if (this.props.notifyCurrentPageUpdate) {
        this.props.notifyCurrentPageUpdate(this.props.anchor)
      }
    }
  }

  bottomWaypointEnter(previousPosition) {
    if (previousPosition === Waypoint.above) {
      console.log(this.props.anchor + " Enter the section")
      if (this.props.notifyCurrentPageUpdate) {
        this.props.notifyCurrentPageUpdate(this.props.anchor)
      }
    }
  }

  render() {
    // let counter = 0
    // const items = React.Children.map(this.props.children, (child, idx) => {
    //   if (!child) {
    //     return null
    //   }

    //   return React.cloneElement(child, {
    //     // className: child.props.className ? child.props.className : "",
    //     key: counter++,
    //   })
    // })

    return (
      <div>FOO</div>
      // <React.Fragment>
      //   <Waypoint
      //     // id="topWaypoint"
      //     onEnter={this.props.notifyCurrentPageUpdate(this.props.anchor)}
      //     // onLeave={({ currentPosition }) =>
      //     //   this.topWaypointLeave(currentPosition)
      //     // }
      //     // topOffset={50}
      //   />
      //   {this.props.children}
      //   <Waypoint
      //     // id="topWaypoint"
      //     onLeave={this.props.notifyCurrentPageUpdate(this.props.anchor)}
      //     // onLeave={({ currentPosition }) =>
      //     //   this.topWaypointLeave(currentPosition)
      //     // }
      //     // topOffset={50}
      //   />
      //   {/* <Waypoint
      //     // id="bottomWaypoint"
      //     onEnter={({ previousPosition }) =>
      //       this.bottomWaypointEnter(previousPosition)
      //     }
      //     // topOffset={50}
      //   /> */}
      // </React.Fragment>
    )
  }
}

export default Scrollspy
