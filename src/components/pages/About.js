import React from 'react'
import { Link } from 'react-router-dom'


function About(props) {
    return (
        <div>
            <Link to="/about" className='header-url'><h1>About</h1></Link>
            {/* Previous profile pic: https://i.imgur.com/4xlzDwY.jpg */}
            <Link to="/about"><img className="profile-picture" src="images/blurred-profile.jpg" /></Link>
            <p>Born and raised in Los Angeles.</p>
        </div>
    )
}

export default About