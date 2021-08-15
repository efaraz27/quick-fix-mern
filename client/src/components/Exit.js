import React from 'react'
import nav_logo from '../assets/nav_logo.svg'
import { useHistory } from 'react-router';
import './css/Exit.css'

function Exit() {
    const history = useHistory()
    return (
        <div className='exit'>
            <div className='exit-logo'><img src={nav_logo} alt='Quick Fix' style={{width:'400px', height:'100px', padding:'20px 30px'}}></img></div>
            <div style={{padding:'20px 30px'}}>
                <h1>Thank You! Please check your email for more details.</h1>
                <h2>If you face any problems you can contact us on +91 79801 13468</h2>
                <div className='exit-bordered' onClick={()=>{history.push('/')}}>Go back to Home</div>
            </div>
        </div>
    )
}

export default Exit
