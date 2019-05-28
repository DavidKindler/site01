/* eslint-disable react/jsx-no-target-blank */
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scrollspy from 'react-scrollspy'
import CodeBlock from "../components/syntax-highlighter"
import "../../sass/nxp-web.scss"
import "../../sass/basecamp-docs.scss"

const Javascript = () => (
  <Layout>
    <SEO title='Javascript' />
    <div className='fsl-container container'>
      <div className='row' id='content'>
        <div className='col-md-3'>
          <div className='fsl-docs-sidebar affix'>
            <Scrollspy className='nav' items={['overview', 'folder_structure', 'modules', 'webpack', 'unit_testing', 'bestPractices', 'general_principles', 'whitespace', 'comments', 'syntax', 'formatting', 'tools', 'toolw_web', 'code_editors']} currentClassName='active' >

              <li>
                <a href='#overview'>Overview</a>
                <ul className='nav'>
                  <li><a href='#folder_structure'>Folder Structure</a></li>
                  <li><a href='#modules'>Modules</a></li>
                  <li><a href='#webpack'>Webpack</a></li>
                  <li><a href='#unit_testing'>Unit Testing</a></li>
                </ul>
              </li>
              <li>
                <a href='#bestPractices'>Best Practices</a>
                <ul className='nav'>
                  <li><a href='#general_principles'>General Principles</a></li>
                  <li><a href='#whitespace'>Whitespace</a></li>
                  <li><a href='#comments'>Comments</a></li>
                  <li><a href='#syntax'>Syntax</a></li>
                  <li><a href='#formatting'>Formatting</a></li>
                </ul>
              </li>
              <li>
                <a href='#tools'>Tools</a>
                <ul className='nav'>
                  <li><a href='#tools_web'>Web Tools</a></li>
                  <li><a href='#code_editors'>Code Editors</a></li>
                </ul>
              </li>

              <a className='back-to-top' href='#overview'>Back to top</a>
            </Scrollspy>
          </div>



        </div>
        <div className='col-md-9' role='main'>

          <div className='fsl-docs-section'>

            <a className='anchor' id='overview' />
            <h1>Javascript Overview</h1>

            {/* <!-- Overview --> */}
            <article className='overview'>

              <p className='lead'>Two bundled javascript files are used on every page to manage global components such as header, footer, language switching, login blocks, rich media carousel, etc.</p>

              <p>The two files used are <code>global-nav.js</code> and <code>global-web-common.js</code><br />  All source files, build scripts and unit test scripts are kept in our git repository</p>

              <section className='folder_structure'>
                <a className='anchor' id='folder_structure' />
                <h3 className='page_header'>Folder Structure</h3>
                <p>Source files are in the <code>/src/</code> directory.  Data files are in <code>/src/data</code> and plugins are in <code>/src/plugins</code><br />
                  Dependent scripts are preceded with an underscore (_)</p>

              </section>

              <section className='modules'>
                <a className='anchor' id='modules' />
                <h3 className='page_header'>Modules</h3>
                <p>ES6 module standards are used to import and export scripts.</p>

              </section>

              <section className='webpack'>
                <a className='anchor' id='webpack' />
                <h3 className='page_header'>Webpack</h3>
                <p>Webpack is used to bundle all scripts.  Babel loader is used for transpiling.</p>

              </section>

              <section className='unit_testing'>
                <a className='anchor' id='unit_testing' />
                <h3 className='page_header'>Unit Testing</h3>
                <p>Unit test scripts are in the <code>/test</code> folder. </p>

              </section>


            </article>


            {/* <!-- Best Practices --> */}
            <article className='bestPractices'>
              <a className='anchor' id='bestPractices' />
              <h2 className='page-header'>Best Practices</h2>
              <p>NXP Web uses <a href='http://api.jquery.com/' target='_blank'>jQuery</a> and <a href='http://getbootstrap.com/javascript/' target='_blank'>Bootstrap's</a> javascript frameworks. Follow the previous links for complete documentation. Don’t always depend on javascript. What if javascript was turned off? Remember that this is what search engines see. Below is a set of guidelines to follow when creating new javascript functions and components:</p>

              {/* <!-- General Principles --> */}
              <section className='general_principles'>
                <a className='anchor' id='general_principles' />
                <h3>General Principles</h3>
                <ul>
                  <li>Don't try to prematurely optimize your code; keep it readable and understandable</li>
                  <li>All code in any code-base should look like a single person typed it, even when many people are contributing to it</li>
                  <li>Strictly enforce the agreed-upon style</li>
                  <li>If in doubt when deciding upon a style use existing, common patterns</li>
                  <li>Don't reinvent the wheel; use styles, templates and code that have already been developed</li>
                  <li>Check spelling and grammar in text and code</li>
                  <li>Check console output for warnings or errors</li>
                  <li>Design with a mobile-first approach</li>
                  <li>Build in sufficient testing time</li>
                  <li>Test pages and components on all browsers and devices</li>
                  <li>Set aside time to write documentation</li>
                </ul>
              </section>
              {/* <!-- End Best Practices --> */}

              {/* <!-- Whitespace --> */}
              <section className='whitespace'>
                <a className='anchor' id='whitespace' />
                <h3>Whitespace</h3>
                <p>Use soft tabs with two spaces, they're the only way to guarantee code renders the same in any environemnt. Always be consistent in your use of whitespace, never mix spaces and tabs for indentation. Use whitespace to improve readability.</p>

                <div className='bs-callout bs-callout-info'>
                  <p><strong>Tip:</strong> configure your editor to &ldquo;show invisibles&rdquo; and to automatically remove end-of-line whitespace.</p>
                </div>
              </section>
              {/* <!-- End Whitespace --> */}

              {/* <!-- Comments --> */}
              <section className='comments'>
                <a className='anchor' id='comments' />
                <h3>Comments</h3>
                <p>Well commented code is extremely important. Take time to describe components, how they work, their limitations, and the way they are constructed. Don't leave others in the team guessing as to the purpose of uncommon or non-obvious code.</p>

                <ul>
                  <li>Place comments on a new line above their subject</li>
                  <li>Keep line-length to a sensible maximum of 80 columns</li>
                  <li>Make liberal use of comments to break your code into discrete sections</li>
                  <li>Use &ldquo;sentene case&rdquo; comments and consistent text indentation</li>
                </ul>

                <div className='bs-callout bs-callout-info'>
                  <p><strong>Tip:</strong> configure your editor to provide you with shortcuts to output agreed-upon comment patterns.</p>
                </div>
              </section>
              {/* <!-- End Comments --> */}

              <section className='syntax'>
                <a className='anchor' id='syntax' />
                <h3>Syntax</h3>
                <ul className='boxes'>
                  <li>Use soft tabs with two spaces, they're the only way to guarantee code renders the same in any environment</li>
                  <li>Nested elements should be indented once (two spaces)</li>
                  <li>Camel-case variable names - <code>var variableName = 'variable'</code></li>
                  <li>Acronyms should be camel-cased as well. - <code>httpXmlResponse</code></li>
                  <li>Constants are all caps, seperated by underscores -  <code>CONSTANT_NAME</code></li>
                  <li>Class names are camel-cased with a leading capital letter. - <code>ClassName()</code></li>
                  <li>Function names are also camel-cased (with the addition of the acronym rule). - <code>makePostRequest()</code></li>
                  <li>Always use single quotes for strings ie. <code>var person = 'John Doe';</code></li>
                </ul>
              </section>

              <section className='format'>
                <a className='anchor' id='format' />
                <h3>Formatting</h3>
                <ul className='boxes'>
                  <li>Do not place javascript code among html as this blocks the page</li>
                  <li>Writing markup in a JavaScript files makes the content harder to find, harder to edit, and less performant, avoid it whenever possible</li>
                  <li>Place script loaders and javascript at bottom of pages</li>
                  <li>Avoid inline code for events (eg. <code>&lt;a onclick="doSomething()" href="#"&gt;Click!&lt;/a&gt;) </code></li>
                  <li>Run <a href='http://www.jslint.com/' target='_blank'>JSLint</a>/<a href='http://jshint.com/' target='_blank'>JSHint</a> to validate code</li>
                  <li>Use dependencies to load scripts</li>
                  <li>Don't leave console debugging messages in your production code</li>
                </ul>
                <CodeBlock
                  language={"javascript"}
                  value={`
//  Template for creating javascript functions
//  Put common code in blocks like this

  (function($){
    'use strict';

  try{
    // PUT CODE HERE
  } catch(e){
    console.error('ERROR STATEMENT::', e);
  }
})(jQuery);
          `} />

              </section>
            </article>
            {/* <!-- End Javascript --> */}

            {/* <!-- Tools --> */}
            <article className='tools'>
              <a className='anchor' id='tools' />
              <h2 className='page-header'>Tools</h2>

              {/* <!-- Web Tools --> */}
              <section className='tools-web'>
                <a className='anchor' id='tools_web' />
                <h3>Web Tools</h3>
                <ul className='boxes'>
                  <li><a href=''>CSS Tricks</a>: An online blog with tons of information around CSS</li>
                  <li><a href=''>Can I Use</a> is a website which shows you which browsers support certain HTML/CSS properties</li>
                  <li>W3C Validators for <a href='https://validator.w3.org/' target='_blank'>HTML</a> and <a href='https://jigsaw.w3.org/css-validator/' target='_blank'>CSS</a> check your web pages or code files for errors</li>
                  <li><a href='https://developer.chrome.com/devtools' target='_blank'>Google Chrome Inspcetor</a></li>
                  <li><a href='https://developer.mozilla.org/en-US/docs/Tools' target='_blank'>Firefox Developer Tools</a></li>
                  <li><a href='http://www.my-debugbar.com/wiki/IETester/HomePage' target='_blank'>Internet Explorer IETester</a> (for testing in different versions of IE)</li>
                  <li><a href='https://www.w3.org/People/Raggett/tidy/' target='_blank'>Tidy</a></li>
                  <li><a href='http://jshint.com/' target='_blank'>JSHint</a> and <a href='http://www.jslint.com/' target='_blank'>JSLint</a> are online tools to help with javascript errors and potential problems</li>
                  <li><a href='https://www.browserstack.com' target='_blank'>Browserstack</a> is an online testing platform that allows you to choose various OS and browser versions for browser testing websites (account required)</li>
                  <li><a href='https://github.com/philipwalton/flexbugs' target='_blank'>Flexbugs</a> is a resource for troubleshooting Flex issues</li>
                </ul>
              </section>

              {/* <!-- Code Editors --> */}
              <section className='code-editors'>
                <a className='anchor' id='code_editors' />
                <h3>Code Editors</h3>
                <p>Many code editors have settings for configuring code, whitespace and comments, along with additional features. Many have dark &lsquo;themes&rsquo; which is easier on the eyes, and large collections of plugins to make coding quicker and easier. Some of the best options are:</p>

                <ul className='columns'>
                  <li><a href='https://atom.io/' target='_blank'>Atom Code Editor</a></li>
                  <li><a href='https://www.sublimetext.com/' target='_blank'>Sublime Text</a></li>
                  <li><a href='https://code.visualstudio.com/' target='_blank'>Visual Studio Code</a></li>
                  <li><a href='http://brackets.io/' target='_blank'>Brackets</a></li>
                  <li><a href='http://macromates.com/download' target='_blank'>TextMate</a></li>
                </ul>
              </section>
              {/* <!-- End Code Editors --> */}
            </article>

            {/* <!-- End Tools --> */}

          </div>


        </div></div></div>
  </Layout >
)

export default Javascript;
