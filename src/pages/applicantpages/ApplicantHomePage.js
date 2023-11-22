import React from 'react';
import { BrowserRouter as Router, Route, Routes,Outlet } from 'react-router-dom';
import ApplicantNavBar from '../../components/applicantcomponents/ApplicantNavBar';
import ApplicantLeftNavBar from '../../components/applicantcomponents/ApplicantLeftNavBar';
import ApplicantDashboard from '../../components/applicantcomponents/ApplicantDashboard';
import ApplicantFooter from '../../components/applicantcomponents/ApplicantFooter';
import ApplicantUpdateProfile from '../../components/applicantcomponents/ApplicantUpdateProfile';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import ApplicantFindJobs from '../../components/applicantcomponents/ApplicantFindJobs';
import ApplicantViewJob from '../../components/applicantcomponents/ApplicantViewJob';


function ApplicantHomePage() {
  const [activeRoute, setActiveRoute] = useState('');
  const [selectedJobId, setSelectedJobId] = useState(null);
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
        case '/applicant-view-job':
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
     <ApplicantNavBar />
     <ApplicantLeftNavBar />
     {activeRoute === 'dashboard' && <ApplicantDashboard />}
     {activeRoute === 'profile' && <ApplicantUpdateProfile />}
     {/* {activeRoute === 'findjobs' && <ApplicantFindJobs />} */}
     {/* {activeRoute === 'viewjob' && <ApplicantViewJob />} */}
     {activeRoute === 'findjobs' && (<ApplicantFindJobs setSelectedJobId={setSelectedJobId} /> )}
     
     {activeRoute === 'viewjob' && (<ApplicantViewJob selectedJobId={selectedJobId} /> )}

     {/* <Routes>
     {activeRoute === 'viewjob' &&
     <Route path="/applicant-view-job" element={<ApplicantViewJob selectedJobId={selectedJobId} />} />}
     </Routes> */}
      <ApplicantFooter />   

    </div>
  )
}

export default ApplicantHomePage;