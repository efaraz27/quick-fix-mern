import React from 'react'
import './css/Services.css'


// image imports
import screen from '../assets/services/screen.png'
import battery from '../assets/services/battery.png'
import charging from '../assets/services/charging.png'
import mic from '../assets/services/mic.png'
import speaker from '../assets/services/speaker.png'
import back from '../assets/services/back.png'
import reciever from '../assets/services/reciever.png'
import proximity from '../assets/services/proximity.png'
import aux from '../assets/services/audio.png'
import software from '../assets/services/software.png'
import camera from '../assets/services/camera.png'
import memory from '../assets/services/memory.png'

function Services() {
    return (
        <div className='services' id='services'>
            <div className='services-content'>
                <div className='header'>Our Services</div>
                <div className='services-cards'>
                    <div className='service-card'>
                        <img src={screen} alt='Screen'></img>
                        <div className='desc'>Screen</div>
                    </div>
                    <div className='service-card'>
                        <img src={battery} alt='Battery'></img>
                        <div className='desc'>Battery</div>
                    </div>
                    <div className='service-card'>
                        <img src={charging} alt='Charging'></img>
                        <div className='desc'>Charging Jack</div>
                    </div>
                    <div className='service-card'>
                        <img src={mic} alt='Mic'></img>
                        <div className='desc'>Mic</div>
                    </div>
                    <div className='service-card'>
                        <img src={speaker} alt='Speaker'></img>
                        <div className='desc'>Speaker</div>
                    </div>
                    <div className='service-card'>
                        <img src={camera} alt='Camera'></img>
                        <div className='desc'>Camera</div>
                    </div>
                    <div className='service-card'>
                        <img src={back} alt='Back Cover'></img>
                        <div className='desc'>Back Panel</div>
                    </div>
                    <div className='service-card'>
                        <img src={reciever} alt='Reciever'></img>
                        <div className='desc'>Reciever</div>
                    </div>
                    <div className='service-card'>
                        <img src={proximity} alt='Proximity'></img>
                        <div className='desc'>Proximity Sensor</div>
                    </div>
                    <div className='service-card'>
                        <img src={aux} alt='AUX'></img>
                        <div className='desc'>AUX Jack</div>
                    </div>
                    <div className='service-card'>
                        <img src={software} alt='Software'></img>
                        <div className='desc'>Software</div>
                    </div>
                    <div className='service-card'>
                        <img src={memory} alt='Memory'></img>
                        <div className='desc'>Memory</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
