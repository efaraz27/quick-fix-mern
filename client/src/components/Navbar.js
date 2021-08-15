import React from 'react'
import navLogo from '../assets/nav_logo.svg'
import { Link } from "react-scroll";
import { useHistory } from 'react-router';
import './css/Navbar.css'

function Navbar() {
    const history = useHistory()
    return (
        <div className='navbar'>
            <div className='logo'><img src={navLogo} alt="QUICK FIX"></img></div>
            <div className='nav-links'>
                <div className='bordered' onClick={()=>{history.push('/book-an-appointment')}}>Book an Appointment</div>

                <Link activeClass="active" to="services" spy={true} smooth={true} offset={70} duration={500}>
                    <div className='nav-link'>Services</div>
                </Link>
                
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
                    <div className='nav-link'>About</div>
                </Link>

                <Link activeClass="active" to="contact-us" spy={true} smooth={true} offset={-70} duration={1000}>
                    <div className='nav-link'>Contact Us</div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
