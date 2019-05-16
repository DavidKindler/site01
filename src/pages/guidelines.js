/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-quotes */
import React from "react"
import CodeBlock from "../components/syntax-highlighter"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CodeGuidelines = () => (
  <Layout>
    <SEO title="Code Guidelines" />

    <div className="fsl-container container">
      <div className="row" id="content">
        <div className="col-md-3">sidebar</div>
        <div className="col-md-9" role="main">
          <div className="fsl-docs-section">
            <a className="anchor" id="overview" />
            <h1>Code Guidelines</h1>

            <article className="overview">
              <div className="bs-callout bs-callout-warning">
                <p className="lead">
                  The following document outlines a reasonable style guide for
                  code development. These guidelines strongly encourage the use
                  of existing, common, sensible patterns. This is a living
                  document and new ideas are always welcome. Please contribute.
                </p>
              </div>

              <p className="lead">
                Our approach to HTML &amp; CSS emphasizes maintainability,
                scalability, upgradability, and modularity. It is important that
                HTML and CSS are written in a symbiotic way:
              </p>
              <ul className="lead">
                <li>
                  HTML, CSS and JavaScript should be used for their intended
                  purposes, ie Document Structure, Visual Style, and Behavior
                  respectively
                </li>
                <li>
                  CSS should read like English, and the particular element being
                  styled should be able to be inferred from reading the selector
                </li>
                <li>SASS should be used to reinforce the above principles</li>
              </ul>

              {/* <!-- General Principles --> */}
              <section className="overview-general-principles">
                <a className="anchor" id="overview_general_principles" />
                <h3>General Principles</h3>
                <ul>
                  <li>
                    Don't try to prematurely optimize your code; keep it
                    readable and understandable
                  </li>
                  <li>
                    All code in any code-base should look like a single person
                    typed it, even when many people are contributing to it
                  </li>
                  <li>Strictly enforce the agreed-upon style</li>
                  <li>
                    If in doubt when deciding upon a style use existing, common
                    patterns
                  </li>
                </ul>
              </section>
              {/* <!-- End General Principles --> */}

              {/* <!-- Best Practices --> */}
              <section className="overview-best-practices">
                <a className="anchor" id="overview_best_practices" />
                <h3>Best Practices</h3>
                <ul>
                  <li>
                    Don't reinvent the wheel; use styles, templates and code
                    that have already been developed
                  </li>
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
              <section className="overview-whitespace">
                <a className="anchor" id="overview_whitespace" />
                <h3>Whitespace</h3>
                <p>
                  Use soft tabs with two spaces, they're the only way to
                  guarantee code renders the same in any environemnt. Always be
                  consistent in your use of whitespace, never mix spaces and
                  tabs for indentation. Use whitespace to improve readability.
                </p>

                <div className="bs-callout bs-callout-info">
                  <p>
                    <strong>Tip:</strong> configure your editor to &ldquo;show
                    invisibles&rdquo; and to automatically remove end-of-line
                    whitespace.
                  </p>
                </div>
              </section>
              {/* <!-- End Whitespace --> */}

              {/* <!-- Comments --> */}
              <section className="overview-comments">
                <a className="anchor" id="overview_comments" />
                <h3>Comments</h3>
                <p>
                  Well commented code is extremely important. Take time to
                  describe components, how they work, their limitations, and the
                  way they are constructed. Don't leave others in the team
                  guessing as to the purpose of uncommon or non-obvious code.
                </p>

                <ul>
                  <li>Place comments on a new line above their subject</li>
                  <li>Keep line-length to a sensible maximum of 80 columns</li>
                  <li>
                    Make liberal use of comments to break your code into
                    discrete sections
                  </li>
                  <li>
                    Use &ldquo;sentene case&rdquo; comments and consistent text
                    indentation
                  </li>
                </ul>

                <div className="bs-callout bs-callout-info">
                  <p>
                    <strong>Tip:</strong> configure your editor to provide you
                    with shortcuts to output agreed-upon comment patterns.
                  </p>
                </div>
              </section>
              {/* <!-- End Comments --> */}

              {/* <!-- Code Editors --> */}
              <section className="overview-code-editors">
                <a className="anchor" id="overview_code_editors" />
                <h3>Code Editors</h3>
                <p>
                  Many code editors have settings for configuring code,
                  whitespace and comments, along with additional features. Many
                  have dark &lsquo;themes&rsquo; which is easier on the eyes,
                  and large collections of plugins to make coding quicker and
                  easier. Some of the best options are:
                </p>

                <ul className="columns">
                  <li>
                    <a href="https://atom.io/" target="_blank">
                      Atom Code Editor
                    </a>
                  </li>
                  <li>
                    <a href="https://www.sublimetext.com/" target="_blank">
                      Sublime Text
                    </a>
                  </li>
                  <li>
                    <a href="https://code.visualstudio.com/" target="_blank">
                      Visual Studio Code
                    </a>
                  </li>
                  <li>
                    <a href="http://brackets.io/" target="_blank">
                      Brackets
                    </a>
                  </li>
                  <li>
                    <a href="http://macromates.com/download" target="_blank">
                      TextMate
                    </a>
                  </li>
                </ul>
              </section>
              {/* <!-- End Code Editors --> */}
            </article>
            {/* <!-- End Overview --> */}

            {/* <!-- HTML --> */}
            <article className="html">
              <a className="anchor" id="html" />
              <h2 className="page-header">HTML</h2>
              <p className="lead">
                HTML should be clean, semantic, free of unecessary clutter, and
                should follow the naming conventions described below.
              </p>

              {/* <!-- Syntax --> */}
              <section className="html-syntax">
                <a className="anchor" id="html_syntax" />
                <h3>Syntax</h3>
                <ul className="boxes">
                  <li>
                    Use soft tabs with two spaces, they're the only way to
                    guarantee code renders the same in any environment
                  </li>
                  <li>Nested elements should be indented once (two spaces)</li>
                  <li>
                    Always use lowercase for all element and attribute names, as
                    it looks neater
                  </li>
                  <li>
                    Always use double quotes, never single quotes, on attributes
                    ie. <code>&lt;div className="double-quote"&gt;</code>
                  </li>
                  <li>
                    Do not include closing slashes in void (self-closing)
                    elements ie. <code>&lt;br&gt;</code>,{" "}
                    <code>&lt;hr&gt;</code>, <code>&lt;img&gt;</code>, and{" "}
                    <code>&lt;input&gt;</code>
                  </li>
                  <li>
                    Always include closing tags for non-void elements ie.{" "}
                    <code>&lt;/li&gt;</code> or <code>&lt;/body&gt;</code>
                  </li>
                  <li>Avoid using inline styles</li>
                  <li>
                    Use{" "}
                    <a
                      href="https://codepen.io/mi-lee/post/an-overview-of-html5-semantics"
                      target="_blank"
                    >
                      semantic code
                    </a>{" "}
                    whenever possible
                  </li>
                  <li>
                    Validate your markup with online tools like the{" "}
                    <a href="https://validator.w3.org/" target="_blank">
                      W3C Validator
                    </a>
                  </li>
                </ul>
              </section>

              <section className="html-attributes">
                <a className="anchor" id="html_attributes" />
                <h3>Attribute Order</h3>
                <p>
                  HTML attributes should come in this particular order to keep
                  code consistently easy to read. <strong>ALL</strong> styling
                  and semantics should be applied to classes (never id's) so
                  they come first. Id's come next since they are primarily
                  needed for JavaScript lookup. All other attributs follow
                  according to the list below:
                </p>
                <ol className="columns" style={{ listStylePosition: "inside" }}>
                  <li>
                    <code>class</code>
                  </li>
                  <li>
                    <code>id</code>, <code>name</code>
                  </li>
                  <li>
                    <code>data-*</code>
                  </li>
                  <li>
                    <code>src</code>, <code>for</code>, <code>type</code>,{" "}
                    <code>href</code>, <code>value</code>
                  </li>
                  <li>
                    <code>title</code>, <code>alt</code>
                  </li>
                  <li>
                    <code>role</code>, <code>aria-*</code>
                  </li>
                </ol>
              </section>

              {/* <!-- Boolean Attributes --> */}
              <section className="html-boolean">
                <a className="anchor" id="html_boolean" />
                <h3>Boolean Attributes</h3>
                <p>
                  A boolean attribute is one that needs no declared value. Don't
                  worry about writing out attributes in full, if the value is
                  the same as the name. That means,{" "}
                  <code>required="required"</code> is not really necessary; just{" "}
                  <code>required</code> is perfectly understandable and works
                  fine. For example:
                </p>
                <CodeBlock
                  language={"jsx"}
                  value={`
<input type="text" disabled />
                  `}
                />
              </section>
            </article>
            {/* <!-- End HTML --> */}

            {/* <!-- CSS --> */}
            <article className="css">
              <a className="anchor" id="css" />
              <h2 className="page-header">CSS</h2>

              <section className="css-block-format">
                <a className="anchor" id="css_block_format" />

                <h3>Block Formatting</h3>
                <ul className="boxes columns">
                  <li>
                    Use soft tabs with two spaces, they're the only way to
                    guarantee code renders the same in any environment
                  </li>
                  <li>Nested elements should be indented once (two spaces)</li>
                  <li>
                    <strong>ALL</strong> stylings should be applied to classes,
                    never IDs
                  </li>
                  <li>
                    When targeting multiple selectors in one CSS block, keep
                    each selector on its own line
                  </li>
                  <li>
                    Include one space before the opening brace of CSS block
                  </li>
                  <li>Place closing braces on a new line</li>
                  <li>
                    Include one space after each <strong>:</strong>
                  </li>
                  <li>
                    Each property declaration should appear on its own line
                  </li>
                  <li>End all property declarations with a semicolon</li>
                  <li>
                    In instances where a rule set includes only one declaration,
                    consider removing line breaks for readability and faster
                    editing
                  </li>
                </ul>
              </section>

              <section className="css-selector-format">
                <a className="anchor" id="css_selector_format" />
                <h3>Selector Formatting</h3>
                <ul className="boxes columns">
                  <li>
                    Comma-separated property values should include one space
                    after each comma
                  </li>
                  <li>
                    Don't include spaces after commas within <code>rgb()</code>,{" "}
                    <code>rgba()</code>, <code>hsl()</code>, <code>hsla()</code>
                    , or <code>rect()</code> values
                  </li>
                  <li>
                    Don't over-qualify selectors with an element like{" "}
                    <code>div.class-name</code>
                  </li>
                  <li>
                    Don't prefix property values or color parameters with a
                    leading zero (e.g. .5 instead of 0.5 and -.5 instead of
                    -0.5)
                  </li>
                  <li>
                    Use variables for colors, spacing, etc. whenever possible
                  </li>
                  <li>
                    Use shorthand hex values where available, e.g.,{" "}
                    <code>#fff</code> instead of <code>#ffffff</code>
                  </li>
                  <li>
                    Lowercase all hex values, e.g., <code>#ffa700</code>.
                    Lowercase letters are much easier to discern when scanning a
                    document as they tend to have more unique shapes
                  </li>
                  <li>
                    Strive to limit use of shorthand declarations to instances
                    where you must explicitly set all the available values, eg.,{" "}
                    <code>background-color: #fff;</code> instead of{" "}
                    <code>background: #fff;</code>. Common misused shorthand
                    properties are <code>padding</code>, <code>margin</code>,
                    and <code>background</code> elements
                  </li>
                  <li>
                    Always use double quotes, never single quotes, on attribute
                    selectors, ie. <code>input[type="text"]</code>
                  </li>
                </ul>

                <CodeBlock
                  language={"scss"}
                  value={`
/* Bad */
.selector-one, .selector-two
{
display:block;
margin-bottom:0px;
background-image:linear-gradient(to right,red,green);
box-shadow:rgba(0,0,0,0.5);
}
input.selector-three[type='text'] { display: none; }

/* Good */
.selector-one,
.selector-two {
  display: block;
  margin-bottom: 0;
  background-image: linear-gradient(to right, $red, $green);
  box-shadow: rgba($black,.5);
}

.selector-three[type="text"] { display: none; }
                `}
                />
              </section>

              <section className="css-declaration">
                <a className="anchor" id="css_declaration" />
                <h3>Declaration Order</h3>
                <p>
                  Related property declarations should be grouped together
                  following this order:
                </p>
                <ol>
                  <li>
                    <strong>Scss Extends</strong> <code>@extends</code>
                    <ul>
                      <li>
                        Extends CSS declarations from other classes or
                        placeholders. Try to limit the use of{" "}
                        <code>@extend</code> due to the issues with cascading
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Scss Mixins</strong> <code>@include</code>
                    <ul>
                      <li>
                        Mixins allow the ability to run a preset block of code
                        while passing in varaibles specific to the application
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Component Specific Variables</strong>
                    <ul>
                      <li>
                        Next comes any component specific variables, which is
                        helpful when working with <code>if</code>,{" "}
                        <code>each</code>, <code>for</code> and{" "}
                        <code>while</code>{" "}
                        <a
                          href="http://thesassway.com/intermediate/if-for-each-while"
                          target="_blank"
                        >
                          directives
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Positioning</strong> (position, top, right,
                    &hellip;)
                    <ul>
                      <li>
                        These declarations can remove an element from the normal
                        flow of the document and override box model related
                        styles
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Box Model</strong> (display, float, width, &hellip;)
                    <ul>
                      <li>
                        Box model declarations come next as they dictate a
                        component's dimensions and placement
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Typography</strong> (font-size, color, text-align,
                    &hellip;)
                    <ul>
                      <li>
                        Typography declarations take place inside the component
                        or without impacting the previous sections, and thus
                        they come after the initial declarations
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Visual</strong> (background-color, border,
                    box-shadow, &hellip;)
                    <ul>
                      <li>
                        Visual declarations take place inside the component or
                        without impacting the previous sections, and thus they
                        come last
                      </li>
                    </ul>
                  </li>
                </ol>
                <p>
                  For a complete list of properties and their order, please see
                  this{" "}
                  <a
                    href="https://github.com/dantilse/css-declaration-order"
                    target="_blank"
                    className="cta"
                  >
                    cheatsheet
                  </a>{" "}
                  on Github.
                </p>

                <CodeBlock
                  language={"scss"}
                  value={`
.element-lg {
  @extend .element;              // sass extend
  @include element-style;        // sass mixins
  $element-spacing: 1em;         // component specific variable
  position: relative;            // Position
  padding: $element-spacing;     // Box Model
  color: $text-color;            // Typography
  border: 1px solid $text-color; // Visual
}
                  `}
                />
              </section>

              <section className="css-names">
                <a className="anchor" id="css_naming" />
                <h3>Naming Convention</h3>
                <p>
                  NXP-WEB uses the same grid layout and mobile ready styling
                  built into Bootstrap. We have customized it to reflect the NXP
                  Brand Design through the use of{" "}
                  <a
                    href="https://css-tricks.com/multiple-class-id-selectors/"
                    target="_blank"
                  >
                    compound classes
                  </a>
                  . Component guidelines are provided{" "}
                  <a href="#components">below</a> to help build modular and
                  re-usable components.
                </p>
                <ul className="boxes">
                  <li>
                    Keep classes lowercase and use dashes (not underscores or
                    camelCase). Dashes serve as natural breaks in related class
                    (e.g., <code>.btn</code> and <code>.btn-danger</code>)
                  </li>
                  <li>
                    ID's should use underscores, ie. <code>id_name</code> so
                    that it is easily distinguised from classes
                  </li>
                  <li>
                    Avoid excessive and arbitrary shorthand notation.{" "}
                    <code>.btn</code> is useful for button, but <code>.s</code>{" "}
                    doesn't mean anything
                  </li>
                  <li>Keep classes as short and succinct as possible</li>
                  <li>
                    Use meaningful names; use structural or purposeful names
                    over presentational
                  </li>
                  <li>
                    Prefix classes based on the closest parent or base class
                  </li>
                  <li>
                    Use .js-* classes to denote behavior (as opposed to style),
                    but keep these classes out of your CSS
                  </li>
                </ul>
              </section>
            </article>

            <article className="scss">
              <a className="anchor" id="scss" />
              <h2 className="page-header">SCSS</h2>

              <section className="scss-nesting">
                <a className="anchor" id="scss_nesting" />
                <h3>Nesting</h3>
                <p>
                  Avoid unnecessary nesting. Just because you can nest, doesn't
                  mean you always should. Consider nesting only if you must
                  scope styles to a parent and if there are multiple elements to
                  be nested. This can usually be avoided by properly naming
                  component elements and utilizing the{" "}
                  <a
                    href="https://jonsuh.com/blog/sass-bem-selector-and-trailing-ampersand/"
                    target="_blank"
                  >
                    ampersand
                  </a>{" "}
                  in sass. Notice the example below keeps nesting to three
                  levels (the unordered list), and those styles are scoped to a
                  component module (<code>.component-links</code>). Unless
                  substantial styles need to be applied to the <code>li</code>{" "}
                  or <code>a</code>, it is unnecessary to apply a class to these
                  elements (although it doesn't hurt). If instead, the{" "}
                  <code>li</code> items included additional components, it would
                  be recommended to apply a class name and scope the children to
                  that component module.
                </p>

                <CodeBlock
                  language={"jsx"}
                  value={`
<article className="component">
  <h2 className="component-title">Title</h2>
  <section className="component-text">
    <p>Some Text goes here.</p>
  </section>
  <ul className="component-links">
    <li><a href="#">Link</a></li>
  </ul>
</article>
                  `}
                />
                <div className="row">
                  <div className="col-sm-6">
                    <CodeBlock
                      language={"scss"}
                      value={`
// SCSS Styles
.component {
  position: relative;

  // Header Area
  &-title { font-size: 1.5em; }

  // Body Area
  &-text {
    margin-bottom: .5em;

    p { line-height: 1.5; }
  }

  // Footer Area
  &-links {
    list-style: none;

    li {
      padding-left: 0;

      a {
        color: $blue;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}
                      `}
                    />
                  </div>

                  <div className="col-sm-6">
                    <CodeBlock
                      language={"scss"}
                      value={`
/* Compiled CSS */
.component {
  position: relative; }

  .component-title {
    font-size: 1.5em; }

  .component-text {
    margin-bottom: .5em;}

  .component-text p {
    line-height: 1.5; }

  .component-links {
    list-style: none; }

    .component-links li {
      padding-left: 0; }

      .component-links li a {
        color: blue; }

        .component-links li a:hover {
          text-decoration: none; }
                    `}
                    />
                  </div>
                </div>
              </section>

              <section className="scss-comments">
                <a className="anchor" id="scss_comments" />
                <h3>Comments</h3>
                <p>
                  Code is written and maintained by people. Ensure your code is
                  descriptive, well commented, and approachable by others. Great
                  code comments convey context or purpose. Do not simply
                  reiterate a component or class name. Be sure to write in
                  complete sentences for larger comments and succinct phrases
                  for general notes. Use single line comments for consistency,
                  eg. <code>// this is a single line comment</code>
                </p>
              </section>

              <section className="scss-variables">
                <a className="anchor" id="scss_variables" />
                <h3>Variables</h3>
                <ul>
                  <li>
                    Use obvious and non-abbreviated names for variables, ie.{" "}
                    <code>$padding-base-vertical</code>
                  </li>
                  <li>
                    Place all variables inside of the nxp_variables.scss file
                    (unless specifically scoped to a component)
                  </li>
                  <li>
                    Use existing variables when possible, ie. (
                    <code>$brand-primary</code> instead of <code>#ffa700</code>)
                  </li>
                </ul>
              </section>

              <section className="scss-extends">
                <a className="anchor" id="scss_extends" />
                <h3>Extends</h3>
                <p>
                  Due to possible complications with the compiled CSS, try to
                  limit the use of <code>@extends</code>. Here is a helpful
                  article on when to use <code>@extends</code> and when to use{" "}
                  <code>@include</code>:{" "}
                  <a
                    href="https://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/"
                    target="_blank"
                  >
                    CSS Wizardry
                  </a>
                  .
                </p>
              </section>

              <section className="scss-mixins">
                <a className="anchor" id="scss_mixins" />
                <h3>Mixins</h3>
                <p>
                  A mixin lets you make groups of CSS declarations that you want
                  to reuse throughout your site. You can even pass in values to
                  make your mixin more flexible, although it is not required.
                  When creating mixins, it is helpful to set default values.
                  This makes their usage easier and less likely to break on
                  comipiling if a parameter is left out.
                </p>
                <ul>
                  <li>
                    Mixins start with the <code>@mixin</code> directive
                  </li>
                  <li>
                    Provide a name, and variables within parenthesis if
                    applicable
                  </li>
                  <li>Set default values by using a colon</li>
                  <li>Separate multiple variables by a comma</li>
                  <li>
                    Include CSS rules inside of curly braces, and use variables
                    in the declared locations
                  </li>
                  <li>
                    When setting variable defaults use the variable name, colon,
                    and value
                  </li>
                </ul>

                <CodeBlock
                  language={"scss"}
                  value={`
// Vertically Align anything
// -------------------------------------------------------
@mixin vertical-align($position: relative, $background: $white) {
  position: $position;
  top: 50%;
  transform: translateY(-50%);
  background-color: $background;
}

// Usage
.image {
  @include vertical-align(relative, $nxp-orange);
  // OR
  @include vertical-align($background: $nxp-orange);
  // additional css styles go here
}
                  `}
                />
              </section>

              <section className="scss-operators">
                <a className="anchor" id="scss_operators" />
                <h3>Math Operators</h3>
                <p>
                  For improved readability, wrap all math operations in
                  parentheses with a single space between values, variables, and
                  operators. For
                  {/* example <code>width: ($variable - 20px);</code> instead of{" "} */}
                  <code>width: $variable - 20px;</code>
                </p>
                <p>
                  When using variables inside of functions, you'll need to
                  interpolate the variable. An example is a <code>calc()</code>{" "}
                  {/* function like so: <code>width: calc(100% - #\{\$variable\});</code> */}
                </p>
              </section>
            </article>

            <article className="javascript">
              <a className="anchor" id="javascript" />
              <h2 className="page-header">Javascript</h2>
              <p>
                NXP Web uses{" "}
                <a href="http://api.jquery.com/" target="_blank">
                  jQuery
                </a>{" "}
                and{" "}
                <a href="http://getbootstrap.com/javascript/" target="_blank">
                  Bootstrap's
                </a>{" "}
                javascript frameworks. Follow the previous links for complete
                documentation. Don’t always depend on javascript. What if
                javascript was turned off? Remember that this is what search
                engines see. Below is a set of guidelines to follow when
                creating new javascript functions and components:
              </p>

              <section className="javascript-syntax">
                <a className="anchor" id="javascript_syntax" />
                <h3>Syntax</h3>
                <ul className="boxes">
                  <li>
                    Use soft tabs with two spaces, they're the only way to
                    guarantee code renders the same in any environment
                  </li>
                  <li>Nested elements should be indented once (two spaces)</li>
                  <li>
                    Camel-case variable names -{" "}
                    <code>var variableName = 'variable'</code>
                  </li>
                  <li>
                    Acronyms should be camel-cased as well. -{" "}
                    <code>httpXmlResponse</code>
                  </li>
                  <li>
                    Constants are all caps, seperated by underscores -{" "}
                    <code>CONSTANT_NAME</code>
                  </li>
                  <li>
                    Class names are camel-cased with a leading capital letter. -{" "}
                    <code>ClassName()</code>
                  </li>
                  <li>
                    Function names are also camel-cased (with the addition of
                    the acronym rule). - <code>makePostRequest()</code>
                  </li>
                  <li>
                    Always use single quotes for strings ie.{" "}
                    <code>var person = 'John Doe';</code>
                  </li>
                </ul>
              </section>

              <section className="javascript-format">
                <a className="anchor" id="javascript_format" />
                <h3>Formatting</h3>
                <ul className="boxes">
                  <li>
                    Do not place javascript code among html as this blocks the
                    page
                  </li>
                  <li>
                    Writing markup in a JavaScript files makes the content
                    harder to find, harder to edit, and less performant, avoid
                    it whenever possible
                  </li>
                  <li>
                    Place script loaders and javascript at bottom of pages
                  </li>
                  <li>
                    Avoid inline code for events (eg.{" "}
                    <code>
                      &lt;a onclick="doSomething()"
                      href="#"&gt;Click!&lt;/a&gt;){" "}
                    </code>
                  </li>
                  <li>
                    Run{" "}
                    <a href="http://www.jslint.com/" target="_blank">
                      JSLint
                    </a>
                    /
                    <a href="http://jshint.com/" target="_blank">
                      JSHint
                    </a>{" "}
                    to validate code
                  </li>
                  <li>Use dependencies to load scripts</li>
                  <li>
                    Don't leave console debugging messages in your production
                    code
                  </li>
                </ul>

                <CodeBlock
                  language={"jsx"}
                  value={`
//  Template for creating javascript functions
//  Put common code in blocks like this

(function($){
  'use strict';
    try{
        // PUT CODE HERE
    } catch(e){
      console.error('ERROR STATEMENT::',e);
    }
})(jQuery);
                `}
                />
              </section>
            </article>

            <article className="tools">
              <a className="anchor" id="tools" />
              <h2 className="page-header">Tools</h2>

              <section className="tools-web">
                <a className="anchor" id="tools_web" />
                <h3>Web Tools</h3>
                <ul className="boxes">
                  <li>
                    <a href="">CSS Tricks</a>: An online blog with tons of
                    information around CSS
                  </li>
                  <li>
                    <a href="">Can I Use</a> is a website which shows you which
                    browsers support certain HTML/CSS properties
                  </li>
                  <li>
                    W3C Validators for{" "}
                    <a href="https://validator.w3.org/" target="_blank">
                      HTML
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://jigsaw.w3.org/css-validator/"
                      target="_blank"
                    >
                      CSS
                    </a>{" "}
                    check your web pages or code files for errors
                  </li>
                  <li>
                    <a
                      href="https://developer.chrome.com/devtools"
                      target="_blank"
                    >
                      Google Chrome Inspcetor
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Tools"
                      target="_blank"
                    >
                      Firefox Developer Tools
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.my-debugbar.com/wiki/IETester/HomePage"
                      target="_blank"
                    >
                      Internet Explorer IETester
                    </a>{" "}
                    (for testing in different versions of IE)
                  </li>
                  <li>
                    <a
                      href="https://www.w3.org/People/Raggett/tidy/"
                      target="_blank"
                    >
                      Tidy
                    </a>
                  </li>
                  <li>
                    <a href="http://jshint.com/" target="_blank">
                      JSHint
                    </a>{" "}
                    and{" "}
                    <a href="http://www.jslint.com/" target="_blank">
                      JSLint
                    </a>{" "}
                    are online tools to help with javascript errors and
                    potential problems
                  </li>
                  <li>
                    <a href="https://www.browserstack.com" target="_blank">
                      Browserstack
                    </a>{" "}
                    is an online testing platform that allows you to choose
                    various OS and browser versions for browser testing websites
                    (account required)
                  </li>
                  <li>
                    <a
                      href="https://github.com/philipwalton/flexbugs"
                      target="_blank"
                    >
                      Flexbugs
                    </a>{" "}
                    is a resource for troubleshooting Flex issues
                  </li>
                </ul>
              </section>
            </article>

            <article className="components">
              <a className="anchor" id="components" />
              <h2 className="page-header">Components</h2>

              <section className="components-structure">
                <a className="anchor" id="components_structure" />
                <h3>Component Structure</h3>
                <p>
                  Now that you understand the CSS{" "}
                  <a href="#css_naming">Naming Conventions</a>, and SCSS{" "}
                  <a href="#scss_nesting">Nesting</a>, you are ready to start
                  creating modular components.
                </p>
                <ul>
                  <li>Start with a short, concise component name</li>
                  <li>Include class on the outer-most wraper</li>
                  <li>
                    It may be necessary to add a <code>-wrapper</code> suffix or
                    similar modifier for functional reasons, but should not
                    include any specific component styles
                    <ul>
                      <li>
                        For example, if your component is set to{" "}
                        <code>display: flex;</code>, and it uses pseudo content
                        (like <code>:before</code> or <code>:after</code>), then
                        you may run into some display issues (see{" "}
                        <a
                          href="https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items"
                          target="_blank"
                        >
                          Flexbugs Min Height
                        </a>
                        )
                      </li>
                    </ul>
                  </li>
                </ul>

                <CodeBlock
                  language={"jsx"}
                  value={`
<div className="component-wrapper band cool-grey-xxxlight">
  <article className="component">
    <h1 className="component-title">Title</h1>
    <div className="component-description">
      <p>This is a description</p>
    </div>
    <ul className="component-list">
      <li><a href="#">Item</a></li>
    </ul>
  </article>
</div>
                  `}
                />

                <p>
                  The simple example above provides an approach to building
                  modular components. Since all important modules are prefixed
                  with the <code>component</code> class, we are able to apply
                  sass styles utilizing the <code>&amp;</code> ampersand in
                  order to keep specificity low and styles targeted to this
                  specific component. Notice how the <code>li</code> and{" "}
                  <code>a</code> elements do not have classes. These items are
                  scoped to the <code>component-list</code>, since an{" "}
                  <code>li</code> would not be found outside of the{" "}
                  <code>ul</code>.
                </p>

                <CodeBlock
                  language={"scss"}
                  value={`
  // scss
.component {
  ... // component styles

  &-wrapper { ... }

  &-title { ... }

  &-description { ... }

  &-list {
    li { ... }
    a { ... }
  }
}

// CSS output
.component { ... }
.component-wrapper { ... }
.component-title { ... }
.component-description { ... }
.component-list { ... }
  .component-list li { ... }
  .component-list a { ... }
                `}
                />
              </section>

              <section className="components-extending">
                <a className="anchor" id="components_extending" />
                <h3>Extending Components</h3>
                <p>
                  What if you want something more complicated to go inside of
                  the <code>li</code>? Perhaps a{" "}
                  <a
                    href="http://getbootstrap.com/components/#media"
                    target="_blank"
                  >
                    Bootstrap Media Object
                  </a>
                  ? The best approach may be to add a class of{" "}
                  <code>component-item</code> to the <code>li</code>, as well as
                  a new top-level component class such as <code>media</code>.
                  Then you can target that Media Object through the use of{" "}
                  <a
                    href="https://css-tricks.com/multiple-class-id-selectors/"
                    target="_blank"
                  >
                    compound classes
                  </a>{" "}
                  such as <code>.component-item.media</code>.
                </p>
                <CodeBlock
                  language={"jsx"}
                  value={`
<div className="component-wrapper band cool-grey-xxxlight">
  <article className="component">
    <h1 className="component-title">Title</h1>
    <div className="component-description">
      <p>This is a description</p>
    </div>
    <ul className="component-list">
      <li className="component-item media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src="" alt="" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">Media Heading</h4>
          <p className="media-text">Some text.</p>
        </div>
      </li>
      <li className="component-item">...</li>
      <li className="component-item">...</li>
    </ul>
  </article>
</div>
                `}
                />
              </section>

              <section className="components-modifiers">
                <a className="anchor" id="components_modifiers" />
                <h3>Component Modifiers</h3>
                <p>
                  Great! We have a set of nice modular components that we can
                  place together for fully functional components. What about
                  when we need variations? Maybe we want every other{" "}
                  <code>media</code> item in the above example to have a colored
                  background. In order to accomplish this, you can use a
                  modifier class. A couple of quick comments regarding modifier
                  classes:
                </p>
                <ul>
                  <li>
                    When possible, add the class to the most immediate parent to
                    the modified item (<code>component-list</code> in this case)
                  </li>
                  <li>
                    <strong>Note:</strong> depending on the desired result, the
                    most immediate parent may be the main component item
                  </li>
                  <li>
                    When possible, modifier classes should use <code>is</code>{" "}
                    or <code>has</code> prefixes (such as{" "}
                    <code>is-striped</code> or <code>has-stripes</code>) to
                    indicate these classes are not intended to be used by
                    themselves
                  </li>
                </ul>
                <CodeBlock
                  language={"jsx"}
                  value={`                  
<div className="component-wrapper band cool-grey-xxxlight">
  <article className="component">
    <h1 className="component-title">Title</h1>
    <div className="component-description">
      <p>This is a description</p>
    </div>
    <ul className="component-list is-striped">
      <li className="component-item media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src="" alt="" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">Media Heading</h4>
          <p className="media-text">Some text.</p>
        </div>
      </li>
      <li className="component-item">...</li>
      <li className="component-item">...</li>
    </ul>
  </article>
</div>
                `}
                />
              </section>

              <section className="components-example">
                <a className="anchor" id="components_example" />
                <h3>Component Example</h3>
                <p>
                  The current{" "}
                  <a
                    href="https://branding.nxp.com/pattern-key-topics-cards.html"
                    target="_blank"
                  >
                    Key Topic Cards
                  </a>{" "}
                  uses the structure and modifiers described above. This
                  component follows the naming convention, and allows us to
                  create styles with very low specificity since they are all
                  prefixed with the <code>key-topic</code> class. Additionally,
                  this component has a modifier class of{" "}
                  <code>has-columns</code> which determines if the card links
                  should be shown in one column, or split into two. Since this
                  modifier should impact all cards in the component, the
                  modifier class is placed on the <code>key-topic-list</code>{" "}
                  element and not the <code>key-topic-links</code>.
                </p>

                <p>
                  <strong>Note:</strong> This is a work in progress. Perhaps the{" "}
                  <code>two</code> class should have been <code>has-two</code>.
                </p>

                <div className="key-topic pt1 pb1">
                  <section className="section-lead pt0 pb1">
                    <h2 className="section-lead-title">Key Topic Cards</h2>
                  </section>
                  <section className="key-topic-list two has-columns">
                    <article className="key-topic-item">
                      <figure className="key-topic-img">
                        <img
                          className="img-responsive"
                          src="http://via.placeholder.com/720x405"
                        />
                      </figure>
                      <section className="key-topic-content">
                        <h2 className="key-topic-title">Smart Things</h2>
                        <div className="key-topic-description">
                          <p>
                            This is a short paragraph for the body of the Key
                            Topic Card.
                          </p>
                        </div>
                      </section>
                      <ul className="key-topic-links">
                        <li>
                          <a href="#0">Link 1</a>
                        </li>
                        <li>
                          <a href="#0">Link 2</a>
                        </li>
                        <li>
                          <a href="#0">Link 3</a>
                        </li>
                      </ul>
                    </article>
                    <article className="key-topic-item">
                      <figure className="key-topic-img">
                        <img
                          className="img-responsive"
                          src="http://via.placeholder.com/720x405"
                        />
                      </figure>
                      <section className="key-topic-content">
                        <h2 className="key-topic-title">Smart Things</h2>
                        <div className="key-topic-description">
                          <p>
                            This is a short paragraph for the body of the Key
                            Topic Card.
                          </p>
                        </div>
                      </section>
                      <ul className="key-topic-links">
                        <li>
                          <a href="#0">Link 1</a>
                        </li>
                        <li>
                          <a href="#0">Link 2</a>
                        </li>
                        <li>
                          <a href="#0">Link 3</a>
                        </li>
                        <li>
                          <a href="#0">Link 4</a>
                        </li>
                      </ul>
                    </article>
                  </section>
                </div>
                <CodeBlock
                  language={"jsx"}
                  value={`
<div className="key-topic">
  <section className="key-topic-list two has-columns">
    <article className="key-topic-item">
      <figure className="key-topic-img">
        <img className="img-responsive" src="http://via.placeholder.com/720x405" />
      </figure>
      <section className="key-topic-content">
        <h2 className="key-topic-title">Smart Things</h2>
        <div className="key-topic-description">
          <p>This is a short paragraph for the body of the Key Topic Card.</p>
        </div>
      </section>
      <ul className="key-topic-links">
        <li><a href="#0">Link 1</a></li>
        <li><a href="#0">Link 2</a></li>
        <li><a href="#0">Link 3</a></li>
      </ul>
    </article>
    <article className="key-topic-item">
      <figure className="key-topic-img">
        <img className="img-responsive" src="http://via.placeholder.com/720x405" />
      </figure>
      <section className="key-topic-content">
        <h2 className="key-topic-title">Smart Things</h2>
        <div className="key-topic-description">
          <p>This is a short paragraph for the body of the Key Topic Card.</p>
        </div>
      </section>
      <ul className="key-topic-links">
        <li><a href="#0">Link 1</a></li>
        <li><a href="#0">Link 2</a></li>
        <li><a href="#0">Link 3</a></li>
        <li><a href="#0">Link 4</a></li>
      </ul>
    </article>
  </section>
</div>
                `}
                />
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
    <div className="site-footer pt2 pb2 cool-grey-xxxlight">
      <div className="container p0">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <p className="text-center">
              This document borrows from and is heavily inspired by{" "}
              <a href="http://codeguide.co/" target="_blank">
                Mark Otto's Code Guide
              </a>
              ,{" "}
              <a
                href="https://github.com/necolas/idiomatic-css"
                target="_blank"
              >
                Idiomatic CSS
              </a>
              , and the{" "}
              <a href="http://primercss.io/" target="_blank">
                GitHub Styleguide
              </a>
              .
            </p>
            <p className="mb0 text-center">
              &copy; 2017 | <a href="http://nxp.com">NXP</a> Online Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default CodeGuidelines
