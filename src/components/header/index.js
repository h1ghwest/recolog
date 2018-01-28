import React from 'react'
import Link from 'gatsby-link'

export default function Header() {
  return (
    <header>
      <h1>
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={'/'}
        >
          Recolog
        </Link>
      </h1>
    </header>
  )
}
