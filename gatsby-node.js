// Programmatically Creating Pages 

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      query {
        allMdx {
          nodes {
            featuredImgFiles {
              childImageSharp {
                gatsbyImageData(
                  width: 800
                )
              }
            }
            frontmatter {
              title
              featuredImgAlts
              path
            }
            body
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const birdEntryTemplate = path.resolve(`src/templates/bird-entry.js`)
  result.data.allMdx.nodes.map(node => {
    const path = node.frontmatter.path
    createPage({
      path,
      component: birdEntryTemplate,
      context: {
        data: node,
      },
    })
  })
}

// Preprocessing External Images

const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
      featuredImgFiles: [File] @link(from: "fields.featuredImgIds")
    }
    type Frontmatter @dontInfer {
      title: String
      featuredImgUrls: [String]
      featuredImgAlts: [String]
      path: String
    }
  `)
}

exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  getCache,
}) => {
  if (
    node.internal.type === "Mdx" &&
    node.frontmatter &&
    node.frontmatter.featuredImgUrls
  ) {
    const fileNodes = await Promise.all(
      node.frontmatter.featuredImgUrls.map((url) => {
        try {
          return createRemoteFileNode({
            url,
            parentNodeId: node.id,
            createNode,
            createNodeId,
            getCache
          })
        } catch (error) {
          console.error(error)
        }
      })
    )
    if (fileNodes) {
      createNodeField({
        node,
        name: "featuredImgIds",
        value: fileNodes.map((image) => {
          return image.id
        })
      })
    }
  }
}
