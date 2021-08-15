import React from 'react'
import './css/WhyUs.css'

//image imports
import whyus1 from '../assets/whyus/whyus-1.svg'
import whyus2 from '../assets/whyus/whyus-2.svg'
import whyus3 from '../assets/whyus/whyus-3.svg'
import whyus5 from '../assets/whyus/whyus-5.svg'
import whyus6 from '../assets/whyus/whyus-6.svg'

function WhyUs() {
    return (
        <div className='why-us'>
            <div className='why-us-content'>
                <div className='header'>Why us?</div>
                <div className='why-us-cards'>
                    <div className='why-us-card'>
                        <img src={whyus1} alt='Premium Repair'></img>
                        <div className='why-us-card-text'>
                            <div className='desc'>Premium Repair</div>
                            <div className='sub-desc'>Top quality certified parts</div>
                        </div>
                    </div>
                    <div className='why-us-card'>
                        <img src={whyus2} alt='Instant Mobile Repair'></img>
                        <div className='why-us-card-text'>
                            <div className='desc'>Instant Mobile Repair</div>
                            <div className='sub-desc'>Mobile Repair on the Spot or at Home/Office</div>
                        </div>
                    </div>
                    <div className='why-us-card'>
                        <img src={whyus3} alt='Physical Protection Warranty'></img>
                        <div className='why-us-card-text'>
                            <div className='desc'>Physical Protection Warranty</div>
                            <div className='sub-desc'>Free Parts Replacement</div>
                        </div>
                    </div>
                    <div className='why-us-card'>
                        <img src={whyus5} alt='Skilled Technicians'></img>
                        <div className='why-us-card-text'>
                            <div className='desc'>Skilled Technicians</div>
                            <div className='sub-desc'>Trained and Qualified Professionals</div>
                        </div>
                    </div>
                    <div className='why-us-card'>
                        <img src={whyus6} alt='Guaranteed Safety'></img>
                        <div className='why-us-card-text'>
                            <div className='desc'>Guaranteed Safety</div>
                            <div className='sub-desc'>Total Device and Data Security</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs
