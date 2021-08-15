import React from 'react'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import BuildIcon from '@material-ui/icons/Build';
import OneIcon from '@material-ui/icons/LooksOne';
import TwoIcon from '@material-ui/icons/LooksTwo';
import ThreeIcon from '@material-ui/icons/Looks3';
import { red,green,blue,yellow } from '@material-ui/core/colors';
import './css/Steps.css'

function Steps() {
    return (
        <div className='steps' id='about'>
            <div className='head'>How it works</div>
            <div className='steps-container'>
                <div className='step'>
                    <AttachMoneyIcon style={{ color: blue[500] }} fontSize='large' className='icon'/>
                    <div className='header'><OneIcon style={{ color: red[500] }}/>Book an Appointment</div>
                </div>
                <div className='step'>
                    <LocalShippingIcon style={{ color: blue[500] }} fontSize='large' className='icon'/>
                    <div className='header'><TwoIcon style={{ color: yellow[800] }}/>Schedule Service</div>
                </div>
                <div className='step'>
                    <BuildIcon style={{ color: blue[500] }} fontSize='large' className='icon'/>
                    <div className='header'><ThreeIcon style={{ color: green[500] }}/>Get Repaired</div>
                </div>
            </div>
        </div>
    )
}

export default Steps
