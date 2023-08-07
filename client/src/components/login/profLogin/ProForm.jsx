import s from './proForm.module.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


export const ProForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [idNumber, setIdNumber] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });
      const data = await response.json();
      if (response.ok) {
        // handle successful login
        console.log('Successful login:', data);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  // ======FOROT PASSWORD========
  
  const handleForgotPassword = (e) => {
    e.preventDefault();
    // handle forgot password
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (

    <div className={`${s.login}`}>
      <h2>Login as a Professional</h2>
      <form onSubmit={handleLoginSubmit}>
        {errorMessage && <div className={`${s.error}`}>{errorMessage}</div>}
        <div className={`${s.form_group}`}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={`${s.form_group}`}>
          <label>ID Number</label>
            <input
              type="text"
              placeholder="Enter your ID number"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              required
              />
        </div>
       
        <div className={`${s.form_group}`}>
          <div className={`${s.forgot}`}>
            <label>Password</label>
            
              <div className={`${s.forgot_password}`}>
                <a href="#top" onClick={handleForgotPassword}>
                  Forgot?
                </a>
              </div>

          </div>
          <div className={`${s.password_input_container}`}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          {/* ===TOLE PASSWORD=== */}
              <div
                className={`${s.toggle_password_visibility}`}
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </div>
        
          </div>
        </div>
        
        <div className={`${s.form_group}`}>
          <Link to="/docDashboard/docMain">
            <button type="submit">Login now</button>
          </Link>
        </div>
      </form>

      <div className={`${s.signup}`}>
        <p>Not a doctor?</p>
        <a href="/login" >Login here</a>
      </div>
    
    </div>

  )
}
