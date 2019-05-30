module.exports = {
  siteMetadata: {
    title: `Web Branding`,
    description: `NXP Web Branding Guidelines and Component Descriptions`,
    author: `@kindlerdavid`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    // "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [`${__dirname}/sass`],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: `${__dirname}/components`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `patterns`,
        path: `${__dirname}/patterns`,
        ignore: [`**/\.*`, `**/*.js`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `examples`,
        path: `${__dirname}/examples`,
        ignore: [`**/\.*`, `**/*.js`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
