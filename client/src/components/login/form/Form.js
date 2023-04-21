import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './form.scss';

export const Form = () => {

  const [showLogin, setShowLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
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
        // handle successful signup
        console.log('Successful signup:', data);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // handle forgot password
  };

  return (
    <div className="login">
      <h2 >{showLogin ? 'Login to your account' : 'Create an account'}</h2>
      <form onSubmit={showLogin ? handleLoginSubmit : handleSignupSubmit}>
        {errorMessage && <div className="error">{errorMessage}</div>}
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

