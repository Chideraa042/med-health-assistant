import { useNavigate } from 'react-router-dom';
import s from './doctorList.module.scss'
import doctor1_img from '../../components/assets/albert_cooker.svg';
import doctor2_img from '../../components/assets/mendy_tokyo.svg';
import doctor3_img from '../../components/assets/bernard_cooker.svg';
import doctor4_img from '../../components/assets/asher_white.svg';

import star_img from '../../components/assets/star.svg';

export const DoctorList = () => {
  const navigate = useNavigate();

  // =======ROUTE NAV========

  const handleNavigate_1 = () => {
    navigate('/dashboard/profileD1');
  };

  const handleNavigate_2 = () => {
    navigate('/dashboard/profileD2');
  };

  const handleNavigate_3 = () => {
    navigate('/dashboard/profileD3');
  };

  const handleNavigate_4 = () => {
    navigate('/dashboard/profileD4');
  };

  return (
    <div className={s.doctor_list}>
      <main className={s.container}>
        <div 
          onClick={handleNavigate_1} 
          className={` ${s.doctor_1}`}>
            <div className={`${s.doctor_header}`}>
              <img className={`${s.doctor_im}`} src={doctor1_img} alt='doctor1_image' />
              <h4>Dr. Albert Cooker</h4>
            </div>

            <h5>Medicine & Heart Specialist</h5>
            <p>Good Health Clinic, MBBS, FCPS</p>

            <div className={`${s.star}`}>
              <img className={`${s.star_im}`} src={star_img} alt='star_image' />
              <img className={`${s.star_im}`} src={star_img} alt='star_image' />
              <img className={`${s.star_im}`} src={star_img} alt='star_image' />
              <img className={`${s.star_im}`} src={star_img} alt='star_image' />
              <img className={`${s.star_im}`} src={star_img} alt='star_image' />
            </div>

            <div className={`${s.doctor_rating}`}>
              <div className={`${s.pat_exp_rev}`}>
                <p>Patients</p>
                <span>1.08K</span>
              </div>
              <div className={`${s.pat_exp_rev}`}>
                <p>Experience</p>
                <span>8 Years</span>
              </div>
              <div className={`${s.pat_exp_rev}`}>
                <p>Review</p>
                <span>5.18k</span>
              </div>
            </div>
            
        </div>

        <div 
          onClick={handleNavigate_2} 
          className={` ${s.doctor_1}`}>
            <div className={`${s.doctor_header}`}>
              <img className={`${s.doctor_im}`} src={doctor2_img} alt='doctor2_image' />
              <h4>Dr. Mendy Tokyo</h4>
            </div>

            <h5>Vasectomologist</h5>
            <p>Good Health Clinic, MBBS, FCPS</p>

            <div className={`${s.star}`}>
              <img className={`${s.star_im}`} src={star_img} alt='star_image' />
              <img className={`${s.star_im}`} src={star_img} alt='star_image' />
              <img className={`${s.star_im}`} src={star_img} alt='star_image' />
              <img className={`${s.star_im}`} src={star_img} alt='star_image' />
              {/* <img className={`${s.star_im}`} src={star_img} alt='star_image' /> */}
            </div>

            <div className={`${s.doctor_rating}`}>
              <div className={`${s.pat_exp_rev}`}>
                <p>Patients</p>
                <span>998</span>
              </div>
              <div className={`${s.pat_exp_rev}`}>
                <p>Experience</p>
                <span>6 Years</span>
              </div>
              <div className={`${s.pat_exp_rev}`}>
                <p>Review</p>
                <span>4.12k</span>
              </div>
            </div>
            
        </div>

        <div 
          onClick={handleNavigate_3} 
          className={` ${s.doctor_1}`}>
            <div className={`${s.doctor_header}`}>
              <img className={`${s.doctor_im}`} src={doctor3_img} alt='doctor3_image' />
              <h4>Dr. Bernard Cooker</h4>
            </div>

            <h5>Surgery Specialist</h5>
            <p>Good Health Clinic, MBBS, FCPS</p>

            <div className={`${s.star}`}>
              <img className={`${s.star_im}`} src={star_img} alt='star_image' />
              <img className={`${s.star_im}`} src={star_img} alt='star_image' />
              <img className={`${s.star_im}`} src={star_img} alt='star_image' />
              {/* <img className={`${s.star_im}`} src={star_img} alt='star_image' /> */}
              {/* <img className={`${s.star_im}`} src={star_img} alt='star_image' /> */}
            </div>

            <div className={`${s.doctor_rating}`}>
              <div className={`${s.pat_exp_rev}`}>
                <p>Patients</p>
                <span>750</span>
              </div>
              <div className={`${s.pat_exp_rev}`}>
                <p>Experience</p>
                <span>5 Years</span>
              </div>
              <div className={`${s.pat_exp_rev}`}>
                <p>Review</p>
                <span>3.81k</span>
              </div>
            </div>
            
        </div>

        <div 
          onClick={handleNavigate_4} 
          className={` ${s.doctor_1}`}>
            <div className={`${s.doctor_header}`}>
              <img className={`${s.doctor_im}`} src={doctor4_img} alt='doctor4_image' />
              <h4>Dr. Asher White</h4>
            </div>

            <h5>Optalmologist</h5>
            <p>Good Health Clinic, MBBS, FCPS</p>

            <div className={`${s.star}`}>
              <img className={`${s.star_im}`} src={star_img} alt='star_image' />
              <img className={`${s.star_im}`} src={star_img} alt='star_image' />
              <img className={`${s.star_im}`} src={star_img} alt='star_image' />
              <img className={`${s.star_im}`} src={star_img} alt='star_image' />
              <img className={`${s.star_im}`} src={star_img} alt='star_image' />
            </div>

            <div className={`${s.doctor_rating}`}>
              <div className={`${s.pat_exp_rev}`}>
                <p>Patients</p>
                <span>1.15K</span>
              </div>
              <div className={`${s.pat_exp_rev}`}>
                <p>Experience</p>
                <span>7 Years</span>
              </div>
              <div className={`${s.pat_exp_rev}`}>
                <p>Review</p>
                <span>6.32k</span>
              </div>
            </div>
            
        </div>

      </main>
    </div>
    
  )
}
