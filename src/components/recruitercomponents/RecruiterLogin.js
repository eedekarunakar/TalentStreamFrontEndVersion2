import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { useUserContext } from '../common/UserProvider';
import { apiUrl } from '../../services/ApplicantAPIService';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function RecruiterLogin({handleLogin}) {

  const [recruiterEmail, setRecruiterEmail] = useState('');
  const [recruiterPassword, setRecruiterPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const location = useLocation();
    const registrationSuccess = location.state?.registrationSuccess;
    const navigate = useNavigate();
    const { setUser } = useUserContext();
    const { setUserType } = useUserContext();
    const [showPassword, setShowPassword] = useState(false);
    const [recruiterEmailError, setRecruiterEmailError] = useState('');
  const [recruiterPasswordError, setRecruiterPasswordError] = useState('');

    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };
  
    const isRecruiterFormValid = () => {
      // Validate email
      const emailError = validateEmail(recruiterEmail);
      setRecruiterEmailError(emailError);
    
      // Validate password
      const passwordError = validatePassword(recruiterPassword);
      setRecruiterPasswordError(passwordError);
    
      // Check if either email or password is empty
      if (!recruiterEmail.trim()) {
        setRecruiterEmailError('Email is required.');
      }
    
      if (!recruiterPassword.trim()) {
        setRecruiterPasswordError('Password is required.');
      }
    
      // Check if there are any validation errors
      if (emailError || passwordError) {
        return false;
      }
    
      return true;
    };
    // Helper function to set JWT token in localStorage
    const setJwtToken = (token) => {
      localStorage.setItem('jwtToken', token);
    };
  

    const validateEmail = (email) => {
      if (!email.trim()) {
        return 'Email is required.';
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email) ? '' : 'Please enter a valid email address.';
    };
  
    const validatePassword = (password) => {
      if (!password.trim()) {
        return 'Password is required.';
      }
  
      if (password.length < 6) {
        return 'Password must be at least 6 characters long.';
      }
  
      if (!/[A-Z]/.test(password)) {
        return 'Password must contain at least one uppercase letter.';
      }
   
      if (!/[^A-Za-z0-9]/.test(password)) {
        return 'Password must contain at least one special character (non-alphanumeric).';
      }
   
      if (/\s/.test(password)) {
        return 'Password cannot contain spaces.';
      }
   
      return '';
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!isRecruiterFormValid()) {
        return;
      }
  
      try {
        let loginEndpoint = `${apiUrl}/recuriters/recruiterLogin`;
        const response = await axios.post(loginEndpoint, {
          email: recruiterEmail,
          password: recruiterPassword,
        });
  
              if (response.status === 200) {
          setErrorMessage('');
          const userData = response.data;
  
          localStorage.setItem('jwtToken', userData.data.jwt);
  
          let userType1 = '';
  
          if (userData.message.includes('ROLE_JOBAPPLICANT')) {
            userType1 = 'jobseeker';
          } else if (userData.message.includes('ROLE_JOBRECRUITER')) {
            userType1 = 'employer';
          } else {
            userType1 = 'unknown';
          }
  
          localStorage.setItem('userType', userType1);
  
          setErrorMessage('');
          handleLogin();
  
          setUser(userData);
          setUserType(userData.userType);
          console.log('Recruiter Login successful', userData);
  
          navigate('/recruiterhome');
        }else {
          setErrorMessage('Recruiter Login failed. Please check your user name and password.');
          console.error('Recruiter Login failed');
        }
      } catch (error) {
        setErrorMessage('Recruiter Login failed. Please check your user name and password.');
        console.error('Recruiter Login failed', error);
      }
    };

  return (
    <div>

<div>
      <section className="bg-f5">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-title">
                <div className="widget-menu-link">
                  <ul>
                    {/* <li><a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="account-section">
        <div className="tf-container">
          <div className="row">
            <div className="wd-form-login">
            {registrationSuccess && (
          <div className="success-message">
            Registration successful! Please log in to continue.
          </div>
        )}
              <h4>Recruiter's Login</h4>
              <form  onSubmit={handleSubmit}>
                <div className="ip">
                  <label>
                    Email address<span>*</span>
                  </label>
                  <input
                          type="text"
                          placeholder="Enter your Email"
                          value={recruiterEmail}
                          onChange={(e) => {
                            setRecruiterEmail(e.target.value);
                            setRecruiterEmailError(''); // Clear the error when the input changes
                          }}
                   />
                   {recruiterEmailError && <div className="error-message">{recruiterEmailError}</div>}
                </div>
                <div className="ip">
                  <label>
                    Password<span>*</span>
                  </label>
                  <div className="inputs-group auth-pass-inputgroup">
                  <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={recruiterPassword}
                            onChange={(e) => {
                              setRecruiterPassword(e.target.value);
                               setRecruiterPasswordError(''); // Clear the error when the input changes
                                }}
                            
                       />
                  <div className="password-toggle-icon" onClick={handleTogglePassword} id="password-addon">
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </div>
                  </div>
                  {recruiterPasswordError && <div className="error-message">{recruiterPasswordError}</div>}
                </div>
                <div className="group-ant-choice">
                  <div className="sub-ip">
                    {/* <input type="checkbox" />
                    Remember me */}
                  </div>
                  <a href="/recruiter-forgot-password" className="forgot">
                    Fogot password?
                  </a>
                </div>
                <button type="submit">Login</button>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                
                <div className="sign-up">
                  Not registered yet? <a href="/register" >Sign Up</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>




    </div>
  )
}

export default RecruiterLogin;