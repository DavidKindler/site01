import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import { graphql } from "gatsby"

import Img from "gatsby-image"

const Templates = ({ data }) => {
  return (
    <Layout>
      <SEO title='Templates' />
      <main className='container'>
        <div className='row' id='content'>
          <div className='col-md-12'>
            <div className='fsl-docs-section pt3'>
              <h2>Page examples</h2>
              <ul className='list-unstyled'>
                <li>Approved Engineering Consultants <Link to='/examples/page-approved-consultants'>Landing page</Link></li>
                <li>Partner Directory <Link to='/examples/page-partner-directory'>Landing page</Link> | <Link to='/examples/page-partner-directory_filtered'>Results page</Link></li>
                <li>Reference Designs <Link to='/examples/page-reference-designs'>Landing page</Link> | <Link to='/examples/page-reference-designs_filtered'>Results page</Link></li>
                <li>Software Center <Link to='/examples/page-software-center'>Landing page</Link> | <Link to='/examples/page-software-center_filtered'>Results page</Link></li>
                <li>Training <Link to='/examples/page-training'>Landing page</Link> | <Link to='/examples/page-training_filtered'>Mixed results page</Link> | <Link to='/examples/page-training_filtered_classroom'>Classroom results page</Link> | <Link to='/examples/page-training_filtered_online'>Online results page</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <article>
          <h2>Templates</h2>
          <div className='row'>

            <div className='col-sm-4 '>
              <h3 id='template-basic'>C-Frame template</h3>
              <div className='thumbnail'>
                <Link to='/resources/c-frame-template' target='_blank'>

                  <Img fluid={data.cFrame.childImageSharp.fluid} />
                </Link>

              </div>
            </div>
            <div className='col-sm-4 '>
              <h3 id='template-basic'>Centered template</h3>
              <div className='thumbnail'>
                <Link to='/resources/centered-template' target='_blank'>
                  <Img fluid={data.centered.childImageSharp.fluid} />
                  {/* <img src='./img/centered-template.png' alt='' style={{ height: '200px' }} /> */}
                </Link>

              </div>
            </div>
          </div>

          <div className='row'>

            <div className='col-sm-4 '>
              <h3>PSP Template</h3>
              <div className='thumbnail'>
                <Link to='/resources/psp/psp-templates' target='_blank'>
                  <Img fluid={data.pspTemplate.childImageSharp.fluid} />
                  {/* <img src='../../images/psp-template.png' alt='' style={{ height: '200px' }} /> */}
                </Link>

              </div>
            </div>

            <div className='col-sm-4 '>
              <h3>Single Page App Results page</h3>
              <div className='thumbnail'>
                <Link to='/resources/spa-results-template' target='_blank'>
                  <Img fluid={data.spaTemplate.childImageSharp.fluid} />
                  {/* <img src='../../images/spa-template.png' alt='' style={{ height: '200px' }} /> */}
                </Link>

              </div>
            </div>


            {/* <div className='col-sm-4 '>
              <h3>SASS files</h3>
              <div className='thumbnail'>
                <div className='caption'>
                  <h4>SASS files to build nxp-web stylesheet </h4>
                  <code>nxp-web.css</code>
                  <p><Link to='resources/sass.zip' className='btn' role='button'>Download</Link></p>
                </div>
              </div>
            </div>
 */}

          </div>
        </article>
      </main>
    </Layout>
  )
}

export default Templates



// import Img from "gatsby-image"

// https://www.gatsbyjs.org/docs/working-with-images/
export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid( maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    spaTemplate: file(relativePath: { eq: "spa-template-smaller.png" }) {
      ...squareImage
    }
    
    cFrame: file(relativePath: { eq: "c-frame-template.png" }) {
      ...squareImage
    }

    thirdParty: file(relativePath: { eq: "third-party-template.png" }) {
      ...squareImage
    }

    centered: file(relativePath: { eq: "centered-template.png" }) {
      ...squareImage
    }

    pspTemplate: file(relativePath: { eq: "psp-template.png" }) {
      ...squareImage
    }

   
  }
`

