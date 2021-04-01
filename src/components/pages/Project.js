import React from 'react'

export default function Project(props) {
    return (
        <div className="text">
            <div className="project">
                <h2>{props.project.name}</h2>
                <div className="project-left">
                    <a href={`/images/projects/${props.project.img}`} target="_blank"><img src={`/images/projects/${props.project.img}`} alt={`Screenshot of ${props.project.name} live site.`} width={"500px"} /></a>
                </div>
                <div className="project-right">
                    <p><b>Tech Stack</b>: {props.project.techStack}</p>
                    {/* <p>{props.project.description}</p> */}
                    <p dangerouslySetInnerHTML={{ __html: props.project.description }} />
                    <p><a target="_blank" href={props.project.url}>Live Site</a><span> | </span>
                    <a target="_blank" href={props.project.github}>Github</a></p>
                </div>
            </div>
        </div>
    )
}