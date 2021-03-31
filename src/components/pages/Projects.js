import React from 'react'
import { Link } from 'react-router-dom'
import Project from './Project'

let projects = [
    {name: 'Sun Voyage', 
    techStack: 'tech stack',
    description: 'description', 
    url: 'url',
    github: 'https://github.com/patricia-pan/sun-voyage-client',
    img: 'img'},

    {name: 'Genshin Impact Character Tracker', 
    techStack: 'tech stack',
    description: 'description', 
    url: 'url',
    github: 'github URL',
    img: 'img'},

    {name: '#1 Dad Joke Generator', 
    techStack: 'tech stack',
    description: 'description', 
    url: 'url',
    github: 'github URL',
    img: 'img'},
]

let projectComponents = projects.map( (project, i) => {
    return (
        <div>
            <Project project={project} />
        </div>
    )
})

function Projects(props) {
    return (
        <div>
            <Link to="/projects" className='header-url'><h1 className="header-url">Projects</h1></Link>
            Hello this is the Projects page. This will soon be replaced by functional components when I build out my actual portfolio on my github website.
            <div>
                <img src="bunny.jpg" />
            </div>

            {projectComponents}
        </div>
    )

}

export default Projects