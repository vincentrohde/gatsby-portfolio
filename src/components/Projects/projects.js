import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import './projects.scss'

const Projects = ({ projects }) => {
    console.log('projects: ', projects);

    return (
        <ul className="Projects">
            {
                projects.map((project, index) => (
                    <li className="project" key={index}>
                        <img className="project-image" src={project.image.fluid.src} alt=""/>
                        <h2 className="title">{ project.title }</h2>
                        <div className="text-container">
                            { documentToReactComponents(project.about.json) }
                        </div>
                    </li>)
                )
            }
        </ul>
    )
}

export default Projects
