import React from 'react';
import { BrowserRouter as Router, Route, Routes,Outlet } from 'react-router-dom';
import ApplicantNavBar from '../../components/applicantcomponents/ApplicantNavBar';
import ApplicantLeftNavBar from '../../components/applicantcomponents/ApplicantLeftNavBar';
import ApplicantDashboard from '../../components/applicantcomponents/ApplicantDashboard';
import ApplicantFooter from '../../components/applicantcomponents/ApplicantFooter';
import ApplicantUpdateProfile from '../../components/applicantcomponents/ApplicantUpdateProfile';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import ApplicantOverview from '../../components/applicantcomponents/ApplicantOverview';

function ApplicantHomePage() {
  const [activeRoute, setActiveRoute] = useState('');
  const location = useLocation();

  const updateActiveRoute = () => {
    const pathname = location.pathname;

    
    switch (pathname) {
      case '/applicanthome':
        setActiveRoute('dashboard');
        break;
      case '/applicant-update-profile':
        setActiveRoute('profile');
        break;
        case '/applicant-overview':
        setActiveRoute('overview');
        break;
      default:
        setActiveRoute('');
        break;
    }
  };
  React.useEffect(() => {
    updateActiveRoute();
  }, [location.pathname]);

   


  return (
    <div  class="dashboard show ">
     <ApplicantNavBar />
     <ApplicantLeftNavBar />
     {activeRoute === 'dashboard' && <ApplicantDashboard />}
     {activeRoute === 'profile' && <ApplicantUpdateProfile />}
     {activeRoute === 'overview' && <ApplicantOverview />}
      <ApplicantFooter />    

    </div>
  )
}

export default ApplicantHomePage;