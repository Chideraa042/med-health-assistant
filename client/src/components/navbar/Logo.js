import React from 'react'
import './logo.scss'
import medHealth from '../assets/med_health_log.svg';
import medName from '../assets/med_name_log.svg';

export const Logo = () => {
  return (
    <main className='med_logos_main'>
        <div className="med_logos">
          <img className='med_logo' src={medHealth} alt='medHealth_logo' />
          <img className='med_name' src={medName} alt='medName_logo' />   
        </div>
    </main>
  )
}
