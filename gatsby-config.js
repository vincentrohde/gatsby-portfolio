/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require(`dotenv`).config({path: `.env`,})

module.exports = {
    siteMetadata: {
        name: `Referrence Error`,
        tagline: `A small blog for personal projects`
    },
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
            },
        },
    ],
}
