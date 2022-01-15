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

const BackyardPage = ({ data }) => {
  return (
    <Layout pageTitle="Backyard Birding">
      Here are the birds that we've seen in our backyard:
      {
        data.allFile.nodes.map(node => (
          <article key={node.childMdx.id}>
            <h2 style={headingStyles}>
              <Link to={`/backyard/${node.childMdx.slug}`}>
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
    allFile(filter: {sourceInstanceName: {eq: "backyard"}}) {
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

export default BackyardPage
