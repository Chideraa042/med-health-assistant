import React from 'react'
import { useRef } from 'react';
import './navbar.css'
import { useState } from 'react'
import { FaTimes, FaBars } from "react-icons/fa"
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';



export const Navbar = () => {
  
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  const [activeNav, setActiveNav] =useState('#');
  const location = useLocation();
  const { pathname } = location;

  const navWitoutRoutes = [  
    "/cal", 
    "/dashboard", "/dashboard/main", 
    "/doctors", "/dashboard/doctors", 

    "/profileD1", "/dashboard/profileD1",
    "/profileD2", "/dashboard/profileD2",
    "/profileD3", "/dashboard/profileD3",
    "/profileD4", "/dashboard/profileD4",
    "/video", "/dashboard/video"
  ];

  // Render the navbar only when the current path is not login, signup, or dashboard
  // const renderNavbar = pathname !== '/login' && pathname !== '/cal' && pathname !== '/dashboard/*' && pathname !== '/dash' && pathname !== '/dashMain';
  
  return (
    <>
      {!navWitoutRoutes.includes(pathname)
        ? (
        <header className='navigations'>
      
          <Link to="/">
              <Logo />
          </Link>
          
          <nav ref={navRef} className='navigat'>
              <a onClick={() => setActiveNav('/')} className={ activeNav === '/' ? 'active' : ''} href='/'>Home</a>
              <a onClick={() => setActiveNav('#products')} className={ activeNav === '#products' ? 'active' : ''} href='#products'>Products</a>
              <a onClick={() => setActiveNav('#ourSolution')} className={ activeNav === '#ourSolution' ? 'active' : ''} href='#ourSolution'>Our Solution</a>
              <a onClick={() => setActiveNav('#about')} className={ activeNav === '#about' ? 'active' : ''} href='#about'>About Us</a>
              <a onClick={() => setActiveNav('#blog')} className={ activeNav === '#blog' ? 'active' : ''} href='#blog'>Blog</a>
              <a onClick={() => setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' : ''} href='#contact'>Contact Us</a>

              <button className='nav-btn nav-close-btn' onClick={showNavbar} ><FaTimes /></button>
          </nav>

          <Link to="/login">
              <button className='get_started'><span>Get Started</span> </button>
          </Link>
          
          <button className='nav-btn nav-show-btn' onClick={showNavbar} ><FaBars /></button>
        </header>
      ) : (
        <></>
      )
    }
    </>
  );
};
