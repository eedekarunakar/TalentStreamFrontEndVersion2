import React, { useState } from 'react';
import ApplicantAPIService,{ apiUrl } from '../../services/ApplicantAPIService';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import OTPVerification from '../applicantcomponents/OTPVerification';
import OTPVerification1 from '../recruitercomponents/OTPVerification1';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
 
function RegisterBody() {
  const [activeTab, setActiveTab] = useState('Candidate');
  const navigate = useNavigate();
 
   // Candidate form state
   const [candidateName, setCandidateName] = useState('');
   const [candidateEmail, setCandidateEmail] = useState('');
   const [candidateMobileNumber, setCandidateMobileNumber] = useState('');
   const [candidatePassword, setCandidatePassword] = useState('');
 
   // Employer form state
   const [companyName, setCompanyName] = useState('');
   const [employerEmail, setEmployerEmail] = useState('');
   const [employerMobileNumber, setEmployerMobileNumber] = useState('');
   const [employerPassword, setEmployerPassword] = useState('');
 
  const [errorMessage, setErrorMessage] = useState('');
 
  // Inside your component function
const [allErrors, setAllErrors] = useState(false);
  // Inside your component function
const [candidateNameError, setCandidateNameError] = useState('');
const [candidateEmailError, setCandidateEmailError] = useState('');
const [candidateMobileNumberError, setCandidateMobileNumberError] = useState('');
const [candidatePasswordError, setCandidatePasswordError] = useState('');
 
const [employerNameError, setEmployerNameError] = useState('');
const [employerEmailError, setEmployerEmailError] = useState('');
const [employerMobileNumberError, setEmployerMobileNumberError] = useState('');
const [employerPasswordError, setEmployerPasswordError] = useState('');
 
 
 
 
  // Recruiter OTP state
  const [recruiterOTPSent, setRecruiterOTPSent] = useState(false);
  const [recruiterOTPVerified, setRecruiterOTPVerified] = useState(false);
  const [recruiterOTPVerifyingInProgress, setRecruiterOTPVerifyingInProgress] = useState(false);
  const [recruiterRegistrationSuccess, setRecruiterRegistrationSuccess] = useState(false);
  const [recruiterRegistrationInProgress, setRecruiterRegistrationInProgress] = useState(false);
 
  const [recruiterOTPSendingInProgress, setRecruiterOTPSendingInProgress] = useState(false);
 
  const [showPassword, setShowPassword] = useState(false);
 
  // Candidate OTP state
  const [candidateOTPSent, setCandidateOTPSent] = useState(false);
  const [candidateOTPVerified, setCandidateOTPVerified] = useState(false);
  const [candidateOTPVerifyingInProgress, setCandidateOTPVerifyingInProgress] = useState(false);
 
const [candidateOTPSendingInProgress, setCandidateOTPSendingInProgress] = useState(false);
 
  const [candidateRegistrationSuccess, setCandidateRegistrationSuccess] = useState(false);
  const [candidateRegistrationInProgress, setCandidateRegistrationInProgress] = useState(false);
 
 
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
 
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
 
  const handleSendOTP = async () => {
    if (!isFormValid()) {
      setAllErrors(true);
      return; // Do not proceed with registration if form is invalid
    }
    try {
      setCandidateOTPSendingInProgress(true); // Use setCandidateOTPSendingInProgress
      console.log("email is:", candidateEmail);
      await axios.post(`${apiUrl}/applicant/applicantsendotp`, { email: candidateEmail });
      console.log("email is:", candidateEmail);
      setCandidateOTPSent(true);
      setCandidateOTPSendingInProgress(false); // Use setCandidateOTPSendingInProgress
    } catch (error) {
      console.error('Error sending OTP:', error);
      setCandidateOTPSendingInProgress(false); // Use setCandidateOTPSendingInProgress
      window.alert('Email is already registered.');
    }
  };
 
  const handleSendOTP1 = async () => {
    if (!isFormValid1()) {
      setAllErrors(true);
      return; // Do not proceed with registration if form is invalid
    }
 
    try {
      setRecruiterOTPSendingInProgress(true); // Use setRecruiterOTPSendingInProgress
      const response = await axios.post(`${apiUrl}/recuriters/registration-send-otp`, { email: employerEmail });
      setRecruiterOTPSent(true);
      setRecruiterOTPSendingInProgress(false); // Use setRecruiterOTPSendingInProgress
      if (response.data === 'Email is already registered.') {
        window.alert('Email is already registered.');
      }
      if (response.data === 'Mobile number already existed, enter a new mobile number') {
        window.alert('Mobile Number is already registered.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      setRecruiterOTPSendingInProgress(false); // Use setRecruiterOTPSendingInProgress
      window.alert('Email is already registered.');
    }
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!isFormValid()) {
      return;
    }
  
    //let response = null;
  
    try {
      
      setCandidateRegistrationInProgress(true);
      const response = await axios.post(`${apiUrl}/applicant/saveApplicant`, {
        name: candidateName,
        email: candidateEmail,
        mobilenumber: candidateMobileNumber,
        password: candidatePassword,
      });
     
      setErrorMessage('');
      setCandidateRegistrationSuccess(true);
  
      console.log('Registration successful', response.data);
      
      setCandidateName('');
      setCandidateEmail('');
      setCandidateMobileNumber('');
      setCandidatePassword('');
      setCandidateRegistrationInProgress(false);

      if (candidateOTPSent && candidateOTPVerified) {
        navigate('/login', { state: { registrationSuccess: true } });
      }
    } catch (error) {
      
      setErrorMessage('Registration failed. Please try again later.');
      setCandidateRegistrationInProgress(false);
  
        console.error('Registration failed', error);
        if (error.response && error.response.status === 400) {
          if (error.response.data === 'Email already registered') {
            window.alert('Registration failed! User with this email already exists');
          } else if (error.response.data === 'Mobile number already existed') {
            window.alert('Registration failed! Mobile number already exists');
          }
        }
      
    }
  };
  
  const isFullNameValid = (fullName) => {
    // Full name must not be empty
    if (!fullName.trim()) {
      return false;
    }
 
    // Check if the full name contains only alphabetic characters and spaces
    if (!/^[a-zA-Z\s]+$/.test(fullName)) {
      return false;
    }
 
    // Additional validation logic can be added if needed
 
    return true;
  };
 
const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
 
  const isPasswordValid = (password) => {
    // Password must be at least 6 characters long
    if (password.length < 6) {
      return false;
    }
 
    // Password must contain at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      return false;
    }
 
    // Password must contain at least one special character (non-alphanumeric)
    if (!/[^A-Za-z0-9]/.test(password)) {
      return false;
    }
 
    // Password cannot contain spaces
    if (/\s/.test(password)) {
      return false;
    }
 
    return true;
  };
 
  const isMobileNumberValid = (mobilenumber) => {
    // Mobile number must contain only numeric digits
    if (!/^\d+$/.test(mobilenumber)) {
      return false;
    }
 
    // Mobile number must have a specific length (e.g., 10 digits)
    if (mobilenumber.length !== 10) {
      return false;
    }
    // Check if the mobile number has a space
    if (/\s/.test(mobilenumber)) {
      return false;
    }
    const firstDigit = mobilenumber.charAt(0);
  if (!['6', '7', '8', '9'].includes(firstDigit)) {
    return false;
  }
    return true;
  };
  const isFormValid = () => {
    setAllErrors(false); // Reset the allErrors state
   
   
 
    if (!isFullNameValid(candidateName)) {
      setCandidateNameError('Please enter a valid full name and should not have any numbers and special char.');
      return false;
    }
    if (!isEmailValid(candidateEmail)) {
      setCandidateEmailError('Please enter a valid email address.');
      return false;
    }
    if (!isMobileNumberValid(candidateMobileNumber)) {
      setCandidateMobileNumberError('Please enter a valid 10-digit mobile number & should begin with 6 or 7 or 8 or 9.');
      return false;
    }
    if (!isPasswordValid(candidatePassword)) {
      setCandidatePasswordError('Password must be at least 6 characters long and should have one capital letter, one small, one Specal charater, one number and no spaces are allowed.');
      return false;
    }
   
 
    return true;
  };
 
 
  const isFormValid1 = () => {
    setAllErrors(false); // Reset the allErrors state
 
   
 
    if (!isFullNameValid(companyName)) {
      setEmployerNameError('Please enter a valid company name and should not have any numbers and special char.');
      return false;
    }
 
    if (!isEmailValid(employerEmail)) {
      setEmployerEmailError('Please enter a valid email address.');
      return false;
    }
 
    if (!isMobileNumberValid(employerMobileNumber)) {
      setEmployerMobileNumberError('Please enter a valid 10-digit mobile number & should begin with 6 or 7 or 8 or 9.');
      return false;
    }
 
    if (!isPasswordValid(employerPassword)) {
      setEmployerPasswordError('Password must be at least 6 characters long and should have one cpital letter, one small, one Specal charater, one number and no spaces are allowed.');
      return false;
   
    }
 
   
    return true;
  };
 
  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
    setEmployerNameError(''); // Clear the error when the input changes
  };
 
  const handleEmployerEmailChange = (e) => {
    setEmployerEmail(e.target.value);
    setEmployerEmailError(''); // Clear the error when the input changes
  };
 
  const handleEmployerMobileNumberChange = (e) => {
    setEmployerMobileNumber(e.target.value);
    setEmployerMobileNumberError(''); // Clear the error when the input changes
  };
 
  const handleEmployerPasswordChange = (e) => {
    setEmployerPassword(e.target.value);
    setEmployerPasswordError(''); // Clear the error when the input changes
  };
 
  const handleSubmit1 = async (e) => {
    e.preventDefault();
 
    if (!isFormValid1()) {
      return;
    }
 
    try {
      setRecruiterRegistrationInProgress(true);
      const response = await axios.post(`${apiUrl}/recuriters/saverecruiters`, {
        companyname: companyName,
        mobilenumber: employerMobileNumber,
        email: employerEmail,
        password: employerPassword,
      });
 
      setErrorMessage('');
      setRecruiterRegistrationSuccess(true);
 
      console.log('Registration successful', response.data);
 
      setCompanyName('');
      setEmployerEmail('');
      setEmployerMobileNumber('');
      setEmployerPassword('');
      setRecruiterRegistrationInProgress(false);
 
      if (recruiterOTPSent && recruiterOTPVerified) {
        navigate('/recruiterlogin', { state: { registrationSuccess: true } });
      }
    } catch (error) {
      setErrorMessage('Registration failed. Please try again later.');
      window.alert('Registration failed! or User with this email already exists.');
      console.error('Registration failed', error);
    }
  };
 
  return (
    <div>
    <section className="bg-f5">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-title">
              <div className="widget-menu-link">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/register">Create Account</a></li>
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
          <div className="wd-form-login tf-tab">
            <h4>Create a free account</h4>
           
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
                <form onSubmit={handleSubmit}>
                <div className="ip">
                    <label>Full Name<span>*</span></label>
                    <input
                      type="text"
                      placeholder="Name"
                      onChange={(e) => {
                        setCandidateName(e.target.value);
                        setCandidateNameError(''); // Clear the error when the input changes
                      }}
                      required
                   
                    />
                    {candidateNameError && <div className="error-message">{candidateNameError}</div>}
                  </div>
                  <div className="ip">
                    <label>Email address<span>*</span></label>
                 
                <input
                  type="email"
                  placeholder="Email"
                  value={candidateEmail}
                  onChange={(e) => {
                    setCandidateEmail(e.target.value);
                    setCandidateEmailError(''); // Clear the error when the input changes
                  }}
                  required
                />
                    {candidateEmailError && <div className="error-message">{candidateEmailError}</div>}
                  </div>
                  <div className="ip">
                    <label>Mobile Number<span>*</span></label>
                   
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    value={candidateMobileNumber}
                    onChange={(e) => {
                      setCandidateMobileNumber(e.target.value);
                      setCandidateMobileNumberError(''); // Clear the error when the input changes
                      }}
                      required
                    />
                    {candidateMobileNumberError && <div className="error-message">{candidateMobileNumberError}</div>}
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
                        required
                  />
                       <div className="password-toggle-icon" onClick={handleTogglePassword} id="password-addon">
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </div>
                 
                    </div>
                    {candidatePasswordError && <div className="error-message">{candidatePasswordError}</div>}
                  </div>
                  {candidateOTPSent && !candidateOTPVerified ? (
  <div>
    <p style={{ color: 'green' }}>OTP sent to your email. Please check and enter below:</p>
    <OTPVerification
            email={candidateEmail}
            onOTPVerified={() => setCandidateOTPVerified(true)}
            candidateOTPVerifyingInProgress={candidateOTPVerifyingInProgress}
            setCandidateOTPVerifyingInProgress={setCandidateOTPVerifyingInProgress}
          />
   
  </div>
) : (
  <div>
    {candidateOTPVerified ? (
      <div style={{ color: 'green' }}>
        <p >OTP verified successfully! Click on Register to proceed</p>
      </div>
    ) : (
      <div>
        <div className="helpful-line">Click on send OTP to verify your email</div>
        <button
          type="button"
          onClick={handleSendOTP}
          disabled={candidateOTPSent || candidateRegistrationSuccess || candidateOTPSendingInProgress}
        >
          {candidateOTPSendingInProgress ? (
             <div className="status-container">
             <div className="spinner"></div>
             <div className="status-text">Sending OTP</div>
           </div>
          ) : (
            'Send OTP'
          )}
        </button>
      </div>
    )}
  </div>
)}
 
{candidateOTPVerified && (
  <button type="submit">
    {candidateRegistrationInProgress ? (
       <div className="status-container">
       <div className="spinner"></div>
       <div className="status-text">Registering</div>
     </div>
    ) : (
      'Register'
    )}
  </button>
)}
                </form>
              </div>
            </div>
            <div className="content-tab">
              <div className="inner" style={{ display: activeTab === 'Employer' ? 'block' : 'none' }}>
                <form onSubmit={handleSubmit1}>
                <div className="ip">
                    <label>Company Name<span>*</span></label>
                    <input
                      type="text"
                      placeholder="Enter your company name"
                      value={companyName}
                      onChange={(e) => {
                        setCompanyName(e.target.value);
                        setEmployerNameError(''); // Clear the error when the input changes
                      }}
                    />
                     {employerNameError && <div className="error-message">{employerNameError}</div>}
                  </div>
                  <div className="ip">
                    <label>Email address<span>*</span></label>
                    <input
                      type="email"
                      placeholder="Email"
                      value={employerEmail}
                     
                      onChange={(e) => {
                        setEmployerEmail(e.target.value);
                        setEmployerEmailError(''); // Clear the error when the input changes
                      }}
                    />
                     {employerEmailError && <div className="error-message">{employerEmailError}</div>}
                  </div>
                  <div className="ip">
                    <label>Mobile Number<span>*</span></label>
                    <input
                      type="text"
                      placeholder="Mobile Number"
                      value={employerMobileNumber}
                     
                      onChange={(e) => {
                        setEmployerMobileNumber(e.target.value);
                        setEmployerMobileNumberError(''); // Clear the error when the input changes
                      }}
                    />
                    {employerMobileNumberError && <div className="error-message">{employerMobileNumberError}</div>}
                  </div>
                  <div className="ip">
                    <label>Password<span>*</span></label>
                    <div className="inputs-group auth-pass-inputgroup">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={employerPassword}
                       
                        onChange={(e) => {
                          setEmployerPassword(e.target.value);
                          setEmployerPasswordError(''); // Clear the error when the input changes
                        }}
                      />
 
                        <div className="password-toggle-icon" onClick={handleTogglePassword} id="password-addon">
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </div>
                    </div>
                    {employerPasswordError && <div className="error-message">{employerPasswordError}</div>}
                  </div>
                  {recruiterOTPSent && !recruiterOTPVerified ? (
  <div>
    <p style={{ color: 'green' }}>OTP sent to your email. Please check and enter below:</p>
    <OTPVerification1
            email={employerEmail}
            onOTPVerified={() => setRecruiterOTPVerified(true)}
            recruiterOTPVerifyingInProgress={recruiterOTPVerifyingInProgress}
            setRecruiterOTPVerifyingInProgress={setRecruiterOTPVerifyingInProgress}
          />
    {/* <button
      type="button"
      onClick={handleSendOTP}
      disabled={otpSent || registrationInProgress || otpSendingInProgress}
    >
      {otpSendingInProgress ? (
       
        <div className="spinner"></div>
       
      ) : (
        <div></div>
      )}
    </button> */}
  </div>
) : (
  <div>
    {recruiterOTPVerified ? (
      <div style={{ color: 'green' }}>
        <p>OTP verified successfully! Click on Register to proceed</p>
      </div>
    ) : (
      <div>
         <div className="helpful-line">Click on send OTP to verify your email</div>
        <button
          type="button"
          onClick={handleSendOTP1}
          disabled={recruiterOTPSent || recruiterRegistrationInProgress || recruiterOTPSendingInProgress}
        >
          {recruiterOTPSendingInProgress ? (
             <div className="status-container">
             <div className="spinner"></div>
             <div className="status-text">Sending OTP</div>
           </div>
          ) : (
            'Send OTP'
          )}
        </button>
      </div>
    )}
  </div>
)}
 
{recruiterOTPVerified && (
  <button type="submit">
    {recruiterRegistrationInProgress ? (
       <div className="status-container">
       <div className="spinner"></div>
       <div className="status-text">Registering</div>
     </div>
    ) : (
      'Register'
    )}
  </button>
)}
 
 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
   
  );
}
 
export default RegisterBody;