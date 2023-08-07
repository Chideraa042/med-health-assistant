import s from  './profLogin.module.scss';

import dots_1_logo from '../../assets/dots_1.svg';
import dots_2_logo from '../../assets/dots_2.svg';
import { Logo } from '../../navbar/Logo';

import { Link } from 'react-router-dom';
import { ProForm } from './ProForm';

import apple_logo from '../../assets/app_store.svg';
import google_logo from '../../assets/google_play.svg';





export const ProfLogin = () => {

  return (

    <main className={`${s.login_main}`}>     
        <section className={`${s.hero_login}`}>

				<div className={`${s.link_logo}`}>
						<Link to="/"><Logo /></Link>
				</div>
				
            <div className={`${s.dot_files}`}>
							<img className={`${s.dots_1}`} src={dots_1_logo} alt='dots_1_sample' />
							<img className={`${s.dots_2}`} src={dots_2_logo} alt='dots_2_sample' />
            </div>

						<div className={`${s.home_files}`}>
              <div className={`${s.login_files}`}>	
								<div className={`${s.home_text}`}>
        
									<h3 className={`${s.text_1}`} style={{}}>
										Sign up to enjoy improved
										health care services online for
										friends and loved ones.	
									</h3>

									<h5 className={`${s.text_2}`}>
										Find verified doctors that match your complaint,
										book telemedicine appointments, and speak with a doctor via chat, 
										voice, or video call. Anywhere. Anytime. Using the best telemedicine app 
										in Nigeria.
									</h5>
	
									{/* AppStore & PlayStore */}
									<div className={`${s.download_main}`}>
										<div className={`${s.download}`} >
												<img className={`${s.AppStore}`} src={apple_logo} alt='AppStore_logo' />
												<img className={`${s.GooglePlay}`} src={google_logo} alt='GooglePlay_logo' />
										</div>
									</div>

								</div>

							</div>	

							

						</div>

							<ProForm />

        </section>
    </main>
  )
}
