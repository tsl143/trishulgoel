/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import { rhythm } from "../utils/typography"

const Bio = () => {
  return (
    <div>
      <p style={{
        marginBottom: rhythm(0.5),
      }}>
        Trishul is a professional frontend developer; writes React code for living and volunteers for Mozilla to justify his existence. He promotes PWAs to developers #teamWeb. He loves to talk about modern Javascript and tries to use it to solve all of his problems, even the domestic ones. He is an expert in developing PWAs and browser extensions.
      </p>
      <div className="linksHolder">
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/trishulgoel">
          <span className="twitter socialIcon"/>/trishulgoel
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/tsl143">
          <span className="github socialIcon"/>/tsl143
        </a>
      </div>
    </div>
  )
}

export default Bio
