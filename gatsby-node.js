// Programmatically Creating Pages 

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      query {
        allMdx {
          nodes {
            featuredImg {
              childImageSharp {
                gatsbyImageData(
                  width: 800
                )
              }
            }
            frontmatter {
              title
              featuredImgUrl
              featuredImgAlt
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
      featuredImg: File @link(from: "fields.featuredImgId")
    }
    type Frontmatter {
      title: String
      featuredImgUrl: String
      featuredImgAlt: String
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
    node.frontmatter.featuredImgUrl !== null
  ) {
    const fileNode = await createRemoteFileNode({
      url: node.frontmatter.featuredImgUrl,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      getCache
    })
    if (fileNode) {
      createNodeField({ node, name: "featuredImgId", value: fileNode.id })
    }
  }
}
