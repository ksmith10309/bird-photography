import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const headingStyles = {
  textAlign: "center"
}

const imageStyles = {
  display: "block",
  marginBottom: "5%",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "50%",
}

const OutAndAboutPage = ({ data }) => {
  return (
    <Layout pageTitle="Out and About Birding">
      Here are the birds that we've seen while out and about:
      {
        data.allFile.nodes.map(node => (
          <article key={node.childMdx.id}>
            <h2 style={headingStyles}>
              <Link to={`/outandabout/${node.childMdx.slug}`}>
                {node.childMdx.frontmatter.title}
              </Link>
            </h2>
            <img
              style={imageStyles}
              src={node.childMdx.frontmatter.featuredImgUrl}
              alt={node.childMdx.frontmatter.featuredImgAlt}
            />
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
            featuredImgUrl
            featuredImgAlt
          }
          id
          body
          slug
        }
      }
    }
  }
`

export default OutAndAboutPage
