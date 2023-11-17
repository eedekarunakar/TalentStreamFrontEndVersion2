import React, { useState } from 'react';
import ApplicantAPIService,{ apiUrl } from '../../services/ApplicantAPIService';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import OTPVerification from '../applicantcomponents/OTPVerification';
import OTPVerification1 from '../recruitercomponents/OTPVerification1';
function RegisterBody() {
  const [activeTab, setActiveTab] = useState('Candidate');
  const navigate = useNavigate();
  const [otpSent, setOTPSent] = useState(false); // Track whether OTP is sent
  const [otpVerified, setOTPVerified] = useState(false);
  const [name, setName] = useState('');
  const [companyname, setCompanyname] = useState('');
  const [email, setEmail] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // New state variable
  const [registrationInProgress, setRegistrationInProgress] = useState(false);
  const [otpSendingInProgress, setOTPSendingInProgress] = useState(false); // New state variable for sending OTP
  const [otpVerifyingInProgress, setOTPVerifyingInProgress] = useState(false); // New state variable for verifying OTP 

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSendOTP = async () => {
    try {
      setOTPSendingInProgress(true); // Set sending OTP in progress
      await axios.post(`${apiUrl}/applicant/applicantsendotp`, { email });
      setOTPSent(true);
      setOTPSendingInProgress(false); // Clear sending OTP in progress
    } catch (error) {
      console.error('Error sending OTP:', error);
      setOTPSendingInProgress(false); // Clear sending OTP in progress in case of error
    }
  };

  const handleSendOTP1 = async () => {
    if (!isFormValid()) {
      return; // Do not proceed with registration if form is invalid
    }

    try {
      setOTPSendingInProgress(true); // Set sending OTP in progress
     const response= await axios.post(`${apiUrl}/recuriters/registration-send-otp`, { email });
      setOTPSent(true);
      setOTPSendingInProgress(false); // Clear sending OTP in progress
      if(response.body==='Email is already  registered.'){
        window.alert('Email is already  registered.');
       }
    
    } catch (error) {
      console.error('Error sending OTP:', error);
      setOTPSendingInProgress(false); // Clear sending OTP in progress in case of error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      return; // Do not proceed with registration if form is invalid
    }

    try {
      setRegistrationInProgress(true);
      // Send the form data to the backend server using Axios POST request
      const response = await axios.post(`${apiUrl}/applicant/saveApplicant`, {
        name,
        email,
        mobilenumber,
        password,
      });

      // Clear any previous error messages if the registration is successful
      // If OTP is sent, render OTPVerification component
      
      setErrorMessage('');
      setRegistrationSuccess(true);

      
      // Handle the response from the server (e.g., show a success message)
      console.log('Registration successful', response.data);
      // Show a window alert for successful registration
      setName('');
      setEmail('');
      setMobilenumber('');
      setPassword('');
      setRegistrationInProgress(false);

      // Use the navigate function to navigate to the home screen
      if (otpSent && otpVerified) {
        navigate('/login', { state: { registrationSuccess: true } });
      }
    } catch (error) {
      // Handle registration errors (e.g., show an error message)
      setErrorMessage('Registration failed. Please try again later.');
      setRegistrationInProgress(false);
      window.alert('Registration failed! user with this email already exist');
      console.error('Registration failed', error);
    }

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

    const firstDigit = mobilenumber.charAt(0);
  if (!['6', '7', '8', '9'].includes(firstDigit)) {
    return false;
  }
    return true;
  };
  const isFormValid = () => {
    if (!isEmailValid(email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    if (!isMobileNumberValid(mobilenumber)) {
      setErrorMessage('Please enter a valid 10-digit mobile number & should begin with 6 or 7 or 8 or 9.');
      return false;
    }
    if (!isPasswordValid(password)) {
      setErrorMessage('Password must be at least 6 characters long and should have one cpital letter and one small letter and no spaces are allowed.');
      return false;
    }

    return true;
    
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();

   
    try {
      setRegistrationInProgress(true);
      const response = await axios.post(`${apiUrl}/recuriters/saverecruiters`, {
       
        companyname, 
        mobilenumber,
        email,
        password,
      });

      setErrorMessage('');
      setRegistrationSuccess(true);

      console.log('Registration successful', response.data);
      
      setRegistrationInProgress(false);
      if (otpSent && otpVerified) {
          
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
            {errorMessage && <div className="error-message">{errorMessage}</div>}
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="ip">
                    <label>Email address<span>*</span></label>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="ip">
                    <label>Mobile Number<span>*</span></label>
                    <input
                      type="text"
                      placeholder="Mobile Number"
                      value={mobilenumber}
                      onChange={(e) => setMobilenumber(e.target.value)}
                    />
                  </div>
                  <div className="ip">
                    <label>Password<span>*</span></label>
                    <div className="inputs-group auth-pass-inputgroup">
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  {otpSent && !otpVerified ? (
  <div>
    <p style={{ color: 'green' }}>OTP sent to your email. Please check and enter below:</p>
    <OTPVerification
            email={email}
            onOTPVerified={() => setOTPVerified(true)}
            otpVerifyingInProgress={otpVerifyingInProgress}
            setOTPVerifyingInProgress={setOTPVerifyingInProgress}
          />
    <button
      type="button"
      onClick={handleSendOTP}
      disabled={otpSent || registrationInProgress || otpSendingInProgress}
    >
      {otpSendingInProgress ? (
        
        <div className="spinner"></div>
       
      ) : (
        <div></div>
      )}
    </button>
  </div>
) : (
  <div>
    {otpVerified ? (
      <div style={{ color: 'green' }}>
        <p >OTP verified successfully! Click on Register to proceed</p>
      </div>
    ) : (
      <div>
        <div className="helpful-line">Click on send OTP to verify your email</div>
        <button
          type="button"
          onClick={handleSendOTP}
          disabled={otpSent || registrationInProgress || otpSendingInProgress}
        >
          {otpSendingInProgress ? (
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

{otpVerified && (
  <button type="submit">
    {registrationInProgress ? (
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
                            value={companyname}
                             onChange={(e) => setCompanyname(e.target.value)}
                    />
                  </div>
                  <div className="ip">
                    <label>Email address<span>*</span></label>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="ip">
                    <label>Mobile Number<span>*</span></label>
                    <input
                      type="text"
                      placeholder="Mobile Number"
                      value={mobilenumber}
                      onChange={(e) => setMobilenumber(e.target.value)}
                    />
                  </div>
                  <div className="ip">
                    <label>Password<span>*</span></label>
                    <div className="inputs-group auth-pass-inputgroup">
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  {otpSent && !otpVerified ? (
  <div>
    <p style={{ color: 'green' }}>OTP sent to your email. Please check and enter below:</p>
    <OTPVerification1
            email={email}
            onOTPVerified={() => setOTPVerified(true)}
            otpVerifyingInProgress={otpVerifyingInProgress}
            setOTPVerifyingInProgress={setOTPVerifyingInProgress}
          />
    <button
      type="button"
      onClick={handleSendOTP}
      disabled={otpSent || registrationInProgress || otpSendingInProgress}
    >
      {otpSendingInProgress ? (
        
        <div className="spinner"></div>
       
      ) : (
        <div></div>
      )}
    </button>
  </div>
) : (
  <div>
    {otpVerified ? (
      <div style={{ color: 'green' }}>
        <p>OTP verified successfully! Click on Register to proceed</p>
      </div>
    ) : (
      <div>
        
        <button
          type="button"
          onClick={handleSendOTP1}
          disabled={otpSent || registrationInProgress || otpSendingInProgress}
        >
          {otpSendingInProgress ? (
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

{otpVerified && (
  <button type="submit">
    {registrationInProgress ? (
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
