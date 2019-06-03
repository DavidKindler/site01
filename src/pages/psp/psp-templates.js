import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import { graphql } from "gatsby"

import Img from "gatsby-image"

const PSPTemplates = ({ data }) => {
  console.log('data', data)
  return (
    <Layout>
      <SEO title='PSP Page Examples' />
      <main className='container'>

        <article>
          <h1>PSP Page Examples</h1>
          <div className='row'>
            <div className='col-sm-6 '>
              <h3 id='template-basic'>Product Details Page</h3>
              <div className='thumbnail'>
                <Link to='examples/product-details'>
                  <Img fluid={data.file.childImageSharp.fluid} />
                </Link>
              </div>
            </div>
            <div className='col-sm-6 '>
              <h3 id='template-basic'>PSP 2 Template</h3>
              <div className='thumbnail'>
                <Link to='/examples/psp-page-template'>
                  <img src="https://placehold.it/720x480" />
                </Link>
              </div>
            </div>
          </div>


        </article>
      </main>
    </Layout>
  )
}

export default PSPTemplates


export const query = graphql`
query {
        file(relativePath: {eq: "parts-details-cover-img.jpg" }) {
        childImageSharp {
      # Specify the image processing specifications right in the query.
      fluid( maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
      }
    }
  }
  `;


  // // https://www.gatsbyjs.org/docs/working-with-images/
  // export const squareImage = graphql`
//   fragment squareImage on File {
//         childImageSharp {
//       fluid( maxWidth: 800) {
//         ...GatsbyImageSharpFluid
//       }
//       }
//     }
//   `

// export const query = graphql`
//   query {
//         pspTemplate: file(relativePath: {eq: "parts-details-cover-img.jpg" }) {
//         ...squareImage
//       }


//       }
//     `

