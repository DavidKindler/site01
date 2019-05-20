/* eslint-disable jsx-quotes */
import React, { Component } from 'react'
import Children from 'react-children-utilities';

function recursiveMap(children, fn) {
  return React.Children.map(children, (child, i) => {
    if (!React.isValidElement(child)) {
      // return child;
      return null;
    }

    if (child.props.children) {
      child = React.cloneElement(child, {
        children: recursiveMap(child.props.children, fn),
        i: i++
      });
    }

    return fn(child);
  });
}



class ScrollSpySidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const children = this.props.children
    var z = []
    var y = []
    var parent = []

    var x = recursiveMap(children, (el => {

      // var foo = Children.map(el, w => {
      //   Children.filter(w, (child) => {  // this filter is not working....
      //     if (child.props.className == "anchor") {
      //       parent.push(w)
      //     }
      //   })
      //   console.log('found children?', parent)
      // })


      if (el.type === "a" && el.props.className === "anchor") {
        // console.log('a found', el)
        // return el
        // y.push(foo)
        z.push(<a href={`#${el.props.id}`} style={{ display: 'block', border: '1px solid red' }}>{el.props.value}</a>)
        return el
      }
      // return <div>wtf{el}</div>
      return el
    }))

    console.log('z', z)
    console.log('y', y)
    console.log('parent', parent)
    // childMap(this.props.children, (child) => {
    //   console.log('child', child)
    // })
    // console.log('children', this.props.children)


    return (
      <div>

        {z}
      </div >
    )
  }
}

export default ScrollSpySidebar;
