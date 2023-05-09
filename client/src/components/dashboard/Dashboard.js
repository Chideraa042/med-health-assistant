import React, { useState } from 'react';
import './dashboard.scss';
import { Logo } from "../navbar/Logo";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import doctor_img from '../assets/Doctors_pic.svg';
import { Calendar } from '../dashboardd/Calendar';

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");



  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <div className="container">
      <header>
        <div>
          <button onClick={toggleSidebar}>&#9776;</button>
        </div>
      </header>
      <main className={isOpen ? 'content--open' : ''}>
        {/* Dashboard Section */}
          <div className="mainn-contents">
              <div className="topp-bar">
                  <div className="search-bar">
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                  </div>
                  <div className="notify">notification</div>
              </div>

              <div className="subb-contents">
                <div className="subb-con_1">

                  {/* DOCTORS SECTION */}
                  <div className="doctors-display">
                  <span>Good Morning<h3>Dr. Kim!</h3></span> 
                  <div className="doc_img">
                        <img className='doctor' src={doctor_img} alt='mobileApp_sample' />
                    </div>
                    <div className="doctor-card">
                  
                      <div className="doctor-info">
                        <h3 className="doctor-name">Dr. John Doe</h3>
                        <p className="doctor-specialty">Cardiologist</p>
                        <p className="doctor-contact">john.doe@hospital.com</p>
                      </div>
                    </div>
                  </div>

                  {/* PATIENT LIST AND CONSULTATION */}
                  <div className="pat-con">
                  {/* ------------------ */}
                    <div className="patients-list">
                          <div className="list-gap">
                            <h2>Patient List</h2>
                            <span>Today</span>
                          </div>
                          
                          <ul>
                            <li className="patient-item">
                              <div className="patient-name">John Doe</div>
                              <div className="patient-status">In Progress</div>
                            </li>
                            <li className="patient-item">
                              <div className="patient-name">Jane Smith</div>
                              <div className="patient-status">Completed</div>
                            </li>
                            <li className="patient-item">
                              <div className="patient-name">Bob Johnson</div>
                              <div className="patient-status">Scheduled</div>
                            </li>
                          </ul>
                    </div>

                    {/* --------------------- */}
                    <div className="consultation">
                        <h2>Consultation</h2>
                        <div className="consultation-details">
                          <p>Consultation details go here</p>
                        </div>
                    </div>

                  </div>
                </div>

                <div className="subb-con_2">
                {/* CALENDER DISPLAY */}
                  <div className="calendar">
                    <Calendar />
                  </div>
                </div>
             
              </div>
          </div> 

      </main>

      {/* SIDENAV SECTION */}
      <aside className={isOpen ? 'sidebar--open' : ''}>
        <div className="top">
          <button onClick={closeSidebar}>&#10094;</button>
        </div>
        <div className="general-overview">
            <div className="linkk-log">
                <Link  to="/"><Logo /></Link>
            </div>
            
            <h5 className='dash-b'><FontAwesomeIcon icon={faHome} /> Dashboard</h5>

            <h4>Appointment</h4>
                <ul>
                  <li>Book Appointment</li>
                  <li>My Calender</li>
                  <li>Gebetszeiten</li>
                  <li>Benachrichtigung</li>
                </ul>
            
            <h4 className="h4-2">General</h4>
                <ul className="ul-2">
                  <li>My File</li>
                  <li>Symptom Checker</li>
                  <li>Gebetszeiten</li>
                  <li>Benachrichtigung</li>
                </ul>
        </div> 
      </aside>
      {/* =========== */}

    </div>
  );
}


