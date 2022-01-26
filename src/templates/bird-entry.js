import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import { entryImage, entryImageCaption } from './entry.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

const BirdEntry = ({ data: { mdx } }) => {
  return (
    <Layout pageTitle={mdx.frontmatter.title}>
      <MDXRenderer>
        {mdx.body}
      </MDXRenderer>
    {
      mdx.featuredImgFiles.map((file, index) => (
        <div key={file.childImageSharp.id} className={entryImage}>
          <a href={mdx.frontmatter.featuredImgUrls[index]} target="_blank" rel="noopener noreferrer">
            <GatsbyImage
              image={file.childImageSharp.gatsbyImageData}
              alt={mdx.frontmatter.featuredImgAlts[index]}
            />
          </a>
          <p className={entryImageCaption}>Date Taken: {mdx.frontmatter.featuredImgDates[index]} | Photo Credit: {mdx.frontmatter.featuredImgCredits[index]}</p>
        </div>
      ))
    }
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String) {
    mdx(slug: {eq: $slug}) {
      body
      featuredImgFiles {
        childImageSharp {
          gatsbyImageData(
            width: 800
          )
          id
        }
      }
      frontmatter {
        title
        featuredImgUrls
        featuredImgAlts
        featuredImgDates
        featuredImgCredits
      }
    }
  }
`

export default BirdEntry
