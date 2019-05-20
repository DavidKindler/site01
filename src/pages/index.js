/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-quotes */
/* eslint-disable react/no-unescaped-entities */
import React from "react"
import Scrollspy from 'react-scrollspy'
import { Link } from "gatsby"
// import { graphql, Link } from "gatsby"
// import ScrollSpySidebar from '../components/scrollspy-sidebar';
import CodeBlock from "../components/syntax-highlighter"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import "../../sass/nxp-web.scss"
import "../../sass/basecamp-docs.scss"



const IndexPageMainContent = () => (
  <div className='bs-docs-section'>

    <a className='anchor' id='overview' value="Overview" >
      <h1>Overview</h1>
    </a>
    <p className='lead'>NXP Web (NXP-WEB) is the web publishing framework that we use for our corporate website. It is a superset of Bootstrap v3. So if you know Bootstrap you know NXP-WEB! NXP-WEB uses the same grid layout and mobile ready styling built into Bootstrap. We have customized it to reflect the NXP Brand Design through the use of <a href='http://css-tricks.com/multiple-class-id-selectors/' target='_blank' rel='noopener noreferrer'>compound classes</a>.</p>

    <p>NXP-WEB allows you to combine classes together to get the features that you want. Using compound classes allows you to create the page style that you need. Adhoc styling should be kept to a minimum.</p>


    <section className='overview-doctype'>
      <a className='anchor' id='overview_doctype' value="HTML5 doctype" >
        <h3>HTML5 doctype</h3></a>
      <p>NXP-WEB makes use of certain HTML elements and CSS3 properties that require the use of the HTML5 doctype. Include it at the beginning of all your projects.</p>
      <CodeBlock
        language={"html"}
        value={`
        <!DOCTYPE html>
        <html lang="en">
          ...
        </html>
        `} />
    </section>

    <section className='overview-mobile'>
      <a className='anchor' id='overview_mobile' value="Mobile First" >
        <h3>Mobile First</h3></a>
      <p><strong>NXP-WEB is mobile first</strong>.</p>
      <p>To ensure proper rendering and touch zooming, <strong>we add the viewport meta tag</strong> to the <code>&lt;head&gt;</code>.</p>
      <CodeBlock
        language={"html"}
        value={`<meta name="viewport" content="width=device-width, initial-scale=1">`} />

      <p>You can disable zooming capabilities on mobile devices by adding <code>user-scalable=no</code>to the viewportmeta tag. This disables zooming, meaning users are only able to scroll, and results in your site feeling a bitmore like a native application. Overall, we don't recommend this, so use caution!</p>
      <CodeBlock
        language={"html"}
        value={`<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"> `} />

    </section>

    <section className='overview-sass'>
      <a className='anchor' id='overview_sass' value="Using SASS" >
        <h3>Using SASS</h3></a>
      <p>NXP-WEB's CSS is built on <Link to='/sass'>SASS</Link>, a preprocessor with additional functionality like variables, mixins, and functions for compiling CSS.</p>
    </section>

    <section className='overview-grids'>
      <a className='anchor' id='overview_grids' value="Grids" >
        <h3>Grids</h3></a>
      <p>NXP-WEB uses a responsive, mobile first fluid grid system that appropriately scales up to 12 columns as the device or viewport size increases. </p>
    </section>



    <section className="browser-support">
      <a className='anchor' id="browser" value="Browser and device support" >
        <h2 className="page-header">Browser and device support</h2></a>
      <p>NXP-WEB is built to work best in the latest desktop and mobile browsers, meaning older browsers might display differently styled, though fully functional, renderings of certain components.</p>
      <section>
        <a className='anchor' id="browser_support" value="Supported Browsers" >
          <h3>Supported Browsers</h3></a>
        <p>Specifically, we support the <strong>latest versions</strong> of the following browsers and platforms. On Windows, <strong>we support Internet Explorer 10+</strong>. More specific support information is provided below.</p>

        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <td />
                <th>Chrome</th>
                <th>Firefox</th>
                <th>Internet Explorer</th>
                <th>Opera</th>
                <th>Safari</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Android</th>
                <td className="text-success"><span className="icon-checkmark" /></td>
                <td className="text-danger"><span className="icon-close" /> </td>
                <td className="text-muted" rowSpan="3" style={{ verticalAlign: "middle" }}>N/A</td>
                <td className="text-danger"><span className="icon-close" /> </td>
                <td className="text-muted">N/A</td>
              </tr>
              <tr>
                <th>iOS</th>
                <td className="text-success"><span className="icon-checkmark" /></td>
                <td className="text-muted">N/A</td>
                <td className="text-danger"><span className="icon-close" /> </td>
                <td className="text-success"><span className="icon-checkmark" /></td>
              </tr>
              <tr>
                <th>Mac OS X</th>
                <td className="text-success"><span className="icon-checkmark" /></td>
                <td className="text-success"><span className="icon-checkmark" /></td>
                <td className="text-success"><span className="icon-checkmark" /></td>
                <td className="text-success"><span className="icon-checkmark" /></td>
              </tr>
              <tr>
                <th>Windows</th>
                <td className="text-success"><span className="icon-checkmark" /></td>
                <td className="text-success"><span className="icon-checkmark" /></td>
                <td className="text-success"><span className="icon-checkmark" /></td>
                <td className="text-success"><span className="icon-checkmark" /></td>
                <td className="text-danger"><span className="icon-close" /> </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Unofficially, NXP-WEB should look and behave well enough in Chromium and Chrome for Linux, Firefox for Linux, and Internet Explorer 8+, though they are not officially supported.</p>
      </section>

      <section className="browser-ie">
        <a className='anchor' id="browser_ie" value="IE Compatibility modes" >
          <h3>IE Compatibility modes</h3></a>
        <p>To be sure you're using the latest rendering mode for IE, make sure the following <code>&lt;meta&gt;</code> tag is in your pages:</p>
        <CodeBlock
          language={"html"}
          value={`<meta http-equiv="X-UA-Compatible" content="IE=edge">`} />


        <p>Confirm the document mode by opening the debugging tools: press <kbd>F12</kbd> and check the "Document Mode".</p>
        <p>See <a href="http://stackoverflow.com/questions/6771258/whats-the-difference-if-meta-http-equiv-x-ua-compatible-content-ie-edge">this StackOverflow question</a> for more information.</p>
      </section>
    </section>






  </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <div className="fsl-container container">
      <div className="row" id="content">
        <div className="col-md-3">
          <div className="fsl-docs-sidebar affix">
            <Scrollspy className="nav" items={['overview', 'overview_doctype', '#overview_mobile', 'overview_sass', 'overview_grids', 'browser', 'browser_support', 'browser_ie']} currentClassName="active" >
              <li><a href="#overview">Overview</a></li>
              <li style={{ paddingLeft: '10px' }}><a href="#overview_doctype">HTML5 doctype</a></li>
              <li style={{ paddingLeft: '10px' }}><a href="#overview_mobile">Mobile first</a></li>
              <li style={{ paddingLeft: '10px' }}><a href="#overview_sass">Using Sass</a></li>
              <li style={{ paddingLeft: '10px' }}><a href="#overview_grids">Grids</a></li>
              <li><a href="#browser">Browser and device support</a></li>
              <li style={{ paddingLeft: '10px' }}><a href="#browser_support">Supported browsers</a></li>
              <li style={{ paddingLeft: '10px' }}><a href="#browser_ie">IE Compatibility modes</a></li>
            </Scrollspy>
          </div>



        </div>
        <div className="col-md-9" role="main">

          {<IndexPageMainContent />}


        </div></div></div>
  </Layout>
)

export default IndexPage
