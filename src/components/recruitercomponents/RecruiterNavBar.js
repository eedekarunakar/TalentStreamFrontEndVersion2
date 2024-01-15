import React, { useState,useEffect } from "react";
import ApplicantAPIService,{ apiUrl } from '../../services/ApplicantAPIService';
import { useUserContext } from '../common/UserProvider';
import axios from 'axios';
import clearJWTToken from '../common/clearJWTToken';
import { Link } from 'react-router-dom';
import $ from 'jquery';

function RecruiterNavBar() {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
  const { user } = useUserContext();
  const [imageSrc, setImageSrc] = useState('');
  const [alertCount, setAlertCount] = useState(1);

 
  useEffect(() => {
    const handleResize = () => {
      // Update isOpen state when window is resized
      setIsOpen(window.innerWidth >= 768);
    };
     // Add event listener for window resize
     window.addEventListener('resize', handleResize);
    // Your custom JavaScript code for hamburger icon
    $("#left-menu-btn").on("click", function(e) {
      e.preventDefault();
      if ($("body").hasClass("sidebar-enable") == true) {
        $("body").removeClass("sidebar-enable");
        $.cookie("isButtonActive", "0");
      } else {
        $("body").addClass("sidebar-enable");
        $.cookie("isButtonActive", "1");
      }
      1400 <= $(window).width()
        ? $("body").toggleClass("show-job")
        : $("body").removeClass("show-job");
      var width = $(window).width();
      if (width < 1400) {
        $.cookie('isButtonActive', null);
      }
    });
    if ($.cookie("isButtonActive") == 1) {
      $("body").addClass("sidebar-enable show-job");
    }
    fetch(`${apiUrl}/recruiters/companylogo/download/${user.id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    })
      .then(response => response.blob()) // Use response.blob() instead of response.json()
      .then(blob => {
        const imageUrl = URL.createObjectURL(blob);
        setImageSrc(imageUrl);
      })
      .catch(error => {
        console.error('Error fetching image URL:', error);
        setImageSrc(null);
      });
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  }, [user.id]);

  const logout = () => {
    clearJWTToken();
     const confirm = window.confirm("Do you want to log out?");
     if(confirm){
       clearJWTToken();
         window.location.href = "/";
     }else {
         // same as clicking a link         // not optimal solution though        window.location.href = window.location.href;
     }
 }


 
 const handleToggleMenu = () => {
  console.log("function called..")
  setIsOpen(!isOpen);
};

  return (
  
<div>
 
  <div className="menu-mobile-popup">
    <div className="modal-menu__backdrop" />
    <div className="widget-filter">
      <div className="mobile-header">
        <div id="logo" className="logo">
          <a href="/recruiterhome">
            <img className="site-logo" src="../images/logo.png" alt="Image" />
          </a>
        </div>
        <a className="title-button-group">
          <i className="icon-close" />
        </a>
      </div>
      <div className="header-customize-item button">
        <a href="/recruiter-postjob">Post Job</a>
      </div>
      {/* <div className="mobile-footer">
        <div className="icon-infor d-flex aln-center">
          <div className="icon">
            <span className="icon-call-calling">
              <span className="path1" />
              <span className="path2" />
              <span className="path3" />
              <span className="path4" />
            </span>
          </div>
          <div className="content">
            <p>Need help? 24/7</p>
            <h6>
              <a href="tel:0123456678">+91 9999999999</a>
            </h6>
          </div>
        </div>
        <div className="wd-social d-flex aln-center">
          <ul className="list-social d-flex aln-center">
          <li>
                    <a href="https://www.facebook.com/tekworks.in"><i class="icon-facebook"></i></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/tekworks-in"><i class="icon-linkedin2"></i></a>
                  </li>
                  {/* <li>
                    <a href="#"><i class="icon-twitter"></i></a>
                  </li> 
                  <li>
                    <a href="https://www.instagram.com/tekworks_hiring"><i class="icon-instagram1"></i></a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@TekWorks-in"><i class="icon-youtube"></i></a>
                  </li>
          </ul>
        </div>
      </div> */}
    </div>
  </div>
  <header id="header" className="header header-default ">
    <div className="tf-container ct2">
      <div className="row">
        <div className="col-md-12">
          <div className="sticky-area-wrap">
            <div className="header-ct-left">
              <div id="logo" className="logo">
                <a href="/recruiterhome">
                  <img
                    className="site-logo"
                    src="../images/logo.png"
                    alt="Image"
                  />
                </a>
              </div>
            </div>
            <div className="header-ct-center"></div>
            <div className="header-ct-right">
              {/* <div className="header-customize-item help">
                <a href="../term-of-use.html">
                  <span className="icon-help-circle" />
                </a>
              </div> */}
              <div className="header-customize-item account">
                {/* <img src="../images/user/avatar/image-01.jpg" alt="" /> */}
                   
                {/* {imageSrc && <img src={imageSrc} alt="" />} */}

                <img src={imageSrc || '../images/user/avatar/image-01.jpg'} alt="Profile" onError={() => setImageSrc('../images/user/avatar/image-01.jpg')} width="40px" height="30px" />
                {/* <img src={imageSrc ?? "dummyLogo"} alt="" /> */}

                <div className="name">
                  {/* Candidates */}
                  <span className="icon-keyboard_arrow_down" />
                </div>
                <div className="sub-account">
                <h4>Welcome {user.username}</h4>
                  <div className="sub-account-item">
                    <a href="/recruiter-my-organization">
                      <span className="icon-profile" /> Profile
                    </a>
                  </div>
                  <div className="sub-account-item">
                    <a href="/recruiter-change-password">
                      <span className="icon-change-passwords" /> Change
                      Passwords
                    </a>
                  </div>
                  {/* <div className="sub-account-item">
                    <a href="candidates-delete-profile.html">
                      <span className="icon-trash" /> Delete Profile
                    </a>
                  </div> */}
                  <div className="sub-account-item">
                    <a onClick={logout}>
                      <span className="icon-log-out" /> Log Out
                    </a>
                  </div>
                </div>
              </div>
              <div className="header-customize-item button">
                <a href="/recruiter-postjob">Post Job</a>
              </div>
            </div>
            <div className="nav-filter">
              <div className="nav-mobile">
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="btn header-item " id="left-menu-btn">
      <span className="hamburger-icon" onClick={handleToggleMenu}>
        <span />
        <span />
        <span />
      </span>
    </div>
  </header>
  {(isOpen &&
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
            <Link to="/recruiter-team-member" className="tf-effect">
              <span className="icon-meeting dash-icon"></span>
              <span className="dash-titles">Team Members</span>
            </Link>
          </li>
 
          <li>
            <Link to="/recruiter-my-organization" className="tf-effect">
              <span className="icon-mypackage dash-icon"></span>
              <span className="dash-titles">My Organization</span>
            </Link>
          </li>
         
        </ul>
      </div>
    </div>
  )}
</div>

  )
}

export default RecruiterNavBar;