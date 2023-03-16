import React from 'react'
import './stores.scss'
import apple_logo from '../assets/app_store.svg';
import google_logo from '../assets/google_play.svg';

export const Stores = () => {
  return (
    <main className='download_main'>
        <div className="download">
            <img className='AppStore' src={apple_logo} alt='AppStore_logo' />
            <img className='GooglePlay' src={google_logo} alt='GooglePlay_logo' />
        </div>
    </main>
    
  )
}
