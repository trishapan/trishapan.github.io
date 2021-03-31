import React from 'react'

export default function Project(props) {
    return (
        <div className="text">
            <div className="project">
                <h2>{props.project.name}</h2>
                <div className="project-left">
                    <img src={`/projects/${props.project.img}`} />
                </div>
                <div className="project-right">
                    <p>Tech Stack: {props.project.techStack}</p>
                    <p>{props.project.description}</p>

                    <p><a target="_blank" href={props.project.url}>Live Site</a><span> | </span>
                    <a target="_blank" href={props.project.github}>Github</a></p>
                </div>
            </div>
        </div>
    )
}