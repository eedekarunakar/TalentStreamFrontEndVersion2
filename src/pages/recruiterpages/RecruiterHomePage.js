import React from 'react';
import { BrowserRouter as Router, Route, Routes,Outlet } from 'react-router-dom';
import RecruiterNavBar from '../../components/recruitercomponents/RecruiterNavBar';
import ApplicantDashboard from '../../components/applicantcomponents/ApplicantDashboard';
import ApplicantFooter from '../../components/applicantcomponents/ApplicantFooter';
import ApplicantUpdateProfile from '../../components/applicantcomponents/ApplicantUpdateProfile';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import ApplicantFindJobs from '../../components/applicantcomponents/ApplicantFindJobs';
import ApplicantViewJob from '../../components/applicantcomponents/ApplicantViewJob';
import RecruiterLeftNavBar from '../../components/recruitercomponents/RecruiterLeftNavBar';


function RecruiterHomePage() {
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
        case '/applicant-find-jobs':
        setActiveRoute('findjobs');
        break;
        case '/applicant-view-job/:id':
          console.log("View Page");
          setActiveRoute('viewjob');
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
    <RecruiterNavBar />
    <RecruiterLeftNavBar />
     {activeRoute === 'dashboard' && <ApplicantDashboard />}
     {activeRoute === 'profile' && <ApplicantUpdateProfile />}
     {activeRoute === 'findjobs' && <ApplicantFindJobs />}
     {activeRoute === 'viewjob' && <ApplicantViewJob />}
      <ApplicantFooter />    

    </div>
  )
}

export default RecruiterHomePage;