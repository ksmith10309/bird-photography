import * as React from "react"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const imageStyles = {
  display: "block",
  marginBottom: "10%",
  marginTop: "10%",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "100%",
}

const BirdEntry = ({ pageContext }) => {
  const { data } = pageContext
  return (
    <Layout pageTitle={data.frontmatter.title}>
      <MDXRenderer>
        {data.body}
      </MDXRenderer>
      <img
        style={imageStyles}
        src={data.frontmatter.featuredImgUrl}
        alt={data.frontmatter.featuredImgAlt}
      />
    </Layout>
  )
}

export default BirdEntry
