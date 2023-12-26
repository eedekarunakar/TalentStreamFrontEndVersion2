
import React, { useState } from 'react';
import { useUserContext } from '../common/UserProvider';
import axios from 'axios';
 
import ApplicantAPIService,{ apiUrl } from '../../services/ApplicantAPIService';
 
function ApplicantChangePassword() {
 
  const { user } = useUserContext();
  const [oldpassword, setoldPassword] = useState(''); // New password field
  const [newpassword, setnewPassword] = useState(''); // New password field
  const [confirmedPassword, setConfirmedPassword] = useState(''); // Confirm password field
  const [formErrors, setFormErrors] = useState(
  {oldpassword:'',
  newpassword:'',
  confirmedPassword:'',});
  const validateForm = () => {
    let isValid = true;
    const errors = {};
    if (!oldpassword.trim()) {
      errors.oldpassword = 'Old password is required.';
      isValid = false;
     
    }
    else{
      errors.oldpassword='';
    }
    if (!newpassword.trim()) {
      errors.newpassword = 'New password is required.';
      isValid = false;
    } else if (!isValidPassword(newpassword)) {
      errors.newpassword =
        'New password must be at least 6 characters long, contain one uppercase letter, one lowercase letter, one number, one special character, and no spaces.';
      isValid = false;
    } else {
      errors.newpassword = '';
    }
 
    if (!confirmedPassword.trim()) {
      errors.confirmedPassword = 'Confirm password is required.';
      isValid = false;
    } else if (newpassword !== confirmedPassword) {
      errors.confirmedPassword = 'Passwords do not match.';
      isValid = false;
    } else {
      errors.confirmedPassword = '';
    }
 
    setFormErrors(errors);
    return isValid;
  }
  const handleOldPasswordChange = (e) => {
    setoldPassword(e.target.value);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      oldpassword: '', // Clear previous error when the input changes
    }));
  };
  const handleNewPasswordChange = (e) => {
    setnewPassword(e.target.value);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      newpassword: '', // Clear previous error when the input changes
    }));
  };
 
  const handleConfirmedPasswordChange = (e) => {
    setConfirmedPassword(e.target.value);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      confirmedPassword: '', // Clear previous error when the input changes
    }));
  };
  const handleChangePassword = async (e) => {
    e.preventDefault();
    // Prepare the form data to send to the server
    if (!validateForm()) {
      return;
    }
 
    const formData = {
 
      oldpassword,
      newpassword,
      confirmedPassword,
 
    };
   
    try {
     
      // Send a request to the server to reset the password with the new password
      const response = await axios.post(`${apiUrl}/applicant/authenticateUsers/${user.id}`, {
        oldpassword,
        newpassword,
        confirmedPassword,
      });
 
      if (response.data === 'Password updated and stored') {
 
        window.alert('Password Changed Successfully');
       
      } else {
       
        window.alert('Password change failed. Old password is wrong.');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      window.alert('Error resetting password');
    }
  };
 
 // Validate password criteria
 const isValidPassword = (password) => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  return passwordRegex.test(password);
};
 
// Placeholder function for checking old password against the database
 
return (
  <div>
 
<>
<div class="dashboard__content">
<section className="page-title-dashboard">
  <div className="themes-container">
    <div className="row">
      <div className="col-lg-12 col-md-12 ">
        <div className="title-dashboard">
          <div className="title-dash flex2">Change Password</div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="flat-dashboard-password">
  <div className="themes-container">
    <div className="row">
      <div className="col-lg-12 col-md-12 ">
        <div className="change-password bg-white">
          <form>
            <div className="form-password">
              <h3>Change Password</h3>
              <div className="pass-box">
                <div className="inner info-wd">
                  <label className="title-url fs-16">Old Password<span className="color-red">*</span></label>
                  <div className="inputs-group auth-pass-inputgroup relative flex2">
                    <input
                      type="password"
                      className="input-form password-input"
                      value={oldpassword}
                      onChange={handleOldPasswordChange}
                      onBlur={() => validateForm()}
                      required=""
                    />
                   
 
                  </div>
                  {formErrors.oldpassword && (
            <div className="error-message">{formErrors.oldpassword}</div>
          )}
               
                </div>
                <div className="inner info-wd">
                  <label className="title-url fs-16">New Password <span className="color-red">*</span></label>
                  <div className="inputs-group auth-pass-inputgroup relative flex2">
                    <input
                      type="password"
                      className="input-form"
                      value={newpassword}
                      onChange={handleNewPasswordChange}
                      onBlur={() => validateForm()}
                      required=""
                    />
                 
                  </div>
                  {formErrors.newpassword && (
            <div className="error-message">{formErrors.newpassword}</div>
          )}
                </div>
                <div className="inner info-wd">
                  <label className="title-url fs-16">
                    Confirm Password<span className="color-red">*</span>
                  </label>
                  <div className="inputs-group auth-pass-inputgroup relative flex2">
                    <input
                      type="password"
                      className="input-form password-input"
                      value={ confirmedPassword}
                      onChange={handleConfirmedPasswordChange}
                      onBlur={() => validateForm()}
                      required=""
                    />
                 
 
                  </div>
                  {formErrors.confirmedPassword && (
            <div className="error-message">{formErrors.confirmedPassword}</div>
          )}
 
                </div>
                <div className="tt-button submit">
                  {/* <a className="btn-3">Change Password</a> */}
 
                  <button type="button" class="button-status" onClick={handleChangePassword}>Change Password </button>
               
               
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</>
 
 
 
 
 
 
  </div>
)
}
 
export default ApplicantChangePassword;