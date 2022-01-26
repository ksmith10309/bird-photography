module.exports = {
    siteMetadata: {
        title: `Bird Photography`,
        description: `Bird photography site of Katherine and Matt Smith`,
        author: `Katherine Smith`,
        siteUrl: `https://birdphotography.gatsbyjs.io`
    },
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `backyard`,
                path: `${__dirname}/backyard`
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `outandabout`,
                path: `${__dirname}/outandabout`
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `home`,
                path: `${__dirname}/home`
            }
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-image",
        {
            resolve: "gatsby-plugin-sharp",
            options: {
                defaults: {
                    quality: 50,
                    placeholder: 'blurred'
                }
            }
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-wikipedia-fetcher"
    ]
}