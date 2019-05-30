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
                <li>Partner Directory <a href='/page-partner-directory.html'>Landing page</a> | <a href='/page-partner-directory_filtered.html'>Results page</a></li>
                <li>Reference Designs <a href='/page-reference-designs.html'>Landing page</a> | <a href='/page-reference-designs_filtered.html'>Results page</a></li>
                <li>Software Center <a href='/page-software-center.html'>Landing page</a> | <a href='/page-software-center_filtered.html'>Results page</a></li>
                <li>Training <a href='/page-training.html'>Landing page</a> | <a href='/page-training_filtered.html'>Mixed results page</a> | <a href='/page-training_filtered_classroom.html'>Classroom results page</a> | <a href='/page-training_filtered_online.html'>Online results page</a></li>
              </ul>
            </div>
          </div>
        </div>

        <article>
          <h2>Templates</h2>
          <div className='row'>
            <div className='col-sm-4 '>
              <h3 id='template-basic'>Third Party template</h3>
              <div className='thumbnail'>
                <a href='./templates/third-party-template.html' target='_blank'>
                  {/* <img src='images/third-party-template.png' alt='' style={{ height: '200px' }} /> */}
                  <Img fluid={data.thirdParty.childImageSharp.fluid} />
                </a>
                <div className='caption'>
                  <h4 className='text-center'>Third Party Template</h4>
                  <p><a href='./resources/third-party-template.zip' className='btn btn-block' role='button'>Download</a></p>
                </div>
              </div>
            </div>
            <div className='col-sm-4 '>
              <h3 id='template-basic'>C-Frame template</h3>
              <div className='thumbnail'>
                <a href='./templates/c-frame-template.html' target='_blank'>

                  <Img fluid={data.cFrame.childImageSharp.fluid} />
                </a>
                <div className='caption'>
                  <h4 className='text-center'>C-Frame Template</h4>
                  <p><a href='./resources/c-frame-template.zip' className='btn btn-block' role='button'>Download</a></p>
                </div>
              </div>
            </div>
            <div className='col-sm-4 '>
              <h3 id='template-basic'>Centered template</h3>
              <div className='thumbnail'>
                <a href='./templates/centered-template.html' target='_blank'>
                  <Img fluid={data.centered.childImageSharp.fluid} />
                  {/* <img src='./img/centered-template.png' alt='' style={{ height: '200px' }} /> */}
                </a>
                <div className='caption'>
                  <h4 className='text-center'>Centered Template</h4>
                  <p><a href='./resources/centered-template.zip' className='btn btn-block' role='button'>Download</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>

            <div className='col-sm-4 '>
              <h3>PSP Template</h3>
              <div className='thumbnail'>
                <a href='templates/psp-template.html' target='_blank'>
                  <Img fluid={data.pspTemplate.childImageSharp.fluid} />
                  {/* <img src='../../images/psp-template.png' alt='' style={{ height: '200px' }} /> */}
                </a>
                <div className='caption'>
                  <h4 className='text-center'>PSP Template</h4>
                  <p><a href='templates/psp-template.html' target='_blank' className='btn btn-block' role='button'>Open</a></p>
                </div>
              </div>
            </div>

            <div className='col-sm-4 '>
              <h3>Single Page App Results page</h3>
              <div className='thumbnail'>
                <a href='templates/spa-results-template.html' target='_blank'>
                  <Img fluid={data.spaTemplate.childImageSharp.fluid} />
                  {/* <img src='../../images/spa-template.png' alt='' style={{ height: '200px' }} /> */}
                </a>
                <div className='caption'>
                  <h4 className='text-center'>Single Page App Results page</h4>
                  <p><a href='templates/spa-results-template.html' target='_blank' className='btn btn-block' role='button'>Open</a></p>
                </div>
              </div>
            </div>


            <div className='col-sm-4 '>
              <h3>SASS files</h3>
              <div className='thumbnail'>
                <div className='caption'>
                  <h4>SASS files to build nxp-web stylesheet </h4>
                  <code>nxp-web.css</code>
                  <p><a href='resources/sass.zip' className='btn' role='button'>Download</a></p>
                </div>
              </div>
            </div>


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

