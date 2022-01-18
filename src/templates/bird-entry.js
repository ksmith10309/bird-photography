import * as React from "react"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import { entryImage } from './entry.module.css'

const BirdEntry = ({ pageContext }) => {
  const { data } = pageContext
  return (
    <Layout pageTitle={data.frontmatter.title}>
      <MDXRenderer>
        {data.body}
      </MDXRenderer>
      <img
        className={entryImage}
        src={data.frontmatter.featuredImgUrl}
        alt={data.frontmatter.featuredImgAlt}
      />
    </Layout>
  )
}

export default BirdEntry
