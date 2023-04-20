// import React, { useState } from 'react';
// import axios from 'axios';

import './login.scss'
import { Stores } from '../home/Stores';
// import mobile_logo from '../assets/mobile_sample.png';
import dots_1_logo from '../assets/dots_1.svg';
import dots_2_logo from '../assets/dots_2.svg';
import { Logo } from '../navbar/Logo';
import { Link } from 'react-router-dom';
import { Form } from './form/Form';

export const Login = () => {

	
  return (

    <main className="login_main">     
        <section className="hero_login">

				<div className="link-logo">
						<Link to="/"><Logo /></Link>
				</div>
				
            <div className="dot_files">
							<img className='dots_1' src={dots_1_logo} alt='dots_1_sample' />
							<img className='dots_2' src={dots_2_logo} alt='dots_2_sample' />
            </div>

						<div className='home_files'>
              <div className='login_files'>
								
								<div className="home_text">
                
									

										<h3 className='text_1' style={{}}>
											Sign up to enjoy improved
											health care services online for
											friends and loved ones.	
										</h3>

										<h5 className='text_2'>
											Find verified doctors that match your complaint,
											book telemedicine appointments, and speak with a doctor via chat, 
											voice, or video call. Anywhere. Anytime. Using the best telemedicine app 
											in Nigeria.
										</h5>
										<Stores />
										</div>
								</div>	
							</div>

							<Form />

        </section>
    </main>
  )
}
