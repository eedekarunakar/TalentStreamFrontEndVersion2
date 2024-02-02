// import React, { useState} from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { useUserContext } from '../common/UserProvider';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { apiUrl } from '../../services/ApplicantAPIService';
// import { useGoogleLogin } from '@react-oauth/google'; // Import GoogleLoginButton
// import jwt_decode from "jwt-decode";
 
// function LoginBody({ handleLogin }) {
//   const [candidateEmail, setCandidateEmail] = useState('');
//   const [candidatePassword, setCandidatePassword] = useState('');
//   const [recruiterEmail, setRecruiterEmail] = useState('');
//   const [recruiterPassword, setRecruiterPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const location = useLocation();
//   const registrationSuccess = location.state?.registrationSuccess;
//   const navigate = useNavigate();
//   const { setUser, setUserType } = useUserContext();
//   const [showPassword, setShowPassword] = useState(false);
//   const [activeTab, setActiveTab] = useState('Candidate');
//   const [candidateEmailError, setCandidateEmailError] = useState('');
//   const [candidatePasswordError, setCandidatePasswordError] = useState('');
//   const [recruiterEmailError, setRecruiterEmailError] = useState('');
//   const [recruiterPasswordError, setRecruiterPasswordError] = useState('');
// //  const [candidateLoginInProgress, setCandidateLoginInProgress] = useState(false);
 
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
 
//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };
 
//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     setErrorMessage('');
//   };
 
//   const handleCandidateSubmit = async (e) => {
//     e.preventDefault();
//     if (!isCandidateFormValid()) {
//       return;
//     }
 
//     try {
//     //  setCandidateLoginInProgress(true);
//       let loginEndpoint = `${apiUrl}/applicant/applicantLogin`;
//       const response = await axios.post(loginEndpoint, {
//         email: candidateEmail,
//         password: candidatePassword,
//       });
 
//             if (response.status === 200) {
//         setErrorMessage('');
//         const userData = response.data;
//         console.log('this is response ', userData);
//         console.log('this is token ', userData.data.jwt);
//         localStorage.setItem('jwtToken', userData.data.jwt);
 
//         let userType1;
 
//         if (userData.message.includes('ROLE_JOBAPPLICANT')) {
//           userType1 = 'jobseeker';
//         } else if (userData.message.includes('ROLE_JOBRECRUITER')) {
//           userType1 = 'employer';
//         } else {
//           userType1 = 'unknown';
//         }
//         console.log('this userType ', userType1);
//         localStorage.setItem('userType', userType1);
 
//         setErrorMessage('');
//         handleLogin();
 
//         setUser(userData);
//         setUserType(userData.userType);
//         console.log('Login successful', userData);
 
 
//       navigate('/applicanthome');
//             }
 
//     } catch (error) {
//       console.log(error.response.data);
//       if(error.response.data==="Incorrect password") {
//         setErrorMessage('Incorrect password.');
//      //   setCandidateLoginInProgress(false);
//         console.error('login failed');
//       }
//       else if(error.response.data==="No account found with this email address") {
//         setErrorMessage('No account found with this email address.');
//      //   setCandidateLoginInProgress(false);
//         console.error('login failed');
//       }
//       else{
//         setErrorMessage('login failed. Please check your user name and password.');
//       }
     
//    //   setCandidateLoginInProgress(false);
//       console.error('Login failed', error);
//     }
//   };
 
//   const isCandidateFormValid = () => {
 
//     // Validate email
//     const emailError = validateEmail(candidateEmail);
//     setCandidateEmailError(emailError);
 
//     // Validate password
//     const passwordError = validatePassword(candidatePassword);
//     setCandidatePasswordError(passwordError);
 
//     // Check if either email or password is empty
//     if (!candidateEmail.trim()) {
//       setCandidateEmailError('Email is required.');
//     }
 
//     if (!candidatePassword.trim()) {
//       setCandidatePasswordError('Password is required.');
//     }
 
//     // Check if there are any validation errors
//     if (emailError || passwordError) {
//       return false;
//     }
 
