import React from "react"
// import ExampleLayout from "../components/example-layout"
// import ExampleLayoutLeftNav from "../components/example-with-left-nav"
import ExampleLayoutNoLeftNav from "../components/example-without-left-nav"
import { graphql, Link } from "gatsby"
import CodeBlock from "../components/syntax-highlighter"
import GlobalBundle from "../components/globalBundle"
// import Breacrumb from "../components/breadcrumb"

const ExamplePage = ({ data }) => {

  // console.log('example data', data)
  const post = data.markdownRemark
  // console.log('example post', post)

  return (
    <React.Fragment>
      <GlobalBundle />
      <div
        style={{
          paddingTop: `60px`,
        }}
      >
        <div><span className="h1">Example Page</span><span className="h2">HTML code below</span></div>
        <ExampleLayoutNoLeftNav>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </ExampleLayoutNoLeftNav>
        <div style={{ padding: '10px 30px' }}>
          <CodeBlock
            language={"html"}
            value={post.html} />
        </div>
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
    </React.Fragment>
  )
}

export default ExamplePage

export const query = graphql`
  query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug } }) {
        html
      frontmatter {
        title
        leftnav
      }
    }
  }
`
