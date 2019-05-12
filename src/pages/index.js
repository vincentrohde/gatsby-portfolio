import React from 'react'
import { graphql } from 'gatsby'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Projects from '../components/Projects/projects'

import './Index.scss'

export const query = graphql`
  query PageQuery {
    site {
      siteMetadata {
        name,
        tagline
      }
    }
    allContentfulProject {
      edges {
        node {
          title,
          image {
            title
            fluid {
              src
            }
          }
          about {
            json
          }
        }
      }
    }
  }
`

const Page = ({ data }) => {
    const { name, tagline } = data.site.siteMetadata;
    const projects = data.allContentfulProject.edges.map((edge) => edge.node)

    return (
        <div className='Page'>
            <h1 className='title'>{name}</h1>
            <p className='text'>{tagline}</p>
            <Projects projects={projects}/>
        </div>
    )
}

export default Page
