import React from 'react'
import { graphql } from 'gatsby'

import './Index.scss'

export const query = graphql`
  query PageQuery {
    site {
      siteMetadata {
        name,
        tagline
      }
    }
  }
`

const Page = ({ data }) => {
    const { name, tagline } = data.site.siteMetadata;

    return (
        <div className='Page'>
            <h1 className='title'>{name}</h1>
            <p className='text'>{tagline}</p>
        </div>
    )
}

export default Page
