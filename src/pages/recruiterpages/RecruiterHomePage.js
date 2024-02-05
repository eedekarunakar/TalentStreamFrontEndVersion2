import React from 'react';
import { BrowserRouter as Router, Route, Routes,Outlet } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import RecruiterNavBar from '../../components/recruitercomponents/RecruiterNavBar';
import { useState } from 'react';
import RecruiterDashboard from '../../components/recruitercomponents/RecruiterDashboard';
import ApplicantFooter from '../../components/applicantcomponents/ApplicantFooter';
import RecruiterMyOrganization from '../../components/recruitercomponents/RecruiterMyOrganization';
import RecruiterPostJob from '../../components/recruitercomponents/RecruiterPostJob';
import RecruiterJobOpenings from '../../components/recruitercomponents/RecruiterJobOpenings';
import RecruiterAllApplicants from '../../components/recruitercomponents/RecruiterAllApplicants';
import RecruiterAppliedApplicants from '../../components/recruitercomponents/RecruiterAppliedApplicants';
import RecruiterApplicantInterviews from '../../components/recruitercomponents/RecruiterApplicantInterviews';
import RecruiterChangePassword from '../../components/recruitercomponents/RecruiterChangePassword';
import TeamMember from '../../components/recruitercomponents/TeamMember';
import RecruiterEditJob from '../../components/recruitercomponents/RecruiterEditJob';
function RecruiterHomePage() {
  const [activeRoute, setActiveRoute] = useState('');
  const location = useLocation();
  const [selectedJobId, setSelectedJobId] = useState('');
  const updateActiveRoute = () => {
    const pathname = location.pathname;
    switch (pathname) {
      case '/recruiterhome':
        setActiveRoute('dashboard');
        break;
        case '/recruiter-my-organization':
          setActiveRoute('organization');
          break;
          case '/recruiter-postjob':
            setActiveRoute('postjob');
            break;
            case '/recruiter-jobopenings':
              setActiveRoute('jobopenings');
              break;
              case '/recruiter-appliedapplicants':
                setActiveRoute('appliedapplicants');
                break;
                case '/recruiter-allapplicants':
                setActiveRoute('allapplicants');
                break;
                case '/recruiter-applicantinterviews':
                  setActiveRoute('applicantinterviews');
                  break;
                  case '/recruiter-change-password':
                  setActiveRoute('changepassword');
                  break;
                  case '/recruiter-team-member':
                    setActiveRoute('teammember');
                    break;
         case '/recruiter-edit-job':
                    setActiveRoute('RecruiterEditJob');
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
     {activeRoute === 'dashboard' && <RecruiterDashboard />}
     {activeRoute === 'organization' && <RecruiterMyOrganization />}
     {activeRoute === 'postjob' && <RecruiterPostJob />}
     {activeRoute === 'jobopenings' && <RecruiterJobOpenings setSelectedJobId={setSelectedJobId} />}
     {activeRoute === 'appliedapplicants' && <RecruiterAppliedApplicants selectedJobId={selectedJobId} />}
     {activeRoute === 'allapplicants' && <RecruiterAllApplicants />}
     {activeRoute === 'applicantinterviews' && <RecruiterApplicantInterviews />}
     {activeRoute === 'changepassword' && <RecruiterChangePassword />}
     {activeRoute === 'teammember' && <TeamMember />}
    {activeRoute === 'RecruiterEditJob' && <RecruiterEditJob selectedJobId={selectedJobId}/>}
    </div>
  )
}

export default RecruiterHomePage;
