import React from 'react'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';
import './css/BottomNav.css'

function BottomNav() {
    return (
        <div className='bottom-nav'>
            <div className='bottom-nav-link-wa' onClick={()=> window.open("https://api.whatsapp.com/send?phone=+918100360845", '_blank', 'noopener,noreferrer')}><div className='link-text'><WhatsAppIcon/>Whatsapp</div></div>
            <div className='bottom-nav-link-ph' onClick={()=> window.open("tel:+918100360845", '_blank', 'noopener,noreferrer')}><div className='link-text'><PhoneIcon/>Call Us</div></div>
        </div>
    )
}

export default BottomNav
