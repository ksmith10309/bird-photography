import * as React from 'react'
import { Link } from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkText, siteTitle, section } from './layout.module.css'
import "@fontsource/architects-daughter"
import "@fontsource/cairo"

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>Bird Photography | {pageTitle}</title>
      <header className={siteTitle}>BIRD PHOTOGRAPHY</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/backyard" className={navLinkText}>Backyard</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/outandabout" className={navLinkText}>Out and About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        <section className={section}>
          {children}
        </section>
      </main>
    </div>
  )
}

export default Layout
