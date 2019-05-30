/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // console.log("node-type ==>\n", JSON.stringify(node, null, 2))
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent)
    // console.log("relative path", JSON.stringify(fileNode, null, 2))
    const slug = createFilePath({ node, getNode })
    if (fileNode.dir.includes("/components")) {
      createNodeField({
        node,
        name: "slug",
        value: "/components" + slug,
      })
      createNodeField({
        node,
        name: "patternPage",
        value: "/patterns" + slug,
      })
      createNodeField({
        node,
        name: "dir",
        value: "/components",
      })
    }
    if (fileNode.dir.includes("/patterns")) {
      createNodeField({
        node,
        name: "slug",
        value: "/patterns" + slug,
      })

      createNodeField({
        node,
        name: "dir",
        value: "/patterns",
      })
    }
    if (fileNode.dir.includes("/examples")) {
      createNodeField({
        node,
        name: "slug",
        value: "/examples" + slug,
      })

      createNodeField({
        node,
        name: "dir",
        value: "/examples",
      })
    }
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            fields {
              slug
              dir
            }
          }
        }
      }
    }
  `).then(result => {
    // console.log("createPages result==>\n", JSON.stringify(result, null, 2))
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.fields.dir === "/components") {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/component-list.js"),
          context: {
            slug: node.fields.slug,
          },
        })
      }
      if (node.fields.dir === "/patterns") {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/pattern-template.js"),
          context: {
            slug: node.fields.slug,
          },
        })
      }

      if (node.fields.dir === "/examples") {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/example-template.js"),
          context: {
            slug: node.fields.slug,
          },
        })
      }

    })
  })
}