//     return true;
//   };
 
//   const isRecruiterFormValid = () => {
//     // Validate email
//     const emailError = validateEmail(recruiterEmail);
//     setRecruiterEmailError(emailError);
 
//     // Validate password
//     const passwordError = validatePassword(recruiterPassword);
//     setRecruiterPasswordError(passwordError);
 
//     // Check if either email or password is empty
//     if (!recruiterEmail.trim()) {
//       setRecruiterEmailError('Email is required.');
//     }
 
//     if (!recruiterPassword.trim()) {
//       setRecruiterPasswordError('Password is required.');
//     }
 
//     // Check if there are any validation errors
//     if (emailError || passwordError) {
//       return false;
//     }
 
//     return true;
//   };
 
//   const validateEmail = (email) => {
//     if (!email.trim()) {
//       return 'Email is required.';
//     }
 
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email) ? '' : 'Please enter a valid email address.';
//   };
 
//   const validatePassword = (password) => {
//     if (!password.trim()) {
//       return 'Password is required.';
//     }
 
//     if (password.length < 6) {
//       return 'Password must be at least 6 characters long.';
//     }
 
//     if (!/[A-Z]/.test(password)) {
//       return 'Password must contain at least one uppercase letter.';
//     }
 
//     if (!/[^A-Za-z0-9]/.test(password)) {
//       return 'Password must contain at least one special character (non-alphanumeric).';
//     }
 
//     if (/\s/.test(password)) {
//       return 'Password cannot contain spaces.';
//     }
 
//     return '';
//   };
 
 
 
 
//   const handleRecruiterSubmit = async (e) => {
//     e.preventDefault();
//     if (!isRecruiterFormValid()) {
//       return;
//     }
 
//     try {
//       let loginEndpoint = `${apiUrl}/recuriters/recruiterLogin`;
//       const response = await axios.post(loginEndpoint, {
//         email: recruiterEmail,
//         password: recruiterPassword,
//       });
 
//             if (response.status === 200) {
//         setErrorMessage('');
//         const userData = response.data;
 
//         localStorage.setItem('jwtToken', userData.data.jwt);
 
//         let userType1 = '';
 
//         if (userData.message.includes('ROLE_JOBAPPLICANT')) {
//           userType1 = 'jobseeker';
//         } else if (userData.message.includes('ROLE_JOBRECRUITER')) {
//           userType1 = 'employer';
//         } else {
//           userType1 = 'unknown';
//         }
 
//         localStorage.setItem('userType', userType1);
 
//         setErrorMessage('');
//         handleLogin();
 
//         setUser(userData);
//         setUserType(userData.userType);
//         console.log('Recruiter Login successful', userData);
 
//         navigate('/recruiterhome');
//       }
//     } catch (error) {
//       if(error.response.data==="Incorrect password") {
//         setErrorMessage('Incorrect password.');
//      //   setCandidateLoginInProgress(false);
//         console.error('login failed');
//       }
//       else if(error.response.data==="No account found with this email address") {
//         setErrorMessage('No account found with this email address.');
//      //   setCandidateLoginInProgress(false);
//         console.error('login failed');
//       }
//       else{
//         setErrorMessage('login failed. Please check your user name and password.');
//       }
//       console.error('Login failed', error);
//     }
//   };
 
//   return (
//     <div>
//       <section className="account-section">
//         <div className="tf-container">
//           <div className="row">
//             <div className="wd-form-login tf-tab">
//               <section className="account-section">
//                 {registrationSuccess && (
//                   <div className="success-message">
//                     Registration successful! Please log in to continue.
//                   </div>
//                 )}
//                 <h4>Login </h4>
 
//                 <ul className="menu-tab">
//                   <li className={`ct-tab ${activeTab === 'Candidate' ? 'active' : ''}`} onClick={() => handleTabClick('Candidate')}>
//                     Candidate
//                   </li>
//                   <li className={`ct-tab ${activeTab === 'Employer' ? 'active' : ''}`} onClick={() => handleTabClick('Employer')}>
//                     Recruiter
//                   </li>
//                 </ul>
 
