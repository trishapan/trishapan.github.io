import React from 'react'
import { Link } from 'react-router-dom'
import Project from './Project'

let projects = [
    {name: 'Sun Voyage', 
    techStack: 'Mongoose, MongoDB Atlas, Node.js, React.js, Passport (authentication), JWT (authentication strategy) JavaScript, HTML, CSS, Bootstrap, Heroku, Le Système Solaire API',
    description: 'A destination for those with wanderlust to explore the planets in the solar system. <p>Features include account creation and authentication, commenting, editing of comments, and editing of profile.</p> I was the Github manager and responsible for the project staying on track, and had some fullstack roles such as the edit profile ability. This feature also required that the client-side JW Token be refreshed, since the Profile page was grabbing information from the token instead of directly from the updated database.', 
    url: 'http://sunvoyage.herokuapp.com/',
    github: 'https://github.com/trisha/sun-voyage-client',
    img: 'SunVoyage.png'},

    {name: 'Genshin Impact Character Tracker', 
    techStack: 'Express, Node.js, EJS (embedded JS), Sequelize (SQL), Passport (authentication), JavaScript, HTML, SCSS/CSS, Bootstrap, Heroku, fan-made Genshin Impact API',
    description: 'A site for adding your Genshin Impact characters and taking notes or adding goals to each one. Users who aren\'t logged in can still view all characters. <p>An interesting feature is the ability to multiselect goals and either edit or delete them using the same form. The same form can used for both functionalities because I attached the CRUD method to the buttons instead of the form itself.</p>',
    url: 'https://genshin-impact.herokuapp.com/',
    github: 'https://github.com/trisha/genshin-impact-character-tracker',
    img: 'CharacterTracker.png'},

    {name: '#1 Dad Joke Generator', 
    techStack: 'DOM Manipulation: HTML, CSS, JavaScript',
    description: 'A place where a browser pop-up asks if it can have access to your microphone, and where you can get inspiration for your dad jokes. <p>The website says that if you say "Tell me how to be cool" out loud, the site will generate a random dad joke for you. Users can also click on the button to elicit the same result.</p>', 
    url: 'https://trisha.github.io/fetch-dad-jokes/',
    github: 'https://github.com/trisha/fetch-dad-jokes',
    img: 'DadJokes.png'},
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
            <Link to="/projects" className='header-url'><h1 className="header-url" id="projects">Projects</h1></Link>
            <p>My favorite stack to work with is MERN (MongoDB, Express, React, and Node.js).</p>
            <p>However, I also have experience with SQL (Sequelize), SCSS, Bootstrap, Material UI, and Python.</p>
            {projectComponents}
        </div>
    )

}

export default Projects