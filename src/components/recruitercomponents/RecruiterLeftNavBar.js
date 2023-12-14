import React from 'react';
import { Link } from 'react-router-dom';

const RecruiterLeftNavBar = () => {
  return (
    <div className="left-menu">
      {/* Sidemenu */}
      <div id="sidebar-menu">
        <ul className="downmenu list-unstyled" id="side-menu">
          <li>
            <Link to="/recruiterhome" className="tf-effect">
              <span className="icon-dashboard dash-icon"></span>
              <span className="dash-titles">Dashboard</span>
            </Link>
          </li>
          {/* <li>
            <Link to="/applicant-update-profile">
              <span className="icon-profile dash-icon"></span>
              <span className="dash-titles">Profile</span>
            </Link>
            {/* <ul className="sub-menu2" aria-expanded="false">
              <li><Link to="/applicant-overview">Overview</Link></li>
              <li><Link to="/applicant-update-profile">Update Profile</Link></li>
            </ul> </li>*/}
           
          <li>
            <Link to="/recruiter-postjob" className="tf-effect">
              <span className="icon-work dash-icon"></span>
              <span className="dash-titles">Post Job</span>
            </Link>
          </li>
          <li>
            <Link to="/recruiter-jobopenings" className="tf-effect">
              <span className="icon-submit dash-icon"></span>
              <span className="dash-titles">Job Openings</span>
            </Link>
          </li>
          <li>
            <Link to="/recruiter-allapplicants" className="tf-effect">
              <span className="icon-applicant dash-icon"></span>
              <span className="dash-titles">Applicants</span>
            </Link>
          </li>

          <li>
            <Link to="/recruiter-applicantinterviews" className="tf-effect">
              <span className="icon-chat dash-icon"></span>
              <span className="dash-titles">Interviews</span>
            </Link>
          </li>

          <li>
            <Link to="/messages" className="tf-effect">
              <span className="icon-meeting dash-icon"></span>
              <span className="dash-titles">Teams Members</span>
            </Link>
          </li>

          <li>
            <Link to="/recruiter-my-organization" className="tf-effect">
              <span className="icon-mypackage dash-icon"></span>
              <span className="dash-titles">My Organization</span>
            </Link>
          </li>
          <li>
            <Link to="/recruiter-change-password" className="tf-effect">
              <span className="icon-change-passwords dash-icon"></span>
              <span className="dash-titles">Change password</span>
            </Link>
          </li>

          {/* <li>
            <Link to="/delete-profile" className="tf-effect">
              <span className="icon-trash dash-icon"></span>
              <span className="dash-titles">Delete Profile</span>
            </Link>
          </li> */}

          <li>
            <Link to="/logout" className="tf-effect">
              <span className="icon-log-out dash-icon"></span>
              <span className="dash-titles">Log out</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RecruiterLeftNavBar;
