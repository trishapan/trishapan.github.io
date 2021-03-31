import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact(props) {
    return (
        <div className="text">
            <Link to="/contact" className='header-url'><h1 className="header-url">Contact</h1></Link>
            {/* https://blogs.perficient.com/2019/04/12/how-to-pre-populate-the-subject-line-and-body-in-mailto-generated-emails/ */}
            <a href="mailto:patricia.emerald.pan@gmail.com?subject=Saw%20Your%20Personal%20Site&body=Hi%20Trisha,">patricia.emerald.pan@gmail.com</a>
        </div>
    )
}