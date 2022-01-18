import * as React from 'react'
import { Link } from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkItemLast, navLinkText, activeNavLinkText, siteTitle, section } from './layout.module.css'
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
              activeClassName={activeNavLinkText}>Backyard</Link>
          </li>
          <li className={navLinkItemLast}>
            <Link to="/outandabout"
              className={navLinkText}
              activeClassName={activeNavLinkText}>Out and About</Link>
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
