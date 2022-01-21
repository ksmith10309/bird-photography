import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { pageHeading, pageLink, pageImage, pageGrid } from './page.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

const OutAndAboutPage = ({ data }) => {
  return (
    <Layout pageTitle="Out and About">
      <p>Here are the birds that we've seen while out and about:</p>
      <div className={pageGrid}>
      {
        data.allFile.nodes.map(node => (
          <article key={node.childMdx.id}>
            <h2 className={pageHeading}>
              <Link to={`/outandabout/${node.childMdx.slug}`}
                className={pageLink}>
                {node.childMdx.frontmatter.title}
              </Link>
            </h2>
            <div className={pageImage}>
              <Link to={`/outandabout/${node.childMdx.slug}`}>
                <GatsbyImage
                  image={node.childMdx.featuredImgFiles[0].childImageSharp.gatsbyImageData}
                  alt={node.childMdx.frontmatter.featuredImgAlts[0]}
                />
              </Link>
            </div>
          </article>
        ))
      }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "outandabout"}}) {
      nodes {
        childMdx {
          featuredImgFiles {
            childImageSharp {
              gatsbyImageData(
                width: 400
              )
            }
          }
          frontmatter {
            title
            featuredImgAlts
          }
          id
          slug
        }
      }
    }
  }
`

export default OutAndAboutPage
