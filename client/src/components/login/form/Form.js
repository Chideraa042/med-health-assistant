import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './form.scss';


export const Form = () => {

  const [showLogin, setShowLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // handle login submit
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // handle signup submit
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // handle forgot password
  };


  return (
    <div className="login">
      <h2 >{showLogin ? 'Login to your account' : 'Create an account'}</h2>
      <form onSubmit={showLogin ? handleLoginSubmit : handleSignupSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <div className="forgot">
              <label>Password</label>
              {showLogin ? (
              <div className="forgot-password">
                <a href="#top" onClick={handleForgotPassword}>Forgot?</a>
              </div>
              ) : null}
          </div>
         
          <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              
              {showLogin ? (
                <div
                  className="toggle-password-visibility"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </div>
              ) : null}
              
              
          </div>

        </div>

        <div className="form-group">
           <button type="submit">{showLogin ? 'Login now' : 'Create account'}</button>
        </div> 
        
        
      </form>
      <div className="signup">
        {showLogin ? "Don't have an account?" : "Already have an account?"}{' '}
        <a href="#top" onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? 'Sign Up' : 'Log In'}
        </a>
      </div>
    </div>
  )
}