//                 <div className="content-tab">
//                   <div className="inner" style={{ display: activeTab === 'Candidate' ? 'block' : 'none' }}>
//                     <form onSubmit={handleCandidateSubmit}>
//                       <div className="ip">
//                         <label>Email Address<span>*</span></label>
//                         <input
//                   type="text"
//                   placeholder="Email"
//                   value={candidateEmail}
//                   onChange={(e) => {
//                     setCandidateEmail(e.target.value);
//                     setCandidateEmailError(''); // Clear the error when the input changes
//                   }}
                 
//                 />
//                         {candidateEmailError && <div className="error-message">{candidateEmailError}</div>}
//                       </div>
//                       <div className="ip">
//                         <label>Password<span>*</span></label>
//                         <div className="inputs-group auth-pass-inputgroup">
//                           <input
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder="Password"
//                             value={candidatePassword}
//                             onChange={(e) => {
//                               setCandidatePassword(e.target.value);
//                                setCandidatePasswordError(''); // Clear the error when the input changes
//                                 }}
                           
//                        />
//                           <div className="password-toggle-icon" onClick={handleTogglePassword} id="password-addon">
//                             {showPassword ? <FaEye /> : <FaEyeSlash />}
//                           </div>
//                         </div>
//                         {candidatePasswordError && <div className="error-message">{candidatePasswordError}</div>}
//                       </div>
//                       <div className="group-ant-choice">
//                         <div className="sub-ip"></div>
//                         <a href="/applicant-forgot-password" className="forgot">
//                           Forgot password?
//                         </a>
//                       </div>
//                       <button type="submit">Login</button>
//                       {errorMessage && <div className="error-message">{errorMessage}</div>}
//                       <div className="sign-up">
//                         Not registered yet? <a href="/register">Sign Up</a>
//                       </div>
//                     </form>
//                   </div>
 
//                   <div className="inner" style={{ display: activeTab === 'Employer' ? 'block' : 'none' }}>
//                     <form onSubmit={handleRecruiterSubmit}>
//                       <div className="ip">
//                         <label>Email Address<span>*</span></label>
//                         <input
//                           type="text"
//                           placeholder="Enter your Email"
//                           value={recruiterEmail}
//                           onChange={(e) => {
//                             setRecruiterEmail(e.target.value);
//                             setRecruiterEmailError(''); // Clear the error when the input changes
//                           }}
//                         />
//                         {recruiterEmailError && <div className="error-message">{recruiterEmailError}</div>}
//                       </div>
//                       <div className="ip">
//                         <label>Password<span>*</span></label>
//                         <div className="inputs-group auth-pass-inputgroup">
//                           <input
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder="Password"
//                             value={recruiterPassword}
//                             onChange={(e) => {
//                               setRecruiterPassword(e.target.value);
//                                setRecruiterPasswordError(''); // Clear the error when the input changes
//                                 }}
                           
//                        />
//                           <div className="password-toggle-icon" onClick={handleTogglePassword} id="password-addon">
//                             {showPassword ? <FaEye /> : <FaEyeSlash />}
//                           </div>
//                         </div>
//                         {recruiterPasswordError && <div className="error-message">{recruiterPasswordError}</div>}
//                       </div>
//                       <div className="group-ant-choice">
//                         <div className="sub-ip"></div>
//                         <a href="/recruiter-forgot-password" className="forgot">
//                           Forgot password?
//                         </a>
//                       </div>
//                       <button type="submit">Login</button>
//                       {errorMessage && <div className="error-message">{errorMessage}</div>}
//                       <div className="sign-up">
//                         Not registered yet? <a href="/register">Sign Up</a>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </section>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
 
// export default LoginBody;


