import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scrollspy from 'react-scrollspy'
import IconsJSON from '../../assets/fonts/selection.json'



class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      color: 'black',
      size: '14px'
    }
    this.handleSize = this.handleSize.bind(this)
    this.handleColor = this.handleColor.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(event) {
    this.setState({
      search: event.target.value
    })
  }
  handleSize(event) {
    // console.log('event', event.target.value)
    this.setState({ size: event.target.value })
  }

  handleColor(event) {

    this.setState({ color: event.target.value })
  }
  render() {
    let IconList = this.state.search !== '' ? IconsJSON.icons.filter(icon => icon.properties.name.includes(this.state.search)) : IconsJSON.icons;

    let IconArray = IconList.map((icon, key) => {
      let name = 'icon-' + icon.properties.name;
      return <div className='iconInfo col-md-4 col-sm-6' id={icon.properties.name} key={key}><span className={name} style={{ verticalAlign: 'middle', fontSize: this.state.size, color: this.state.color }} /><span className='icon-name-text'>{name}</span></div>
    })

    return (
      <Layout>
        <SEO title='Icons' />
        <div className='fsl-container container'>
          <div className='row' id='content'>
            <div className='col-md-3'>
              <div className='fsl-docs-sidebar affix'>
                <Scrollspy className='nav' items={['icons-overview', 'icons-howtouse', 'iconlist', 'icon-spin']}
                  currentClassName='active' >

                  <li><a href='#icons-overview'>Overview</a></li>
                  <li><a href='#icons-howtouse'>How to use</a></li>
                  <li><a href='#iconList'>All icons</a></li>

                  <li><a href='#icon-spin'>Spin icons</a></li>

                  <a className='back-to-top' href='#overview'>Back to top</a>
                </Scrollspy>
              </div>



            </div>

            <div className='col-md-9'>
              <h1 id='icons-overview'>Overview</h1>
              <p className='lead'>Several hundred glyphs in a font format. Can be used as part of any html element. Easily scalable and styled.</p>
              <h2 id='icons-howtouse'>How to use</h2>
              <p>To use get the class name of the icon you want to display add it just about anywhere using an empty span.</p>
              <p>Here are two examples: <br /><code>&lt;button className="btn btn-white"&gt;&lt;span className="icon-home"&gt;&lt;/span&gt; Home&lt;/button&gt;</code>                    <br /> <button className='btn btn-white'><span className='icon-home' /> Home</button></p>
              <code>
                &lt;div className="alert alert-warning"&gt;
                  &lt;p&gt;&lt;span className="icon-warning"&gt;&lt;/span&gt; Here is a warning&lt;/p&gt;
                &lt;/div&gt;
            </code>
              <div className='margintop20' />
              <div className='alert alert-warning'>
                <p><span className='icon-warning2' /> Here is a warning</p>
              </div>
              <h3 id='icon-spin'>Spin icon</h3>
              <p>Add the <code>.spin-icon</code> class to the span tag.</p>
              <p className='bc-example'>
                <span className='icon-para-reset spin-icon' />
              </p>
              <div className='highlight'>
                <pre><code className='html'><span className='nt'>&lt;span</span> <span className='na'>className=</span><span className='s'>"icon-para-reset spin-icon"</span><span className='nt'>&gt;&lt;/span&gt;</span>
                </code>
                </pre>
              </div>

              <div className='margintop30' />
              <div className='row'>
                <div className='col-md-12'>
                  <form className='form-inline'>

                    <div className='form-group marginright20'><label htmlFor='keywordSrch'>Keyword search:&nbsp;</label><input onChange={this.handleSearch} value={this.state.search} type='text' name='keywordSrch' id='keywordSrch' className='form-control' /></div>

                    <div className='form-group marginright20'><label htmlFor='icon-size'>Font Size:&nbsp;</label><select className='form-control' name='icon-size' id='icon-size' onChange={this.handleSize}>
                      <option value='10px'>10px</option>
                      <option value='11px'>11px</option>
                      <option value='12px'>12px</option>
                      <option value='13px'>13px</option>
                      <option value='14px'>14px</option>
                      <option value='15px'>15px</option>
                      <option value='16px'>16px</option>
                      <option value='17px'>17px</option>
                      <option value='18px'>18px</option>
                      <option value='19px'>19px</option>
                      <option value='20px'>20px</option>
                      <option value='21px'>21px</option>
                      <option value='22px'>22px</option>
                      <option value='23px'>23px</option>
                      <option value='24px'>24px</option>
                      <option value='25px'>25px</option>
                      <option value='26px'>26px</option>
                      <option value='27px'>27px</option>
                      <option value='28px'>28px</option>
                      <option value='29px'>29px</option>
                      <option value='30px'>30px</option>
                      <option value='31px'>31px</option>
                      <option value='32px'>32px</option>
                      <option value='33px'>33px</option>
                      <option value='34px'>34px</option>
                      <option value='35px'>35px</option>
                      <option value='36px'>36px</option>
                      <option value='37px'>37px</option>
                      <option value='38px'>38px</option>
                      <option value='39px'>39px</option>
                      <option value='40px'>40px</option>
                    </select>
                    </div>
                    <div className='form-group'> <label htmlFor='icon-color'>Font Color:&nbsp;</label>  <select className='form-control' name='icon-color' id='icon-color' onChange={this.handleColor}>
                      <option value='red' style={{ 'color': 'red' }}>red</option>
                      <option value='blue' style={{ 'color': 'blue' }}>blue</option>
                      <option value='green' style={{ 'color': 'green' }}>green</option>
                      <option value='black' style={{ 'color': 'black' }}>black</option>
                    </select>
                    </div>
                  </form>
                </div>
              </div>
              <div className='row'>


                <div id='iconList' className='marginbottom50'>
                  {IconArray}

                </div>

              </div>
            </div></div></div>
      </Layout >

    )
  }
}


export default Icons
