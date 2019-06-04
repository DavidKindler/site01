import React from "react"
import Layout from "../../components/layout"
// import { Link } from "gatsby"
import SEO from "../../components/seo"
import CodeBlock from "../../components/syntax-highlighter"

const ThirdPartyMenu = ({ data }) => {
  return (
    <Layout>
      <SEO title='Third Party Menu' />
      <div id="third-party-content">
        <h1>Third party header/footer implementation</h1>

        <p>
          In the past we have asked you to add a number of javascript libraries
          and scripts, our global stylesheet and boilerplate html markup.
        <a href="https://branding.nxp.com/templates/third-party-template.html">See example here.</a>
        </p>
        <p>
          This often causes issues on third party sites where javacript or CSS
          overrides default layouts.
      </p>
        <p>
          We have implemented a new approach that bundles all the html, javascript
          and CSS styles into one javascript file that is resourced from cached
          servers.
      </p>
        <p>
          Please add the code below at end of
        <span>&lt;</span>body<span>&gt;</span> section. <br />
          You may need to change the <b>nxp-site-id</b> value so please check with
          us before you do this.
      </p>
        <CodeBlock
          language={"html"}
          value={`
<script type="text/javascript" src="//www.nxp.com/resources/scripts/nxp-cms/global-bundle-load.js" nxp-site-id="default" id="nxp-site"></script><script src="//www.nxp.com/resources/scripts/analytics/WEBANALYTICS_DTM_3RDPARTY.js"></script>
<script>
          includeEbizJs(true); //Set to False if jquery is not included on the page.
          includeAdobeJs();
          trackPageViewForAnalytics();
</script>
            `} />


        <p>
          Then, where you want the header navigation to appear add the following:
      </p>
        <CodeBlock
          language={"html"}
          value={`<div id="nxp-header"></div>`}
        />


        <p>And where you want the footer to appear add the following:</p>
        <CodeBlock
          language={"html"}
          value={`<div id="nxp-footer"></div>`}
        />

        <h2>That's it!</h2>

        <p>Please work with your business liason to address any issues.</p>

        <h3>Existing - Legacy NXP third party members</h3>
        <p>
          <strong>
            Since the new javascript will incorporate all the html, styling and
            code necessary to work there is no need to load anything other than
            what is shown above. Unless needed for your own site you should remove
            any
          <span>&lt;</span>link<span>&gt;</span>, <span>&lt;</span>script<span>&gt;</span>
            or html markup related to the NXP header or footer. If you need
            assistance with this please contact your NXP business liason.
        </strong>
        </p>

      </div>

    </Layout>)
}


export default ThirdPartyMenu
