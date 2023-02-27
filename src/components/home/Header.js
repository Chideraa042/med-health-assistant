import React from 'react'
import './header.css'
import { Stores } from './Stores';
import mobile_logo from '../assets/mobile_sample.png';
import dots_1_logo from '../assets/dots_1.svg';
import dots_2_logo from '../assets/dots_2.svg';


export const Header = () => {
  return (
    <div>     
        <header>
            <div className="dot_files">
                    <img className='dots_1' src={dots_1_logo} alt='dots_1_sample' />
                    <img className='dots_2' src={dots_2_logo} alt='dots_2_sample' />
            </div>

                <div className='home_files'>
                    <div className="home_text">
                        <h3 className='text_1' style={{}}>
                            <p>Speak with a doctor online. Say </p>
                            <p> goodbye to traffic, waiting for </p>
                            <p>hours, and long hospital queues.</p>
                            
                        </h3>

                        <h5 className='text_2'>
                            <p>Find verified doctors that match your complaint,</p>
                            <p>book telemedicine appointments, and speak with a doctor via chat,</p> 
                            <p>voice, or video call. Anywhere. Anytime. Using the best telemedicine app</p> 
                            <p>in Nigeria.</p>
                        </h5>
                        <Stores />
                        
                    </div>

                    <div className="home_img">
                        <img className='mobile_app' src={mobile_logo} alt='mobileApp_sample' />
                    </div>
                    
                </div>
        </header>
      </div>
   
  )
}
