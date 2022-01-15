const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  
  const result = await graphql(
    `
      query {
        allMdx {
          nodes {
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