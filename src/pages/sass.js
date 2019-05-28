import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scrollspy from 'react-scrollspy'
import CodeBlock from "../components/syntax-highlighter"
import "../../sass/nxp-web.scss"
import "../../sass/basecamp-docs.scss"

const Sass = () => (
  <Layout>
    <SEO title='SASS' />
    <div className='fsl-container container'>
      <div className='row' id='content'>
        <div className='col-md-3'>
          <div className='fsl-docs-sidebar affix'>
            <Scrollspy className='nav' items={['what-is-sass', 'getting-started', 'importing', 'commenting', 'variable', 'mixins', 'nested-rules', 'parent-selectors', 'functions', 'resources', 'nxp-use', 'imported-files', 'common-stylesheets', 'guidelines']} currentClassName='active' >
              <li>
                <a href='#what-is-sass'>Intro to Sass</a>
                <ul className='nav'>
                  <li><a href='#getting-started'>Geting Started</a></li>
                  <li><a href='#importing'>Importing</a></li>
                  <li><a href='#commenting'>Commenting</a></li>
                  <li><a href='#variable'>Variables</a></li>
                  <li><a href='#mixins'>Mixins</a></li>
                  <li><a href='#nested-rules'>Nested Rules</a></li>
                  <li><a href='#parent-selectors'>Parent Selectors</a></li>
                  <li><a href='#functions'>Functions</a></li>
                  <li><a href='#resources'>Find out more</a></li>
                </ul>
              </li>
              <li>
                <a href='#nxp-use'>How we use sass</a>
                <ul className='nav'>
                  <li><a href='#imported-files'>Imported stylesheets</a></li>
                  <li><a href='#common-stylesheet'>Common Stylesheet</a></li>
                </ul>
              </li>
              <li>
                <a href='#guidelines'>CSS Coding Guidelines</a>
              </li>
            </Scrollspy>
          </div>



        </div>
        <div className='col-md-9' role='main'>

          <div className='bs-docs-section'>
            <h1 id='what-is-sass'>A Brief Intro to Sass CSS</h1>
            <h3>What is SASS?</h3>
            <ul className='boxes'>
              <li>sass is a CSS pre-processor.</li>
              <li>It extends the language of CSS, adding features that allow programmatic functionality such as variables, functions, etc.</li>
              <li>It can make CSS more maintainable, themable and extendable.</li>
              <li>Can run from command line, IDE, code or web page.</li>
              <li>It provides formatted, customizable output that is checked for syntax.</li>
            </ul>
            <h3 id='getting-started'>Getting Started</h3>
            <p>Please refer to the <a href='http://sass-lang.com/install' target='_blank'>Sass Installation page</a> for instructions on how to install Sass for your platform</p>

            <h3 id='importing'>Importing</h3>
            <ul className='boxes'>
              <li>Instead of having one big .scss file you can have multiple files and use the <code>@import</code> command to combine all the .sass files into one.</li>
              <li>All the mixins and variables will be made available to the main file.</li>
            </ul>
            <CodeBlock
              language={"css"}
              value={`
          @import “type.scss”;
          @import “colors.scss”;
          `} />
            <h3 id='commenting'>Commenting</h3>
            <p>Multuple line comments are preserved</p>
            <CodeBlock
              language={"css"}
              value={`
              /* This will be shown in final compiled css file */
              /*
              This does too!
              */
         `} />
            <p>Single line comments are "silent", they do not show up in the compiled css output.</p>
            <CodeBlock
              language={"css"}
              value={`//This will not show up in compiled code.  Use me instead!`} />


            <h3 id='variables'>Variable or Constants</h3>
            <p>Variables are declared and used with the $ symbol.  You give them a name and a value and then you can refer to them anywhere in your .sass file.</p>
            <CodeBlock
              language={"css"}
              value={`
             $name: value;
             $nxp-orange:    #f9b500;
             background-color: $nxp-orange;
          `} />

            <p>Variables can also be assigned to other variables</p>
            <CodeBlock
              language={"css"}
              value={`
$mega-menu-background-color: $nxp-orange;
`} />

            <p>Variables are actually constants in that they can only be defined once.</p>

            <h3 id='mixins'>Mixins</h3>
            <p>Mixins allow you to include (mix-in) properties from one rule-set into another.</p>
            <CodeBlock
              language={"css"}
              value={`
              @mixin bordered { border: solid 1px black; }

              .menu {
                @include bordered;
                color: @nxp-orange;
              }
           `}
            />

            <p><strong>Output:</strong></p>
            <CodeBlock
              language={"css"}
              value={`
              .menu {
                border: 1px solid black;
                color: #f9b500;
              }
           `}
            />

            <h3 id='nested-rules'>Nested Rules</h3>
            <p>Nested gives you the ability to cascade your CSS</p>
            <p><em>Instead of:</em></p>
            <CodeBlock
              language={"css"}
              value={`
            #header { color: black; }
            #header .nav { font-size: 12px; }
            #header .logo { width:100px; }
         `} />

            <p><em>You can write it this way:</em></p>
            <CodeBlock
              language={"css"}
              value={`
              #header {
                color: black;

                .navigation { font-size: 12px; }

                .logo { width: 100px; }
              }
            `} />

            <h3 id='parent-selectors'>Parent Selectors</h3>
            <p>The & operator represents the parent selector in a nested rule and is used most combining classes or pseudo-class to an existing selector.</p>

            <CodeBlock
              language={"css"}
              value={`
a.blue {
  color: blue;

  &:hover { color:green !important; }

  &.uppercase { text-transform: uppercase; }
              }
           `} />
            <p><strong>Ouput:</strong></p>
            <CodeBlock
              language={"css"}
              value={`
a.blue { color: blue; }
a.blue:hover { color:green; }
a.blue.uppercase { text-transform: uppercase; }
`} />
            <h3 id='functions'>Functions</h3>
            <p>Scss has many built in functions that can be used to compute values.</p>
            <CodeBlock
              language={"css"}
              value={`
.nxp-orange-lightened {
  color: lighten($nxp-orange, 10%);
              }
           `} />

            <p>For a complete list of functions and examples, view the <a href='http://sass-lang.com/documentation/file.SASS_REFERENCE.html#functions' target='_blank'>SASS documentation</a> online.</p>

            <h3 id='resources'>Resources</h3>
            <p>Scss has many other features such as Operations, Conditionals and Namespaces, String Interpolation and much more. Find out more about what sass has to offer at <a href='http://sasscss.org' target='_blank'>http://sasscss.org</a>.</p>

            <h2 id='nxp-use'>How we use sass to compile css</h2>
            <p>We use sass to create our common stylesheet used in the vast majority of our pages.</p>
            <p>After an extensize audit of the most popular pages viewed we compiled a list of stylesheets that were commonly used.  We made each stylesheet a .sass file and combined them into one common styleseet <code>nxp-web.css</code></p>

            <h3 id='imported-files'>Imported Files</h3>
            <p>We start with the basic <a href='http://getbootstrap.com'>Bootstrap</a> .sass files and override them with delta files.  We then add ed all the legacy stylesheets.  In addition we encoded the common background image elements and added them to the stylesheet directly.</p>

            <h3 id='common-stylesheet'>Common Stylesheet</h3>
            <p>The main .sass file <code>nxp-web.sass</code> is mostly a list of <code>@import</code> statements. When making changes it is important to search all the .sass files to see where the root changes need to be made.</p>
            <p>The <code>FSL.nxp-rebrand-fixes.sass</code> file is the last file in the imported list.  It is there for styling that can not be adjusted elesewhere.</p>
            <p>For a list of all the .sass files go <a href='nxprebrand/sass/'>here</a>.</p>
            <p>For a download of the latest .css and templates please go <a href='resources.html'>here</a>.</p>
            <p className='alert' style={{ backgroundColor: 'linen' }}>Please note that the common stylesheet is used for the majority of our pages.  Please do not add styles that are used by only one page.  For a situation like that please use a <code>&lt;style&gt;</code> section within the that page.</p>

            <h2 id='guidelines'>CSS Coding Guidelines</h2>
            <ul className='boxes'>
              <li>Avoid using <code>!important</code> in your css selectors.</li>
              <li>Remember to use <a href='#commenting'>single line comments</a> in .sass files.  They will not show up in final compiled css.</li>
            </ul>
          </div>
        </div>


      </div></div>
  </Layout>
)

export default Sass
