import React from 'react'
import './footer.scss'
import Fsocials from './footer_Socials/Fsocials'
import { FootLogo } from './FootLogo'


export const Footer = () => {
  return (
    <main className='footer'>
        <div className='grid_system'>

          <div className="grid_1">
              <div className="foot_logo">
                <FootLogo />
              </div>
              
              <div className="text_h5">
                <h5>Electronic Engineering Department </h5>
                <h5>University of Nigeria Nsukka </h5>
                <h5>Enugu State </h5>
                <h5>Nigeria</h5>
              </div>

              <div className="fsocials">
                <Fsocials />
              </div>
          </div>

          <div className="comp_info">
            <h3>Company Info</h3>
            <ul>
              <li>about us</li>
              <li>Subscribe</li>
              <li>Blog</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="prod_info">
            <h3>Our Products</h3>
            <ul>
              <li>YoHealth</li>
              <li>YoHealth Doctors</li>
              <li>Cura Network Covid-19 platform</li>
            </ul>
          </div>


          <div className="contact_info">
            <h3>Contact Us</h3>
            <ul>
              <li>info@curanetwork.co</li>
              <li>Telp: +234 903 050 3285</li>
            </ul>
          </div>

          {/* Bottom border line */}
          <div className="footer-border"></div>

          {/* Copyright */}
          <div className="copyright">Copyright © Cura Network 2022</div>
        </div>

        
    </main>
    
  )
}
