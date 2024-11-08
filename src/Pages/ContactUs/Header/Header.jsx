import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
const Header = () => {
    return (
        <div id='contact-us-header'>
            <h1 id='head'>Contact Us</h1>
            <p>
                <span id="contact-us-line-headline">We would be happy to hear from you, please fill in the form below or mail us your requirements on
                    info AT conscientious.tech</span>
            </p>
            <p>
                <span id='home-contact-link'>
                    <Link to="/" className='text-white home' >Home</Link> / Contact Us
                </span>
            </p>


        </div>
    )
}

export default Header
