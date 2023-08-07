import { useNavigate } from 'react-router-dom';
import s from'./docDash.module.scss';

import doctor_img from '../../assets/Dr_Stern.svg';
import message_img from '../../assets/message.svg';
import phone_img from '../../assets/phone.svg';

import { Calendar } from '../../dashboardd/Calendar';

// Patients lists 
import icon_img1 from '../../assets/video.svg';
import icon_img2 from '../../assets/diagnostics.svg';
import icon_img3 from '../../assets/nearby.svg';
import icon_img4 from '../../assets/h_report.svg';


// Consultation
import bullish_rate from '../../assets/bullish.svg';
import bearish_rate from '../../assets/bearish.svg';
import { Telecom } from '../../telecom/Telecom';


export const DocDash = () => {
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
                <span>Good Morning<h3>Mr. Stern!</h3></span> 
              
                <div className={`${s.doctor_card}`}>

                {/* ========== PATIENTS IMAGE ============ */}

                  <div className={`${s.pat_bio}`}>
                    <div className={`${s.pat_img}`}>
                        <img className={`${s.doctor}`} src={doctor_img} alt='patient_image' />
                    </div>

                    <div className={`${s.pat_descript}`}>
                      <h5 style={{lineHeight: 2.6, fontSize: '1.1rem', marginTop: '-1rem', fontWeight: 500}} >Dr. Stern Chukwuma</h5>
                      <p>Optalmologist</p>

                      <div className={`${s.pat_contacts}`}>
                        <div className={`${s.message_phone}`}>
                          <img className={`${s.p_mail}`} src={message_img} alt='message_image' />
                          <p>stern@medhealth.org</p>
                        </div>
                        
                        <div className={`${s.message_phone}`} >
                          <img className={`${s.p_phone}`} src={phone_img} alt='phone_image' />
                          <p>+234-810-611-2399</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className={`${s.tel_com}`}>
                    <Telecom />
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
                      <h2>Visits</h2>
                      <span>Today</span>
                    </div>
                    
                    <div className={`${s.consultation_details}`}>
                      {/* <p>Consultation details go here</p> */}

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
                                      <span>64</span>
                                      <div className={`${s.patient_graph}`}>
                                          <span>20%</span>
                                          <img src={bearish_rate} alt="rate_scale" />
                                      </div>
                                  </div>
                              </div>
                              
                          </div>
                        </div>
                        {/* =========== */}
                      
                    </div>
                </div>
                {/* ================ */}

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
