import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { pageHeading, pageLink, pageImage } from './page.module.css'

const OutAndAboutPage = ({ data }) => {
  return (
    <Layout pageTitle="Out and About">
      <p>Here are the birds that we've seen while out and about:</p>
      {
        data.allFile.nodes.map(node => (
          <article key={node.childMdx.id}>
            <h2 className={pageHeading}>
              <Link to={`/outandabout/${node.childMdx.slug}`}
                className={pageLink}>
                {node.childMdx.frontmatter.title}
              </Link>
            </h2>
            <img
              className={pageImage}
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
