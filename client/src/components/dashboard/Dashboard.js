import React, { useState } from 'react';
import s from './dashboard.module.scss';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import profile_pic from '../assets/profile_pic.svg';
import search_icon from '../assets/search_icon.svg';
import notify_icon from '../assets/notify_icon.svg';
import vector_1_img from '../assets/vector_1.svg';
import vector_2_img from '../assets/vector_2.svg';
import vector_3_img from '../assets/vector_3.svg';
import vector_4_img from '../assets/vector_4.svg';

import medHealth from '../assets/med_health_log.svg';
import medName from '../assets/med_name_log.svg';


export const Dashboard = () => {

  const navigate = useNavigate();


  const [isOpened, setIsOpened] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = () => {
    setIsOpened(!isOpened);
  };

  const handleSearch = () => {
    // Perform the search request using the searchTerm
    console.log('Search term:', searchTerm);
    // You can make an API call or perform any necessary backend operation here
  };

  // =======ROUTE NAV========

  const handleNavigate = () => {
    navigate('/dashboard/doctors');
  };


  return (
    <div className={`${s.container}`}>

       {/* SIDENAV SECTION */}
        
        <div className={`${s.general_overview}`}>
            <div className={`${s.linkk_log}`}>
              <Link to='/'>
                <img className={`${s.medd_logo}`} src={medHealth} alt='medHealth_logo' />
                <img className={`${s.medd_name}`} src={medName} alt='medName_logo' />  
              </Link> 
            </div>
            
            <h5 className={`${s.dash_b}`}><FontAwesomeIcon icon={faHome} /> Dashboard</h5>

            <h4>Appointment</h4>
                <ul>
                  <li className={`${s.vector}`}>
                    <img className={`${s.vector_1}`} src={vector_1_img} alt='vector_1_sample' /> 
                    <p onClick={handleNavigate}>Book Appointment</p>
                  
                  </li>
                  <li className={`${s.vector}`}>
                    <img className={`${s.vector_2}`} src={vector_2_img} alt='vector_2_sample' />
                    <p>My Calender</p>
                  </li>
                  <li>
                    <img className={`${s.vector_3}`} src={vector_3_img} alt='vector_3_sample' />
                    <p>Gebetszeiten</p>
                  </li>
                  <li>
                    <img className={`${s.vector_4}`} src={vector_4_img} alt='vector_4_sample' />
                    <p>Benachrichtigung</p>
                  </li>
                </ul>
            
            <h4 className={`${s.h4_2}`}>General</h4>
                <ul className={`${s.ul_2}`}>
                  <li>
                    <img className={`${s.vector_1}`} src={vector_1_img} alt='vector_1_sample' />
                    <p>My File</p>
                  </li>
                  <li>
                    <img className={`${s.vector_2}`} src={vector_2_img} alt='vector_2_sample' />
                    <p>Symptom Checker</p>
                  </li>
                  <li>
                    <img className={`${s.vector_3}`} src={vector_3_img} alt='vector_3_sample' />
                    <p>Gebetszeiten</p>
                  </li>
                  <li>
                    <img className={`${s.vector_4}`} src={vector_4_img} alt='vector_4_sample' />
                    <p>Benachrichtigung</p>
                  </li>
                </ul>              
        </div> 
        
        <main className={`${s.mainn_contents}`}>
                <div className={`${s.topp_bar}`}>

                {/* Search bar */}
                <div className={`${s.search_bar}`}>
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button onClick={handleSearch}>
                    <img src={search_icon} alt="search" />
                  </button>
                </div>

                {/* Notifications */}
                <div className={`${s.notification_bar}`}>
                  <div className={`${s.notification_icon}`}>
                    <img src={notify_icon} alt="notification" />
                  </div>
                  <div className={`${s.profile}`} onClick={toggleDropdown}>
                    <img src={profile_pic} alt="Profile" />
                    <div className={` ${s.dropdown}  ${isOpened ? `${s.open}` : ''}`}>
                      <div className={`${s.profile_details}`}>
                        <p>General Profile Details</p>
                      </div>
                      <div className={`${s.logout}`}>
                        <p>Logout</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>


              <Outlet />

              </main>
      {/* =========== */}

        {/* Dashboard Section */}
          

     

    </div>
  );
}