import React, { useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useUserContext } from '../common/UserProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { apiUrl } from '../../services/ApplicantAPIService';
import { googleAPIUrl } from '../../services/ExternalAPIService';
import { linkedInAPIUrl } from '../../services/ExternalAPIService1';
import { useGoogleLogin } from '@react-oauth/google'; // Import GoogleLoginButton
import { LinkedIn, LinkedInOAuthProvider } from 'react-linkedin-login-oauth2';

import jwt_decode from "jwt-decode";

 
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
 const [candidateLoginInProgress, setCandidateLoginInProgress] = useState(false);
// const login = useGoogleLogin({
//   // clientId: "435586738795-9tuq57be4e92djg8d8ol1sn1h6a9mm6c.apps.googleusercontent.com", // Pass the clientId here
//   onSuccess: async (response) => {
//     try{
//       console.log('first API');
//      const res = await axios.get(
//       "https://www.googleapis.com/oauth2/v3/userinfo",
//       {
//         headers:{
//         Authorization:`Bearer ${response.access_token}`,
//         },
//       }
//      );
//      console.log(res);
//      const email1 = res.data.email;
//      console.log('Second API');
//     let loginEndpoint = `${apiUrl}/applicant/applicantLogin`;
//       const response1 = await axios.post(loginEndpoint, {
//         email: email1,
        
//       });
  
//  console.log(res);
//  if (response.status === 200) {
//         setErrorMessage('');
//         const userData = response.data;
//         console.log('this is response ', userData);
//         console.log('this is token ', userData.data.jwt);
//         localStorage.setItem('jwtToken', userData.data.jwt);
 
//         let userType1;
 
//         if (userData.message.includes('ROLE_JOBAPPLICANT')) {
//           userType1 = 'jobseeker';
//         } else if (userData.message.includes('ROLE_JOBRECRUITER')) {
//           userType1 = 'employer';
//         } else {
//           userType1 = 'unknown';
//         }
//         console.log('this userType ', userType1);
//         localStorage.setItem('userType', userType1);
 
//         setErrorMessage('');
//         handleLogin();
 
//         setUser(userData);
//         setUserType(userData.userType);
//         console.log('Login successful', userData);

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
        handleLogin();
 
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


