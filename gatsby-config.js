module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
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
        "gatsby-plugin-mdx",
        "gatsby-plugin-image",
        {
            resolve: "gatsby-plugin-sharp",
            options: {
                defaults: {
                    quality: 50,
                    placeholder: 'blurred',
                }
            }
        },
        "gatsby-transformer-sharp",
    ]
}