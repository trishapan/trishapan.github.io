import React from 'react'
import { Link } from 'react-router-dom'


function About(props) {
    return (
        // style={{marginLeft:"15px"}}
        <div className="text">
            <Link to="/about" className='header-url'><h1 className="header-url" id="about">About</h1></Link>
            {/* Previous profile pic: https://i.imgur.com/4xlzDwY.jpg */}
            {/* <Link to="/about"><img className="profile-picture" src="images/blurred-profile.jpg" /></Link> */}
            {/* <Link to="/about"><img className="profile-picture" src="images/professional.jpeg" /></Link> */}
            <Link to="/about"><img className="profile-picture" src="images/gainsight-full-square.jpg" /></Link>
            <p>The daughter of Chinese immigrants, I was born and raised in Los Angeles.</p>
            <p>In 2017, I graduated from <a target="_blank" href="https://www.cmu.edu/">Carnegie Mellon</a> with a B.S. in Chemical Engineering, and a double major in Biomedical Engineering.</p>
            <p>I spent 3 years with <a target="_blank" href="https://www.accenture.com/us-en">Accenture</a> doing technology consulting while based in San Francisco.</p>
            <p>I pivoted my career after doing a coding bootcamp with <a target="_blank" href="https://generalassemb.ly/education/software-engineering-immersive-remote">General Assembly</a> in March 2021.</p>
            <p>After working at early-stage startups, now I'm seeking my next junior/mid software engineering opportunity.</p>
            <p>My dream is to one day become a CTO or other type of executive, but I'm not in a hurry. In my spare time, you can find me 
                painting or hosting paint n' sips, skiing blues, backpacking with a 700 lumen flashlight (because I'm scared of the dark),
                doing improv with no shame (e.g. yodeling),
                playing Genshin Impact or Honkai Star Rail on my phone,
                reading webcomics and webnovels,
                or dressing up (outfits + makeup).
            </p>
            <p><em>Professional</em>: <span> </span>
                <a target="_blank" href="https://www.linkedin.com/in/trishapan/">Linkedin</a><span> | </span>
                <a target="_blank" href="https://github.com/trisha">Github</a><span> | </span>
                <a target="_blank" href="https://trishapan.medium.com/">Medium</a>
            </p>

            <p><em>Personal</em>: <span> </span>
                {/* <a href="https://www.facebook.com/pat.emera.pan/">Facebook</a><span> | </span> */}
                <a target="_blank" href="https://trishasthoughts.substack.com/">Substack</a><span> | </span>
                <a target="_blank" href="https://www.instagram.com/trishaepan/">Instagram</a><span> | </span>
                <a target="_blank" href="https://twitter.com/trishaepan">Twitter</a>
            </p>
        </div>
    )
}

export default About
