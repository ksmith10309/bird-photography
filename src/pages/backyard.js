import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { pageHeading, pageLink, pageImage } from './page.module.css'

const BackyardPage = ({ data }) => {
  return (
    <Layout pageTitle="Backyard">
      <p>Here are the birds that we've seen in our backyard:</p>
      {
        data.allFile.nodes.map(node => (
          <article key={node.childMdx.id}>
            <h2 className={pageHeading}>
              <Link to={`/backyard/${node.childMdx.slug}`}
                className={pageLink}>
                {node.childMdx.frontmatter.title}
              </Link>       
            </h2>
            <Link to={`/backyard/${node.childMdx.slug}`}>
              <img
                className={pageImage}
                src={node.childMdx.frontmatter.featuredImgUrl}
                alt={node.childMdx.frontmatter.featuredImgAlt}
              />
            </Link>
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
