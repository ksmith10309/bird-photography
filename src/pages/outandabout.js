import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const OutAndAboutPage = ({ data }) => {
  return (
    <Layout pageTitle="Out and About Birding">
      {
        data.allFile.nodes.map(node => (
          <article key={node.childMdx.id}>
            <h2>{node.childMdx.frontmatter.title}</h2>
            <MDXRenderer>
              {node.childMdx.body}
            </MDXRenderer>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "outandabout"}}) {
      nodes {
        childMdx {
          frontmatter {
            title
          }
          id
          body
        }
      }
    }
  }
`

export default OutAndAboutPage
