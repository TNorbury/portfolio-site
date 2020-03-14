module.exports = {
  siteMetadata: {
    title: `Tyler Norbury | Software Engineer`,
    description: `Software Engineer Portfolio. Portland, Oregon`,
    author: `@tnorbury`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio-site`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // Markdown files with project information
    {
      resolve: `gatsby-source-filesystem`,

      options: {
        name: `projects`,
        path: `${__dirname}/src/assets/markdown/projects/`,
      },
    },
    // Markdown file for about me section
    {
      resolve: `gatsby-source-filesystem`,

      options: {
        name: `about`,
        path: `${__dirname}/src/assets/markdown/about/`,
      },
    },

    // Picture of myself for the about me section
    {
      resolve: `gatsby-source-filesystem`,

      options: {
        name: `my picture`,
        path: `${__dirname}/src/assets/images/about/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
