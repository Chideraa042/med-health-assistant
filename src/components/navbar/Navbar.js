import React from 'react'
import { useRef } from 'react';
import './navbar.css'
import { useState } from 'react'
import medHealth from '../assets/med_health_log.svg';
import { FaTimes, FaBars } from "react-icons/fa"

export const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }


  const [activeNav, setActiveNav] =useState('#');
  return (
  
      <header className='navigations'>
            <img className='med_logo' src={medHealth} alt='medHealth_logo' />
        <nav ref={navRef} className='navigat'>
            <a onClick={() => setActiveNav('#')} className={ activeNav === '#' ? 'active' : ''} href='#'>Home</a>
            <a onClick={() => setActiveNav('#products')} className={ activeNav === '#products' ? 'active' : ''} href='#products'>Products</a>
            <a onClick={() => setActiveNav('#ourSolution')} className={ activeNav === '#ourSolution' ? 'active' : ''} href='#ourSolution'>Our Solution</a>
            <a onClick={() => setActiveNav('#about')} className={ activeNav === '#about' ? 'active' : ''} href='#about'>About Us</a>
            <a onClick={() => setActiveNav('#blog')} className={ activeNav === '#blog' ? 'active' : ''} href='#blog'>Blog</a>
            <a onClick={() => setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' : ''} href='#contact'>Contact Us</a>

            <button className='nav-btn nav-close-btn' onClick={showNavbar} ><FaTimes /></button>
        </nav>

        <button className='get_started'><span>Get Started</span> </button>

        
        <button className='nav-btn nav-show-btn' onClick={showNavbar} ><FaBars /></button>
    </header>

  )
}
