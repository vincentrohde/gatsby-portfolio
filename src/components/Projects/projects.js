import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import './projects.scss'

const Projects = ({ projects }) => {
    const getPostDate = date => {
        const currentDate = new Date();
        let postDate = new Date(date);

        if (postDate.toDateString() === currentDate.toDateString()) {
            postDate = postDate.toLocaleTimeString();
        } else {
            postDate = postDate.toDateString();
        }

        return postDate
    }

    return (
        <ul className="Projects">
            {
                projects.map((project, index) => (
                    <li className="project" key={index}>
                        <img className="project-image" src={project.image.fluid.src} alt=""/>
                        <div className="project-info">
                            <h2 className="title">{ project.title }</h2>
                            <h3 className="time">- { getPostDate(project.createdAt) }</h3>
                        </div>
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
