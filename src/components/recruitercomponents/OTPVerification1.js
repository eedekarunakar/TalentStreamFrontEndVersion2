import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApplicantAPIService, { apiUrl } from '../../services/ApplicantAPIService';

const OTPVerification1 = ({ email, onOTPVerified, recruiterOTPVerifyingInProgress, setRecruiterOTPVerifyingInProgress }) => {
  const [otp, setOTP] = useState('');
  const [verificationError, setVerificationError] = useState('');
  const [otpVerified, setOTPVerified] = useState(false); // New state

  const handleVerifyOTP = async () => {
    try {
      setRecruiterOTPVerifyingInProgress(true); // Start verifying process
      // Send the entered OTP to the backend for verification
      await axios.post(`${apiUrl}/forgotpassword/recuriterverify-otp`, { email, otp });
      setOTPVerified(true); // Set OTP verified state to true
      onOTPVerified(); // Notify parent component
    } catch (error) {
      setVerificationError('Invalid OTP. Please try again.');
    } finally {
      setRecruiterOTPVerifyingInProgress(false); // Finish verifying process
    }
  };

  useEffect(() => {
    if (otpVerified) {
      setRecruiterOTPVerifyingInProgress(false); // Ensure verifying spinner is hidden when OTP is verified
    }
  }, [otpVerified]);

  // If OTP is verified, show success message
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
      {verificationError && (
        <div className="error-message">{verificationError}</div>
      )}
    </div>
  );
};

export default OTPVerification1;
