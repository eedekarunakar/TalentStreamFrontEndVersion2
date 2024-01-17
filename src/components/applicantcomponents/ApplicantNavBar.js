import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'jquery.cookie'; // Check if this is the correct path
import 'metismenu';
// import '../../scripts/dashboard-menu';
import { useState, useEffect, useReducer } from "react";
import { useUserContext } from '../common/UserProvider';
import { apiUrl } from '../../services/ApplicantAPIService';
import clearJWTToken from '../common/clearJWTToken';
import axios from "axios";
 
 
function ApplicantNavBar() {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
  const { user } = useUserContext();
  const [imageSrc, setImageSrc] = useState('');
  const [alertCount, setAlertCount] = useState(0);
 
  const handleToggleMenu = () => {
    console.log("function called..")
    setIsOpen(!isOpen);
  };
 
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
   
    fetch(`${apiUrl}/applicant-image/getphoto/${user.id}`, {
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
   // clearJWTToken();
     const confirm = window.confirm("Do you want to logout?");
     if (confirm)
     {
     try {
      clearJWTToken();
      window.location.href = "/";
    } catch (error) {
      console.error('Logout failed', error);
    }
  }
 }
 
 const fetchAlertCount = async () => {
  try {
    const response = await axios.get(`${apiUrl}/applyjob/applicants/${user.id}/unread-alert-count`);
    setAlertCount(response.data);
    // Reload the page
    window.location.reload();
  } catch (error) {
    console.error('Error fetching alert count:', error);
  }
};
 
 
useEffect(() => {
  const fetchAlertCount = async () => {
    try {
      const response = await axios.get(`${apiUrl}/applyjob/applicants/${user.id}/unread-alert-count`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      });
      setAlertCount(response.data);
    } catch (error) {
      console.error('Error fetching alert count:', error);
    }
  };
 
  fetchAlertCount();
}, [user.id]);
 
 
  return (
    <div>
 
  <div className="menu-mobile-popup">
    <div className="modal-menu__backdrop" />
    <div className="widget-filter">
      <div className="mobile-header">
        <div id="logo" className="logo">
          <a href="/applicanthome">
            {/* <img className="site-logo" src="../images/logo.png" alt="Image" /> */}
            <img src={imageSrc || '../images/user/avatar/image-01.jpg'} alt="Profile" onError={() => setImageSrc('../images/user/avatar/image-01.jpg')} />
          </a>
        </div>
        <a className="title-button-group">
          <i className="icon-close" />
        </a>
      </div>
      <div className="header-customize-item button">
        <a href="/applicant-update-profile">Upload Resume</a>
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
              <a href="tel:0123456678">+91-9966662524</a>
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
                <a href="/applicanthome">
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
              <div className="header-customize-item account">
              {/* <img src={imageSrc} alt="" width="40px" height="30px"/> */}
              <img width="40px" height="30px" src={imageSrc || '../images/user/avatar/image-01.jpg'} alt="Profile" onError={() => setImageSrc('../images/user/avatar/image-01.jpg')} />
                <div className="name">
                  <span className="icon-keyboard_arrow_down" />
                </div>
                <div className="sub-account">
                  <h4>Welcome {user.username}</h4>
                  <div className="sub-account-item">
                    <a href="/applicant-view-profile">
                      <span className="icon-profile" />View Profile
                    </a>
                  </div>
                  <div className="sub-account-item">
                    <a href="/applicant-change-password">
                      <span className="icon-change-passwords" /> Change Password
                    </a>
                  </div>
                  {/* <div className="sub-account-item">
                    <a href="/applicant-delete-profile">
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
              {/* <div className="header-customize-item button">
                <a href="/applicant-update-profile">Upload Resume</a>
              </div> */}
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
      <span className="hamburger-icon"  onClick={handleToggleMenu}>
        <span />
        <span />
        <span />
      </span>
    </div>
  </header>
  {(isOpen &&
  <div className="left-menu" >
      {/* Sidemenu */}
      <div id="sidebar-menu">
        <ul className="downmenu list-unstyled" id="side-menu">
          <li>
            <Link to="/applicanthome" className="tf-effect">
              <span className="icon-dashboard dash-icon"></span>
              <span className="dash-titles">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/applicant-update-profile">
              <span className="icon-profile dash-icon"></span>
              <span className="dash-titles">Update Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/applicant-find-jobs" className="tf-effect">
              <span className="icon-resumes dash-icon"></span>
              <span className="dash-titles">Recommended Jobs</span>
            </Link>
          </li>
 
          <li>
            <Link to="/applicant-applied-jobs" className="tf-effect">
              <span className="icon-my-apply dash-icon"></span>
              <span className="dash-titles">Jobs Applied</span>
            </Link>
          </li>
 
          <li>
            <Link to="/applicant-saved-jobs" className="tf-effect">
              <span className="icon-work dash-icon"></span>
              <span className="dash-titles">Saved Jobs</span>
            </Link>
          </li>
 
          <li>
      {/* Trigger the fetchAlertCount function when clicking on the link */}
      <Link to="/applicant-job-alerts" className="tf-effect" onClick={fetchAlertCount}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <span className="icon-bell1 dash-icon">
            <sup
              style={{
                background: 'red',
                borderRadius: '50%',
                padding: '2px 5px',
                color: 'white',
                fontSize: '10px',
                textAlign: 'center',
                lineHeight: '1',
                marginLeft: '-10px',
              }}
            >
              {alertCount}
            </sup>
          </span>
        </div>
        <span className="dash-titles">Job Alerts</span>
      </Link>
    </li>
 
          <li>
            <Link to="/applicant-resume" className="tf-effect">
              <span className="icon-chat dash-icon"></span>
              <span className="dash-titles">My Resume</span>
            </Link>
          </li>
          {/* <li>
            <Link to="/applicant-change-password" className="tf-effect">
              <span className="icon-change-passwords dash-icon"></span>
              <span className="dash-titles">Change password</span>
            </Link>
          </li> */}
          {/* <li>
            <Link to="/applicant-delete-profile" className="tf-effect">
              <span className="icon-trash dash-icon"></span>
              <span className="dash-titles">Delete Profile</span>
            </Link>
          </li> */}
          {/* <li>
            <Link to="/logout" className="tf-effect">
              <span className="icon-log-out dash-icon"></span>
              <span className="dash-titles">Log out</span>
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  )}
</div>
  )
}
 
export default ApplicantNavBar;
