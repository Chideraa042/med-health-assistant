import React from 'react'
import './footLogo.scss'
import medHealth_2 from '../assets/med_health_log2.svg';
import medName_2 from '../assets/med_name_log2.svg';

export const FootLogo = () => {
  return (
    <main className='med_logos_main2'>
        <div className="med_logos2">
          <img className='med_logo2' src={medHealth_2} alt='medHealth_footLogo' />
          <div className="footName">
              <img className='med_name2' src={medName_2} alt='medName_footLogo' />
              <h5>Reinvent your world</h5>
          </div> 
        </div>
    </main>
  )
}
