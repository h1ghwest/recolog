import React, { Component } from 'react'
import Link from 'gatsby-link'

import './paging.scss'

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const IndexPage = ({ data, pathContext }) => {
  const { group, index, first, last, pageCount } = pathContext
  const previousUrl = index - 1 == 1 ? '' : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  return (
    <div className="container">
      {group.map(({ node }) => (
        <Link to={node.fields.slug} className="post-card">
          <h3>{node.frontmatter.title}</h3>
          <small>{node.frontmatter.date}</small>
          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </Link>
      ))}
      <div className="footer-paginate">
        <div className="prev-link">
          <NavLink test={first} url={previousUrl} text="Prev" />
        </div>
        <div className="next-link">
          <NavLink test={last} url={nextUrl} text="Next" />
        </div>
      </div>
    </div>
  )
}
export default IndexPage
