import './fsocials.scss'
import facebook_logo from '../../assets/facebook.svg';
import linkedin_logo from '../../assets/facebook.svg';
import instagram_logo from '../../assets/instagram.svg';

const Fsocials = () => {
  return (
    <div className="f_socials">
      <a href="https://facebook.com" target='_blank'><img className='facebook' src={facebook_logo} alt='facebook_sample' /></a>
      <a href="https://linkedin.com" target='_blank'><img className='facebook' src={linkedin_logo} alt='linkedin_sample' /></a>
      <a href="https://instagram.com" target='_blank'><img className='facebook' src={instagram_logo} alt='instagram_sample' /></a>
      
    </div>
  );
};

export default Fsocials;
