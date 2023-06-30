import React from 'react'
import './header.scss'
import { Stores } from './Stores';
import mobile_logo from '../assets/mobile_sample.png';
import dots_1_logo from '../assets/dots_1.svg';
import dots_2_logo from '../assets/dots_2.svg';
import { Footer } from '../footer/Footer';


export const Header = () => {
  return (
    <main className="header_main">     
        <header className="hero_header">
            <div className="dot_files">
							<img className='dots_1' src={dots_1_logo} alt='dots_1_sample' />
							<img className='dots_2' src={dots_2_logo} alt='dots_2_sample' />
            </div>

						<div className='home_files'>
								<div className="home_text">
										<h3 className='text_1' style={{}}>
											Speak with a doctor online. Say
											goodbye to traffic, waiting for
											hours, and long hospital queues	
										</h3>

										<h5 className='text_2'>
											Find verified doctors that match your complaint,
											book telemedicine appointments, and speak with a doctor via chat, 
											voice, or video call. Anywhere. Anytime. Using the best telemedicine app 
											in Nigeria.
										</h5>
										<Stores />
										
								</div>

								<div className="home_img">
										<img className='mobile_app' src={mobile_logo} alt='mobileApp_sample' />
								</div>
									
							</div>
        </header>

				<Footer />

				{/* <section className="benefits">
					<div className="container">
						<h2 className="">Earn More From Your Practive</h2>
						<p className="">MedHealth empowers you to earn what your expertise deserves while helping Nigerians stay healthy</p>

						<div className="entity_wrapper">
							<figure>
								<img src="" alt="" />
							</figure>
							<div className="">
								<h3 className="">Access a large pool of patients</h3>
								<p className="">Get in front of a large pool of patients who want to speak with a doctor online.</p>
							</div>
						</div>
					</div>
				</section> */}
      </main>
   
  )
}
