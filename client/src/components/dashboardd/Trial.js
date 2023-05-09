import React from 'react'
import './trial.scss'


// overview search
//          doctor       calender
//          patient consultation events

export const Trial = () => {
  return (
    <div className='container'>
      <div className="overview">General Overview</div>
      <div className="contents">
          <div className="top-bar">
            <div className="search">Search</div>
           
          </div>
          <div className="sub-contents">
              <div className="doctor">Doctor</div>
              <div className="calender">Calender</div>
              <div className="patient">Patient List</div>
              {/* <div className="consultation">Consultation</div> */}
              <div className="events">Upcoming Events</div>
          </div>
      </div>
    </div>
  )
}
