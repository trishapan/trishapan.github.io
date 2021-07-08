// 'npm run deploy' to deploy site.

import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import Blog from './Blog'
import Header from '../partials/Header'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'


function Home(props) {
    
    return (
        <div> 
            <Header />
            <h1>Hi, I'm Trisha 👋</h1>
            <div className="text">
                <p>I’m a <b>software engineer</b> who likes <b>databases</b> and working with <b>product</b> teams.</p>

                <p>I love understanding how things work and being able to explain them, and my growth mindset means that I enjoy curating a productive and collaborative work environment.</p>

                <p>I'm always happy to chat about software engineering opportunities or DEI strategies.</p>
            </div>
            <hr className="hr"/>
            {/* <HashLink to="/#about" component={About} id="about" />
            <hr className="hr"/>
            <HashLink to="/#projects" component={Projects} id="projects" />
            <hr className="hr"/>
            <HashLink to="/#contact" component={Contact} id="contact" />   
              */}
            <About />
            <hr className="hr"/>
            <Projects />
            <hr className="hr"/>
            <Contact />
             
        </div>
    )
}

export default Home