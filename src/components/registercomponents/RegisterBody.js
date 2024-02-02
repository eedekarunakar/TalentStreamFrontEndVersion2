import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { googleAPIUrl } from '../../services/ExternalAPIService';
import { useGoogleLogin } from '@react-oauth/google'; // Import GoogleLoginButton
import { useUserContext } from '../common/UserProvider';
import OTPVerification from '../applicantcomponents/OTPVerification';
import OTPVerification1 from '../recruitercomponents/OTPVerification1';
import jwt_decode from "jwt-decode";
import ApplicantAPIService,{ apiUrl } from '../../services/ApplicantAPIService';

function RegisterBody({handleLogin}) {
  // const { setUserType } = useContext(UserContext);
  // const { setUser } = useContext(UserContext);
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
  const [allFieldsDisabled, setAllFieldsDisabled] = useState(false);
  const [resendOtpMessage, setResendOtpMessage] = useState('');
  const { setUser, setUserType } = useUserContext();
  
 
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
      const response=await axios.post(`${apiUrl}/applicant/applicantsendotp`, { email: candidateEmail , mobilenumber: candidateMobileNumber});
      console.log("email is:", candidateEmail);
      setCandidateOTPSent(true);
      setCandidateOTPSendingInProgress(false); // Use setCandidateOTPSendingInProgress
      if (response.data === "Email already registered recruiter"){
        setCandidateOTPSent(false);
     
        window.alert('Email already registered as recruiter, please try to login');
       }
       if(response.data === ('Email already registered as applicant')){
        setCandidateOTPSent(false);
     
        window.alert('Email already registered as candidate, please try to login');
       }
       if(response.data === "Mobile number already existed in recruiter"){
        setCandidateOTPSent(false);
     
        window.alert('Mobile number already existed as recruiter');
       }
       if(response.data === 'Mobile number already existed in applicant'){
        setCandidateOTPSent(false);
     
        window.alert('Mobile number already existed as candidate');
       }
    } catch (error) {
      console.error('Error sending OTP:', error);
     
 
      if (error.response && error.response.status === 400) {
        // Assuming 400 status code indicates that the email is already registered
        window.alert('Email is already registered.');
      } else {
        // Handle other errors as needed
        window.alert('An error occurred while sending OTP.');
      }
 
      setCandidateOTPSendingInProgress(false);
    }
   
  };
 
  const handleSendOTP1 = async () => {
    if (!isFormValid1()) {
      setAllErrors(true);
      return; // Do not proceed with registration if form is invalid
    }
 
    try {
      setRecruiterOTPSendingInProgress(true); // Use setRecruiterOTPSendingInProgress
      const response = await axios.post(`${apiUrl}/recuriters/registration-send-otp`, { email: employerEmail, mobilenumber : employerMobileNumber });
      setRecruiterOTPSent(true);
      setRecruiterOTPSendingInProgress(false); // Use setRecruiterOTPSendingInProgress
      if (response.data === "Email already registered recruiter"){
        setRecruiterOTPSent(false);
     
        window.alert('Email already registered as recruiter, please try to login');
       }
       if(response.data === ('Email already registered as applicant')){
        setRecruiterOTPSent(false);
     
        window.alert('Email already registered as candidate, please try to login');
       }
       if(response.data === "Mobile number already existed in recruiter"){
        setRecruiterOTPSent(false);
     
        window.alert('Mobile number already existed as recruiter');
       }
       if(response.data === 'Mobile number already existed in applicant'){
        setRecruiterOTPSent(false);
     
        window.alert('Mobile number already existed as candidate');
       }
    } catch (error) {
      console.error('Error sending OTP:', error);
     
 
      if (error.response && error.response.status === 400) {
        // Assuming 400 status code indicates that the email is already registered
        window.alert('Email is already registered.');
      } else {
        // Handle other errors as needed
        window.alert('An error occurred while sending OTP.');
      }
 
      setRecruiterOTPSendingInProgress(false); // Use setRecruiterOTPSendingInProgress
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
     if (response.data === 'Email is already registered.') {
        window.alert('Email is already registered.');
      }
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
    if (!fullName.trim()) {
      return 'Full name is required.';
    }
 
    if (!/^[a-zA-Z\s]+$/.test(fullName)) {
      return 'Please enter a valid full name and should not have any numbers and special char.';
    }
 
    if (fullName.trim().length < 3) {
      return 'Full name should be at least three characters long.';
    }
    return '';
  };
  const isCompanyNameValid = (companyName) => {
    if (!companyName.trim()) {
      return 'Company name is required.';
    }
 
    if (!/^[a-zA-Z\s]+$/.test(companyName)) {
      return 'Please enter a valid company name and should not have any numbers and special char.';
    }
    if (companyName.trim().length < 3) {
      return 'Company name should be at least three characters long.';
    }
    return '';
  };
 
  const isEmailValid = (email) => {
 
    if (!email.trim()) {
      return 'Email is required.';
    }
 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? '' : 'Please enter a valid email address.';
  };
 
  
  const isEmailValid1 = (email) => {
    if (!email.trim()) {
      return 'Email is required.';
    }
 
    const excludedDomains = [
      'gmail.com',
      'yahoo.com',
      'outlook.com',
      'aol.com',
      'mail.com',
      'icloud.com',
      'zoho.com',
      'yandex.com',
      'protonmail.com',
      'tutanota.com',
    ];
 
    const domain = email.split('@')[1];
    if (excludedDomains.includes(domain)) {
      return 'Please enter your official email ID.';
    }
 
    return '';
  };

  const isPasswordValid = (password) => {
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
 
  const isMobileNumberValid = (mobilenumber) => {
    if (!mobilenumber.trim()) {
      return 'Mobile number is required.';
    }
 
    if (!/^\d+$/.test(mobilenumber)) {
      return 'Mobile number must contain only numeric digits.';
    }
 
    if (mobilenumber.length !== 10) {
      return 'Mobile number must have a specific length (e.g., 10 digits).';
    }
 
    if (/\s/.test(mobilenumber)) {
      return 'Mobile number cannot contain spaces.';
    }
 
    const firstDigit = mobilenumber.charAt(0);
    if (!['6', '7', '8', '9'].includes(firstDigit)) {
      return 'Mobile number should begin with 6, 7, 8, or 9.';
    }
 
    return '';
  };
 
  const isFormValid = () => {
    setAllErrors(false); // Reset the allErrors state
 
    const nameError = isFullNameValid(candidateName);
    const emailError = isEmailValid(candidateEmail);
    const mobileNumberError = isMobileNumberValid(candidateMobileNumber);
    const passwordError = isPasswordValid(candidatePassword);
 
    setCandidateNameError(nameError);
    setCandidateEmailError(emailError);
    setCandidateMobileNumberError(mobileNumberError);
    setCandidatePasswordError(passwordError);
 
    return !(nameError || emailError || mobileNumberError || passwordError);
  };
 
  const isFormValid1 = () => {
    setAllErrors(false); // Reset the allErrors state
 
    const nameError = isCompanyNameValid(companyName);
    const emailError = isEmailValid1(employerEmail);
    const mobileNumberError = isMobileNumberValid(employerMobileNumber);
    const passwordError = isPasswordValid(employerPassword);
 
    setEmployerNameError(nameError);
    setEmployerEmailError(emailError);
    setEmployerMobileNumberError(mobileNumberError);
    setEmployerPasswordError(passwordError);
 
    return !(nameError || emailError || mobileNumberError || passwordError);
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
        navigate('/login', { state: { registrationSuccess: true } });
      }
    } catch (error) {
      setErrorMessage('Registration failed. Please try again later.');
      window.alert('Registration failed! or User with this email already exists.');
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
  const handleOTPSendSuccess = () => {
    // Handle success, e.g., show a success message
   window.alert('OTP Resend successfully');
   setResendOtpMessage('OTP Resent successfully. Check your email.');
  };
  const handleOTPSendFail = () => {
   
   window.alert('Failed to Resend OTP. Please try again.');
   setResendOtpMessage('Failed to Resent OTP. Please try again.');
  };

  // const login = useGoogleLogin({
  //   onSuccess: async (response) => {
  //     try{
  //      const res = await axios.get(
  //       "https://www.googleapis.com/oauth2/v3/userinfo",
  //       {
  //         headers:{
  //         Authorization:`Bearer ${response.access_token}`,
  //         },
  //       }
  //      )
   
  //  console.log(res);
  //  navigate('/applicanthome');
  //  }
  //  catch(err){
  //  console.log(err);
  //  }  
  //  },
  // });

  const login = useGoogleLogin({
    // clientId: "435586738795-9tuq57be4e92djg8d8ol1sn1h6a9mm6c.apps.googleusercontent.com", // Pass the clientId here
    onSuccess: async (response) => {
      try {
        console.log('First API');
        // const res = await axios.get(
        //   "https://www.googleapis.com/oauth2/v3/userinfo",
        const res = await axios.get(`${googleAPIUrl}`,
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log(res);
        const email1 = res.data.email;
        console.log('Second API');
        let loginEndpoint = `${apiUrl}/applicant/applicantLogin`;
        // let loginEndpoint = `${apiUrl}/applicant/saveApplicant`;
        // saveApplicant
        const response1 = await axios.post(loginEndpoint, {
          email: email1,
        });
        
        console.log(response1);
        if (response1.status === 200) {
          setErrorMessage('');
          const userData = response1.data; // Change `response` to `response1`
          console.log('This is response: ', userData);
          console.log('This is token: ', userData.data.jwt);
          localStorage.setItem('jwtToken', userData.data.jwt);
   
          let userType1;
          if (userData.message.includes('ROLE_JOBAPPLICANT')) {
            userType1 = 'jobseeker';
          } else if (userData.message.includes('ROLE_JOBRECRUITER')) {
            userType1 = 'employer';
          } else {
            userType1 = 'unknown';
          }
          console.log('This userType: ', userType1);
          localStorage.setItem('userType', userType1);
   
          setErrorMessage('');
          // handleLogin();
   
          setUser(userData);
          setUserType(userType1); // Change `userData.userType` to `userType1`
          console.log('Login successful', userData);
   
          navigate('/applicanthome');
         
        }
      } catch (err) {
        console.log(err);
      }
    },
  });
  
  return (
    <div>
    {/* <section className="bg-f5">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-title">
              <div className="widget-menu-link">
                <ul>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
 
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
                      disabled={allFieldsDisabled}
                    />
                    {candidateNameError && <div className="error-message">{candidateNameError}</div>}
                  </div>
                  <div className="ip">
                    <label>Email Address<span>*</span></label>
                 
                <input
                  type="email"
                  placeholder="Email"
                  value={candidateEmail}
                  onChange={(e) => {
                    setCandidateEmail(e.target.value);
                    setCandidateEmailError(''); // Clear the error when the input changes
                  }}
                  required
                  disabled={allFieldsDisabled}
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
                      disabled={allFieldsDisabled}
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
                        disabled={allFieldsDisabled}
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
            onOTPVerified={() => {
              setCandidateOTPVerified(true);
              setAllFieldsDisabled(true);
            }}
            onOTPSendSuccess={handleOTPSendSuccess}
            onOTPSendFail={handleOTPSendFail}
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
        <br></br><br></br>
        {/* <button onClick={() => login()}>Sign in with Google 🚀</button> */}
        <a href="#" class="btn-social" onClick={() => login()}> <img src="images/review/google.png" alt="images" /> Continue with Google</a>
        <a href="#" class="btn-social" onClick={() => login()}> <img src="data:image/png;base64,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" alt="LinkedIn" style={{ width: "25px", height: "25px" }} /> Continue with LinkedIn
                   </a>
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
                      disabled={allFieldsDisabled}
                    />
                     {employerNameError && <div className="error-message">{employerNameError}</div>}
                  </div>
                  <div className="ip">
                    <label>Email Address<span>*</span></label>
                    <input
                      type="email"
                      placeholder="Email"
                      value={employerEmail}
                     
                      onChange={(e) => {
                        setEmployerEmail(e.target.value);
                        setEmployerEmailError(''); // Clear the error when the input changes
                      }}
                      disabled={allFieldsDisabled}
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
                      disabled={allFieldsDisabled}
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
                        disabled={allFieldsDisabled}
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
            onOTPVerified={() => {
              setRecruiterOTPVerified(true);
              setAllFieldsDisabled(true);
            }}
            onOTPSendSuccess={handleOTPSendSuccess}
            onOTPSendFail={handleOTPSendFail}
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