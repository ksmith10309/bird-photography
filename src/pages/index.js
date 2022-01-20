import * as React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { homeImage } from './page.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home">
      <p>
        Welcome to the bird photography site of Katherine and Matt Smith.
        Here you will find bird photos taken either in our backyard in Bothell, WA or out and about across the US.
        We hope you enjoy seeing our bird photos!
      </p>
      <div className={homeImage}>
        <GatsbyImage
          image={data.allMdx.nodes[0].featuredImg.childImageSharp.gatsbyImageData}
          alt={data.allMdx.nodes[0].frontmatter.featuredImgAlt}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(filter: {frontmatter: {title: {eq: "Home Photo"}}}) {
    nodes {
      featuredImg {
        childImageSharp {
          gatsbyImageData(
            width: 800
          )
        }
      }
      frontmatter {
        featuredImgAlt
      }
    }
  }
}

`

export default IndexPage
