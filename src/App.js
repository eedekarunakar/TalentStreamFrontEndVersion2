import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import IndexPage from './pages/indexpage/IndexPage';
import AboutPage from './pages/aboutpage/AboutPage';
import ContactPage from './pages/contactpage/ContactPage';
import LoginPage from './pages/loginpage/LoginPage';
import RegisterPage from './pages/registerpage/RegisterPage';
import ApplicantHomePage from './pages/applicantpages/ApplicantHomePage';
import UserProvider from './components/common/UserProvider';
import Logout from './components/common/Logout';
import RecruiterLoginPage from './pages/recruiterpages/RecruiterLoginPage';
import RecruiterHomePage from './pages/recruiterpages/RecruiterHomePage';
import ApplicantForgotPasswordPage from './pages/loginpage/ApplicantForgotPasswordPage';
import RecruiterForgotPasswordPage from './pages/recruiterpages/RecruiterForgotPasswordPage';




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
    // Retrieve the JWT token from localStorage
    const jwtToken = localStorage.getItem('jwtToken');
    // Include the token in the Axios default headers
    if (jwtToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Remove the JWT token from localStorage
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userType');
  };

  useEffect(() => {
    // Check if the user is authenticated when the component mounts
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
      setIsLoggedIn(true);
    }
    setCheckingAuth(false);
  }, []);

  return (
    <div>
      <UserProvider>
        {checkingAuth ? (
          // Show loading spinner or any other indicator while checking authentication
          <p>Loading...</p>
        ) : (
          <Router>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/aboutus" element={<AboutPage />} />
              <Route path="/contactus" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
              <Route path="/applicant-forgot-password" element={<ApplicantForgotPasswordPage />} />
              <Route path="/recruiter-forgot-password" element={<RecruiterForgotPasswordPage />} />
              <Route path="/recruiterlogin" element={<RecruiterLoginPage onLogin={handleLogin} />} />
              <Route path="/register" element={<RegisterPage />} />
              {isLoggedIn ? (
                <>
                <Route path="/applicanthome" element={<ApplicantHomePage />} />
                <Route path="/applicant-update-profile" element={<ApplicantHomePage />} />
                <Route path="/applicant-find-jobs" element={<ApplicantHomePage />} />
                <Route path="/applicant-overview" element={<ApplicantHomePage />} />
                <Route path="/applicant-view-job" element={<ApplicantHomePage />} />
                <Route path="/applicant-applied-jobs" element={<ApplicantHomePage />} />
                <Route path="/applicant-saved-jobs" element={<ApplicantHomePage />} />
                <Route path="/applicant-interview-status" element={<ApplicantHomePage />} />
                <Route path="/applicant-change-password" element={<ApplicantHomePage />} />
                <Route path="/applicant-delete-profile" element={<ApplicantHomePage />} />
                <Route path="/applicant-job-alerts" element={<ApplicantHomePage />} />
                <Route path="/applicant-resume" element={<ApplicantHomePage />} />
                <Route path="/recruiterhome" element={<RecruiterHomePage />} />
                <Route path="/recruiter-my-organization" element={<RecruiterHomePage />} />
                <Route path="/recruiter-postjob" element={<RecruiterHomePage />} />
                <Route path="/recruiter-jobopenings" element={<RecruiterHomePage />} />
                <Route path="/recruiter-allapplicants" element={<RecruiterHomePage />} />
                <Route path="/recruiter-appliedapplicants" element={<RecruiterHomePage />} />
                <Route path="/recruiter-applicantinterviews" element={<RecruiterHomePage />} />
                <Route path="/recruiter-change-password" element={<RecruiterHomePage />} />
                </>
              ) : (
                // Redirect to login page if not authenticated
                <Route path="/login" element={<Navigate to="/login" />} />
              )}
              {/* <Route path="/logout" element={<Logout onLogout={handleLogout} />} /> */}
              <Route path="/logout" element={<Navigate to="/" />} />
            
            </Routes>
          </Router>
        )}
      </UserProvider>
    </div>
  );
}

export default App;
