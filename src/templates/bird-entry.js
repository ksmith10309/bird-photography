import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import { entryImage, entryImageCaption } from './entry.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

const BirdEntry = ({ pageContext }) => {
  const { data } = pageContext
  return (
    <Layout pageTitle={data.frontmatter.title}>
      <MDXRenderer>
        {data.body}
      </MDXRenderer>
      {
        data.featuredImgFiles.map((file, index) => (
          <div key={file.childImageSharp.id} className={entryImage}>
            <a href={data.frontmatter.featuredImgUrls[index]} target="_blank" rel="noopener noreferrer">
              <GatsbyImage
                image={file.childImageSharp.gatsbyImageData}
                alt={data.frontmatter.featuredImgAlts[index]}
              />
            </a>
            <p className={entryImageCaption}>Date Taken: {data.frontmatter.featuredImgDates[index]} | Photo Credit: {data.frontmatter.featuredImgCredits[index]}</p>
          </div>
        ))
      }
    </Layout>
  )
}

export default BirdEntry
