import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

import Header from '../components/header'

import '../components/header/header.scss'
import './layouts.scss'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
        <Header />
        {children()}
      </div>
    )
  }
}

export default Template
