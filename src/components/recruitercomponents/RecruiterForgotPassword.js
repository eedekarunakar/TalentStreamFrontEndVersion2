import React, { useState } from 'react';
import { useUserContext } from '../common/UserProvider';
import axios from 'axios';
import ApplicantAPIService,{ apiUrl } from '../../services/ApplicantAPIService';

function RecruiterForgotPassword() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState(''); // New password field
    const [confirmedPassword, setConfirmedPassword] = useState(''); // Confirm password field
    const [resetSuccess, setResetSuccess] = useState(false);
    const [resetError, setResetError] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(true); // Track password validation
  
    const validatePassword = (value) => {
      // Password must be at least 6 characters long
      const isLengthValid = value.length >= 6;
  
      // Password must contain at least one uppercase letter
      const hasUppercase = /[A-Z]/.test(value);
  
      // Password must contain at least one special character (non-alphanumeric)
      const hasSpecialChar = /[^A-Za-z0-9]/.test(value);
  
      // Password cannot contain spaces
      const hasNoSpaces = !/\s/.test(value);
  
      const isValid = isLengthValid && hasUppercase && hasSpecialChar && hasNoSpaces;
  
      setIsPasswordValid(isValid);
  
      return isValid;
    };
  
    const handleSendOTP = async () => {
      try {
        // Send a request to the server to send an OTP to the provided email
        const response = await axios.post(`${apiUrl}/forgotpassword/recuritersend-otp`, { email });
  
        if (response.data === 'OTP sent successfully') {
          setOtpSent(true);
          setResetSuccess(false);
          setResetError('');
        } else {
          setOtpSent(false);
          setOtpVerified(false);
          setResetError('User with given Email Id was not found in the system');
        }
      } catch (error) {
        console.error('Error sending OTP:', error);
        setOtpSent(false);
        setOtpVerified(false);
        setResetError('Enter valid email address');
      }
    };
  
    const handleVerifyOTP = async () => {
      try {
        // Send a request to the server to verify the OTP
        const response = await axios.post(`${apiUrl}/forgotpassword/recuriterverify-otp`, { email, otp });
  
        if (response.data === 'OTP verified successfully') {
          setOtpVerified(true);
          setResetError('');
        } else {
          setOtpVerified(false);
          setResetError('OTP verification failed. Please enter a valid OTP.');
        }
      } catch (error) {
        console.error('Error verifying OTP:', error);
        setOtpVerified(false);
        setResetError('OTP verification failed. Please enter a valid OTP.');
      }
    };
  
    const handleResetPassword = async () => {
  
      if (password !== confirmedPassword) {
        setResetSuccess(false);
        setResetError('Passwords do not match. Please make sure the passwords match.');
        return;
      }
      
  // Validate the password as the user types
  if (!validatePassword(password)) {
    setResetSuccess(false);
    setResetError('Password Should not be empty.');
    return;
  }
  
      try {
        // Send a request to the server to reset the password with the new password
        const response = await axios.post(`${apiUrl}/forgotpassword/recuriterreset-password/set-new-password/${email}`, {
        
          password,
          confirmedPassword,
          
        });
  
        if (response.data === 'Password reset was done successfully') {

          setResetSuccess(true);
          console.log("Api is called");
          setResetError('');
        } else {
          setResetSuccess(false);
          setResetError('Password reset failed. Please try again later.');
        }
      } catch (error) {
        console.error('Error resetting password:', error);
        setResetSuccess(false);
        setResetError('An error occurred. Please try again later.');
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
                    <li><a href="/">Home</a></li>
                    <li><a href="/recruiter-forgot-password">Fogot Password</a></li>
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
                {resetSuccess ? (
                  <div className="success-message">
                    <h5>Password reset was done successfully. Please click on <a href="/recruiterlogin" style={{color:'blue'}}>Login</a> to continue</h5>
                  </div>
                ) : (
                  <div>
                    <h5>Recruiter Forgot Password</h5><br />
                      <div className="ip">
                      <label>
                    Email address<span>*</span>
                  </label>
                  <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
                      </div>
                      {otpSent ? (
                        otpVerified ? (
                          <div>
                             <div className="ip">
                            <input
                              type="password"
                              placeholder="New Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                           </div>
                           <div className="ip">
                            <input
                              type="password"
                              placeholder="Confirm New Password"
                              value={confirmedPassword}
                              onChange={(e) => setConfirmedPassword(e.target.value)}
                            />
                            </div>
                            <div className="helpful-line">
                              Password must be at least 6 characters long, contain one uppercase letter,
                              one lowercase letter, one number, one special character, and no spaces.
                            </div>
  
                            <button type="button" onClick={handleResetPassword}>Reset Password </button>
                            <p style={{ color: 'green' }}>OTP verified successfully!</p>
                          </div>
                        ) : (
                          <div>
                            <input
                              type="text"
                              placeholder="Enter OTP"
                              value={otp}
                              onChange={(e) => setOtp(e.target.value)}
                            />
                            <button type="button" onClick={handleVerifyOTP}>
                              Verify OTP
                            </button>
                          </div>
                        )
                      ) : (
                        <button type="button" onClick={handleSendOTP}>
                          Send OTP
                        </button>
                      )}
                      {resetError && <div className="error-message">{resetError}</div>}
                    
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
  
}

export default RecruiterForgotPassword;
