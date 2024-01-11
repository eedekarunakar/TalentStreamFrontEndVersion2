import React, { useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useUserContext } from '../common/UserProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { apiUrl } from '../../services/ApplicantAPIService';
 
function LoginBody({ handleLogin }) {
  const [candidateEmail, setCandidateEmail] = useState('');
  const [candidatePassword, setCandidatePassword] = useState('');
  const [recruiterEmail, setRecruiterEmail] = useState('');
  const [recruiterPassword, setRecruiterPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation();
  const registrationSuccess = location.state?.registrationSuccess;
  const navigate = useNavigate();
  const { setUser, setUserType } = useUserContext();
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('Candidate');
  const [candidateEmailError, setCandidateEmailError] = useState('');
  const [candidatePasswordError, setCandidatePasswordError] = useState('');
  const [recruiterEmailError, setRecruiterEmailError] = useState('');
  const [recruiterPasswordError, setRecruiterPasswordError] = useState('');
//  const [candidateLoginInProgress, setCandidateLoginInProgress] = useState(false);
 
 
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
 
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setErrorMessage('');
  };
 
  const handleCandidateSubmit = async (e) => {
    e.preventDefault();
    if (!isCandidateFormValid()) {
      return;
    }
 
    try {
    //  setCandidateLoginInProgress(true);
      let loginEndpoint = `${apiUrl}/applicant/applicantLogin`;
      const response = await axios.post(loginEndpoint, {
        email: candidateEmail,
        password: candidatePassword,
      });
 
            if (response.status === 200) {
        setErrorMessage('');
        const userData = response.data;
        console.log('this is response ', userData);
        console.log('this is token ', userData.data.jwt);
        localStorage.setItem('jwtToken', userData.data.jwt);
 
        let userType1;
 
        if (userData.message.includes('ROLE_JOBAPPLICANT')) {
          userType1 = 'jobseeker';
        } else if (userData.message.includes('ROLE_JOBRECRUITER')) {
          userType1 = 'employer';
        } else {
          userType1 = 'unknown';
        }
        console.log('this userType ', userType1);
        localStorage.setItem('userType', userType1);
 
        setErrorMessage('');
        handleLogin();
 
        setUser(userData);
        setUserType(userData.userType);
        console.log('Login successful', userData);
 
 
      navigate('/applicanthome');
            }
 
    } catch (error) {
      console.log(error.response.data);
      if(error.response.data==="Incorrect password") {
        setErrorMessage('Incorrect password.');
     //   setCandidateLoginInProgress(false);
        console.error('login failed');
      }
      else if(error.response.data==="No account found with this email address") {
        setErrorMessage('No account found with this email address.');
     //   setCandidateLoginInProgress(false);
        console.error('login failed');
      }
      else{
        setErrorMessage('login failed. Please check your user name and password.');
      }
     
   //   setCandidateLoginInProgress(false);
      console.error('Login failed', error);
    }
  };
 
  const isCandidateFormValid = () => {
 
    // Validate email
    const emailError = validateEmail(candidateEmail);
    setCandidateEmailError(emailError);
 
    // Validate password
    const passwordError = validatePassword(candidatePassword);
    setCandidatePasswordError(passwordError);
 
    // Check if either email or password is empty
    if (!candidateEmail.trim()) {
      setCandidateEmailError('Email is required.');
    }
 
    if (!candidatePassword.trim()) {
      setCandidatePasswordError('Password is required.');
    }
 
    // Check if there are any validation errors
    if (emailError || passwordError) {
      return false;
    }
 
    return true;
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
 
 
 
 
  const handleRecruiterSubmit = async (e) => {
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
      }
    } catch (error) {
      if(error.response.data==="Incorrect password") {
        setErrorMessage('Incorrect password.');
     //   setCandidateLoginInProgress(false);
        console.error('login failed');
      }
      else if(error.response.data==="No account found with this email address") {
        setErrorMessage('No account found with this email address.');
     //   setCandidateLoginInProgress(false);
        console.error('login failed');
      }
      else{
        setErrorMessage('login failed. Please check your user name and password.');
      }
      console.error('Login failed', error);
    }
  };
 
  return (
    <div>
      <section className="account-section">
        <div className="tf-container">
          <div className="row">
            <div className="wd-form-login tf-tab">
              <section className="account-section">
                {registrationSuccess && (
                  <div className="success-message">
                    Registration successful! Please log in to continue.
                  </div>
                )}
                <h4>Login </h4>
 
                <ul className="menu-tab">
                  <li className={`ct-tab ${activeTab === 'Candidate' ? 'active' : ''}`} onClick={() => handleTabClick('Candidate')}>
                    Candidate
                  </li>
                  <li className={`ct-tab ${activeTab === 'Employer' ? 'active' : ''}`} onClick={() => handleTabClick('Employer')}>
                    Recruiter
                  </li>
                </ul>
 
                <div className="content-tab">
                  <div className="inner" style={{ display: activeTab === 'Candidate' ? 'block' : 'none' }}>
                    <form onSubmit={handleCandidateSubmit}>
                      <div className="ip">
                        <label>Email Address<span>*</span></label>
                        <input
                  type="text"
                  placeholder="Email"
                  value={candidateEmail}
                  onChange={(e) => {
                    setCandidateEmail(e.target.value);
                    setCandidateEmailError(''); // Clear the error when the input changes
                  }}
                 
                />
                        {candidateEmailError && <div className="error-message">{candidateEmailError}</div>}
                      </div>
                      <div className="ip">
                        <label>Password<span>*</span></label>
                        <div className="inputs-group auth-pass-inputgroup">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={candidatePassword}
                            onChange={(e) => {
                              setCandidatePassword(e.target.value);
                               setCandidatePasswordError(''); // Clear the error when the input changes
                                }}
                           
                       />
                          <div className="password-toggle-icon" onClick={handleTogglePassword} id="password-addon">
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                          </div>
                        </div>
                        {candidatePasswordError && <div className="error-message">{candidatePasswordError}</div>}
                      </div>
                      <div className="group-ant-choice">
                        <div className="sub-ip"></div>
                        <a href="/applicant-forgot-password" className="forgot">
                          Forgot password?
                        </a>
                      </div>
                      <button type="submit">Login</button>
                      {errorMessage && <div className="error-message">{errorMessage}</div>}
                      <div className="sign-up">
                        Not registered yet? <a href="/register">Sign Up</a>
                      </div>
                    </form>
                  </div>
 
                  <div className="inner" style={{ display: activeTab === 'Employer' ? 'block' : 'none' }}>
                    <form onSubmit={handleRecruiterSubmit}>
                      <div className="ip">
                        <label>Email Address<span>*</span></label>
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
                        <label>Password<span>*</span></label>
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
                        <div className="sub-ip"></div>
                        <a href="/recruiter-forgot-password" className="forgot">
                          Forgot password?
                        </a>
                      </div>
                      <button type="submit">Login</button>
                      {errorMessage && <div className="error-message">{errorMessage}</div>}
                      <div className="sign-up">
                        Not registered yet? <a href="/register">Sign Up</a>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default LoginBody;