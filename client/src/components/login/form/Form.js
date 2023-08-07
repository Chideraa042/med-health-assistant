import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './form.scss';
import { Link } from 'react-router-dom';

export const Form = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [address, setAddress] = useState('');
  // const [state, setState] = useState('');
  // const [country, setCountry] = useState('');

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
          password: password,
          idNumber: idNumber,
          address: address,
          // state: state,
          // country: country
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
    <div className={`login ${showLogin ? '' : 'signup_page'}`}>
      <h2>{showLogin ? 'Login to your account' : 'Create an account'}</h2>
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
        {!showLogin && (
          <>
            <div className="form-group">
              <label>ID Number</label>
              <input
                type="text"
                placeholder="Enter your ID number"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            {/* <div className="form-group">
              <label>State</label>
              <input
                type="text"
                placeholder="Enter your state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                requiredg
              />
            </div> */}
          </>
        )}
        <div className="form-group">
          <div className="forgot">
            <label>Password</label>
            {showLogin ? (
              <div className="forgot-password">
                <a href="#top" onClick={handleForgotPassword}>
                  Forgot?
                </a>
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
        {/* {!showLogin && (
          <div className="form-group">
            <label>Country</label>
            <input
              type="text"
              placeholder="Enter your country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
        )} */}
        <div className="form-group">
          <Link to="/dashboard/main">
            <button type="submit">
              {showLogin ? 'Login now' : 'Create account'}
            </button>
          </Link>
        </div>
      </form>
      <div className="signup">

        <div className="signup_flex">
          {showLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <a href="#top" onClick={() => setShowLogin(!showLogin)}>
            {showLogin ? 'Sign Up' : 'Log In'}
          </a>
        </div>

        <div className="signup_flex">
          {showLogin ? "Are you a professional?" : ""}{' '}
          <a href="/proLogin" onClick={() => setShowLogin(!showLogin)}>
            {showLogin ? 'Log In' : ''}
          </a>
        </div>
        
      </div>

      {/* <div className="signup">
        
      </div> */}

    </div>
  );
};
