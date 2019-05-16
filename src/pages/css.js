/* eslint-disable jsx-quotes */
import React from "react"

import CodeBlock from "../components/syntax-highlighter"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

// import Scrollspy from "../utils/Scrollspy"
import "./sidebar.css"

import { Waypoint } from "react-waypoint"

const SidebarNav = styled.ul(props => ({
  display: props.open ? "block" : "none",
}))

// const SidebarNav = styled.li(props => ({
//   display: props.open ? "block" : "none",
//   // color: props.open
// }))

class Css extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { id: "" }
    this.dispatchIdChange = this.dispatchIdChange.bind(this)
    this.topWaypointLeave = this.topWaypointLeave.bind(this)
    this.bottomWaypointEnter = this.bottomWaypointEnter.bind(this)
  }

  topWaypointLeave(currentPosition) {
    if (currentPosition === Waypoint.above) {
      console.log(currentPosition + " Enter the section, normal case")
      // dispatchEvent(currentPosition);
    }
  }

  bottomWaypointEnter(previousPosition) {
    if (previousPosition === Waypoint.above) {
      console.log(previousPosition + " Enter the section")
      // dispatchEvent(previousPosition)
    }
  }

  dispatchIdChange(currentId) {
    console.log("Current id here: " + currentId)
    this.setState({ id: currentId })
  }

  render() {
    const sidebar = () => (
      <div className="fsl-docs-sidebar affix">
        <SidebarNav open={this.state.id.indexOf("type") !== -1} className="nav">
          <li
            className={this.state.id.indexOf("type") !== -1 ? "active" : null}
          >
            <a href="#type">Typography</a>
            <ul
              className={
                this.state.id.indexOf("type") !== -1 ? "nav open" : "nav"
              }
            >
              <li
                className={this.state.id == "type-headings" ? "active" : null}
              >
                <a href="#type-headings">Headings</a>
              </li>
              <li
                className={this.state.id == "type-body-copy" ? "active" : null}
              >
                <a href="#type-body-copy">Body copy</a>
              </li>
              <li
                className={this.state.id == "type-emphasis" ? "active" : null}
              >
                <a href="#type-emphasis">Emphasis</a>
              </li>

              <li
                className={
                  this.state.id.indexOf("type-lists") ? "active" : null
                }
              >
                <a href="#type-lists">Lists</a>
                <ul
                  className={
                    this.state.id.indexOf("type-lists") !== -1
                      ? "nav open"
                      : "nav"
                  }
                >
                  <li
                    className={
                      this.state.id == "type-lists-unordered" ? "active" : null
                    }
                  >
                    <a href="#type-lists-unordered">Unordered</a>
                  </li>
                  <li
                    className={
                      this.state.id == "type-lists-ordered" ? "active" : null
                    }
                  >
                    <a href="#type-lists-ordered">Ordered</a>
                  </li>
                  <li
                    className={
                      this.state.id == "type-lists-inline" ? "active" : null
                    }
                  >
                    <a href="#type-lists-inline">Inline</a>
                  </li>
                  <li
                    className={
                      this.state.id == "type-lists-definition" ? "active" : null
                    }
                  >
                    <a href="#type-lists-definition">Definition</a>
                  </li>
                  <li
                    className={
                      this.state.id == "type-lists-definition-horizontal"
                        ? "active"
                        : null
                    }
                  >
                    <a href="#type-lists-definition-horizontal">
                      Definition Horizontal
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#colors">Color Palette</a>
            <ul className="nav">
              <li>
                <a href="#colors-main">Main Colors</a>
              </li>
              <li>
                <a href="#colors-tints">Tints</a>
              </li>
              <li>
                <a href="#colors-text">Text Colors</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#tables">Tables</a>
            <ul className="nav">
              <li>
                <a href="#tables-example">Basic example</a>
              </li>
              <li>
                <a href="#tables-striped">Striped rows</a>
              </li>
              <li>
                <a href="#tables-bordered">Bordered table</a>
              </li>
              <li>
                <a href="#tables-centered">Centered table</a>
              </li>
              <li>
                <a href="#tables-light">Light Header table</a>
              </li>
              <li>
                <a href="#tables-hover">Hover rows</a>
              </li>
              <li>
                <a href="#tables-condensed">Condensed table</a>
              </li>
              <li>
                <a href="#tables-combined">Combined classes</a>
              </li>
              <li>
                <a href="#tables-responsive">Responsive tables</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#forms">Forms</a>
            <ul className="nav">
              <li>
                <a href="#forms-example">Basic example</a>
              </li>
              <li>
                <a href="#forms-inline">Inline form</a>
              </li>
              <li>
                <a href="#forms-horizontal">Horizontal form</a>
              </li>
              <li>
                <a href="#forms-control">Supported controls</a>
                <ul className="nav">
                  <li>
                    <a href="#forms-control-inputs">Inputs</a>
                  </li>
                  <li>
                    <a href="#forms-control-textarea">Textarea</a>
                  </li>
                  <li>
                    <a href="#forms-control-checkbox">Checkbox/Radio</a>
                  </li>
                  <li>
                    <a href="#forms-control-inline-checkbox">
                      Inline Checkbox/Radio
                    </a>
                  </li>
                  <li>
                    <a href="#forms-control-selects">Selects</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#forms-input-groups">Input Groups</a>
                <ul className="nav">
                  <li>
                    <a href="#forms-input-groups-buttons">Button Addons</a>
                  </li>
                  <li>
                    <a href="#forms-input-groups-sizing">Sizing</a>
                  </li>
                  <li>
                    <a href="#forms-input-groups-buttons-dropdowns">
                      Button Dropdowns
                    </a>
                  </li>
                  <li>
                    <a href="#forms-input-groups-buttons-segmented">
                      Segmented Buttons
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#forms-control-static">Static control</a>
              </li>
              <li>
                <a href="#forms-control-focus">Focus state</a>
              </li>
              <li>
                <a href="#forms-control-disabled">Disabled state</a>
              </li>
              <li>
                <a href="#forms-control-validation">Validation states</a>
              </li>
              <li>
                <a href="#forms-control-sizes">Control sizing</a>
              </li>
              <li>
                <a href="#forms-help-text">Help text</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#links">Links</a>
            <ul className="nav">
              <li>
                <a href="#links-inline">Inline links</a>
              </li>
              <li>
                <a href="#links-ctas">Call-to-actions</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#buttons">Buttons</a>
            <ul className="nav">
              <li>
                <a href="#buttons-options">Options</a>
              </li>
              <li>
                <a href="#buttons-sizes">Sizes</a>
              </li>
              <li>
                <a href="#buttons-disabled">Disabled</a>
              </li>
              <li>
                <a href="#buttons-anchor">Anchor elements</a>
              </li>
              <li>
                <a href="#buttons-tags">Button tags</a>
              </li>
            </ul>
          </li>
          <li className="">
            <a href="#images">Images</a>
            <ul className="nav">
              <li className="">
                <a href="#images-responsive">Responsive images</a>
              </li>
              <li className="">
                <a href="#images-shapes">Image shapes</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#helper-classes">Helper classes</a>
            <ul className="nav">
              <li>
                <a href="#helper-classes-close">Close icon</a>
              </li>
              <li>
                <a href="#helper-classes-carets">Carets</a>
              </li>
              <li>
                <a href="#helper-classes-floats">Quick floats</a>
              </li>
              <li>
                <a href="#helper-classes-center">Center content blocks</a>
              </li>
              <li>
                <a href="#helper-classes-clearfix">Clearfix</a>
              </li>
              <li>
                <a href="#helper-classes-show-hide">
                  Showing and hiding content
                </a>
              </li>
              <li>
                <a href="#helper-classes-contextual-status">
                  Contextual Status
                </a>
              </li>
              <li>
                <a href="#helper-classes-image-replacement">
                  Image replacement
                </a>
              </li>
              <li>
                <a href="#helper-classes-spacers">Spacers</a>
              </li>
            </ul>
          </li>
        </SidebarNav>
        <a className="back-to-top" href="#top">
          Back to top
        </a>
      </div>
    )


    const htmlContent = () => (
      <div className="fsl-container container">
        <div className="row" id="content">
          <div className="col-md-3">{sidebar()}</div>
          <div className="col-md-9" role="main">
            <div className="bs-docs-section">
              <Waypoint onEnter={() => this.dispatchIdChange("type")}>
                <div className="anchor" id="type" />
              </Waypoint>
              <h1 className="page-header">Typography</h1>
              <Waypoint onEnter={() => this.dispatchIdChange("type-general")}>
                <article className="type-general">
                  <h3>Regional font families</h3>
                  <p>
                    Regional sites use the following font families. These are
                    defined in the regional delta stylesheets.
                  </p>
                  <table className="table table-condensed table-bordered">
                    <tbody>
                      <tr>
                        <td>China</td>
                        <td>Arial and Lato</td>
                      </tr>
                      <tr>
                        <td>Japan</td>
                        <td>Arial and Lato</td>
                      </tr>
                      <tr>
                        <td>Korea</td>
                        <td>'Nanum Gothic' for homepage, header and footer</td>
                      </tr>
                    </tbody>
                  </table>
                </article>
              </Waypoint>

              <Waypoint onEnter={() => this.dispatchIdChange("type-headings")}>
                <article className="type-headings">
                  <div className="anchor" id="type-headings" />

                  <h2>Headings</h2>
                  <section className="overview">
                    <p>
                      All HTML headings, <code>&lt;h1&gt;</code> through{" "}
                      <code>&lt;h6&gt;</code>, are available. <code>.h1</code>{" "}
                      through <code>.h6</code> classes are also available, for
                      when you want to match the font styling of a heading but
                      still want your text to be displayed inline.
                    </p>
                    <p>
                      All headings use the "Lato" font family. Color values
                      below are <a href="/#less-overview">less</a> variables.
                      Please check the color palette for these values.
                    </p>
                  </section>
                  <section className="bc-example">
                    <h1>
                      H1 Heading - 22px mobile screens - 26px &gt;larger than
                      mobile
                      <br />
                      &lt;h1&gt; <span className="small">or</span> .h1
                    </h1>
                    <hr />
                    <h2>
                      H2 Heading - 20px mobile screens - 22px &gt;larger than
                      mobile
                      <br />
                      &lt;h2&gt; <span className="small">or</span> .h2
                    </h2>
                    <hr />
                    <h3>
                      H3 Heading - 18px mobile screens - 20px &gt;larger than
                      mobile
                      <br />
                      &lt;h3&gt; <span className="small">or</span> .h3
                    </h3>
                    <hr />
                    <h4>
                      H4 Heading - 16px mobile screens - 18px &gt;larger than
                      mobile
                      <br />
                      &lt;h4&gt; <span className="small">or</span> .h4
                    </h4>
                    <hr />
                    <h5>
                      H5 Heading - 14px mobile screens - 16px &gt;larger than
                      mobile
                      <br />
                      &lt;h5&gt; <span className="small">or</span> .h5
                    </h5>
                    <hr />
                    <h6>
                      H6 Heading - 12px all screens
                      <br />
                      &lt;h6&gt; <span className="small">or</span> .h6
                    </h6>
                    <hr />
                    <div className="huge">.huge BaseCamp heading</div>
                  </section>
                  <section className="highlight">
                    <CodeBlock
                      language={"jsx"}
                      value={`
      <h1>h1. BaseCamp heading</h1> or
      <p class="h1">h1. BaseCamp heading</p>
      <h2>h2. BaseCamp heading</h2> or
      <p class="h2">h2. BaseCamp heading</p>
      <h3>h3. BaseCamp heading</h3> or
      <p class="h3">h3. BaseCamp heading</p>
      <h4>h4. BaseCamp heading</h4> or
      <p class="h4">h4. BaseCamp heading</p>
      <h5>h5. BaseCamp heading</h5> or
      <p class="h5">h5. BaseCamp heading</p>
      <h6>h6. BaseCamp heading</h6> or
      <p class="h6">h6. BaseCamp heading</p>
      <p class="huge">.huge BaseCamp Heading</p>
    `}
                    />
                  </section>

                  <section className="overview">
                    <p>
                      Create lighter, secondary text in any heading with a
                      generic <code>&lt;small&gt;</code> tag or the{" "}
                      <code>.small</code> class.
                    </p>
                  </section>
                  <section className="bc-example">
                    <h1>
                      h1. BaseCamp heading <small>Secondary text</small>
                    </h1>
                    <hr />
                    <h2>
                      h2. BaseCamp heading <small>Secondary text</small>
                    </h2>
                    <hr />
                    <h3>
                      h3. BaseCamp heading <small>Secondary text</small>
                    </h3>
                    <hr />
                    <h4>
                      h4. BaseCamp heading <small>Secondary text</small>
                    </h4>
                    <hr />
                    <h5>
                      h5. BaseCamp heading <small>Secondary text</small>
                    </h5>
                    <hr />
                    <h6>
                      h6. BaseCamp heading <small>Secondary text</small>
                    </h6>
                  </section>
                  <section className="highlight">
                    <CodeBlock
                      language={"jsx"}
                      value={`
    <h1>    h1. BaseCamp heading <small>Secondary text</small>  </h1>
    <h2>    h2. BaseCamp heading <small>Secondary text</small>  </h2>
    <h3>    h3. BaseCamp heading <small>Secondary text</small>  </h3>
    <h4>    h4. BaseCamp heading <small>Secondary text</small>  </h4>
    <h5>    h5. BaseCamp heading <small>Secondary text</small>  </h5>
    <h6>    h6. BaseCamp heading <small>Secondary text</small>  </h6>
                    `}
                    />
                  </section>
                </article>
              </Waypoint>

              <Waypoint onEnter={() => this.dispatchIdChange("type-body-copy")}>
                <article className="type-body-copy">
                  <div className="anchor" id="type-body-copy" />
                  <h2>Body copy</h2>
                  <p>
                    BaseCamp's global default <code>font-size</code> is{" "}
                    <strong>14px</strong>, with a <code>line-height</code> of{" "}
                    <strong>1.428</strong>. This is applied to the{" "}
                    <code>&lt;body&gt;</code> and all paragraphs. In addition,{" "}
                    <code>&lt;p&gt;</code> (paragraphs) receive a bottom margin
                    of 10px and a top margin of 5px.
                  </p>
                  <div className="bc-example">
                    <p>
                      Nullam quis risus eget urna mollis ornare vel eu leo. Cum
                      sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Nullam id dolor id nibh ultricies
                      vehicula.
                    </p>
                    <p>
                      Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Donec ullamcorper nulla
                      non metus auctor fringilla. Duis mollis, est non commodo
                      luctus, nisi erat porttitor ligula, eget lacinia odio sem
                      nec elit. Donec ullamcorper nulla non metus auctor
                      fringilla.
                    </p>
                    <p>
                      Maecenas sed diam eget risus varius blandit sit amet non
                      magna. Donec id elit non mi porta gravida at eget metus.
                      Duis mollis, est non commodo luctus, nisi erat porttitor
                      ligula, eget lacinia odio sem nec elit.
                    </p>
                  </div>

                  <div className="highlight">
                    <CodeBlock language={"jsx"} value={`<p>...</p>`} />
                  </div>

                  <h3>Intro body copy</h3>
                  <p>
                    Make a paragraph stand out by adding <code>.intro</code>.
                  </p>
                  <div className="bc-example">
                    <p className="intro">
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                      dolor auctor. Duis mollis, est non commodo luctus.
                    </p>
                  </div>
                  <div className="highlight">
                    <CodeBlock
                      language={"jsx"}
                      value={`<p class="intro">...</p>`}
                    />
                  </div>
                </article>
              </Waypoint>
              <Waypoint onEnter={() => this.dispatchIdChange("type-emphasis")}>
                <article className="type-emphasis">
                  <div className="anchor" id="type-emphasis" />

                  <h2>Emphasis</h2>
                  <p>
                    Make use of HTML's default emphasis tags with lightweight
                    styles.
                  </p>
                  <h3>Small text</h3>
                  <p>
                    For de-emphasizing inline or blocks of text, use the{" "}
                    <code>&lt;small&gt;</code> tag to set text at 85% the size
                    of the parent. Heading elements receive their own{" "}
                    <code>font-size</code> for nested <code>&lt;small&gt;</code>{" "}
                    elements.
                  </p>
                  <p>
                    You may alternatively use an inline element with{" "}
                    <code>.small</code> in place of any{" "}
                    <code>&lt;small&gt;</code>.
                  </p>
                  <div className="bc-example">
                    <p className="small">
                      This line of text is meant to be treated as fine print.
                    </p>
                  </div>
                  <div className="highlight">
                    <CodeBlock
                      language={"jsx"}
                      value={`   
  <p class="small">
      This line of text is meant to be treated as fine print.
  </p>
                `}
                    />
                  </div>
                  <h3>Large text</h3>
                  <p>
                    For enlarging inline or blocks of text, use the{" "}
                    <code>&lt;large&gt;</code> tag to set text at 115% the size
                    of the parent.
                  </p>
                  <p>
                    You may alternatively use an inline element with{" "}
                    <code>.large</code> in place of any{" "}
                    <code>&lt;large&gt;</code>.
                  </p>
                  <div className="bc-example">
                    <p className="large">
                      This line of text is increased to 115% of parent element.
                    </p>
                  </div>
                  <div className="highlight">
                    <CodeBlock
                      language={"jsx"}
                      value={`
                    <p class="large">
                      This line of text is increased to 115% of parent element.
                    </p>
                    `}
                    />
                  </div>
                  <h3>Bold</h3>
                  <p>
                    For emphasizing a snippet of text with a heavier
                    font-weight.
                  </p>
                  <div className="bc-example">
                    <p>
                      The following snippet of text is{" "}
                      <strong>rendered as bold text</strong>.
                    </p>
                  </div>
                  <div className="highlight">
                    <CodeBlock
                      language={"jsx"}
                      value={`                <strong>rendered as bold text</strong>`}
                    />
                  </div>
                  <h3>Italics</h3>
                  <p>For emphasizing a snippet of text with italics.</p>
                  <div className="bc-example">
                    <p>
                      The following snippet of text is{" "}
                      <em>rendered as italicized text</em>.
                    </p>
                  </div>
                  <div className="highlight">
                    <CodeBlock
                      language={"jsx"}
                      value={`                  <em>rendered as italicized text</em> `}
                    />
                  </div>

                  <div className="bs-callout bs-callout-info">
                    <h4>Alternate elements</h4>
                    <p>
                      Feel free to use <code>&lt;b&gt;</code> and{" "}
                      <code>&lt;i&gt;</code> in HTML5. <code>&lt;b&gt;</code> is
                      meant to highlight words or phrases without conveying
                      additional importance while <code>&lt;i&gt;</code> is
                      mostly for voice, technical terms, etc.
                    </p>
                  </div>
                  <h3>Alignment classes</h3>
                  <p>
                    Easily realign text to components with text alignment
                    classes.
                  </p>
                  <div className="bc-example">
                    <p className="text-left">Left aligned text.</p>
                    <p className="text-center">Center aligned text.</p>
                    <p className="text-right">Right aligned text.</p>
                    <p className="text-justify">Justified text.</p>
                  </div>
                  <div className="highlight">
                    <CodeBlock
                      language={"jsx"}
                      value={`
                    <p class="text-left">Left aligned text.</p>
                    <p class="text-center">Center aligned text.</p>
                    <p class="text-right">Right aligned text.</p>
                    <p class="text-justify">Justified text.</p>
                    `}
                    />
                  </div>
                </article>
              </Waypoint>
              <Waypoint onEnter={() => this.dispatchIdChange("type-lists")}>
                <article className="type-lists">
                  <a className="anchor" id="type-lists" />
                  <h2>Lists</h2>

                  <a className="anchor" id="type-lists-unordered" />
                  <Waypoint
                    onEnter={() =>
                      this.dispatchIdChange("type-lists-unordered")
                    }
                  >
                    <div className="row">
                      <div className="col-xs-6">
                        <h3>Unordered</h3>
                        <p>A list of items with the default style list.</p>
                        <div className="bc-example">
                          <ul>
                            <li>Facilisis in pretium nisl aliquet</li>
                            <li>
                              Nulla volutpat aliquam velit
                              <ul>
                                <li>Phasellus iaculis neque</li>
                                <li>
                                  Purus sodales ultricies
                                  <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                  </ul>
                                </li>
                                <li>Vestibulum laoreet porttitor sem</li>
                                <li>Ac tristique libero volutpat at</li>
                              </ul>
                            </li>
                            <li>Faucibus porta lacus fringilla vel</li>
                          </ul>
                        </div>
                        <div className="highlight">
                          <CodeBlock
                            language={"jsx"}
                            value={`
                      <ul>
                        <li>...</li>
                      </ul>
                      `}
                          />
                        </div>
                      </div>

                      <div className="col-xs-6">
                        <h3>Unordered with boxes class</h3>
                        <p>A list of items with boxes as the list style.</p>
                        <div className="bc-example">
                          <ul className="boxes">
                            <li>Facilisis in pretium nisl aliquet</li>
                            <li>
                              Nulla volutpat aliquam velit
                              <ul>
                                <li>Phasellus iaculis neque</li>
                                <li>
                                  Purus sodales ultricies
                                  <ul>
                                    <li>Phasellus iaculis neque</li>
                                    <li>
                                      Purus sodales ultricies
                                      <ul>
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Consectetur adipiscing elit</li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li>Faucibus porta lacus fringilla vel</li>
                            <li>Aenean sit amet erat nunc</li>
                          </ul>
                        </div>
                        <div className="highlight">
                          <CodeBlock
                            language={"jsx"}
                            value={`
                        <ul class="boxes">
                          <li>...</li>
                        </ul>
                        `}
                          />
                        </div>
                      </div>
                    </div>
                  </Waypoint>

                  <a className="anchor" id="type-lists-ordered" />
                  <h3>Ordered</h3>
                  <p>
                    A list of items in which the order <em>does</em> explicitly
                    matter.
                  </p>
                  <div className="bc-example">
                    <ol>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Consectetur adipiscing elit</li>
                      <li>Integer molestie lorem at massa</li>
                      <li>Facilisis in pretium nisl aliquet</li>
                    </ol>
                  </div>
                  <div className="highlight">
                    <CodeBlock
                      language={"jsx"}
                      value={`
                    <ol>
                      <li>...</li>
                    </ol>
                    `}
                    />
                  </div>

                  <a className="anchor" id="type-lists-inline" />
                  <h3>Inline</h3>
                  <p>
                    Place all list items on a single line with{" "}
                    <code>display: inline-block;</code> and some light padding.
                  </p>
                  <div className="bc-example">
                    <ul className="list-inline">
                      <li>Lorem ipsum</li>
                      <li>Phasellus iaculis</li>
                      <li>Nulla volutpat</li>
                    </ul>
                  </div>
                  <div className="highlight">
                    <CodeBlock
                      language={"jsx"}
                      value={`
                    <ul class="list-inline">
                      <li>...</li>
                    </ul>
                    `}
                    />
                  </div>

                  <a className="anchor" id="type-lists-definition" />
                  <h3>Definition</h3>
                  <p>A list of terms with their associated descriptions.</p>
                  <div className="bc-example">
                    <dl>
                      <dt>Definition lists</dt>
                      <dd>A description list is perfect for defining terms.</dd>
                      <dt>Euismod</dt>
                      <dd>
                        Vestibulum id ligula porta felis euismod semper eget
                        lacinia odio.
                      </dd>
                      <dt>Gravida</dt>
                      <dd>Donec id elit non mi porta at eget metus.</dd>
                      <dt>Malesuada porta</dt>
                      <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                    </dl>
                  </div>
                  <div className="highlight">
                    <CodeBlock
                      language={"jsx"}
                      value={`
                    <dl>
                      <dt>...</dt>
                      <dd>...</dd>
                    </dl>
                    `}
                    />
                  </div>

                  <a className="anchor" id="type-lists-definition-horizontal" />
                  <h3>Definition Horizontal</h3>
                  <p>
                    Make terms and descriptions in <code>&lt;dl&gt;</code> line
                    up side-by-side. Starts off stacked like default{" "}
                    <code>&lt;dl&gt;</code>s, but when the navbar expands, so do
                    these.
                  </p>
                  <div className="bc-example">
                    <dl className="dl-horizontal">
                      <dt>Definition lists</dt>
                      <dd>A description list is perfect for defining terms.</dd>
                      <dt>Euismod</dt>
                      <dd>
                        Vestibulum id ligula porta felis euismod semper eget
                        lacinia odio.
                      </dd>
                      <dt>Gravida</dt>
                      <dd>Donec id elit non mi porta at eget metus.</dd>
                      <dt>Malesuada porta</dt>
                      <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                    </dl>
                  </div>
                  <div className="highlight">
                    <CodeBlock
                      language={"jsx"}
                      value={`
                    <dl class="dl-horizontal">
                      <dt>...</dt>
                      <dd>...</dd>
                    </dl>
                    `}
                    />
                  </div>

                  <div className="bs-callout bs-callout-info">
                    <h4>Auto-truncating</h4>
                    <p>
                      Horizontal description lists will truncate terms that are
                      too long to fit in the left column with{" "}
                      <code>text-overflow</code>. In narrower viewports, they
                      will change to the default stacked layout.
                    </p>
                  </div>
                </article>
              </Waypoint>
            </div>

            <div className="bs-docs-section">
              <a className="anchor" id="colors" />
              <h2 className="page-header">Color Palette</h2>

              <article className="colors-main">
                <a className="anchor" id="colors-main" />
                <h3>Main Color Palette</h3>
                <ul className="color-palette list-unstyled">
                  <li>
                    <div
                      className="color-thumbnail nxp-deep-orange"
                      style={{ color: "rgba(0,0,0,0.7)" }}
                    >
                      <div className="name">
                        <code>.nxp-deep-orange</code>
                      </div>
                      <div className="hex">#e66a08</div>
                      <div className="rgb">rgb(230, 106, 8)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-orange"
                      style={{ color: "rgba(0,0,0,0.7)" }}
                    >
                      <div className="name">
                        <code>.nxp-orange</code>
                      </div>
                      <div className="hex">#ffa700</div>
                      <div className="rgb">rgb(255, 167, 0)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-green"
                      style={{ color: "rgba(0,0,0,0.7)" }}
                    >
                      <div className="name">
                        <code>.nxp-green</code>
                      </div>
                      <div className="hex">#b0ca00</div>
                      <div className="rgb">rgb(176, 202, 0)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-blue"
                      style={{ color: "rgba(0,0,0,0.7)" }}
                    >
                      <div className="name">
                        <code>.nxp-blue</code>
                      </div>
                      <div className="hex">#65abe2</div>
                      <div className="rgb">rgb(101, 171, 226)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-petrol-blue"
                      style={{ color: "rgba(255, 255, 255, 0.8)" }}
                    >
                      <div className="name">
                        <code>.nxp-petrol-blue</code>
                      </div>
                      <div className="hex">#007088</div>
                      <div className="rgb">rgb(0, 112, 136)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-aqua"
                      style={{ color: "rgba(255, 255, 255, 0.8)" }}
                    >
                      <div className="name">
                        <code>.nxp-aqua</code>
                      </div>
                      <div className="hex">#00a4a7</div>
                      <div className="rgb">rgb(0, 164, 167)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-olive-green"
                      style={{ color: "rgba(255, 255, 255, 0.8)" }}
                    >
                      <div className="name">
                        <code>.nxp-olive-green</code>
                      </div>
                      <div className="hex">#979200</div>
                      <div className="rgb">rgb(151, 146, 0)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-apple-red"
                      style={{ color: "rgba(255, 255, 255, 0.8)" }}
                    >
                      <div className="name">
                        <code>.nxp-apple-red</code>
                      </div>
                      <div className="hex">#bc0d0d</div>
                      <div className="rgb">rgb(188, 13, 13)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-absolute-black"
                      style={{ color: "rgba(255, 255, 255, 0.8)" }}
                    >
                      <div className="name">
                        <code>.nxp-absolute-black</code>
                      </div>
                      <div className="hex">#000000</div>
                      <div className="rgb">rgb(0, 0, 0)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-black"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      <div className="name">
                        <code>.nxp-black</code>
                      </div>
                      <div className="hex">#0f0f0f</div>
                      <div className="rgb">rgb(15, 15, 15)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-charcoal"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      <div className="name">
                        <code>.nxp-charcoal</code>
                      </div>
                      <div className="hex">#4d4d4d</div>
                      <div className="rgb">rgb(77, 77, 77)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-gray-xdark"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      <div className="name">
                        <code>.nxp-gray-xdark</code>
                      </div>
                      <div className="hex">#4a4a4d</div>
                      <div className="rgb">rgb(74, 74, 77)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-gray-dark"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      <div className="name">
                        <code>.nxp-gray-dark</code>
                      </div>
                      <div className="hex">#6f6f73</div>
                      <div className="rgb">rgb(111, 111, 115)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-gray"
                      style={{ color: "rgba(0,0,0,0.7)" }}
                    >
                      <div className="name">
                        <code>.nxp-gray</code>
                      </div>
                      <div className="hex">#949499</div>
                      <div className="rgb">rgb(148, 148, 153)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-gray-medium"
                      style={{ color: "rgba(0,0,0,0.7)" }}
                    >
                      <div className="name">
                        <code>.nxp-gray-medium</code>
                      </div>
                      <div className="hex">#b3b0af</div>
                      <div className="rgb">rgb(179, 176, 175)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-gray-light"
                      style={{ color: "rgba(0,0,0,0.7)" }}
                    >
                      <div className="name">
                        <code>.nxp-gray-light</code>
                      </div>
                      <div className="hex">#e6e5e4</div>
                      <div className="rgb">rgb(230, 229, 228)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-gray-cool-light"
                      style={{ color: "rgba(0,0,0,0.7)" }}
                    >
                      <div className="name">
                        <code>.nxp-gray-cool-light</code>
                      </div>
                      <div className="hex">#f4f4f5</div>
                      <div className="rgb">rgb(244, 244, 245)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-gray-xlight"
                      style={{ color: "rgba(0,0,0,0.7)" }}
                    >
                      <div className="name">
                        <code>.nxp-gray-xlight</code>
                      </div>
                      <div className="hex">#e6e6e6</div>
                      <div className="rgb">rgb(230, 230, 230)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-gray-xxlight"
                      style={{ color: "rgba(0,0,0,0.7)" }}
                    >
                      <div className="name">
                        <code>.nxp-gray-xxlight</code>
                      </div>
                      <div className="hex">#f4f4f5</div>
                      <div className="rgb">rgb(244, 244, 245)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail white has-border"
                      style={{ color: "rgba(0,0,0,0.7)" }}
                    >
                      <div className="name">
                        <code>.white</code>
                      </div>
                      <div className="hex">#ffffff</div>
                      <div className="rgb">rgb(255, 255, 255)</div>
                    </div>
                  </li>
                </ul>
              </article>

              <article className="colors-tints">
                <a className="anchor" id="colors-tints" />
                <h4>Tints</h4>
                <ul className="color-palette list-unstyled">
                  <li>
                    <div
                      className="color-thumbnail nxp-orange"
                      style={{ color: "rgba(0,0,0,0.8)" }}
                    >
                      <div className="name">
                        <code>.nxp-orange</code>
                      </div>
                      <div className="hex">#ffa700</div>
                      <div className="rgb">rgb(255, 167, 0)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-orange-66"
                      style={{ color: "rgba(0,0,0,0.8)" }}
                    >
                      <div className="name">
                        <code>.nxp-orange-66</code>
                      </div>
                      <div className="hex">#fccf57</div>
                      <div className="rgb">rgb(252, 207, 87)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-orange-33"
                      style={{ color: "rgba(0,0,0,0.8)" }}
                    >
                      <div className="name">
                        <code>.nxp-orange-33</code>
                      </div>
                      <div className="hex">#fee7ab</div>
                      <div className="rgb">rgb(254, 231, 171)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-deep-orange"
                      style={{ color: "rgba(0,0,0,0.8)" }}
                    >
                      <div className="name">
                        <code>.nxp-deep-orange</code>
                      </div>
                      <div className="hex">#e66a08</div>
                      <div className="rgb">rgb(230, 106, 8)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-deep-orange-66"
                      style={{ color: "rgba(0,0,0,0.8)" }}
                    >
                      <div className="name">
                        <code>.nxp-deep-orange-66</code>
                      </div>
                      <div className="hex">#ef9d5c</div>
                      <div className="rgb">rgb(239, 157, 92)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-deep-orange-33"
                      style={{ color: "rgba(0,0,0,0.8)" }}
                    >
                      <div className="name">
                        <code>.nxp-deep-orange-33</code>
                      </div>
                      <div className="hex">#f7ceae</div>
                      <div className="rgb">rgb(247, 206, 174)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-pale-blue"
                      style={{ color: "rgba(0,0,0,0.8)" }}
                    >
                      <div className="name">
                        <code>.nxp-pale-blue</code>
                      </div>
                      <div className="hex">#5e89c1</div>
                      <div className="rgb">rgb(94, 137, 193)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-pale-blue-66"
                      style={{ color: "rgba(0,0,0,0.8)" }}
                    >
                      <div className="name">
                        <code>.nxp-pale-blue-66</code>
                      </div>
                      <div className="hex">#95b1d6</div>
                      <div className="rgb">rgb(149, 177, 214)</div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="color-thumbnail nxp-pale-blue-33"
                      style={{ color: "rgba(0,0,0,0.8)" }}
                    >
                      <div className="name">
                        <code>.nxp-pale-blue-33</code>
                      </div>
                      <div className="hex">#cad8eb</div>
                      <div className="rgb">rgb(202, 216, 235)</div>
                    </div>
                  </li>
                </ul>
              </article>

              <article className="colors-text">
                <a className="anchor" id="colors-text" />
                <h4>Text Color</h4>
                <div className="highlight">
                  <p>
                    There are several classes defined to change the color of the
                    text when needed. These are as follows:
                  </p>
                  <p>
                    <code>.nxp-orange-text</code>{" "}
                    <span className="nxp-orange-text">
                      &nbsp;For Orange Text
                    </span>
                  </p>
                  <p>
                    <code>.nxp-black-text</code>{" "}
                    <span className="nxp-black-text">&nbsp;For Black Text</span>
                  </p>
                  <p>
                    <code>.nxp-blue-text</code>
                    <span className="nxp-blue-text">&nbsp;For Blue Text</span>
                  </p>
                  <p>
                    <code>.nxp-white-text</code>
                    <span className="nxp-white-text nxp-black">
                      &nbsp;For White Text
                    </span>
                  </p>
                  <p>
                    <code>.nxp-gray-text</code>
                    <span className="nxp-gray-text">&nbsp;For Grey Text</span>
                  </p>
                  <p>
                    <code>.nxp-gray-light-text</code>
                    <span className="nxp-gray-light-text">
                      &nbsp;For Grey Light Text
                    </span>
                  </p>
                  <p>
                    <code>.nxp-green-text</code>
                    <span className="nxp-green-text">&nbsp;For Green Text</span>
                  </p>
                </div>
              </article>
            </div>

            <div className="bs-docs-section">
              <a className="anchor" id="tables" />
              <h1 className="page-header">Tables</h1>

              <article className="tables-example">
                <a className="anchor" id="tables-example" />
                <h2>Basic example</h2>
                <p>
                  For basic styling—light padding and only horizontal
                  dividers—add the base class <code>.table</code> to any{" "}
                  <code>&lt;table&gt;</code>. It may seem super redundant, but
                  given the widespread use of tables for other plugins like
                  calendars and date pickers, we've opted to isolate our custom
                  table styles.
                </p>
                <div className="bc-example">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`<table class="table">...</table>`}
                  />
                </div>
              </article>

              <article className="tables-striped">
                <a className="anchor" id="tables-striped" />
                <h2>Striped rows</h2>
                <p>
                  Use <code>.table-striped</code> to add zebra-striping to any
                  table row within the <code>&lt;tbody&gt;</code>.
                </p>
                <div className="bs-callout bs-callout-danger">
                  <h4>Cross-browser compatibility</h4>
                  <p>
                    Striped tables are styled via the <code>:nth-child</code>{" "}
                    CSS selector, which is not available in Internet Explorer 8.
                  </p>
                </div>
                <div className="bc-example">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`<table class="table table-striped">...</table>`}
                  />
                </div>
              </article>

              <article className="tables-bordered">
                <a className="anchor" id="tables-bordered" />
                <h2>Bordered table</h2>

                <p>
                  Add <code>.table-bordered</code> for borders on all sides of
                  the table and cells.
                </p>
                <div className="bc-example">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowSpan="2">1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@TwBaseCamp</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`<table class="table table-bordered">...</table>`}
                  />
                </div>
              </article>

              <article className="tables-centered">
                <a className="anchor" id="tables-centered" />
                <h2>Centered table</h2>
                <p>
                  Add <code>.table-centered</code> for all text to be centered.
                </p>
                <div className="bc-example">
                  <table className="table table-centered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@TwBaseCamp</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>The Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`<table class="table table-centered">...</table>`}
                  />
                </div>
              </article>

              <article className="tables-light">
                <a className="anchor" id="tables-light" />
                <h2>Table Head Light</h2>
                <p>
                  Add <code>.table-head-light</code> for the table header to
                  have a white background color and thicker bottom border.
                </p>
                <div className="bc-example">
                  <table className="table table-head-light">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@TwBaseCamp</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>The Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`<table class="table table-head-light">...</table>`}
                  />
                </div>
              </article>

              <article className="tables-hover">
                <a className="anchor" id="tables-hover" />
                <h2>Hover rows</h2>
                <p>
                  Add <code>.table-hover</code> to enable a hover state on table
                  rows within a <code>&lt;tbody&gt;</code>.
                </p>
                <div className="bc-example">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`<table class="table table-hover">...</table>`}
                  />
                </div>
              </article>

              <article className="tables-condensed">
                <a className="anchor" id="tables-condensed" />
                <h2>Condensed table</h2>
                <p>
                  Add <code>.table-condensed</code> to make tables more compact
                  by cutting cell top and bottom padding in half and removing
                  bottom margin from <code>p</code> elements.
                </p>
                <div className="bc-example">
                  <table className="table table-condensed">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`<table class="table table-condensed">...</table>`}
                  />
                </div>
              </article>

              <article className="tables-combined">
                <a className="anchor" id="tables-combined" />
                <h2>Combined table classes</h2>
                <p>
                  You can combine table classes to change the the table style.
                  For example, the table below combines{" "}
                  <code>.table-head-light</code>, <code>table-striped</code>,
                  and <code>table-bordered</code>.
                </p>
                <div className="bc-example">
                  <table className="table table-head-light table-striped table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@TwBaseCamp</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>The Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                    <table class="table table-head-light table-striped table-bordered">
                      ...
                    </table>
                `}
                  />
                </div>
              </article>

              <article className="tables-responsive">
                <a className="anchor" id="tables-responsive" />
                <h2>Responsive tables</h2>
                <p>
                  Create responsive tables by wrapping any <code>.table</code>{" "}
                  in <code>.table-responsive</code> to make them scroll
                  horizontally up to small devices (under 768px). When viewing
                  on anything larger than 768px wide, you will not see any
                  difference in these tables.
                </p>
                <div className="bc-example">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Table heading</th>
                          <th>Table heading</th>
                          <th>Table heading</th>
                          <th>Table heading</th>
                          <th>Table heading</th>
                          <th>Table heading</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Table heading</th>
                          <th>Table heading</th>
                          <th>Table heading</th>
                          <th>Table heading</th>
                          <th>Table heading</th>
                          <th>Table heading</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                    <div class="table-responsive">
                      <table class="table">...</table>
                    </div>
                `}
                  />
                </div>
              </article>
            </div>

            <div className="bs-docs-section">
              <a className="anchor" id="forms" />
              <h1 className="page-header">Forms</h1>

              <article className="forms-example">
                <a className="anchor" id="forms-example" />
                <h2>Basic example</h2>
                <p>
                  Individual form controls automatically receive some global
                  styling. All textual <code>&lt;input&gt;</code>,{" "}
                  <code>&lt;textarea&gt;</code>, and <code>&lt;select&gt;</code>{" "}
                  elements with <code>.form-control</code> are set to{" "}
                  <code>width: 100%;</code> by default. Wrap labels and controls
                  in <code>.form-group</code> for optimum spacing.
                </p>
                <div className="bc-example">
                  <form role="form">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputFile">File input</label>
                      <input type="file" id="exampleInputFile" />
                      <p className="help-block">
                        Example block-level help text here.
                      </p>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> Check me out
                      </label>
                    </div>
                    <button type="submit" className="btn">
                      Submit
                    </button>
                  </form>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                    <form role="form">
                      <div class="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="Enter email"
                        />
                      </div>
                      <div class="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                      </div>
                      <div class="form-group">
                        <label htmlFor="exampleInputFile">File input</label>
                        <input type="file" id="exampleInputFile" />
                        <p class="help-block">
                          Example block-level help text here.
                        </p>
                      </div>
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" /> Check me out
                        </label>
                      </div>
                      <button type="submit" class="btn">
                        Submit
                      </button>
                    </form>
                `}
                  />
                </div>

                <div className="bs-callout bs-callout-warning">
                  <h4>Don't mix form groups with input groups</h4>
                  <p>
                    Do not mix form groups directly with{" "}
                    <a href="/components/#forms-input-groups">input groups</a>.
                    Instead, nest the input group inside of the form group.
                  </p>
                </div>
              </article>

              <article className="forms-inline">
                <a className="anchor" id="forms-inline" />
                <h2>Inline form</h2>
                <p>
                  Add <code>.form-inline</code> to your{" "}
                  <code>&lt;form&gt;</code> for left-aligned and inline-block
                  controls.{" "}
                  <strong>
                    This only applies to forms within viewports that are at
                    least 768px wide.
                  </strong>
                </p>

                <div className="bs-callout bs-callout-danger">
                  <h4>Requires custom widths</h4>
                  <p>
                    Inputs, selects, and textareas are 100% wide by default in
                    BaseCamp. To use the inline form, you'll have to set a width
                    on the form controls used within.
                  </p>
                </div>

                <div className="bs-callout bs-callout-warning">
                  <h4>Always add labels</h4>
                  <p>
                    Screen readers will have trouble with your forms if you
                    don't include a label for every input. For these inline
                    forms, you can hide the labels using the{" "}
                    <code>.sr-only</code> class.
                  </p>
                </div>

                <div className="bc-example">
                  <form className="form-inline" role="form">
                    <div className="form-group">
                      <label className="sr-only" htmlFor="exampleInputEmail2">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail2"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        className="sr-only"
                        htmlFor="exampleInputPassword2"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword2"
                        placeholder="Password"
                      />
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> Remember me
                      </label>
                    </div>
                    <button type="submit" className="btn">
                      Sign in
                    </button>
                  </form>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  
                    <form class="form-inline" role="form">
                      <div class="form-group">
                        <label class="sr-only" htmlFor="exampleInputEmail2">
                          Email address
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail2"
                          placeholder="Enter email"
                        />
                      </div>
                      <div class="form-group">
                        <label
                          class="sr-only"
                          htmlFor="exampleInputPassword2"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword2"
                          placeholder="Password"
                        />
                      </div>
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" /> Remember me
                        </label>
                      </div>
                      <button type="submit" class="btn">
                        Sign in
                      </button>
                    </form>
                `}
                  />
                </div>
              </article>

              <article className="forms-horizontal">
                <a className="anchor" id="forms-horizontal" />
                <h2>Horizontal form</h2>
                <p>
                  Use BaseCamp's predefined grid classes to align labels and
                  groups of form controls in a horizontal layout by adding{" "}
                  <code>.form-horizontal</code> to the form. Doing so changes{" "}
                  <code>.form-group</code>s to behave as grid rows, so no need
                  for <code>.row</code>.
                </p>
                <div className="bc-example">
                  <form className="form-horizontal" role="form">
                    <div className="form-group">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 control-label"
                      >
                        Email
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail3"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-2 control-label"
                      >
                        Password
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword3"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" /> Remember me
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn">
                          Sign in
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  
                    <form class="form-horizontal" role="form">
                      <div class="form-group">
                        <label
                          htmlFor="inputEmail3"
                          class="col-sm-2 control-label"
                        >
                          Email
                        </label>
                        <div class="col-sm-10">
                          <input
                            type="email"
                            class="form-control"
                            id="inputEmail3"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label
                          htmlFor="inputPassword3"
                          class="col-sm-2 control-label"
                        >
                          Password
                        </label>
                        <div class="col-sm-10">
                          <input
                            type="password"
                            class="form-control"
                            id="inputPassword3"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                          <div class="checkbox">
                            <label>
                              <input type="checkbox" /> Remember me
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                          <button type="submit" class="btn">
                            Sign in
                          </button>
                        </div>
                      </div>
                    </form>
                  
                `}
                  />
                </div>
              </article>

              <article className="forms-control">
                <a className="anchor" id="forms-control" />
                <h2>Supported controls</h2>
                <p>
                  Examples of standard form controls supported in an example
                  form layout.
                </p>

                <section className="forms-control-inputs">
                  <a className="anchor" id="forms-control-inputs" />
                  <h3>Inputs</h3>
                  <p>
                    Most common form control, text-based input fields. Includes
                    support for all HTML5 types: <code>text</code>,{" "}
                    <code>password</code>, <code>datetime</code>,{" "}
                    <code>datetime-local</code>, <code>date</code>,{" "}
                    <code>month</code>, <code>time</code>, <code>week</code>,{" "}
                    <code>number</code>, <code>email</code>, <code>url</code>,{" "}
                    <code>search</code>, <code>tel</code>, and{" "}
                    <code>color</code>.
                  </p>
                  <div className="bs-callout bs-callout-danger">
                    <h4>Type declaration required</h4>
                    <p>
                      Inputs will only be fully styled if their{" "}
                      <code>type</code> is properly declared.
                    </p>
                  </div>
                  <div className="bc-example">
                    <form role="form">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text input"
                      />
                    </form>
                  </div>
                  <div className="highlight">
                    <CodeBlock
                      language={"jsx"}
                      value={`
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Text input"
                      />
                  `}
                    />
                  </div>
                </section>

                <section className="forms-control-textarea">
                  <a className="anchor" id="forms-control-textarea" />
                  <h3>Textarea</h3>
                  <p>
                    Form control which supports multiple lines of text. Change{" "}
                    <code>rows</code> attribute as necessary.
                  </p>
                  <div className="bc-example">
                    <form role="form">
                      <textarea className="form-control" rows="3" />
                    </form>
                  </div>
                  <div className="highlight">
                    <CodeBlock
                      language={"jsx"}
                      value={`
                      <textarea class="form-control" rows="3" />
                  `}
                    />
                  </div>
                </section>

                <section className="forms-control-checkbox">
                  <a className="anchor" id="forms-control-checkbox" />
                  <h3>Checkboxes and radios</h3>
                  <p>
                    Checkboxes are for selecting one or several options in a
                    list while radios are for selecting one option from many.
                  </p>
                  <h4>Default (stacked)</h4>
                  <div className="bc-example">
                    <form role="form">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" /> Option one is this
                          and that—be sure to include why it's great
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            name="optionsRadios"
                            id="optionsRadios1"
                            value="option1"
                          />{" "}
                          Option one is this and that—be sure to include why
                          it's great
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            name="optionsRadios"
                            id="optionsRadios2"
                            value="option2"
                          />{" "}
                          Option two can be something else and selecting it will
                          deselect option one
                        </label>
                      </div>
                    </form>
                  </div>
                  <div className="highlight">
                    <CodeBlock
                      language={"jsx"}
                      value={`
                    
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" value="" />
                          Option one is this and that&mdash;be sure to include why
                          it's great
                        </label>
                      </div>
                      <div class="radio">
                        <label>
                          <input
                            type="radio"
                            name="optionsRadios"
                            id="optionsRadios1"
                            value="option1"
                          />
                          Option one is this and that&mdash;be sure to include why
                          it's great
                        </label>
                      </div>
                      <div class="radio">
                        <label>
                          <input
                            type="radio"
                            name="optionsRadios"
                            id="optionsRadios2"
                            value="option2"
                          />
                          Option two can be something else and selecting it will
                          deselect option one
                        </label>
                      </div>
                    
                  `}
                    />
                  </div>
                </section>

                <section className="forms-control-inline-checkbox">
                  <a className="anchor" id="forms-control-inline-checkbox" />
                  <h4>Inline checkboxes</h4>
                  <p>
                    Use the <code>.checkbox-inline</code> or{" "}
                    <code>.radio-inline</code> classes on a series of checkboxes
                    or radios for controls that appear on the same line.
                  </p>
                  <div className="bc-example">
                    <form role="form">
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="option1"
                        />{" "}
                        1
                      </label>
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="option2"
                        />{" "}
                        2
                      </label>
                      <label className="checkbox-inline">
                        <input
                          type="checkbox"
                          id="inlineCheckbox3"
                          value="option3"
                        />{" "}
                        3
                      </label>
                    </form>
                  </div>
                  <div className="highlight">
                    <CodeBlock
                      language={"jsx"}
                      value={`
                    
                      <label class="checkbox-inline">
                        <input
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="option1"
                        />{" "}
                        1
                      </label>
                      <label class="checkbox-inline">
                        <input
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="option2"
                        />{" "}
                        2
                      </label>
                      <label class="checkbox-inline">
                        <input
                          type="checkbox"
                          id="inlineCheckbox3"
                          value="option3"
                        />{" "}
                        3
                      </label>
                  `}
                    />
                  </div>
                </section>

                <section className="forms-control-selects">
                  <a className="anchor" id="forms-control-selects" />
                  <h3>Selects</h3>
                  <p>
                    Use the default option, or add <code>multiple</code> to show
                    multiple options at once.
                  </p>
                  <div className="bc-example">
                    <form role="form">
                      <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                      <br />
                      <select multiple className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </form>
                  </div>
                  <div className="highlight">
                    <CodeBlock
                      language={"jsx"}
                      value={`
                    
                      <select class="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
  
                      <select multiple class="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    
                  `}
                    />
                  </div>
                </section>
              </article>

              <article className="input-groups">
                <a className="anchor" id="forms-input-groups" />
                <h2>Input Groups</h2>

                <p>
                  Extend form controls by adding text or buttons before, after,
                  or on both sides of any text-based <code>&lt;input&gt;</code>.
                  Use <code>.input-group</code> with an{" "}
                  <code>.input-group-addon</code> or{" "}
                  <code>.input-group-btn</code> to prepend or append elements to
                  a single <code>.form-control</code>.
                </p>
                <div
                  className="bs-callout bs-callout-danger"
                  id="callout-inputgroup-text-input-only"
                >
                  <h4>
                    Textual <code>&lt;input&gt;</code>s only
                  </h4>
                  <p>
                    Avoid using <code>&lt;select&gt;</code> elements here as
                    they cannot be fully styled in WebKit browsers.
                  </p>
                  <p>
                    Avoid using <code>&lt;textarea&gt;</code> elements here as
                    their <code>rows</code> attribute will not be respected in
                    some cases.
                  </p>
                </div>
                <div
                  className="bs-callout bs-callout-warning"
                  id="callout-inputgroup-container-body"
                >
                  <h4>
                    Tooltips &amp; popovers in input groups require special
                    setting
                  </h4>
                  <p>
                    When using tooltips or popovers on elements within an{" "}
                    <code>.input-group</code>, you'll have to specify the option{" "}
                    <code>container: 'body'</code> to avoid unwanted side
                    effects (such as the element growing wider and/or losing its
                    rounded corners when the tooltip or popover is triggered).
                  </p>
                </div>
                <div
                  className="bs-callout bs-callout-warning"
                  id="callout-inputgroup-dont-mix"
                >
                  <h4>Don't mix with other components</h4>
                  <p>
                    Do not mix form groups or grid column classes directly with
                    input groups. Instead, nest the input group inside of the
                    form group or grid-related element.
                  </p>
                </div>

                <section className="input-groups-buttons">
                  <a className="anchor" id="forms-input-groups-buttons" />
                  <h4 id="forms-input-groups-buttons">Button addons</h4>
                  <p>
                    Buttons in input groups are a bit different and require one
                    extra level of nesting. Instead of{" "}
                    <code>.input-group-addon</code>, you'll need to use{" "}
                    <code>.input-group-btn</code> to wrap the buttons. This is
                    required due to default browser styles that cannot be
                    overridden.
                  </p>
                  <div className="bc-example bc-example-form">
                    <form data-example-id="input-group-with-button">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-group">
                            <span className="input-group-btn">
                              <button className="btn btn-orange" type="button">
                                Search
                              </button>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search for..."
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search for..."
                            />
                            <span className="input-group-btn">
                              <button className="btn btn-orange" type="button">
                                Search
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="highlight">
                    <p className="segment-subtitle">HTML Markup: Left button</p>
                    <CodeBlock
                      language={"jsx"}
                      value={`
                    
                      <div class="input-group">
                        <span class="input-group-btn">
                          <button class="btn btn-orange" type="button">
                            Search
                          </button>
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search for..."
                        />
                      </div>
                  `}
                    />
                    <p className="segment-subtitle">
                      HTML Markup: Right button
                    </p>
                    <CodeBlock
                      language={"jsx"}
                      value={`
                    
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search for..."
                        />
                        <span class="input-group-btn">
                          <button class="btn btn-orange" type="button">
                            Search
                          </button>
                        </span>
                      </div>
                  `}
                    />
                  </div>
                </section>

                <section className="input-groups-sizing">
                  <a className="anchor" id="forms-input-groups-sizing" />
                  <h4 id="forms-input-groups-sizing">
                    <a href="#forms-input-groups-sizing" />
                    Sizing
                  </h4>
                  <p>
                    Add the relative form sizing classes{" "}
                    <code>input-group-sm</code> or <code>input-group-lg</code>{" "}
                    to the <code>.input-group</code> itself and contents within
                    will automatically resize—no need for repeating the form
                    control size classes on each element. No need to add a class
                    for the default size.
                  </p>
                  <div className="bc-example">
                    <form data-example-id="input-group-sizing">
                      <label htmlFor="input-large-name">Large Input</label>
                      <div className="input-group input-group-lg">
                        <input
                          type="text"
                          className="form-control"
                          id="input-large-name"
                          placeholder="Large input size"
                        />
                        <span className="input-group-btn">
                          <button className="btn btn-orange" type="button">
                            Search
                          </button>
                        </span>
                      </div>
                      <br />
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Default input size"
                        />
                        <span className="input-group-btn">
                          <button className="btn btn-orange" type="button">
                            Search
                          </button>
                        </span>
                      </div>
                      <br />
                      <div className="input-group input-group-sm">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Small input size"
                        />
                        <span className="input-group-btn">
                          <button className="btn btn-orange" type="button">
                            Search
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                  <div className="highlight">
                    <CodeBlock
                      language={"jsx"}
                      value={`
                      <div class="input-group input-group-sm">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search for..."
                        />
                        <span class="input-group-btn">
                          <button class="btn btn-orange" type="button">
                            Search
                          </button>
                        </span>
                      </div>
                  `}
                    />
                  </div>
                </section>

                <section className="input-groups-buttons-dropdowns">
                  <a
                    className="anchor"
                    id="forms-input-groups-buttons-dropdowns"
                  />
                  <h4 id="forms-input-groups-buttons-dropdowns">
                    Buttons with dropdowns
                  </h4>
                  <div className="bc-example">
                    <form data-example-id="input-group-dropdowns">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-group">
                            <div className="input-group-btn">
                              <button
                                type="button"
                                className="btn btn-default dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Action <span className="caret" />
                              </button>
                              <ul className="dropdown-menu">
                                <li>
                                  <a href="#">Action</a>
                                </li>
                                <li>
                                  <a href="#">Another action</a>
                                </li>
                                <li>
                                  <a href="#">Something else here</a>
                                </li>
                                <li role="separator" className="divider" />
                                <li>
                                  <a href="#">Separated link</a>
                                </li>
                              </ul>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              aria-label="Text input with dropdown button"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              aria-label="Text input with dropdown button"
                            />
                            <div className="input-group-btn">
                              <button
                                type="button"
                                className="btn btn-default dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Action <span className="caret" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                  <a href="#">Action</a>
                                </li>
                                <li>
                                  <a href="#">Another action</a>
                                </li>
                                <li>
                                  <a href="#">Something else here</a>
                                </li>
                                <li role="separator" className="divider" />
                                <li>
                                  <a href="#">Separated link</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="highlight">
                    <p className="segment-subtitle">HTML Markup: Left button</p>
                    <CodeBlock
                      language={"jsx"}
                      value={`
                    
                      <div class="input-group">
                        <div class="input-group-btn">
                          <button
                            type="button"
                            class="btn btn-default dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Action <span class="caret" />
                          </button>
                          <ul class="dropdown-menu dropdown-menu-right">
                            <li>
                              <a href="#">Action</a>
                            </li>
                            <li>
                              <a href="#">Another action</a>
                            </li>
                            <li>
                              <a href="#">Something else here</a>
                            </li>
                            <li role="separator" class="divider" />
                            <li>
                              <a href="#">Separated link</a>
                            </li>
                          </ul>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          aria-label="Text input with dropdown button"
                        />
                      </div>
                  `}
                    />
                    <p className="segment-subtitle">
                      HTML Markup: Right button
                    </p>
                    <CodeBlock
                      language={"jsx"}
                      value={`
                    
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          aria-label="Text input with dropdown button"
                        />
                        <div class="input-group-btn">
                          <button
                            type="button"
                            class="btn btn-default dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Action <span class="caret" />
                          </button>
                          <ul class="dropdown-menu dropdown-menu-right">
                            <li>
                              <a href="#">Action</a>
                            </li>
                            <li>
                              <a href="#">Another action</a>
                            </li>
                            <li>
                              <a href="#">Something else here</a>
                            </li>
                            <li role="separator" class="divider" />
                            <li>
                              <a href="#">Separated link</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                  `}
                    />
                  </div>
                </section>

                <section className="input-groups-buttons-segmented">
                  <a
                    className="anchor"
                    id="forms-input-groups-buttons-segmented"
                  />
                  <h4 id="forms-input-groups-buttons-segmented">
                    Segmented buttons
                  </h4>
                  <div className="bc-example">
                    <form data-example-id="input-group-segmented-buttons">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-group">
                            <div className="input-group-btn">
                              <button type="button" className="btn btn-default">
                                Action
                              </button>
                              <button
                                type="button"
                                className="btn btn-default dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="caret" />
                                <span className="sr-only">Toggle Dropdown</span>
                              </button>
                              <ul className="dropdown-menu">
                                <li>
                                  <a href="#">Action</a>
                                </li>
                                <li>
                                  <a href="#">Another action</a>
                                </li>
                                <li>
                                  <a href="#">Something else here</a>
                                </li>
                                <li role="separator" className="divider" />
                                <li>
                                  <a href="#">Separated link</a>
                                </li>
                              </ul>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              aria-label="Text input with segmented button dropdown"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              aria-label="Text input with segmented button dropdown"
                            />
                            <div className="input-group-btn">
                              <button type="button" className="btn btn-default">
                                Action
                              </button>
                              <button
                                type="button"
                                className="btn btn-default dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="caret" />
                                <span className="sr-only">Toggle Dropdown</span>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                  <a href="#">Action</a>
                                </li>
                                <li>
                                  <a href="#">Another action</a>
                                </li>
                                <li>
                                  <a href="#">Something else here</a>
                                </li>
                                <li role="separator" className="divider" />
                                <li>
                                  <a href="#">Separated link</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="highlight">
                    <p className="segment-subtitle">HTML Markup: Left button</p>
                    <CodeBlock
                      language={"jsx"}
                      value={`
                    
                      <div class="input-group">
                        <div class="input-group-btn">
                          <button type="button" class="btn btn-default">
                            Action
                          </button>
                          <button
                            type="button"
                            class="btn btn-default dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span class="caret" />
                            <span class="sr-only">Toggle Dropdown</span>
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <a href="#">Action</a>
                            </li>
                            <li>
                              <a href="#">Another action</a>
                            </li>
                            <li>
                              <a href="#">Something else here</a>
                            </li>
                            <li role="separator" class="divider" />
                            <li>
                              <a href="#">Separated link</a>
                            </li>
                          </ul>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          aria-label="Text input with segmented button dropdown"
                        />
                      </div>
                  `}
                    />
                    <p className="segment-subtitle">
                      HTML Markup: Right button
                    </p>
                    <CodeBlock
                      language={"jsx"}
                      value={`
                    
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          aria-label="Text input with segmented button dropdown"
                        />
                        <div class="input-group-btn">
                          <button type="button" class="btn btn-default">
                            Action
                          </button>
                          <button
                            type="button"
                            class="btn btn-default dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span class="caret" />
                            <span class="sr-only">Toggle Dropdown</span>
                          </button>
                          <ul class="dropdown-menu dropdown-menu-right">
                            <li>
                              <a href="#">Action</a>
                            </li>
                            <li>
                              <a href="#">Another action</a>
                            </li>
                            <li>
                              <a href="#">Something else here</a>
                            </li>
                            <li role="separator" class="divider" />
                            <li>
                              <a href="#">Separated link</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                  `}
                    />
                  </div>
                </section>
              </article>

              <article className="forms-control-static">
                <a className="anchor" id="forms-control-static" />
                <h2>Static control</h2>
                <p>
                  When you need to place plain text next to a form label within
                  a horizontal form, use the <code>.form-control-static</code>{" "}
                  class on a <code>&lt;p&gt;</code>.
                </p>
                <div className="bc-example">
                  <form className="form-horizontal" role="form">
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Email</label>
                      <div className="col-sm-10">
                        <p className="form-control-static">email@example.com</p>
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="inputPassword"
                        className="col-sm-2 control-label"
                      >
                        Password
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  
                    <form class="form-horizontal" role="form">
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Email</label>
                        <div class="col-sm-10">
                          <p class="form-control-static">email@example.com</p>
                        </div>
                      </div>
                      <div class="form-group">
                        <label
                          htmlFor="inputPassword"
                          class="col-sm-2 control-label"
                        >
                          Password
                        </label>
                        <div class="col-sm-10">
                          <input
                            type="password"
                            class="form-control"
                            id="inputPassword"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                    </form>
                `}
                  />
                </div>
              </article>

              <article className="forms-control-focus">
                <a className="anchor" id="forms-control-focus" />
                <h2>Input focus</h2>
                <p>
                  We remove the default <code>outline</code> styles on some form
                  controls and apply a <code>box-shadow</code> in its place for{" "}
                  <code>:focus</code>.
                </p>
                <div className="bc-example">
                  <form role="form">
                    <input
                      className="form-control"
                      id="focusedInput"
                      type="text"
                      value="Demonstrative focus state"
                    />
                  </form>
                </div>
                <div className="bs-callout bs-callout-info">
                  <h4>
                    Demo <code>:focus</code> state
                  </h4>
                  <p>
                    The above example input uses custom styles in our
                    documentation to demonstrate the <code>:focus</code> state
                    on a <code>.form-control</code>.
                  </p>
                </div>
              </article>

              <article className="forms-control-disabled">
                <a className="anchor" id="forms-control-disabled" />
                <h2>Disabled inputs</h2>
                <p>
                  Add the <code>disabled</code> attribute on an input to prevent
                  user input and trigger a slightly different look.
                </p>
                <div className="bc-example">
                  <form role="form">
                    <input
                      className="form-control"
                      id="disabledInput"
                      type="text"
                      placeholder="Disabled input here…"
                      disabled
                    />
                  </form>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  
                    <input
                      class="form-control"
                      id="disabledInput"
                      type="text"
                      placeholder="Disabled input here..."
                      disabled
                    />
                `}
                  />
                </div>
                <h3 id="forms-disabled-fieldsets">Disabled fieldsets</h3>
                <p>
                  Add the <code>disabled</code> attribute to a{" "}
                  <code>&lt;fieldset&gt;</code> to disable all the controls
                  within the <code>&lt;fieldset&gt;</code> at once.
                </p>
                <div className="bs-callout bs-callout-warning">
                  <h4>
                    Link functionality of <code>&lt;a&gt;</code> not impacted
                  </h4>
                  <p>
                    This class will only change the appearance of{" "}
                    <code>&lt;a class="btn"&gt;</code> buttons, not their
                    functionality. Use custom JavaScript to disable links here.
                  </p>
                </div>
                <div className="bs-callout bs-callout-danger">
                  <h4>Cross-browser compatibility</h4>
                  <p>
                    While BaseCamp will apply these styles in all browsers,
                    Internet Explorer 9 and below don't actually support the{" "}
                    <code>disabled</code> attribute on a{" "}
                    <code>&lt;fieldset&gt;</code>. Use custom JavaScript to
                    disable the fieldset in these browsers.
                  </p>
                </div>
                <div className="bc-example">
                  <form role="form">
                    <fieldset disabled>
                      <div className="form-group">
                        <label htmlFor="disabledTextInput">
                          Disabled input
                        </label>
                        <input
                          type="text"
                          id="disabledTextInput"
                          className="form-control"
                          placeholder="Disabled input"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="disabledSelect">
                          Disabled select menu
                        </label>
                        <select id="disabledSelect" className="form-control">
                          <option>Disabled select</option>
                        </select>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" /> Can't check this
                        </label>
                        <label>
                          <input type="radio" /> Can't pick this
                        </label>
                      </div>
                      <button type="submit" className="btn ">
                        Submit
                      </button>
                    </fieldset>
                  </form>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  
                    <form role="form">
                      <fieldset disabled>
                        <div class="form-group">
                          <label htmlFor="disabledTextInput">
                            Disabled input
                          </label>
                          <input
                            type="text"
                            id="disabledTextInput"
                            class="form-control"
                            placeholder="Disabled input"
                          />
                        </div>
                        <div class="form-group">
                          <label htmlFor="disabledSelect">
                            Disabled select menu
                          </label>
                          <select id="disabledSelect" class="form-control">
                            <option>Disabled select</option>
                          </select>
                        </div>
                        <div class="checkbox">
                          <label>
                            <input type="checkbox" /> Can't check this
                          </label>
                        </div>
                        <button type="submit" class="btn ">
                          Submit
                        </button>
                      </fieldset>
                    </form>
                `}
                  />
                </div>
              </article>

              <article className="forms-control-validation">
                <a className="anchor" id="forms-control-validation" />
                <h2>Validation states</h2>
                <p>
                  BaseCamp includes validation styles for error, warning, and
                  success states on form controls. To use, add{" "}
                  <code>.has-warning</code>, <code>.has-error</code>, or{" "}
                  <code>.has-success</code> to the parent element. Any{" "}
                  <code>.control-label</code>, <code>.form-control</code>, and{" "}
                  <code>.help-block</code> within that element will receive the
                  validation styles.
                </p>
                <div className="bc-example">
                  <form role="form">
                    <div className="form-group has-success">
                      <label className="control-label" htmlFor="inputSuccess1">
                        Input with success
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputSuccess1"
                      />
                    </div>
                    <div className="form-group has-warning">
                      <label className="control-label" htmlFor="inputWarning1">
                        Input with warning
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputWarning1"
                      />
                    </div>
                    <div className="form-group has-error">
                      <label className="control-label" htmlFor="inputError1">
                        Input with error
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputError1"
                      />
                    </div>
                  </form>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  
                    <div class="form-group has-success">
                      <label class="control-label" htmlFor="inputSuccess1">
                        Input with success
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputSuccess1"
                      />
                    </div>
                    <div class="form-group has-warning">
                      <label class="control-label" htmlFor="inputWarning1">
                        Input with warning
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputWarning1"
                      />
                    </div>
                    <div class="form-group has-error">
                      <label class="control-label" htmlFor="inputError1">
                        Input with error
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputError1"
                      />
                    </div>
                `}
                  />
                </div>

                <h3>With optional icons</h3>
                <p>
                  You can also add optional feedback icons with the addition of
                  an extra class and the right icon.
                </p>
                <div className="bs-callout bs-callout-warning">
                  <h4>Icons, labels, and input groups</h4>
                  <p>
                    Manual positioning of feedback icons is required for inputs
                    without a label and for{" "}
                    <a href="./components#forms-input-groups">input groups</a>{" "}
                    with an add-on on the right. For inputs without labels,
                    adjust the <code>top</code>value. For input groups, adjust
                    the <code>right</code> value to an appropriate pixel value
                    depending on the width of your addon.
                  </p>
                </div>
                <div className="bc-example">
                  <form role="form">
                    <div className="form-group has-success has-feedback">
                      <label className="control-label" htmlFor="inputSuccess2">
                        Input with success
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputSuccess2"
                      />
                      <span className="icon-checkmark form-control-feedback" />
                    </div>
                    <div className="form-group has-warning has-feedback">
                      <label className="control-label" htmlFor="inputWarning2">
                        Input with warning
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputWarning2"
                      />
                      <span className="icon-warning form-control-feedback" />
                    </div>
                    <div className="form-group has-error has-feedback">
                      <label className="control-label" htmlFor="inputError2">
                        Input with error
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputError2"
                      />{" "}
                      <span className="icon-close form-control-feedback" />
                    </div>
                  </form>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  
                    <div class="form-group has-success has-feedback">
                      <label class="control-label" htmlFor="inputSuccess2">
                        Input with success
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputSuccess2"
                      />
                      <span class="icon-checkmark form-control-feedback" />
                    </div>
                    <div class="form-group has-warning has-feedback">
                      <label class="control-label" htmlFor="inputWarning2">
                        Input with warning
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputWarning2"
                      />
                      <span class="icon-warning form-control-feedback" />
                    </div>
                    <div class="form-group has-error has-feedback">
                      <label class="control-label" htmlFor="inputError2">
                        Input with error
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputError2"
                      />
                      <span class="icon-close form-control-feedback" />
                    </div>
                `}
                  />
                </div>

                <p>Optional icons also work on horizontal and inline forms.</p>
                <div className="bc-example">
                  <form className="form-horizontal" role="form">
                    <div className="form-group has-success has-feedback">
                      <label
                        className="control-label col-sm-3"
                        htmlFor="inputSuccess3"
                      >
                        Input with success
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="inputSuccess3"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  
                    <form class="form-horizontal" role="form">
                      <div class="form-group has-success has-feedback">
                        <label
                          class="control-label col-sm-3"
                          htmlFor="inputSuccess3"
                        >
                          Input with success
                        </label>
                        <div class="col-sm-9">
                          <input
                            type="text"
                            class="form-control"
                            id="inputSuccess3"
                          />
                          <span class="icon-checkmark form-control-feedback" />
                        </div>
                      </div>
                    </form>
                `}
                  />
                </div>
                <div className="bc-example">
                  <form className="form-inline" role="form">
                    <div className="form-group has-success has-feedback">
                      <label className="control-label" htmlFor="inputSuccess4">
                        Input with success
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputSuccess4"
                      />
                    </div>
                  </form>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  
                    <form class="form-inline" role="form">
                      <div class="form-group has-success has-feedback">
                        <label class="control-label" htmlFor="inputSuccess4">
                          Input with success
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputSuccess4"
                        />
                        <span class="icon-checkmark form-control-feedback" />
                      </div>
                    </form>
                `}
                  />
                </div>
              </article>

              <article className="forms-control-sizes">
                <a className="anchor" id="forms-control-sizes" />
                <h2>Control sizing</h2>
                <p>
                  Set heights using classes like <code>.input-lg</code>, and set
                  widths using grid column classes like <code>.col-lg-*</code>.
                </p>
                <h3>Height sizing</h3>
                <p>
                  Create taller or shorter form controls that match button
                  sizes.
                </p>
                <div className="bc-example bc-example-control-sizing">
                  <form role="form">
                    <div className="controls">
                      <input
                        className="form-control input-lg"
                        type="text"
                        placeholder=".input-lg"
                      />
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Default input"
                      />
                      <br />
                      <input
                        className="form-control input-sm"
                        type="text"
                        placeholder=".input-sm"
                      />
                      <br />
                      <select className="form-control input-lg">
                        <option value="input-lg">.input-lg</option>
                      </select>
                      <br />
                      <select className="form-control">
                        <option value="default">Default select</option>
                      </select>
                      <br />
                      <select className="form-control input-sm">
                        <option value="input-sm">.input-sm</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  
                    <input
                      class="form-control input-lg"
                      type="text"
                      placeholder=".input-lg"
                    />
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Default input"
                    />
                    <input
                      class="form-control input-sm"
                      type="text"
                      placeholder=".input-sm"
                    />
  
                    <select class="form-control input-lg">...</select>
                    <select class="form-control">...</select>
                    <select class="form-control input-sm">...</select>
                `}
                  />
                </div>

                <h3>Column sizing</h3>
                <p>
                  Wrap inputs in grid columns, or any custom parent element, to
                  easily enforce desired widths.
                </p>
                <div className="bc-example">
                  <form role="form">
                    <div className="row">
                      <div className="col-xs-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-xs-2"
                        />
                      </div>
                      <div className="col-xs-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-xs-3"
                        />
                      </div>
                      <div className="col-xs-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=".col-xs-4"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  
                    <div class="row">
                      <div class="col-xs-2">
                        <input
                          type="text"
                          class="form-control"
                          placeholder=".col-xs-2"
                        />
                      </div>
                      <div class="col-xs-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder=".col-xs-3"
                        />
                      </div>
                      <div class="col-xs-4">
                        <input
                          type="text"
                          class="form-control"
                          placeholder=".col-xs-4"
                        />
                      </div>
                    </div>
                `}
                  />
                </div>
              </article>

              <article className="forms-help-text">
                <a className="anchor" id="forms-help-text" />
                <h2>Help text</h2>
                <p>Block level help text for form controls.</p>
                <div className="bc-example">
                  <form role="form">
                    <input type="text" className="form-control" />{" "}
                    <span className="help-block">
                      A block of help text that breaks onto a new line and may
                      extend beyond one line.
                    </span>
                  </form>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  
                    <span class="help-block">
                      A block of help text that breaks onto a new line and may
                      extend beyond one line.
                    </span>
                `}
                  />
                </div>
              </article>
            </div>

            <div className="bs-docs-section">
              <a className="anchor" id="links" />
              <h1 className="page-header">Links</h1>
              <a className="anchor" id="links-inline" />
              <h2>Inline Links</h2>
              <p>
                Inline links are found within body copy, usually within a block
                or paragraph of text. These links are the standard text color,
                underlined, and change color to an aqua on hover.
              </p>
              <div className="bc-example">
                <p>
                  Lorem ipsum dolor sit amet, <a href="#nogo">consectetur</a>{" "}
                  adipisicing elit. Voluptas veritatis nostrum non quasi
                  voluptatem impedit quis, id soluta? Ducimus magni eaque
                  incidunt repellendus maiores quas unde vero eum, voluptates.
                  Nam!
                </p>
              </div>
              <div className="highlight">
                <CodeBlock
                  language={"jsx"}
                  value={`
                
                  <p>
                    Lorem ipsum dolor sit amet, <a href="#nogo">consectetur</a>{" "}
                    adipisicing elit. Voluptas veritatis nostrum non quasi
                    voluptatem impedit quis, id soluta? Ducimus magni eaque
                    incidunt repellendus maiores quas unde vero eum, voluptates.
                    Nam!
                  </p>
              `}
                />
              </div>

              <article className="links-general">
                <a className="anchor" id="links-ctas" />
                <h2>General links</h2>
                <p>
                  When displaying a link that is not a call-to-action, but a
                  visual indicator is needed, please use the <code>ext</code>{" "}
                  class. This will provide a <code>newtab</code> or{" "}
                  <code>PDF</code> icon after the link text. This class can be
                  used on <code>button</code>s also, and will add the{" "}
                  <code>newtab</code> icon after the button text.
                </p>
                <div className="bc-example">
                  <ul className="list-unstyled nobullets">
                    <li>
                      <a
                        className="ext"
                        href="/components.html"
                        target="_blank"
                      >
                        Relative link
                      </a>
                    </li>
                    <li>
                      <a className="ext" href="//google.com" target="_blank">
                        External page link
                      </a>
                    </li>
                    <li>
                      <a
                        className="ext"
                        href="/resources/Mobile_App_Style_Guide.pdf"
                        target="_blank"
                      >
                        PDF link
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  
                    <a class="ext" href="/components.html" target="_blank">
                      Relative link
                    </a>
                    <a class="ext" href="//google.com" target="_blank">
                      External page link
                    </a>
                    <a
                      class="ext"
                      href="/resources/Mobile_App_Style_Guide.pdf"
                      target="_blank"
                    >
                      PDF link
                    </a>
                `}
                  />
                </div>
              </article>

              <article className="links-ctas">
                <a className="anchor" id="links-ctas" />
                <h2>Call-to-action links</h2>
                <p>
                  Call-to-action links should be used when directing the user to
                  perform some specific action. This should be a single item,
                  and the focus of the content that comes before. If there are
                  multiple links, consider using basic links placed in a{" "}
                  <code>&lt;ul class="list-unstyled"></code> or{" "}
                  <code>&lt;ul class="list-inline"></code>.
                </p>
                <p>
                  Standard call-to-action links are displayed as text links, and
                  use a <code>cta</code> class. These differ from inline links,
                  since they are not underlined and have a hover animation.
                  These links also have a caret or <code>&gt;</code> symbol
                  after the text. This icon changes on certain factors, such as
                  if the link leaves the main site or references a PDF document.
                </p>
                <div className="bc-example">
                  <a className="cta" href="#nogo">
                    Call to action
                  </a>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  <code>
                    <a class="cta" href="#nogo">
                      Call to action
                    </a>
                  </code>
                `}
                  />
                </div>
              </article>
            </div>

            <div className="bs-docs-section">
              <a className="anchor" id="buttons" />
              <h1 className="page-header">Buttons</h1>

              <article className="buttons-options">
                <a className="anchor" id="buttons-options" />
                <h2>Options</h2>
                <p>
                  Use any of the available button classes to quickly create a
                  styled button. If there are multiple buttons with equal
                  importance they should all be the standard grey button color.
                  If one action is most important, that button should be the
                  orange button color with the others being button grey color.
                </p>

                <div className="bc-example" id="buttonColors">
                  <button type="button" className="btn">
                    Default
                  </button>

                  <button type="button" className="btn btn-green">
                    Green
                  </button>
                  <button type="button" className="btn btn-orange">
                    Orange
                  </button>

                  <button type="button" className="btn btn-white">
                    White
                  </button>
                  <button type="button" className="btn btn-icon-link">
                    <span className="icon-home" /> Icon Link
                  </button>
                </div>

                <div className="well" id="buttonCode">
                  <h4>Click on any button to see code here</h4>
                </div>
              </article>

              <article className="buttons-sizes">
                <a className="anchor" id="buttons-sizes" />
                <h2>Sizes</h2>
                <p>
                  Fancy larger or smaller buttons? Add <code>.btn-lg</code>,{" "}
                  <code>.btn-sm</code>, or <code>.btn-xs</code> for additional
                  sizes.
                </p>
                <div className="bc-example">
                  <p>
                    <button type="button" className="btn btn-lg">
                      Large button
                    </button>
                    <button type="button" className="btn btn-orange btn-lg">
                      Large button
                    </button>
                  </p>
                  <p>
                    <button type="button" className="btn">
                      Default button
                    </button>
                    <button type="button" className="btn btn-orange">
                      Default button
                    </button>
                  </p>
                  <p>
                    <button type="button" className="btn  btn-sm">
                      Small button
                    </button>
                    <button type="button" className="btn btn-orange btn-sm">
                      Small button
                    </button>
                  </p>
                  <p>
                    <button type="button" className="btn  btn-xs">
                      Extra small button
                    </button>
                    <button type="button" className="btn btn-orange btn-xs">
                      Extra small button
                    </button>
                  </p>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  
                    <button type="button" class="btn  btn-lg">
                      Large button
                    </button>
                    <button type="button" class="btn btn-orange btn-lg">
                      Large button
                    </button>
  
                    <button type="button" class="btn ">
                      Default button
                    </button>
                    <button type="button" class="btn btn-orange">
                      Default button
                    </button>
  
                    <button type="button" class="btn  btn-sm">
                      Small button
                    </button>
                    <button type="button" class="btn btn-orange btn-sm">
                      Small button
                    </button>
  
                    <button type="button" class="btn  btn-xs">
                      Extra small button
                    </button>
                    <button type="button" class="btn btn-orange btn-xs">
                      Extra small button
                    </button>
                `}
                  />
                </div>
                <p>
                  Create block level buttons—those that span the full width of a
                  parent— by adding <code>.btn-block</code>.
                </p>
                <div className="bc-example">
                  <div
                    className="well"
                    style={{ maxWidth: "400px", margin: "0 auto 10px" }}
                  >
                    <button type="button" className="btn  btn-lg btn-block">
                      Block level button
                    </button>
                    <button
                      type="button"
                      className="btn btn-orange btn-lg btn-block"
                    >
                      Block level button
                    </button>
                  </div>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  
                    <button type="button" class="btn  btn-lg btn-block">
                      Block level button
                    </button>
                    <button
                      type="button"
                      class="btn btn-orange btn-lg btn-block"
                    >
                      Block level button
                    </button>
                `}
                  />
                </div>
              </article>

              <article className="buttons-disabled">
                <a className="anchor" id="buttons-disabled" />
                <h2>Disabled State</h2>
                <p>
                  The utility class <code>.disabled</code> can be used for
                  buttons and links. Buttons will look unclickable by fading
                  them.
                </p>
                <p>
                  Add the <code>disabled</code> attribute to{" "}
                  <code>&lt;button&gt;</code> buttons.
                </p>
                <p className="bc-example">
                  <button
                    type="button"
                    className="btn  btn-lg"
                    disabled="disabled"
                  >
                    Primary button
                  </button>
                  <button
                    type="button"
                    className="btn btn-white btn-lg"
                    disabled="disabled"
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="btn btn-green btn-lg"
                    disabled="disabled"
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="btn btn-orange btn-lg"
                    disabled="disabled"
                  >
                    Button
                  </button>
                </p>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  
                    <button
                      type="button"
                      class="btn btn-lg "
                      disabled="disabled"
                    >
                      Primary button
                    </button>
                    <button
                      type="button"
                      class="btn btn-white btn-lg"
                      disabled="disabled"
                    >
                      Button
                    </button>
                    <button
                      type="button"
                      class="btn btn-green btn-lg"
                      disabled="disabled"
                    >
                      Button
                    </button>
                    <button
                      type="button"
                      class="btn btn-orange btn-lg"
                      disabled="disabled"
                    >
                      Button
                    </button>
                `}
                  />
                </div>

                <div className="bs-callout bs-callout-danger">
                  <h4>Cross-browser compatibility</h4>
                  <p>
                    If you add the <code>disabled</code> attribute{" "}
                    <code>&lt;button&gt;</code>, Internet Explorer 9 and below
                    will render text gray with a nasty text-shadow that we
                    cannot fix.
                  </p>
                </div>
              </article>

              <article className="buttons-anchor">
                <a className="anchor" id="buttons-anchor" />
                <h2>Anchor element</h2>
                <p>
                  Add the <code>.disabled</code> class to <code>&lt;a&gt;</code>{" "}
                  buttons.
                </p>
                <p className="bc-example">
                  <a href="#" className="btn  btn-lg disabled">
                    Primary link
                  </a>
                  <a href="#" className="btn btn-white btn-lg disabled">
                    White Link
                  </a>
                  <a href="#" className="btn btn-green btn-lg disabled">
                    Green Link
                  </a>
                  <a href="#" className="btn btn-orange btn-lg disabled">
                    Orange Link
                  </a>
                </p>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  
                    <a href="#" class="btn  btn-lg disabled">
                      Primary link
                    </a>
                    <a href="#" class="btn btn-white btn-lg disabled">
                      Link
                    </a>
                    <a href="#" class="btn btn-green btn-lg disabled">
                      Link
                    </a>
                    <a href="#" class="btn btn-orange btn-lg disabled">
                      Link
                    </a>
                `}
                  />
                </div>
                <div className="bs-callout bs-callout-warning">
                  <h4>Link functionality not impacted</h4>
                  <p>
                    This class will only change the <code>&lt;a&gt;</code>'s
                    appearance, not its functionality. Use custom JavaScript to
                    disable links here.
                  </p>
                </div>
              </article>

              <article className="buttons-tags">
                <a className="anchor" id="buttons-tags" />
                <h2 id="buttons-tags">Button tags</h2>
                <p>
                  Use the button classes on an <code>&lt;a&gt;</code>,{" "}
                  <code>&lt;button&gt;</code>, or <code>&lt;input&gt;</code>{" "}
                  element.
                </p>
                <form className="bc-example">
                  <input className="btn" type="submit" value="Submit Button" />{" "}
                  <a className="btn btn-orange" href="#nogo">
                    Anchor Button
                  </a>{" "}
                  <a className="btn btn-icon-link" href="#nogo">
                    <span className="icon icon-home" />
                    &nbsp;Link Button
                  </a>
                  <button className="btn btn-white" type="submit">
                    &lt;Button&gt; Button
                  </button>
                  <input
                    className="btn btn-orange"
                    type="button"
                    value="Input Button"
                  />
                </form>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  
                    <input class="btn" type="submit" value="Submit Button" />
                    <a class="btn btn-orange" href="#nofo">
                      Anchor Button
                    </a>
                    <a class="btn btn-icon-link" href="#nofo">
                      Link Button
                    </a>
                    <button class="btn btn-white" type="submit">
                      Button
                    </button>
                    <input
                      class="btn btn-orange"
                      type="button"
                      value="Input Button"
                    />
                `}
                  />
                </div>

                <div className="bs-callout bs-callout-warning">
                  <h4>Cross-browser rendering</h4>
                  <p>
                    As a best practice,{" "}
                    <strong>
                      we highly recommend using the <code>&lt;button&gt;</code>{" "}
                      element whenever possible
                    </strong>{" "}
                    to ensure matching cross-browser rendering.
                  </p>
                  <p>
                    Among other things, there's{" "}
                    <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=697451">
                      a Firefox bug
                    </a>{" "}
                    that prevents us from setting the <code>line-height</code>{" "}
                    of <code>&lt;input&gt;</code>-based buttons, causing them to
                    not exactly match the height of other buttons on Firefox.
                  </p>
                </div>
              </article>
            </div>

            <div className="bs-docs-section">
              <a className="anchor" id="images" />
              <h1 className="page-header">Images</h1>

              <article className="images-responsive">
                <a className="anchor" id="images-responsive" />
                <h2>Responsive images</h2>
                <p>
                  Images in BaseCamp 3 can be made responsive-friendly via the
                  addition of the <code>.img-responsive</code> class. This
                  applies <code>max-width: 100%;</code> and{" "}
                  <code>height: auto;</code> to the image so that it scales
                  nicely to the parent element.
                </p>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                    <img
                      src="..."
                      class="img-responsive"
                      alt="Responsive image"
                    />
                `}
                  />
                </div>
              </article>

              <article className="images-shapes">
                <a className="anchor" id="images-shapes" />
                <h2>Image shapes</h2>
                <p>
                  Add classes to an <code>&lt;img&gt;</code> element to easily
                  style images in any project.
                </p>
                <div className="bg-warning">
                  <h4>Cross-browser compatibility</h4>
                  <p>
                    Keep in mind that Internet Explorer 8 lacks support for
                    rounded corners.
                  </p>
                </div>
                <br />
                <div className="bc-example">
                  <img
                    src="//placehold.it/140x140"
                    className="img-rounded"
                    alt="A generic square placeholder image with rounded corners"
                  />
                  <img
                    src="//placehold.it/140x140"
                    className="img-circle"
                    alt="A generic square placeholder image where only the portion within the circle circumscribed about said square is visible"
                  />
                  <img
                    src="//placehold.it/140x140"
                    className="img-thumbnail"
                    alt="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera"
                  />
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  
                    <img src="..." alt="..." class="img-rounded" />
                    <img src="..." alt="..." class="img-circle" />
                    <img src="..." alt="..." class="img-thumbnail" />
                `}
                  />
                </div>
              </article>
            </div>

            <div className="bs-docs-section">
              <a className="anchor" id="helper-classes" />
              <h1 className="page-header">Helper classes</h1>

              <article className="helper-classes-contextual-status">
                <a className="anchor" id="helper-classes-contextual-status" />
                <h2>Contextual Status</h2>
                <p>
                  Add a status message to the end of a title or other text or
                  element.
                </p>
                <div className="bc-example">
                  <h1>
                    Page Title{" "}
                    <span className="small text-updated">Updated</span>
                  </h1>
                  <h1>
                    Page Title{" "}
                    <span className="small text-archived">Archived</span>
                  </h1>
                  <h1>
                    Page Title <span className="small text-new">New</span>
                  </h1>
                  <h3>
                    Subtitle <span className="small text-updated">Updated</span>
                  </h3>
                  <h3>
                    Subtitle{" "}
                    <span className="small text-archived">Archived</span>
                  </h3>
                  <h3>
                    Subtitle <span className="small text-new">New</span>
                  </h3>
                  <p>
                    Item <span className="small text-updated">Updated</span>
                  </p>
                  <p>
                    Item <span className="small text-archived">Archived</span>
                  </p>
                  <p>
                    Item <span className="small text-new">New</span>
                  </p>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  
                    <h1>
                      Page Title{" "}
                      <span class="small text-updated">Updated</span>
                    </h1>
                    <h1>
                      Page Title{" "}
                      <span class="small text-archived">Archived</span>
                    </h1>
                    <h1>
                      Page Title <span class="small text-new">New</span>
                    </h1>
                    <h3>
                      Subtitle <span class="small text-updated">Updated</span>
                    </h3>
                    <h3>
                      Subtitle{" "}
                      <span class="small text-archived">Archived</span>
                    </h3>
                    <h3>
                      Subtitle <span class="small text-new">New</span>
                    </h3>
                    <p>
                      Item <span class="small text-updated">Updated</span>
                    </p>
                    <p>
                      Item <span class="small text-archived">Archived</span>
                    </p>
                    <p>
                      Item <span class="small text-new">New</span>
                    </p>
                `}
                  />
                </div>
              </article>

              <article className="helper-classes-close">
                <a className="anchor" id="helper-classes-close" />
                <h2>Close icon</h2>
                <p>
                  Use the generic close icon for dismissing content like modals
                  and alerts.
                </p>
                <div className="bc-example">
                  <p>
                    <button type="button" className="close" aria-hidden="true">
                      ×
                    </button>
                  </p>
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  
                    <button type="button" class="close" aria-hidden="true">
                      &times;
                    </button>
                `}
                  />
                </div>
              </article>

              <article className="helper-classes-carets">
                <a className="anchor" id="helper-classes-carets" />
                <h2>Carets</h2>
                <p>
                  Use carets to indicate dropdown functionality and direction.
                </p>
                <div className="bc-example">
                  <span className="caret" />
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                    <span class="caret" />
                `}
                  />
                </div>
              </article>

              <article className="helper-classes-floats">
                <a className="anchor" id="helper-classes-floats" />
                <h2>Quick Floats</h2>
                <p>
                  Float an element to the left or right with a class.{" "}
                  <code>!important</code> is included to avoid specificity
                  issues. Classes can also be used as mixins.
                </p>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                    <div class="pull-left">...</div>
                    <div class="pull-right">...</div>
                `}
                  />
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"scss"}
                    value={`
              // Classes
              .pull-left {
                float: left !important;
              }
              .pull-right {
                float: right !important;
              }
  
              // Usage as mixins
              .element {
                .pull-left();
              }
              .another-element {
                .pull-right();
              } 
                `}
                  />
                </div>
                <p className="mb1">
                  Often you may want to float an image in a certain direction
                  for desktop or tablet views, but not for smaller devices. Use
                  media breakpoint classes like<code>.float-lg-right</code>,{" "}
                  <code>.float-md-right</code>, etc. at the breakpoint where you
                  want the float to begin. Available are{" "}
                  <code>.float-xs-*</code> = extra small,{" "}
                  <code>.float-sm-*</code> = small, <code>.float-md-*</code> =
                  medium and <code>.float-lg-*</code> = large.{" "}
                  <code>.float-*-none</code> using any of the breakpoint codes
                  is also available when you do not want a float to exist.
                </p>
                <div className="bc-example" data-example-id="">
                  <div className="float-xs-left">
                    Float left on all viewport sizes
                  </div>
                  <br />
                  <div className="float-xs-right">
                    Float right on all viewport sizes
                  </div>
                  <br />
                  <div className="float-xs-none">
                    Don't float on all viewport sizes
                  </div>
                  <br />
                  <div className="float-sm-left">
                    Float left on viewports sized SM (small) or wider
                  </div>
                  <br />
                  <div className="float-md-left">
                    Float left on viewports sized MD (medium) or wider
                  </div>
                  <br />
                  <div className="float-lg-left">
                    Float left on viewports sized LG (large) or wider
                  </div>
                  <br />
                  <div className="float-xl-left">
                    Float left on viewports sized XL (extra-large) or wider
                  </div>
                  <br />
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  
                    <div class="float-xs-left">
                      Float left on all viewport sizes
                    </div>
                    <br />
                    <div class="float-xs-right">
                      Float right on all viewport sizes
                    </div>
                    <br />
                    <div class="float-xs-none">
                      Don't float on all viewport sizes
                    </div>
                    <br />
                    <div class="float-sm-left">
                      Float left on viewports sized SM (small) or wider
                    </div>
                    <br />
                    <div class="float-md-left">
                      Float left on viewports sized MD (medium) or wider
                    </div>
                    <br />
                    <div class="float-lg-left">
                      Float left on viewports sized LG (large) or wider
                    </div>
                    <br />
                    <div class="float-xl-left">
                      Float left on viewports sized XL (extra-large) or wider
                    </div>
                `}
                  />
                </div>
                <div className="bs-callout bs-callout-warning">
                  <h4>Not for use in navbars</h4>
                  <p>
                    To align components in navbars with utility classes, use{" "}
                    <code>.navbar-left</code> or <code>.navbar-right</code>{" "}
                    instead.{" "}
                    <a href="./components/#navbar-component-alignment">
                      See the navbar docs
                    </a>{" "}
                    for details.
                  </p>
                </div>
              </article>

              <article className="helper-classes-center">
                <a className="anchor" id="helper-classes-center" />
                <h2>Center content blocks</h2>
                <p>
                  Set an element to <code>display: block</code> and center via{" "}
                  <code>margin</code>. Available as a mixin and class.
                </p>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                  <code>
                    <div class="center-block">...</div>
                  </code>
                `}
                  />
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"scss"}
                    value={`
                  
              // Classes
              .center-block {
                display: block;
                margin-left: auto;
                margin-right: auto;
              }
  
              // Usage as mixins
              .element {
                .center-block();
              } 
                `}
                  />
                </div>
              </article>

              <article className="helper-classes-clearfix">
                <a className="anchor" id="helper-classes-clearfix" />
                <h2>Clearfix</h2>
                <p>
                  Clear the <code>float</code> on any element with the{" "}
                  <code>.clearfix</code> class. Utilizes{" "}
                  <a href="http://nicolasgallagher.com/micro-clearfix-hack/">
                    the micro clearfix
                  </a>{" "}
                  as popularized by Nicolas Gallagher. Can also be used as a
                  mixin.
                </p>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                    <div class="clearfix">...</div>
                `}
                  />
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"scss"}
                    value={`
              // Mixin itself
              .clearfix() {
                &:before,
                &:after {
                  content: " ";
                  display: table;
                }
                &:after {
                  clear: both;
                }
              }
  
              // Usage as a Mixin
              .element {
                .clearfix();
              } 
                `}
                  />
                </div>
              </article>

              <article className="helper-classes-show-hide">
                <a className="anchor" id="helper-classes-show-hide" />
                <h2>Show / Hide Content</h2>
                <p>
                  Force an element to be shown or hidden (
                  <strong>including for screen readers</strong>) with the use of{" "}
                  <code>.show</code> and <code>.hidden</code> classes. These
                  classes use <code>!important</code> to avoid specificity
                  conflicts, just like the{" "}
                  <a href="#helper-classes-floats">quick floats</a>. They are
                  only available for block level toggling. They can also be used
                  as mixins.
                </p>
                <p>
                  <code>.hide</code> is available, but it does not always affect
                  screen readers and is <strong>deprecated</strong> as of
                  v3.0.1. Use <code>.hidden</code> or <code>.sr-only</code>{" "}
                  instead.
                </p>
                <p>
                  Furthermore, <code>.invisible</code> can be used to toggle
                  only the visibility of an element, meaning its{" "}
                  <code>display</code> is not modified and the element can still
                  affect the flow of the document.
                </p>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                    <div class="show">...</div>
                    <div class="hidden">...</div>
                `}
                  />
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"scss"}
                    value={`
              // Classes
              .show {
                display: block !important;
              }
              .hidden {
                display: none !important;
                visibility: hidden !important;
              }
              .invisible {
                visibility: hidden;
              }
  
              // Usage as mixins
              .element {
                .show();
              }
              .another-element {
                .hidden();
              }
                `}
                  />
                </div>
              </article>

              <article className="helper-classes-image-replacement">
                <a className="anchor" id="helper-classes-image-replacement" />
                <h2>Image Replacement</h2>
                <p>
                  Utilize the <code>.text-hide</code> class or mixin to help
                  replace an element's text content with a background image.
                </p>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                    <h1 class="text-hide">Custom heading</h1>
                `}
                  />
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"scss"}
                    value={`
              // Usage as a Mixin
              .heading {
                .text-hide();
              
                `}
                  />
                </div>
              </article>

              <article className="helper-classes-spacers">
                <a className="anchor" id="helper-classes-spacers" />
                <h2>Spacers</h2>
                <p>
                  A variety of classes to add margin or padding to an element.
                  There are responsive and fixed size options available.
                </p>
                <p className="segment-subtitle">Example</p>
                <div className="bc-example">
                  <div className="row mb1">
                    <p className="text-center col-xs-12 small mb1">
                      Dashes = margins; solid whitespace = padding. Scale the
                      browser window to mobile size to see difference.
                    </p>
                    <div className="col-xs-6">
                      <div className="gridWrapper">
                        <div className="gridDemo p1 mt1 mb2">
                          Relative (Responsive) Spacing
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6">
                      <div className="gridWrapper">
                        <div className="gridDemo paddingtop15 paddingright15 paddingbottom15 paddingleft15 margintop15 marginbottom35">
                          Fixed (Non-responsive) Spacing
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  <strong>For responsive, relative spacing</strong>
                  <br />
                  These classes provide em-based distance adjustments and work
                  well for mainting a vertical rhythm across devices. They scale
                  relative to the assigned font size. These should be used in
                  most cases where spacing is needed.
                </p>
                <p>
                  property: p = padding | m = margin
                  <br /> direction: l = left | r = right | t = top | b = bottom
                  <br /> amount: q1 = 1/4em | q2 = 1/2em | 1 = 1em <sup>
                    1
                  </sup>{" "}
                  | 2 = 2em <sup>1</sup> (2em) | 3 = 2em <sup>2</sup> (4em) | 4
                  = 2em <sup>4</sup> (8em) | 5 = 2em <sup>8</sup> (16em) | 0 =
                  removes margin or padding
                </p>

                <p>
                  <strong>Some examples: </strong>
                  <code>.mtq1</code> = margin-top .25em; <code>.p1</code> =
                  padding 1em; <code>.m4</code> = margin 8em <code>.pr0</code> =
                  padding-right: 0
                </p>

                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                    <div class="row mb1">
                      <p>Create a row with a 1x margin bottom</p>
                    </div>
                `}
                  />
                </div>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                    <div class="p1 mt1 mb2">
                      <p>
                        create a box that has 1x padding on all sides, a unit of
                        margin above and and twice the margin below
                      </p>
                    </div>
                `}
                  />
                </div>
                <p>
                  <strong>
                    An example demonstrating vertical rhythm using bottom
                    margins:
                  </strong>
                </p>
                <div className="row">
                  <div className="col-xs-2">
                    <div className="gridWrapper">
                      <div className="gridDemo mbq2">
                        <code>.mbq2</code>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-2">
                    <div className="gridWrapper">
                      <div className="gridDemo mb1">
                        <code>.mb1</code>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-2">
                    <div className="gridWrapper">
                      <div className="gridDemo mb2">
                        <code>.mb2</code>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-2">
                    <div className="gridWrapper">
                      <div className="gridDemo mb3">
                        <code>.mb3</code>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-2">
                    <div className="gridWrapper">
                      <div className="gridDemo mb4">
                        <code>.mb4</code>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-2">
                    <div className="gridWrapper">
                      <div className="gridDemo mb5">
                        <code>.mb5</code>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt1">
                  <strong>
                    An example demonstrating vertical rhythm using bottom
                    margins:
                  </strong>
                </p>
                <div className="row">
                  <div className="col-xs-6">
                    <div
                      className=""
                      style={{ backgroundColor: "rgba(100, 100, 200, .1)" }}
                    >
                      <p>
                        An example box of content that needs some spacing
                        applied.
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div
                      className="p1"
                      style={{ backgroundColor: "rgba(100, 100, 200, .1)" }}
                    >
                      <p>
                        An example box of content that has been fixed using
                        padding <code>.p1</code>
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt1">
                  <strong>For fixed spacing (not responsive)</strong>
                  <br />
                  When a specific distance is required that needs to remain
                  constant regardless of the device, use these classes:{" "}
                  <code>.margintop##</code>, <code>.marginbottom##</code>,{" "}
                  <code>.marginleft##</code>, <code>.marginright##</code>,{" "}
                  <code>.paddingtop##</code>, <code>.paddingbottom##</code>,{" "}
                  <code>.paddingleft##</code>, <code>.paddingright##</code>. The
                  spacer classes are created in 5px increments starting at 5px
                  and ending at 100px.
                </p>
                <div className="highlight">
                  <CodeBlock
                    language={"jsx"}
                    value={`
                    <div class="row marginbottom20">
                      <p>Creates a row with a 20px margin bottom</p>
                    </div>
                `}
                  />
                </div>
                <div className="highlight">
                  <h4>Example classes: increments of 5</h4>
                  <ul className="list-unstyled columns">
                    <li>
                      <code>.margintop5</code>
                    </li>
                    <li>
                      <code>.margintop10</code>
                    </li>
                    <li>
                      <code>.margintop95</code>
                    </li>
                    <li>
                      <code>.margintop100</code>
                    </li>

                    <li>
                      <code>.paddingtop5</code>
                    </li>
                    <li>
                      <code>.paddingtop10</code>
                    </li>
                    <li>
                      <code>.paddingtop95</code>
                    </li>
                    <li>
                      <code>.paddingtop100</code>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    )

    return (
      <Layout>
        <SEO title="CSS" />
        {htmlContent()}
      </Layout>
    )
  }
}

export default Css
