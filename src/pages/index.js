import * as React from "react"
import Layout from '../components/layout'
import { homeImage } from './page.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>
        Welcome to the bird photography site of Matt and Katherine Smith.
        Here you will find bird photos taken either in our backyard in Bothell, WA or out and about across the US.
        We hope you enjoy seeing our bird photos!
      </p>
      <img
        className={homeImage}
        src="https://bird-photography.s3.us-west-2.amazonaws.com/home-photo.jpg"
        alt="Katherine, Matt, Hero, and Luna in the Cascades"
      />
    </Layout>
  )
}

export default IndexPage
