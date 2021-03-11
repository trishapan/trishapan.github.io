import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { NavHashLink as Link } from 'react-router-hash-link'


class Header extends Component {
    render() {
        return (
            <header>
                <nav className="nav-left">
                    <Link to="/" className="header-url">Patricia Pan</Link>
                </nav>
                <nav className="nav-right">
                    <Link to="/#about" className="header-url">About</Link>{' | '}
                    <Link to="/#projects" className="header-url">Projects</Link>{' | '}
                    <a target="_blank" href="https://drive.google.com/file/d/1d9YM1cupxpRaPzt84270YEUPXcq5Ajis/view?usp=sharing" className="header-url">Resume</a>
                </nav>
            </header>
        )
    }
}

export default Header