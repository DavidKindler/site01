import React from "react"
import _ from "lodash"
import { StaticQuery, graphql, Link } from "gatsby"

const ListLink = props => (
  <div>
    <Link to={props.to}>{props.children}</Link>
  </div>
)

const Aside = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        components: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/components/" } }
          sort: { fields: [fields___slug], order: ASC }
        ) {
          edges {
            node {
              fileAbsolutePath
              id
              excerpt
              frontmatter {
                title
                description
                date
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => {
      // console.log("aside data", data)
      return (
        <>
          <aside style={{ position: "fixed", top: "70px", maxWidth: "200px" }}>
            <h3 style={{ marginBottom: "1rem" }}>Components</h3>
            {data.components.edges.map(({ node }, index) => (
              <div key={index}>
                <Link
                  to={"/components/#" + _.camelCase(node.frontmatter.title)}
                >
                  {node.frontmatter.title}
                </Link>
                <p className="small">
                  <i>{node.frontmatter.description}</i>
                </p>
              </div>
            ))}

            {/* <ListLink to="/">Home</ListLink>
              <ListLink to="/blog">Blog</ListLink>
              <ListLink to="/guidelines">Code Guidelines</ListLink> */}
          </aside>
        </>
      )
    }}
  />
)

Aside.propTypes = {
  // children: PropTypes.node.isRequired,
}

export default Aside
