import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation} from 'react-router-dom';

import axios from 'axios';
import { useUserContext } from '../common/UserProvider';
import apiUrl from '../../services/ApplicantAPIService';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function CandidateLogin({handleLogin}) {

   // const [email, setEmail] = useState('');
   // const [password, setPassword] = useState('');
   const [candidateEmail, setCandidateEmail] = useState('');
  const [candidatePassword, setCandidatePassword] = useState('');
  const [candidateEmailError, setCandidateEmailError] = useState('');
  const [candidatePasswordError, setCandidatePasswordError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const location = useLocation();
    const registrationSuccess = location.state?.registrationSuccess;
    const navigate = useNavigate();
    const { setUser } = useUserContext();
    const { setUserType } = useUserContext();
     
    const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
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
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       if (!isCandidateFormValid()) {
//         return;
//       }
//       try {
//         let loginEndpoint;
//         let count;
//         if (candidateEmail === 'admin' && candidatePassword === 'admin') {
//           count = 0;
//           loginEndpoint = `${apiUrl}/adminlogin`; // User login endpoint
//         } else {
//           count = 1;
//           loginEndpoint = `${apiUrl}/applicant/applicantLogin`; // Admin login endpoint
//         }
  
//         const response = await axios.post(loginEndpoint, {
//             email: candidateEmail,
//             password: candidatePassword,
//         });
  
//         if (response.status === 200) {
//           // Assuming the response.data contains user data
//           setErrorMessage('');
//           const userData = response.data;
//           console.log('this is response ',userData);
//           console.log('this is token ',userData.data.jwt);
//           localStorage.setItem('jwtToken', userData.data.jwt);
//           let userType1;
  
//   if (userData.message.includes("ROLE_JOBAPPLICANT")) {
//       userType1 = "jobseeker";
//   } else if (userData.message.includes("ROLE_JOBRECRUITER")) {
//       userType1 = "employer";
//   } else {
//       // Handle the case when neither role is found in userData.message
//       userType1 = "unknown"; // You can choose a default value here
//   }
//           console.log('this userType ',userType1);
//           localStorage.setItem('userType', userType1);
         
  
//           // Access and store the JWT token from the Authorization header
//         const  jwtToken = response.headers.authorization;
          
//           // Set JWT token in localStorage
//           //setJwtToken(jwtToken);
  
//           setErrorMessage('');
//           handleLogin();
  
//           // Set user data in the context
//           setUser(userData);
//           setUserType(userData.userType);
//           console.log('Login successful', userData);
  
//           if (count === 0) {
//             navigate('/admin');
//           } else {
//             navigate('/applicanthome');
//           }
  
//           // You can now use `jwtToken` for making authenticated requests.
//           //console.log('JWT Token:', jwtToken);
//         } else {
//           setErrorMessage('Login failed. Please check your user name and password.');
//           console.error('Login failed');
//         }
//       } catch (error) {
//         setErrorMessage('Login failed. Please check your user name and password.');
//         console.error('Login failed', error);
//       }
//     };

const handleSubmit = async (e) => {
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


         // Clear login form fields and reset in-progress state
      //  setCandidateEmail('');
      //  setCandidatePassword('');
      // setCandidateLoginInProgress(false);

      //   if (activeTab === 'Recruiter') {
      //     navigate('/recruiterhome');
      //   } else {
      //     navigate('/applicanthome');
      //   }
      // } else {
      //   setErrorMessage('Login failed. Please check your user name and password.');
      //   console.error('Login failed');
      // }

      navigate('/applicanthome');
    }else {
      setErrorMessage('Login failed. Please check your user name and password.');
   //   setCandidateLoginInProgress(false);
      console.error('login failed');
    }
    } catch (error) {
      setErrorMessage('login failed. Please check your user name and password.');
   //   setCandidateLoginInProgress(false);
      console.error('Login failed', error);
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
              <h4>Candidate’s Login</h4>
              <form  onSubmit={handleSubmit}>
                <div className="ip">
                  <label>
                    Email address<span>*</span>
                  </label>
                  <input
                        type="text"
                        placeholder="Enter your Email"
                         value={candidateEmail}
                         onChange={(e) => {
                            setCandidateEmail(e.target.value);
                            setCandidateEmailError(''); // Clear the error when the input changes
                          }}
                          
                        />
                         {candidateEmailError && <div className="error-message">{candidateEmailError}</div>}
                </div>
                <div className="ip">
                  <label>
                    Password<span>*</span>
                  </label>
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
                  <div className="sub-ip">
                    {/* <input type="checkbox" />
                    Remember me */}
                  </div>
                  <a href="/applicant-forgot-password" className="forgot">
                    Forgot password?
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

export default CandidateLogin;