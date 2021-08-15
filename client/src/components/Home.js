import React from 'react'
import Navbar from './Navbar'
import backVideo from '../assets/back-vid.mp4'
import phoneHome from '../assets/home-phone.svg'
import CheckIcon from '@material-ui/icons/Check';
import { green } from '@material-ui/core/colors';
import backImg from '../assets/back-img.PNG'
import './css/Home.css'

function Home() {
    return (
        <div className='home'>
            <Navbar/>
            <div className='video'><video id="videoBG" autoPlay loop muted poster={backImg}>
            <source src={backVideo} type="video/mp4"/></video></div>
            <div className='content'>
                <div className='text'>
                    <div className='slogan'>Repair your phone at doorstep</div>
                </div>
                <div className='image-front'>
                    <img src={phoneHome} alt='Phone Front'></img>
                </div>
            </div>
            <div className='check-points'>
                <div className='point'><CheckIcon fontSize="large" style={{ color: green[500] }}/>Trained Professionals</div>
                <div className='point'><CheckIcon fontSize="large" style={{ color: green[500] }}/>Doorstep Service</div>
                <div className='point'><CheckIcon fontSize="large" style={{ color: green[500] }}/>30-Days Replacement Warranty</div>
                <div className='point'><CheckIcon fontSize="large" style={{ color: green[500] }}/>24x7 Helpline</div>
            </div>
        </div>
    )
}

export default Home
