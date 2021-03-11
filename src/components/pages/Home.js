import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import Blog from './Blog'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'


function Home(props) {
    
    return (
        <div> 
            <h1>Hi, I'm Patricia 👋</h1>
            <p>Brand statement goes here.</p>
            <HashLink to="/#about" component={About} id="about" />
            <HashLink to="/#projects" component={Projects} id="projects" />
            <HashLink to="/#contact" component={Contact} id="contact" />
                
        </div>
    )
}

export default Home