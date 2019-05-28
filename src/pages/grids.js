/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Link } from "gatsby"
import CodeBlock from "../components/syntax-highlighter"
import Scrollspy from 'react-scrollspy'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Grids = () => (

  <Layout>
    <SEO title='Grids' />

    <div className='fsl-container container'>
      <div className='row' id='content'>
        <div className='col-md-3'>
          <div className='fsl-docs-sidebar affix'>
            <Scrollspy className='nav' items={['overview', 'basic-markup', 'example-1', 'mixed-width', 'grid-responsive-resets', 'grid-offsetting', 'grid-nesting', 'responsive-utilities']} currentClassName='active' >
              <li ><a href='#overview'>Overview</a></li>
              <li ><a href='#basic-markup'>Basic markup</a></li>
              <li ><a href='#example-1'>Basic single columns</a></li>
              <li ><a href='#mixed-width'>Mixed width columns</a></li>
              <li ><a href='#grid-responsive-resets'>Responsive column resets</a></li>
              <li ><a href='#grid-offsetting'>Offsetting columns</a></li>
              <li ><a href='#grid-nesting'>Nesting columns</a></li>
              <li ><a href='#responsive-utilities'>Responsive utilities</a></li>
            </Scrollspy>
            <a className='back-to-top' href='#top'>Back to top</a>
          </div>
        </div>
        <div className='col-md-9' role='main'>
          <a className='anchor' id='overview' />
          <h1>Overview</h1>
          <p className='lead'>The Grid system is the basis for understanding reponsive web design. BaseCamp uses the reponsive, mobile first fluid grid system developed by Bootstrap that appropriately scales up to 12 columns as the device or viewport size changes.</p>

          <a className='anchor' id='grid-intro' />
          <h3>Introduction</h3>
          <p>Grid systems are used for creating page layouts through a series of rows and columns that house your content. Here's how the grid system works:</p>
          <ul className='boxes'>
            <li>Rows must be placed within a <code>.container</code> (fixed-width) or <code>.container-fluid</code> (full-width) for proper alignment and padding.</li>
            <li>Use rows to create horizontal groups of columns.</li>
            <li>Content should be placed within columns, and only columns may be immediate children of rows.</li>
            <li>Predefined grid classes like <code>.row</code> and <code>.col-xs-4</code> are available for quickly making grid layouts.</li>
            <li>Columns create gutters (gaps between column content) via <code>padding</code>. That padding is offset in rows for the first and last column via negative margin on <code>.row</code>s.</li>
            <li>Grid columns are created by specifying the number of twelve available columns you wish to span. For example, three equal columns would use three <code>.col-xs-4</code>.</li>
          </ul>

          <a className='anchor' id='basic-markup' />
          <h3>Basic Markup</h3>
          <p>There are four different grid classes you can use to define your layouts.</p>
          <ul className='boxes'>
            <li><code>.col-xs-*</code> Phones &gt;0px</li>
            <li><code>.col-sm-*</code> Tablet ≥768px</li>
            <li><code>.col-md-*</code> Desktops ≥992px</li>
            <li><code>.col-lg-*</code> (large - Desktops ≥1200px)</li>
          </ul>
          <p>See how aspects of the BaseCamp grid system work across multiple devices with a handy table.</p>
          <div className='table-responsive'>
            <table className='table table-bordered table-striped'>
              <thead>
                <tr>
                  <th />
                  <th>Phones (&lt;768px)</th>
                  <th>Tablets (≥768px)</th>
                  <th>Desktops (≥992px)</th>
                  <th>Large devices <small>Desktops (≥1200px)</small></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Grid behavior</th>
                  <td>Horizontal at all times</td>
                  <td colSpan={3}>Collapsed to start, horizontal above breakpoints</td>
                </tr>
                <tr>
                  <th>Container width</th>
                  <td>None (auto)</td>
                  <td>750px</td>
                  <td>992px</td>
                  <td>1170px</td>
                </tr>
                <tr>
                  <th>Class prefix</th>
                  <td><code>.col-xs-</code></td>
                  <td><code>.col-sm-</code></td>
                  <td><code>.col-md-</code></td>
                  <td><code>.col-lg-</code></td>
                </tr>
                <tr>
                  <th># of columns</th>
                  <td colSpan={4}>12</td>
                </tr>
                <tr>
                  <th>Column width</th>
                  <td className='text-muted'>Auto</td>
                  <td>60px</td>
                  <td>78px</td>
                  <td>95px</td>
                </tr>
                <tr>
                  <th>Gutter width</th>
                  <td colSpan='4'>30px (15px on each side of a column)</td>
                </tr>
                <tr>
                  <th>Nestable</th>
                  <td colSpan='4'>Yes</td>
                </tr>
                <tr>
                  <th>Offsets</th>
                  <td colSpan='4'>Yes</td>
                </tr>
                <tr>
                  <th>Column ordering</th>
                  <td colSpan='4'>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. Therefore, applying any <code>.col-md-</code> class to an element will not only affect its styling on medium devices but also on large devices if a <code>.col-lg-</code> class is not present.</p>

          <a className='anchor' id='example-1' />
          <h3>Basic Single Columns</h3>
          <p>You have 2 divs and you want each to be 50% of the total container</p>
          <CodeBlock
            language={"html"}
            value={`
<div class="">I'm on the left </div>
<div class="">I'm on the right</div>
                  `}
          />

          <p>Since this is a mobile first framework, all of the base columns are assumed to be 100% width, stacked vertically. In the example above, if you wanted these 2 divs to be 50%/50%, you would first have to decide at which breakpoints. If you want them to be 50%/50% down to the desktop size, but not tablet or phone, it would be written like this:
          </p>
          <CodeBlock
            language={"html"}
            value={`
<div class="row">
  <div class="col-md-6">I'm on the left </div>
  <div class="col-md-6">I'm on the right</div>
</div>
                  `}
          />

          <p>This makes a 6 column at the medium size and up. Remember there are 12 columns to work with so 50% of the row would be a 6 column. Anything smaller than medium, it goes back to the 100% width stacked layout. This is mobile first, everything assumes that you are designing for a mobile, extra small viewport. Let’s say you want it to be a 50%/50% split all the way down to the smallest phone width, no matter what. You would use the <code>.col-xs-6</code> class which keeps the columns at 50% width all the way down to the phone size. It would be written like this:</p>
          <CodeBlock
            language={"html"}
            value={`
<div class="row">
  <div class="col-xs-6">I'm on the left </div>
  <div class="col-xs-6">I'm on the right</div>
</div>
                  `}
          />


          <p>This keeps the 6 column width all the way down to the smallest size and never switches to the stacked mobile layout. That means on a device with a browser width less than 768px it will maintain the 50%/50% split on the columns since you used the specific <code>.col-xs-6</code> class. If for example you want to have the same divs be 50%/50% at the largest snapping point only then you would write it this way:</p>
          <CodeBlock
            language={"html"}
            value={`
<div class="row">
  <div class="col-lg-6">I'm on the left </div>
  <div class="col-lg-6">I'm on the right</div>
</div>
                  `}
          />


          <p>That tells it to apply the “6 column” size only at the large size and up. As you hit the break point going narrower, it will again assume that it’s a mobile design and take it to 100% width. Example 1 demonstrates this concept.</p>
          <a className='btn btn-primary' target='_blank' href='grids-example1.html'>See Example 1</a>

          <a className='anchor' id='mixed-width' />
          <h3>Mixed Width Columns</h3>
          <p>You can combine the grid classes to change the width of the columns depending on viewport size. For example, let’s say that you want it 50%/50% at medium, but at the large size your design would go to 33%/66%.
          </p>
          <CodeBlock
            language={"html"}
            value={`
<div class="row">
  <div class="col-md-6 col-lg-4">I'm on the left </div>
  <div class="col-md-6 col-lg-8">I'm on the right</div>
</div>
                  `}
          />
          <p>At the medium size, we use the classes with <code>.col-md-</code> in them. At the large size, we use the classes with <code>.col-lg-</code> in them. In this case, our 2 divs will go from a 50%/50% split and then up to a 33%/66%. This can be taken to another level, where we want to change it for the extra small device size as well. For example, to add the option for the columns to be split 25%/75% for tablets, we write it like this:</p>
          <CodeBlock
            language={"html"}
            value={`
<div class="row">
  <div class="col-sm-3 col-md-6 col-lg-4">I'm on the left </div>
  <div class="col-sm-9 col-md-6 col-lg-8">I'm on the right</div>
</div>
                  `}
          />
          <p>This gives us 3 different column layouts at each point. On a extra small device, it will be 25% on the left, and 75% on the right. On a small device (tablet), it will be 50%/50% and on a large viewport, it will be 33%/66%. This is demonstrated in example 2:</p>
          <a className='btn btn-primary' target='_blank' href='grids-example2.html'>See Example 2</a>

          <a className='anchor' id='grid-responsive-resets' />
          <h3>Responsive column resets</h3>
          <p>With the four tiers of grids available you're bound to run into issues where, at certain breakpoints, your columns don't clear quite right as one is taller than the other. To fix that, use a combination of a <code>.clearfix</code> and our <a href='#responsive-utilities'>responsive utility classes</a>.</p>
          <div className='row show-grid'>
            <div className='col-xs-6 col-sm-3'>
              Column 1 <br />.col-xs-6 .col-sm-3<br /> Resize your viewport or check it out on your phone for an example.
            </div>
            <div className='col-xs-6 col-sm-3'>
              Column 2 <br />.col-xs-6 .col-sm-3
            </div>

            <div className='clearfix visible-xs' />
            <div className='col-xs-6 col-sm-3'>
              Column 3 <br />.col-xs-6 .col-sm-3
            </div>
            <div className='col-xs-6 col-sm-3'>
              Column 4 <br />.col-xs-6 .col-sm-3
            </div>
          </div>
          <div className='highlight'>
            <CodeBlock
              language={"html"}
              value={`
<div class="row">
  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
<div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>

<div class="clearfix visible-xs-block">
    <p>Add the extra clearfix for only the required viewport</p>
</div>

<div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
</div>
                  `}
            />
          </div>
          <p>
            In addition to column clearing at responsive breakpoints, you may need to <strong>reset offsets, pushes, or pulls</strong>. See this in action in <a href='./examples/grid/'>the grid example</a>.
          </p>

          <div className='highlight'>
            <CodeBlock
              language={"html"}
              value={`
<div class="row">
  <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
  <div class="col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0">.col-sm-5 .col-sm-offset-2 .col-md-6 .col-md-offset-0</div>
</div>

<div class="row">
  <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
  <div class="col-sm-6 col-md-5 col-md-offset-2 col-lg-6 col-lg-offset-0">.col-sm-6 .col-md-5 .col-md-offset-2 .col-lg-6 .col-lg-offset-0</div>
</div>
                  `}
            />
          </div>

          <a className='anchor' id='grid-offsetting' />
          <h3>Offsetting columns</h3>
          <p>
            Move columns to the right using <code>.col-md-offset-*</code> classes. These classes increase the left margin of a column by <code>*</code> columns. For example, <code>.col-md-offset-4</code> moves <code>.col-md-4</code> over four columns.
          </p>
          <div className='bs-docs-grid'>
            <div className='row show-grid'>
              <div className='col-md-4'>
                .col-md-4
              </div>
              <div className='col-md-4 col-md-offset-4'>
                .col-md-4 .col-md-offset-4
              </div>
            </div>
            <div className='row show-grid'>
              <div className='col-md-3 col-md-offset-3'>
                .col-md-3 .col-md-offset-3
              </div>
              <div className='col-md-3 col-md-offset-3'>
                .col-md-3 .col-md-offset-3
              </div>
            </div>
            <div className='row show-grid'>
              <div className='col-md-6 col-md-offset-3'>
                .col-md-6 .col-md-offset-3
              </div>
            </div>
          </div>

          <div className='highlight'>
            <CodeBlock
              language={"html"}
              value={`
<div class="row">
  <div class="col-md-4">
    .col-md-4
  </div>
  <div class="col-md-4 col-md-offset-4">
    .col-md-4 .col-md-offset-4
  </div>
</div>
<div class="row">
  <div class="col-md-3 col-md-offset-3">
    .col-md-3 .col-md-offset-3
  </div>
  <div class="col-md-3 col-md-offset-3">
    .col-md-3 .col-md-offset-3
  </div>
</div>
<div class="row">
  <div class="col-md-6 col-md-offset-3">
    .col-md-6 .col-md-offset-3
  </div>
</div>
                  `}
            />
          </div>

          <a className='anchor' id='grid-nesting' />
          <h3>Nesting columns</h3>
          <p>
            To nest your content with the default grid, add a new <code>.row</code> and set of <code>.col-md-*</code> columns within an existing <code>.col-md-*</code> column. Nested rows should include a set of columns that add up to 12 or less.
          </p>

          <div className='row show-grid'>
            <div className='col-md-9'>
              Level 1: .col-md-9
              <div className='row show-grid'>
                <div className='col-md-6'>
                  Level 2: .col-md-6
                </div>
                <div className='col-md-6'>
                  Level 2: .col-md-6
                </div>
              </div>
            </div>
          </div>

          <div className='highlight'>
            <CodeBlock
              language={"html"}
              value={`
<div class="row">
  <div class="col-md-9">
    Level 1: .col-md-9
    <div class="row show-grid">
      <div class="col-md-6">
        Level 2: .col-md-6
      </div>
      <div class="col-md-6">
        Level 2: .col-md-6
      </div>
    </div>
  </div>
</div>
                  `}
            />
          </div>

          <a className='anchor' id='grid-column-ordering' />
          <h3>Column ordering</h3>
          <p>
            Easily change the order of our built-in grid columns with <code>.col-md-push-*</code> and <code>.col-md-pull-*</code> modifier classes.
          </p>

          <div className='row show-grid'>
            <div className='col-md-9 col-md-push-3'>
              .col-md-9 .col-md-push-3
            </div>
            <div className='col-md-3 col-md-pull-9'>
              .col-md-3 .col-md-pull-9
            </div>
          </div>

          <div className='highlight'>
            <CodeBlock
              language={"html"}
              value={`
<div class="row show-grid">
  <div class="col-md-9 col-md-push-3">
    .col-md-9 .col-md-push-3
  </div>
  <div class="col-md-3 col-md-pull-9">
    .col-md-3 .col-md-pull-9
  </div>
</div>
                  `}
            />
          </div>

          <a className='anchor' id='responsive-utilities' />
          <h2>Responsive utilities</h2>
          <p className='lead'>For faster mobile-friendly development, use these utility classes for showing and hiding content by device via media query. Also included are utility classes for toggling content when printed.</p>
          <p>Try to use these on a limited basis and avoid creating entirely different versions of the same site. Instead, use them to complement each device's presentation. <strong>Responsive utilities are currently only available for block and table toggling.</strong> Use with inline and table elements is currently not supported.</p>

          <a className='anchor' id='responsive-utilities-classes' />
          <h3>Available classes</h3>
          <p>Use a single or combination of the available classes for toggling content across viewport breakpoints.</p>
          <div className='table-responsive'>
            <table className='table table-bordered table-striped responsive-utilities'>
              <thead>
                <tr>
                  <th />
                  <th>Extra small devices<small>Phones (&lt;768px)</small></th>
                  <th>Small devices<small>Tablets (≥768px)</small></th>
                  <th>Medium devices<small>Desktops (≥992px)</small></th>
                  <th>Large devices<small>Desktops (≥1200px)</small></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th><code>.visible-xs</code></th>
                  <td className='is-visible'>Visible</td>
                  <td className='is-hidden'>Hidden</td>
                  <td className='is-hidden'>Hidden</td>
                  <td className='is-hidden'>Hidden</td>
                </tr>
                <tr>
                  <th><code>.visible-sm</code></th>
                  <td className='is-hidden'>Hidden</td>
                  <td className='is-visible'>Visible</td>
                  <td className='is-hidden'>Hidden</td>
                  <td className='is-hidden'>Hidden</td>
                </tr>
                <tr>
                  <th><code>.visible-md</code></th>
                  <td className='is-hidden'>Hidden</td>
                  <td className='is-hidden'>Hidden</td>
                  <td className='is-visible'>Visible</td>
                  <td className='is-hidden'>Hidden</td>
                </tr>
                <tr>
                  <th><code>.visible-lg</code></th>
                  <td className='is-hidden'>Hidden</td>
                  <td className='is-hidden'>Hidden</td>
                  <td className='is-hidden'>Hidden</td>
                  <td className='is-visible'>Visible</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th><code>.hidden-xs</code></th>
                  <td className='is-hidden'>Hidden</td>
                  <td className='is-visible'>Visible</td>
                  <td className='is-visible'>Visible</td>
                  <td className='is-visible'>Visible</td>
                </tr>
                <tr>
                  <th><code>.hidden-sm</code></th>
                  <td className='is-visible'>Visible</td>
                  <td className='is-hidden'>Hidden</td>
                  <td className='is-visible'>Visible</td>
                  <td className='is-visible'>Visible</td>
                </tr>
                <tr>
                  <th><code>.hidden-md</code></th>
                  <td className='is-visible'>Visible</td>
                  <td className='is-visible'>Visible</td>
                  <td className='is-hidden'>Hidden</td>
                  <td className='is-visible'>Visible</td>
                </tr>
                <tr>
                  <th><code>.hidden-lg</code></th>
                  <td className='is-visible'>Visible</td>
                  <td className='is-visible'>Visible</td>
                  <td className='is-visible'>Visible</td>
                  <td className='is-hidden'>Hidden</td>
                </tr>
              </tbody>
            </table>
          </div>
          <a className='btn btn-primary' target='_blank' href='grids-example3.html'>See Example 3</a>
          <h3>Print Classes</h3>
          <p>Similar to the regular responsive classes, use these for toggling content for print.</p>
          <div className='table-responsive'>
            <table className='table table-bordered table-striped responsive-utilities'>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Browser</th>
                  <th>Print</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th><code>.visible-print</code></th>
                  <td className='is-hidden'>Hidden</td>
                  <td className='is-visible'>Visible</td>
                </tr>
                <tr>
                  <th><code>.hidden-print</code></th>
                  <td className='is-visible'>Visible</td>
                  <td className='is-hidden'>Hidden</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>


  </Layout>
)


export default Grids
