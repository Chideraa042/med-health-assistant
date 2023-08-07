import React from 'react'
import { Telecom } from '../../components/telecom/Telecom';
import s from './doctor4Profile.module.scss';

export const Doctor4Profile = () => {
  return (
    <div className={` ${s.doctor_profile}`}>
      <main className={` ${s.profile_container}`}>
        <div className={` ${s.profile_header}`}></div>
        <div className={` ${s.profile_body}`}>
          <div className={` ${s.pofile_access}`}>

            <div className={` ${s.profile_rank}`}>
              <ul>
                <li>
                  <h4>Dr. Asher White</h4>
                  <p>Medicine & Heart Specialist</p>
                  <span>Good Health Clinic, MBBS, FCPS</span> 
                </li>
              </ul>
            </div>

            <div className={`${s.tel_com}`}>
              <Telecom />
            </div>

          </div>

          <div className={` ${s.about_profile}`}>
            <h4>About</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply... read more Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply... read more.
            </p>
          </div>
          <button className={` ${s.booked}`}><span>Book Appointment</span> </button>
        </div>
      </main>
    </div>
  )
}
