import React from 'react';
import favicon from './images/favicon.ico';
const JS_URLS = [
  '//www.nxp.com/resources/scripts/jquery.min3.1.js',
  '//www.nxp.com/resources/scripts/bootstrap.min.3.3.7.js',
  '//www.nxp.com/resources/scripts/nxp-cms/global-bundle.js'
];

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en" {...this.props.htmlAttributes}>
        <head>
          {JS_URLS.map(url => (
            <link key={url} rel="preload" href={url} as="script" />
          ))}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* <link rel="icon" href="/favicon.ico" /> */}
          <link rel="icon" href={favicon} type="image/x-icon" />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          {JS_URLS.map(url => (
            <script key={url} src={url} />
          ))}
        </body>
      </html>
    );
  }
}