import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { entryImage, entryImageCaption, entryWikiLink } from './entry.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

const BirdEntry = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>
        {data.wikipediaFetcher.extract}{" "}
        <a href={data.wikipediaFetcher.requestArticle} target="_blank" rel="noopener noreferrer" class={entryWikiLink}>
          Wikipedia
        </a>
      </p>
    {
      data.mdx.featuredImgFiles.map((file, index) => (
        <div key={file.childImageSharp.id} className={entryImage}>
          <a href={data.mdx.frontmatter.featuredImgUrls[index]} target="_blank" rel="noopener noreferrer">
            <GatsbyImage
              image={file.childImageSharp.gatsbyImageData}
              alt={data.mdx.frontmatter.featuredImgAlts[index]}
            />
          </a>
          <p className={entryImageCaption}>
            Date Taken: {data.mdx.frontmatter.featuredImgDates[index]} | Photo Credit: {data.mdx.frontmatter.featuredImgCredits[index]}
          </p>
        </div>
      ))
    }
    </Layout>
  )
}

export const query = graphql`
  query ($path: String, $title: String) {
    mdx(frontmatter: {path: {eq: $path}}) {
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
    wikipediaFetcher(title: {eq: $title}) {
      extract
      requestArticle
    }
  }
`

export default BirdEntry
