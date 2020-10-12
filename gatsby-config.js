module.exports = {
  siteMetadata: {
    title: `Gatsby with Drupal Testing`,
    description: `This is my first look at using a local install of Drupal as a headless CMS with Gatsby.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://localhost:8888/dhersey_drupal/`,
      },
    },
    {
      resolve: 'gatsby-plugin-a11y-report',
      options: {
        showInProduction: false,
        toastAutoClose: false,
        query: `
          {
            allSitePage(
              filter: {
                path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
          }
        `,
        ignoreCheck: [
          '/404*',
          '/tag/*'
        ],
        serverOptions: {
          host: 'localhost',
        },
        axeOptions: {
          locale: 'gb',
        },
        loggingOptions: {
          result: ['violations', 'incomplete']
        }
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
