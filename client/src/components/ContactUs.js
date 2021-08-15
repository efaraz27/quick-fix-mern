import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/Instagram';
import { blue } from '@material-ui/core/colors';
import './css/ContactUs.css'

function ContactUs() {
    return (
        <div className='contact-us' id='contact-us'>
            <div className='head'>Contact Us</div>
            <div className='contacts-container'>
                <div className='contact'>
                    <EmailIcon style={{ color: blue[500] }} fontSize='large' className='icon'/>
                    <div className='text'>quickfix.kolkata@gmail.com</div>
                </div>
                <div className='contact'>
                    <PhoneIcon style={{ color: blue[500] }} fontSize='large' className='icon'/>
                    <div className='text'>+91 8100360845 / +91 7980113468</div>
                </div>
                <div className='contact'>
                    <InstagramIcon style={{ color: blue[500] }} fontSize='large' className='icon'/>
                    <div className='text'>@quick_fix_24x7</div>
                </div>
            </div>

        </div>
    )
}

export default ContactUs
