import { useNavigate } from 'react-router-dom';
import s from'./dashMain.module.scss';

import patient_img from '../../assets/patientPic.svg';
import message_img from '../../assets/message.svg';
import phone_img from '../../assets/phone.svg';

import { Calendar } from '../../dashboardd/Calendar';

// Patients lists 
import icon_img1 from '../../assets/video.svg';
import icon_img2 from '../../assets/diagnostics.svg';
import icon_img3 from '../../assets/nearby.svg';
import icon_img4 from '../../assets/h_report.svg';

// Consultation
import DW_img from '../../assets/DW.svg';
import selPat_img from '../../assets/sel_pat.svg';
import fever_img from '../../assets/fever.svg';
import cough_img from '../../assets/cough.svg';
import heart_img from '../../assets/heart.svg';



export const DashMain = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/dashboard/videoConf');
  };



  return (
    <div>
      {/* Dashboard Section */}
      <main className={`${s.main_contents}`}>
          <div className={`${s.subb_contents}`}>
            <div className={`${s.subb_con_1}`}>

              {/* ============ DOCTORS SECTION ============= */}
              <div className={`${s.doctors_display}`}>
                <span>Good Morning<h3>Mr. Johnson!</h3></span> 
              
                <div className={`${s.doctor_card}`}>

                {/* ========== PATIENTS IMAGE ============ */}

                  <div className={`${s.pat_bio}`}>
                    <div className={`${s.pat_img}`}>
                        <img className={`${s.doctor}`} src={patient_img} alt='patient_image' />
                    </div>

                    <div className={`${s.pat_descript}`}>
                      <h5 style={{lineHeight: 2.6, fontSize: '1.1rem', marginTop: '-1rem', fontWeight: 500}} >Johnson Winston</h5>
                      <p>Father of 4, 162lbs, 5’7, Married to Annie Winston</p>
                      <p><p style={{fontWeight: 500}}>Address:</p> Aguero kimbely streets, Lagos state, Nigeria.</p>
                      <p><p style={{fontWeight: 500}}>Next of Kin:</p> Asher Winston; +23461-223-3398</p>
                    </div>
                  </div>

                  <div className={`${s.pat_contacts}`}>
                    <div className={`${s.message_phone}`}>
                      <img className={`${s.p_mail}`} src={message_img} alt='message_image' />
                      <p>johnsonWinston@hotmmail.com</p>
                    </div>
                    
                    <div className={`${s.message_phone}`} >
                      <img className={`${s.p_phone}`} src={phone_img} alt='phone_image' />
                      <p>+234-810-611-2399</p>
                    </div>
                  </div>
                  

                </div>

              </div>

              {/* ========= PATIENT LIST AND CONSULTATION =========== */}
              <div className={`${s.pat_con}`}>
              {/* ------------------ */}
                <div className={`${s.patients_list}`}>
                    
                      <h2>Menu</h2>                        
                      
                      <ul>
                        <li className={`${s.menu_item}`}>
                          <div onClick={handleNavigate}  className={`${s.video_conf}`}>
                            <img className={`${s.list_icons}`} src={icon_img1} alt='vid_icon' />
                            <p>Start Video Conferencing</p>
                          </div>
                        </li>
                        <li className={`${s.menu_item}`}>
                          <div className={`${s.diagnostics}`}>
                            <img className={`${s.list_icons}`} src={icon_img2} alt='diagnostics_icon' />
                            <p>Diagnostics</p>
                          </div>
                        </li>
                        <li className={`${s.menu_item}`}>
                          <div className={`${s.nearby_hos}`}>
                            <img className={`${s.list_icons}`} src={icon_img3} alt='nearby_icon' />
                            <p>Nearby Hospital</p>
                          </div>
                        </li>
                        <li className={`${s.menu_item}`}>
                          <div className={`${s.health_rep}`}>
                            <img className={`${s.list_icons}`} src={icon_img4} alt='health_rep_icon' />
                            <p>Health Report</p>                           
                          </div>
                        </li>
                      </ul>
                </div>

                {/* ===============CONSULTATION================== */}
                <div className={`${s.consultation}`}>
                    <div className={`${s.list_gap}`}>
                      <h2>Consultation</h2>
                      <span>Today</span>
                    </div>
                    
                    <div className={`${s.consultation_details}`}>
                      {/* <p>Consultation details go here</p> */}
                      <div className={`${s.DW_section}`}>
                        <div className={`${s.icon_name}`}>
                          <img className={`${s.DW_icon}`} src={DW_img} alt='DW_image'/>
                          <div className={`${s.icon_age}`} >
                            <h4>Denzel White</h4>
                            <p>Male - 28 Years 3 Months</p>
                          </div>
                        </div>

                        <img className={`${s.selPat_icon}`} src={selPat_img} alt='selPat_image'/>
                      </div>
                      
                      <div className={`${s.symptoms}`}>
                        <div className={`${s.symp_icon}`}>
                          <img className={`${s.fever_icon}`} src={fever_img} alt='fever_image'/>
                          <p>Fever</p>
                        </div>

                        <div className={`${s.symp_icon}`}>
                          <img className={`${s.cough_icon}`} src={cough_img} alt='cough_image'/>
                          <p>Cough</p>
                        </div>

                        <div className={`${s.symp_icon}`}>
                          <img className={`${s.heart_icon}`} src={heart_img} alt='heart_image'/>
                          <p>Heart Burn</p>
                        </div>
                      </div>

                      <div className={`${s.illness_description}`}>
                        <div className={`${s.ill_checker}`}>
                          <h5 style={{fontSize: '0.7rem'}} >Last Checked</h5>
                          <p>Dr Everly on 21 April 2021 Prescription #2J983KT0</p>
                        </div>
                        <div className={`${s.ill_checker}`}>
                          <h5>Observation</h5>
                          <p>High fever and cough at normal hemoglobin levels. </p>
                        </div>
                        <div className={`${s.ill_checker}`}>
                          <h5>Prescription</h5>
                          <p>Paracetmol - 2 times a day Dizopam - Day and Night</p>
                        </div>
                      </div>
                      
                    </div>
                </div>

              </div>
            </div>

            <div className={`${s.subb_con_2}`}>
            {/* CALENDER DISPLAY */}
              <div className={`${s.calendar}`}>
                <Calendar />
              </div>
            </div>
          
          </div>
      </main> 

     

    </div>
  )
}
