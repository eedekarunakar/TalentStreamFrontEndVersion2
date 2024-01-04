import React, { useState } from 'react';
import { useUserContext } from '../common/UserProvider';
import axios from 'axios';
 
import ApplicantAPIService, { apiUrl } from '../../services/ApplicantAPIService';
 
function RecruiterChangePassword() {
  const { user } = useUserContext();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({
    oldPassword: '',
    newPassword: '',
    confirmedPassword: '',
  });
 
  const validateForm = () => {
    let isValid = true;
    const errors = {};
 
    if (!oldPassword.trim()) {
      errors.oldPassword = 'Old password is required.';
      isValid = false;
    } else {
      errors.oldPassword = '';
    }
 
    if (!newPassword.trim()) {
      errors.newPassword = 'New password is required.';
      isValid = false;
    } else if (!isValidPassword(newPassword)) {
      errors.newPassword =
        'New password must be at least 6 characters long, contain one uppercase letter, one lowercase letter, one number, one special character, and no spaces.';
      isValid = false;
    } else {
      errors.newPassword = '';
    }
 
    if (!confirmedPassword.trim()) {
      errors.confirmedPassword = 'Confirm password is required.';
      isValid = false;
    } else if (newPassword !== confirmedPassword) {
      errors.confirmedPassword = 'Passwords do not match.';
      isValid = false;
    } else {
      errors.confirmedPassword = '';
    }
 
    setFormErrors(errors);
    return isValid;
  };
 
  const handleTogglePassword = (type) => {
    switch (type) {
      case 'old':
        setShowOldPassword(!showOldPassword);
        break;
      case 'new':
        setShowNewPassword(!showNewPassword);
        break;
      case 'confirmed':
        setShowConfirmedPassword(!showConfirmedPassword);
        break;
      default:
        break;
    }
  };
 
  const handleChangePassword = async (e) => {
    e.preventDefault();
 
    if (!validateForm()) {
      return;
    }
 
    const formData = {
      oldPassword,
      newPassword,
      confirmedPassword,
    };
 
    try {
      const response = await axios.post(`${apiUrl}/recuriters/authenticateRecruiter/${user.id}`, formData);
 
      if (response.data === 'Password updated and stored') {
        window.alert('Password Changed Successfully');
      } else {
        window.alert('Password change failed. Old password is wrong.');
      }
    } catch (error) {
      console.error('Password change failed. Old password is wrong.:', error);
      // window.alert('Error resetting password');
      window.alert('Password change failed. Old password is wrong.');
    }
  };
 
  // Validate password criteria
  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  };
 
  return (
    <div>
      <>
        <div class="dashboard__content">
          <section className="page-title-dashboard">
            {/* ... your existing JSX code ... */}
          </section>
          <section className="flat-dashboard-password">
            <div className="themes-container">
              <div className="row">
                <div className="col-lg-12 col-md-12 ">
                  <div className="change-password bg-white">
                    <form action="https://themesflat.co/html/jobtex/dashboard/dashboard.html">
                      <div className="form-password">
                        <h3>Change Password</h3>
                        {/* Old Password */}
                        <div className="inner info-wd">
                          <label className="title-url fs-16">
                            Old Password<span className="color-red">*</span>
                          </label>
                          <div className="inputs-group auth-pass-inputgroup relative flex2">
                            <input
                              type={showOldPassword ? 'text' : 'password'}
                              className="input-form password-input"
                              value={oldPassword}
                              onChange={(e) => setOldPassword(e.target.value)}
                              onBlur={() => validateForm()}
                              required=""
                            />
                            <a
                              className="icon-eye-off password-addon"
                              onClick={() => handleTogglePassword('old')}
                            />
                          </div>
                          {formErrors.oldPassword && (
                            <div className="error-message">{formErrors.oldPassword}</div>
                          )}
                        </div>
                        {/* New Password */}
                        <div className="inner info-wd">
                          <label className="title-url fs-16">
                            New Password <span className="color-red">*</span>
                          </label>
                          <div className="inputs-group auth-pass-inputgroup relative flex2">
                            <input
                              type={showNewPassword ? 'text' : 'password'}
                              className="input-form"
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                              onBlur={() => validateForm()}
                              required=""
                            />
                            <a
                              className="icon-eye-off password-addon"
                              onClick={() => handleTogglePassword('new')}
                            />
                          </div>
                          {formErrors.newPassword && (
                            <div className="error-message">{formErrors.newPassword}</div>
                          )}
                        </div>
                        {/* Confirm Password */}
                        <div className="inner info-wd">
                          <label className="title-url fs-16">
                            Confirm Password<span className="color-red">*</span>
                          </label>
                          <div className="inputs-group auth-pass-inputgroup relative flex2">
                            <input
                              type={showConfirmedPassword ? 'text' : 'password'}
                              className="input-form password-input"
                              value={confirmedPassword}
                              onChange={(e) => setConfirmedPassword(e.target.value)}
                              onBlur={() => validateForm()}
                              required=""
                            />
                            <a
                              className="icon-eye-off password-addon"
                              onClick={() => handleTogglePassword('confirmed')}
                            />
                          </div>
                          {formErrors.confirmedPassword && (
                            <div className="error-message">{formErrors.confirmedPassword}</div>
                          )}
                        </div>
                        <div className="tt-button submit">
                          <button type="button" class="button-status" onClick={handleChangePassword}>
                            Change Password
                          </button>
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
  );
}
 
export default RecruiterChangePassword;
 