import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


class Header extends Component {
    render() {
        return (
            <header style={{position: "sticky", top: "0"}}>
                <nav className="nav-left">
                    <HashLink to="/" className="header-url">Trisha Pan</HashLink>
                </nav>
                <nav className="nav-right">
                    <HashLink smooth to="/#about" className="header-url">About</HashLink>{' | '}
                    <HashLink smooth to="/#projects" className="header-url">Projects</HashLink>{' | '}
                    <HashLink smooth to="/#contact" className="header-url">Contact</HashLink>{' | '}
                    <a target="_blank" href="https://drive.google.com/file/d/1ycMRuskcia8PcAOvSZMSAhpZOCU2T7m5/view?usp=sharing" className="header-url">Resume</a>
                </nav>
            </header>
        )
    }
}

export default Header