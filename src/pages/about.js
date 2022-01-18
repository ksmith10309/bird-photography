import * as React from 'react'
import Layout from '../components/layout'
import { aboutQuote } from './page.module.css'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>
        Matt takes bird photos using a Canon EOS R5 camera with a Canon RF 100-500mm F4.5-7.1 lens.
        He has been taking bird photos since November 2020.
        His current favorite bird is the great blue heron because they fly so slowly and are easy to capture.
        He hopes to take a photo of a great eared nightjar one day.
      </p>
      <p className={aboutQuote}>
        “Ugh I left it in crop mode.” -Matt
      </p>
      <p>
        Katherine takes bird photos using a Sony Alpha A6600 camera with a Sony Alpha 70-350mm F4.5-6.3 lens.
        She has been taking bird photos since August 2021.
        Her current favorite bird is the snowy owl because snowy owl.
        She has only ever seen one at the Woodland Park Zoo.
        She hopes to take a photo of a snowy owl outside of the zoo one day.
      </p>
      <p className={aboutQuote}>
        "My shutter speed is too slow." -Katherine
      </p>
    </Layout>
  )
}

export default AboutPage
