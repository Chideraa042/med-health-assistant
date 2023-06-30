import { useNavigate } from 'react-router-dom';
import s from'./dashMain.module.scss';

import doctor_img from '../../assets/Doctors_pic.svg';

import { Calendar } from '../../dashboardd/Calendar';

// Patients lists 
import icon_img1 from '../../assets/video.svg';
import icon_img2 from '../../assets/diagnostics.svg';
import icon_img3 from '../../assets/nearby.svg';
import icon_img4 from '../../assets/h_report.svg';

import bullish_rate from '../../assets/bullish.svg';
import bearish_rate from '../../assets/bearish.svg';


export const DashMain = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/dashboard/video');
  };



  return (
    <div>
      {/* Dashboard Section */}
      <main className={`${s.main_contents}`}>
          <div className={`${s.subb_contents}`}>
            <div className={`${s.subb_con_1}`}>

              {/* ============ DOCTORS SECTION ============= */}
              <div className={`${s.doctors_display}`}>
                <span>Good Morning<h3>Mr. Divine!</h3></span> 
              
                <div className={`${s.doctor_card}`}>

                  <div className={`${s.visits}`}>
                      <h4>Visits for Today</h4>
                      <span>104</span>
                  </div>

                  <div className={`${s.patient_card}`}>
                    {/* ===========NEW PATIENTS RATING ======= */}
                    <div className={`${s.new_patients}`}>
                        <div className={`${s.patient_text}`}>
                            <h4>New patients</h4>
                            <div className={`${s.patient_rate_01}`}>
                                <span>40</span>
                                <div className={`${s.patient_graph}`}>
                                    <span>51%</span>
                                    <img src={bullish_rate} alt="rate_scale" />
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    {/* ===========OLD PATIENTS RATING ======= */}
                    <div className={`${s.old_patients}`}>
                        <div className={`${s.patient_text}`}>
                            <h4>Old patients</h4>
                            <div className={`${s.patient_rate_02}`}>
                                <span>60</span>
                                <div className={`${s.patient_graph}`}>
                                    <span>20%</span>
                                    <img src={bearish_rate} alt="rate_scale" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                  </div>

                {/* ========== DOCTORS IMAGE ============ */}

                  <div className={`${s.doc_img}`}>
                      <img className={`${s.doctor}`} src={doctor_img} alt='doctor_image' />
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

                {/* --------------------- */}
                <div className={`${s.consultation}`}>
                    <div className={`${s.list_gap}`}>
                      <h2>Consultation</h2>
                      <span>Today</span>
                    </div>
                    
                    <div className={`${s.consultation_details}`}>
                      {/* <p>Consultation details go here</p> */}
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
