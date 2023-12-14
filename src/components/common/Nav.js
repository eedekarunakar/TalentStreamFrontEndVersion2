import React from 'react';
import { useNavigate } from 'react-router-dom';


const Nav = () => {

  const navigate = useNavigate();


  return (
    <div>
  <>
  <a id="scroll-top" />
  <div className="menu-mobile-popup">
    <div className="modal-menu__backdrop" />
    <div className="widget-filter">
      <div className="mobile-header">
        <div id="logo" className="logo">
          <a href="/">
            <img className="site-logo" src="images/logo.png" alt="Image" />
          </a>
        </div>
        <a className="title-button-group">
          <i className="icon-close" />
        </a>
      </div>
      <div className="tf-tab">
          <div className="menu-tab">
            <div className="user-tag active">Menu</div>
          </div>
          <div className="content-tab">
            <div className="header-ct-center menu-moblie">
              <div className="nav-wrap">
                <nav className="main-nav mobile">
                  <ul id="menu-primary-menu" className="menu">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a className="iteam-menu" href='/aboutus'>About Us </a>
                    </li>
                    <li>
                      <a href='/login'>Find Jobs</a>
                    </li>
                    <li>
                      <a href='/recruiterlogin'>Find Candidates</a>
                    </li>
                    <li>
                      <a className="iteam-menu" href='/contactus'>Contact Us</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      <div className="header-customize-item button">
      <a href="/recruiterlogin">Recruiter Login</a>
      </div>
      <div className="mobile-footer">
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
        <ul class="list-social d-flex aln-center">
                  <li>
                    <a href="https://www.facebook.com/tekworks.in"><i class="icon-facebook"></i></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/tekworks-in"><i class="icon-linkedin2"></i></a>
                  </li>
                  {/* <li>
                    <a href="#"><i class="icon-twitter"></i></a>
                  </li> */}
                  <li>
                    <a href="https://www.instagram.com/tekworks_hiring"><i class="icon-instagram1"></i></a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@TekWorks-in"><i class="icon-youtube"></i></a>
                  </li>
                </ul>
        </div>
      </div>
    </div>
  </div>
  {/* /end */}
  {/* Boxed */}
  <div className="boxed">
    <header id="header" className="header header-default">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="sticky-area-wrap">
              <div className="header-ct-left">
                <div id="logo" className="logo">
                  <a href="/">
                    <img
                      className="site-logo"
                      src="images/logo.png"
                      alt="Image"
                    />
                  </a>
                </div>
              </div>
              <div class="header-ct-center">
              <div class="nav-wrap">
                <nav id="main-nav" class="main-nav">
                  <ul id="menu-primary-menu" class="menu">
                    <li>
                      <a href="/">Home </a>
                    </li>
                    <li>
                      <a href='/aboutus'>About</a>
                    </li>

                    <li>
                      <a href="/login">Find Jobs</a>
                    </li>
                    <li>
                      <a href="/recruiterlogin">Find Candidate</a>
                    </li>
                    <li>
                      <a href='/contactus'>Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
              <div className="header-ct-right st-1">
                <div className="header-customize-item help">
                  <a href="/login">
                    <span className="icon-help-circle" />
                  </a>
                </div>
                {/* <div className="header-customize-item bell">
                  <span className="icon-bell" />
                  <div className="sub-notification">
                    <div className="sub-notification-heading">
                      <div className="sub-notification-title">Notification</div>
                      <span>5 New</span>
                    </div>
                    <div className="sub-notification-content">
                      <div className="sub-notification-item icon-plus">
                        <div className="time">Last day</div>
                        <div className="content">
                          Your submit job{" "}
                          <span className="name">Graphic Design</span> is
                          <span className="status">Success</span>
                        </div>
                      </div>
                      <div className="sub-notification-item icon-plus">
                        <div className="time">5 Day ago</div>
                        <div className="content">
                          A new application is submitted on your job
                          <span className="name">Graphic Design</span> by
                          <span className="name">Maverick Nguyen</span>
                        </div>
                      </div>
                      <div className="sub-notification-item icon-plus">
                        <div className="time">5 Day ago</div>
                        <div className="content">
                          A new application is submitted on your job
                          <span className="name">Graphic Design</span> by
                          <span className="name">Maverick Nguyen</span>
                        </div>
                      </div>
                      <div className="sub-notification-item icon-plus">
                        <div className="time">Last day</div>
                        <div className="content">
                          Your submit job{" "}
                          <span className="name">Graphic Design</span> is
                          <span className="status">Success</span>
                        </div>
                      </div>
                      <div className="sub-notification-item icon-plus">
                        <div className="time">5 Day ago</div>
                        <div className="content">
                          A new application is submitted on your job
                          <span className="name">Graphic Design</span> by
                          <span className="name">Maverick Nguyen</span>
                        </div>
                      </div>
                    </div>
                    <div className="sub-notification-button">
                      <a href="#">Read All</a>
                    </div>
                  </div>
                </div> */}
                <div class="header-customize-item account">
                <img src="images/user/avatar/sign-in.png" alt="" />
                <div class="name">
                  <span class="icon-keyboard_arrow_down"></span>
                </div>
                <div class="sub-account">
                  <div class="sub-account-item">
                    <a href="/register"><span class="icon-resumes"></span>Register</a>
                  </div>
                  <div class="sub-account-item">
                    <a href="/login"><span class="icon-profile"></span>Login</a>
                  </div>
                  {/* <div class="sub-account-item">
                    <a href="/recruiterlogin"><span class="icon-profile"></span>Recruiter's Login</a>
                  </div> */}
                </div>
              </div>
                <div className="header-customize-item button">
                  <a href="/recruiterlogin">Recruiter Login</a>
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
    </header>
  </div>
</>


  </div>


  );
};

export default Nav;
