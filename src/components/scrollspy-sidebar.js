/* eslint-disable jsx-quotes */
import React, { Component } from 'react'
import Children from 'react-children-utilities';

import _ from 'lodash';

function recursiveMap(children, fn) {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
      // return null;
    }

    if (child.props.children) {
      child = React.cloneElement(child, {
        children: recursiveMap(child.props.children, fn)
      });
    }

    return fn(child);
  });
}

// function findAnchors(children) {
//   return recursiveMap(children, (el) => {
//     if (el.type === 'a') {
//       console.log('el is an anchor', el)
//       return el
//     }
//   })
// }

function findAnchors(children) {
  if (!children.props) return null
  if (!children.props.children) return null;
  var x
  var kids = children.props.children
  var foo = React.Children.map(kids, (child, i) => {

    if (child.type === 'a' && child.props.className === 'anchor') {
      if (child.props && child.props.children) {
        console.log('more children here', child)
        findAnchors(child.props.children)
      }

      return child
    }
  })


  return foo

}


class ScrollSpySidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let x = []
    const children = this.props.children
    const childrenArray = React.Children.toArray(children.props.children)

    console.log('children', children)
    console.log('childrenarray', childrenArray)
    return (
      <div style={{ border: '2px dotted black' }}>
        {React.Children.count(children.props.children)}
        {childrenArray.map((child, i) => {
          // console.log('now map through', child)
          let y = findAnchors(child)
          if (y.length) x.push(y)
          console.log('x marks the spot', x)
          return <div style={{ border: '1px dashed green' }} key={i}>{child}</div>
        })
        }
        {/* {children} */}
      </div >
    )
  }
}

export default ScrollSpySidebar;
