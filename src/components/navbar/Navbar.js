import React from 'react'
import './navbar.css'
import { useState } from 'react'
import medHealth from '../assets/med_health_log.svg';

export const Navbar = () => {
  const [activeNav, setActiveNav] =useState('#');
  return (
      <div className='navigations'>
            <img className='med_logo' src={medHealth} alt='medHealth_logo' />
        <nav>
            <a onClick={() => setActiveNav('#')} className={ activeNav === '#' ? 'active' : ''} href='#'>Home</a>
            <a onClick={() => setActiveNav('#about')} className={ activeNav === '#about' ? 'active' : ''} href='#about'>Products</a>
            <a onClick={() => setActiveNav('#ourSolution')} className={ activeNav === '#ourSolution' ? 'active' : ''} href='#ourSolution'>Our Solution</a>
            <a onClick={() => setActiveNav('#services')} className={ activeNav === '#services' ? 'active' : ''} href='#services'>About Us</a>
            <a onClick={() => setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' : ''} href='#contact'>Blog</a>
            <a onClick={() => setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' : ''} href='#contact'>Contact Us</a>
        </nav>

        <button><span>Get Started</span> </button>
      </div>

  )
}
