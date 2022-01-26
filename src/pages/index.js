import * as React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { homeImage } from './page.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

const IndexPage = ({ data: { mdx } }) => {
  return (
    <Layout pageTitle="Home">
      <p>
        Welcome to the bird photography site of Katherine and Matt Smith.
        Here you will find bird photos taken either in our backyard in Bothell, WA or out and about across the US.
        We hope you enjoy seeing our bird photos!
      </p>
      <div className={homeImage}>
        <GatsbyImage
          image={mdx.featuredImgFiles[0].childImageSharp.gatsbyImageData}
          alt={mdx.frontmatter.featuredImgAlts[0]}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    mdx(slug: {eq: "family"}) {
      featuredImgFiles {
        childImageSharp {
          gatsbyImageData(
            width: 800
          )
        }
      }
      frontmatter {
        featuredImgAlts
      }
    }
  }
`

export default IndexPage
