import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkItemLast, navLinkText, activeNavLinkText, siteTitle, section } from './layout.module.css'
import { Helmet } from 'react-helmet'
import "@fontsource/architects-daughter"
import "@fontsource/cairo"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `)

  const capitalizeTitle = pageTitle.split(' ').map(x => x[0].toUpperCase() + x.substring(1)).join(' ');

  return (
    <div className={container}>
      <Helmet>
        <title>{capitalizeTitle} | {data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="author" content={data.site.siteMetadata.author} />
        <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
        <meta name="google-site-verification" content="sF_11Zb-CH4HvFSdrC9KasATpODwKc9QUr8OHSZBygA" />
        <meta name="google-site-verification" content="NH1cI8HCk2gFpRCishdmA4YB3fzYeWH5b6Q8fYPpJ_8" />
      </Helmet>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/"
              className={navLinkText}
              activeClassName={activeNavLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about"
              className={navLinkText}
              activeClassName={activeNavLinkText}>About</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/backyard"
              className={navLinkText}
              activeClassName={activeNavLinkText}
              partiallyActive={true}>Backyard</Link>
          </li>
          <li className={navLinkItemLast}>
            <Link to="/outandabout"
              className={navLinkText}
              activeClassName={activeNavLinkText}
              partiallyActive={true}>Out and About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{capitalizeTitle}</h1>
        <section className={section}>
          {children}
        </section>
      </main>
    </div>
  )
}

export default Layout
