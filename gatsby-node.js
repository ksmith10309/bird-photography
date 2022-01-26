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
      featuredImgDates: [String]
      featuredImgCredits: [String]
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

// Programmatically Creating Pages 

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            path
          }
          slug
        }
      }
    }
  `)

  const birdEntryTemplate = path.resolve(`src/templates/bird-entry.js`)
  data.allMdx.nodes.forEach(node => {
    createPage({
      path: node.frontmatter.path,
      component: birdEntryTemplate,
      context: { slug: node.slug }
    })
  })
}