const login1 = LinkedIn({
  // clientId: "435586738795-9tuq57be4e92djg8d8ol1sn1h6a9mm6c.apps.googleusercontent.com", // Pass the clientId here
  onSuccess: async (response) => {
    try {
      console.log('First API');
      const res = await axios.get(`${linkedInAPIUrl}`,
        
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
        handleLogin();
 
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



// const login1 = useLinkedInLogin({
//   clientId: 'your-linkedin-client-id',
//   redirectUri: 'your-redirect-uri', // Same as configured in your LinkedIn app
//   onSuccess: (response) => {
//     // Handle successful LinkedIn login
//     const res = await axios.get(`${linkedInAPIUrl}`,
//     console.log('LinkedIn login successful:', response);
//   },
//   onError: (error) => {
//     // Handle LinkedIn login error
//     console.error('LinkedIn login error:', error);
//   },
// });

// const handleLinkedInLogin = async () => {
//   // Step 1: Redirect user to LinkedIn authorization endpoint
//   window.location.href = `https://www.linkedin.com/oauth/v2/authorization?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=r_liteprofile%20r_emailaddress`;
// };

// const onSuccessGoogleSignIn = async (response) => {
//   try {
//     const userInfoResponse = await axios.get(
//       "https://www.googleapis.com/oauth2/v3/userinfo",
//       {
//         headers: {
//           Authorization: `Bearer ${response.access_token}`,
//         },
//       }
//     );

//     const { email } = userInfoResponse.data;

//     // Send email to backend to generate JWT token
//     const loginEndpoint = `${apiUrl}/applicant/applicantLogin`;
//     const loginResponse = await axios.post(loginEndpoint, { email });

//     // Store JWT token in local storage
//     localStorage.setItem('jwtToken', loginResponse.data.jwt);

//     // Determine user type based on response
//     let userType;
//     if (loginResponse.data.message.includes('ROLE_JOBAPPLICANT')) {
//       userType = 'jobseeker';
//     } else if (loginResponse.data.message.includes('ROLE_JOBRECRUITER')) {
//       userType = 'employer';
//     } else {
//       userType = 'unknown';
//     }

//     // Store user type in local storage
//     localStorage.setItem('userType', userType);

//     // Redirect to appropriate home page
//     if (userType === 'jobseeker') {
//       navigate('/applicanthome');
//     } else if (userType === 'employer') {
//       navigate('/recruiterhome');
//     } else {
//       // Handle unknown user type
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     // Handle error
//   }
// };

// const onFailureGoogleSignIn = (error) => {
//   console.error("Error:", error);
//   // Handle error
// };

// const googleLogin = useGoogleLogin({
//   onSuccess: onSuccessGoogleSignIn,
//   onFailure: onFailureGoogleSignIn
// });


 
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
        console.error('login failed');
      }
      else if(error.response.data==="No account found with this email address") {
        setErrorMessage('No account found with this email address.');
        console.error('login failed');
      }
      else{
        setErrorMessage('login failed. Please check your user name and password.');
      }
      console.error('Login failed', error);
    }
  };
  const isCandidateFormValid = () => {
    const emailError = validateEmail(candidateEmail);
    setCandidateEmailError(emailError);
    const passwordError = validatePassword(candidatePassword);
    setCandidatePasswordError(passwordError);
    if (!candidateEmail.trim()) {
      setCandidateEmailError('Email is required.');
    }
    if (!candidatePassword.trim()) {
      setCandidatePasswordError('Password is required.');
    }
    if (emailError || passwordError) {
      return false;
    }
    return true;
  };
  const isRecruiterFormValid = () => {
    const emailError = validateEmail(recruiterEmail);
    setRecruiterEmailError(emailError);
    const passwordError = validatePassword(recruiterPassword);
    setRecruiterPasswordError(passwordError);
    if (!recruiterEmail.trim()) {
      setRecruiterEmailError('Email is required.');
    }
    if (!recruiterPassword.trim()) {
      setRecruiterPasswordError('Password is required.');
    }
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
        console.error('login failed');
      }
      else if(error.response.data==="No account found with this email address") {
        setErrorMessage('No account found with this email address.');
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
                    setCandidateEmailError('');
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
                               setCandidatePasswordError('');
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
                    <br></br>
                    {/* <button onClick={() => login()}>Sign in with Google 🚀</button> */}
                    <a href="#" class="btn-social" onClick={() => login()}> <img src="images/review/google.png" alt="images" /> Continue with Google</a>
                    {/* <button onClick={googleLogin}>Sign in with Google</button> */}
                    {/* <button className="btn-social linkedin" onClick={handleLinkedInLogin}> */}
                    <a href="#" class="btn-social" onClick={() => login1()}> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAfrv///8AdbcAd7gAeLioyODX5vHF2uq10OXB2OkAfLoAcbUAerkAc7b7/f7y9/tFk8Uehb9sps54rNJVmsnm8PaDs9WWvdoxi8Gfw92OudjP4O70+Ps7j8Ndnsvh7PQmh78AaLFjosxY5DW2AAAGLUlEQVR4nO2d6XaiMBhAySJIEmQXce30/R9yQGuLiCYtiSY53/035wxj7mTfvgTojjRuiiwPXCPPiiZO73WC0Z/37YZjKhh7d4J/DWOCYr5px5K3hnXBqXtuQxjlRf3QcFVy8e4UakDwcjVtGFH67sRpgtJoynDN3S6fQxhf3xtW5N3J0gqpxoaZLyX0Cs1uDSvfBDvFami49quIXiDrH8OIvzs1RuDR1XDleC//CEZXX4alf5XwAi0vhrWfZbSH12fDwoeh2jSi6A1Tf7Owy8R9Z9j6Wgt7aNsZbvxsSC+wDQq8LqRdMU2DGL87EUbBcdD4XA27itgEHvcVPaIIMp8bmq6pyYLcc0P3lkUBAADch1GCOwj1c5wgSJJtl7sw3C2bI8beSQpexcM9nV3BvRrSsuR4QiPSMvFnQCRYNPbrOW18yUaSraYE+5XI5N1p0wIpHvh1tD6sETwT7BTdz0WRPRPsCqrr2zpMPKqDV1xfrUsmW9Ehjm8LiEomiNDW6T6Dh3LDlcuNDZM0MxfWDmciWaoYnhzORC5rSC+4u6KlVki7YursVIqu5XY9S2d7fbVqiFDo7P4OkXb3F1Jnmxqs0Bv27L03XDk7cMM77/Mwltv1nJxtaWirZhg521uIp9P7H9w9ssKYmmHl7JhGsTF1efqkNmxzd9DWb8WoGDq9UkMUWtOds31FDyPyGeKHy1nYdRifMsHW6SzsSCQzKJeXML54vty2d7cr/Ibhu63DgaAXh6pY8nCKUQceZGHQ3wVrpgWX/uwC481EZUwr9xuZH1hyHDmeSo9uLJ4RON/u9l96YXvw4krtGIo5O1RVlnPs6V2p4Hwp3MW77AAAAAAAWEYfZwbjpAdjQqjwanzBKE4OZRuHdZru07QOo8X2GHDiyxiR8k0zNdfeR9sPk6GBBJHxp8/Gezkiydt6Qu+6mNB+JIYmM6JcSoinfln62e1hOJZk0iMD4aeZCRtZyH4ZTa2XUtlnwy1HlhyUdoDqwsSk+wWGVCgeakHodNC//GzekCtuw15YaF/8Mm3IVM8KXKlzzRvOhg1F/qQBfcBR73alWUOqeDTwFr23PIwakuNfBBFa61Q0afhXQb1XIAwaUoVT8o846mtuzBmKzd8FEdK352XMEJO95K88Rd8tD2OG/xRPBT5C2+a6KcO4nCeI0EFTOTVluFO7BfCEk6ZyaspQA5oiz1hsWOvp9y021JSJNhvqqYk2G+ppTq021HLs02pDLUd3rTZERw1tjd2GOoqp3YY6giLabajjbqflhuX8ivgyw3oXL5fx7pdLbxoq4ksMw22WJLjfsMEJqRa/mBpruNv5AsPlRzLcOxOEl8qOGnpE44Zhju/GXhQrfx7MHriZNtxObyclqksA869cGTb8fFSPnkfF+WF+Y2rW8PNxU4i3Sv/C/LAjRg2bZ+2EStARhBazuwuThuHTMRfLVQznd4gmDSV33rDK1vD8C7oGDZey3lolE+dfnDNoKN16ULksP39QY85Q/r8vFDpFmw3lPRkTbhsqnONSuGhtsWGoMGZW+HGLDVWiFChURIsNVZbk2cFlQ6X70fLL8hYbKk1duXQqbK+hWuAlLF22sddQ7Qq4vLuw11AtZfJxm72GkVLK5MHGLDZUmvUQ6dFMMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMNRtSLehhNNUWqWfLZSiPdBW9usaQvD072k850+fKYazkP66w08RAwAAuIMXz/k+huVB5rlhFmiKGG0roggazU+aWAZtgnj2wNVqcBzoCHFqMTwNZPG23IZtUKAUJsZZaNsZ7n0upnzfGep6YcBGRIF6Q33PmVgHr8+GqPS1JtI+ylRvuPLlDcwRjK6+DFHkZznl58gvZ0O09nE5h6zRjyGq/KuK" alt="LinkedIn" style={{ width: "25px", height: "25px" }} /> Continue with LinkedIn
                   </a>
                    {/* <a href="#" class="btn-social" onClick={() => login()}> <img src="Sign-In-Small---Hover.png" alt="LinkedIn" /> Continue with LinkedIn
                   </a> */}
    {/* </button> */}
    
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
                            setRecruiterEmailError('');
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
                               setRecruiterPasswordError('');
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
 
 