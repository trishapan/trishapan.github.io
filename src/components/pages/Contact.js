import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact(props) {
    return (
        <div>
            <Link to="/contact" className='header-url'><h1>Contact</h1></Link>
        </div>
    )
}