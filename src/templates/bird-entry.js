import * as React from "react"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import { entryImage } from './entry.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

const BirdEntry = ({ pageContext }) => {
  const { data } = pageContext
  return (
    <Layout pageTitle={data.frontmatter.title}>
      <MDXRenderer>
        {data.body}
      </MDXRenderer>
      <div className={entryImage}>
        <GatsbyImage
          image={data.featuredImg.childImageSharp.gatsbyImageData}
          alt={data.frontmatter.featuredImgAlt}
        />
      </div>
    </Layout>
  )
}

export default BirdEntry
