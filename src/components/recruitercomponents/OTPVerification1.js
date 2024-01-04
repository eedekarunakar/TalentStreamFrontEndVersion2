import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApplicantAPIService, { apiUrl } from '../../services/ApplicantAPIService';
 
const OTPVerification1 = ({ email, onOTPVerified, onOTPSendSuccess, onOTPSendFail, recruiterOTPVerifyingInProgress, setRecruiterOTPVerifyingInProgress }) => {
  const [otp, setOTP] = useState('');
  const [verificationError, setVerificationError] = useState('');
  const [otpVerified, setOTPVerified] = useState(false); // New state
  const [otpResendTimer, setOTPResendTimer] = useState(60); // 2 minutes timer
  const [resendButtonDisabled, setResendButtonDisabled] = useState(true);
  const handleVerifyOTP = async () => {
    try {
      setRecruiterOTPVerifyingInProgress(true); // Start verifying process
      // Send the entered OTP to the backend for verification
      await axios.post(`${apiUrl}/forgotpassword/recuriterverify-otp`, { email, otp });
      setOTPVerified(true); // Set OTP verified state to true
      onOTPVerified(); // Notify parent component
    } catch (error) {
      setVerificationError('Invalid OTP. Please try again.');
      setOTPResendTimer(0);
     
      setResendButtonDisabled(false);
    } finally {
      setRecruiterOTPVerifyingInProgress(false); // Finish verifying process
   
    }
  };
  const handleResendOTP = async () => {
    try {
      setResendButtonDisabled(true);
      await axios.post(`${apiUrl}/applicant/applicantsendotp`, { email });
      setOTPResendTimer(60); // Reset the timer
      onOTPSendSuccess();
      setVerificationError('');
    } catch (error) {
      console.error('Error resending OTP:', error);
      onOTPSendFail();
      setVerificationError('');
    }
  };
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setOTPResendTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);
 
    return () => {
      clearInterval(timerInterval);
    };
  }, []);
 
  useEffect(() => {
    if (otpResendTimer === 0) {
      setResendButtonDisabled(false);
    }
  }, [otpResendTimer]);
 
 
 
  if (otpVerified) {
    return (
      <div className="otp-verification">
        <p>OTP verified successfully!</p>
      </div>
    );
  }
 
  return (
    <div className="otp-verification">
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOTP(e.target.value)}
      />
      <button type="button" onClick={handleVerifyOTP}>
        {recruiterOTPVerifyingInProgress ? (
          <div className="spinner"></div>
        ) : (
          'Verify OTP'
        )}
      </button>
      {otpResendTimer > 0 ? (
        <div style={{ color: 'red' }}>
          Please verify OTP within {otpResendTimer} seconds.
        </div>
      ) : (
        <div>        
          <button type="button" onClick={handleResendOTP} disabled={resendButtonDisabled}>
            Resend OTP
          </button>
        </div>
      )}
      {verificationError && (
        <div className="error-message">{verificationError}</div>
      )}
    </div>
  );
};
 
export default OTPVerification1;