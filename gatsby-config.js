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
        "gatsby-plugin-mdx"
    ]
}