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
      {/* <div className="header-customize-item button">
      <a href="/recruiterlogin">Recruiter Login</a>
      </div> */}
      
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
                      <a href="/login">Find Candidate</a>
                    </li>
                    <li>
                      <a href='/contactus'>Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
              <div className="header-ct-right st-1">
                {/* <div className="header-customize-item help">
                  <a href="/login">
                    <span className="icon-help-circle" />
                  </a>
                </div> */}
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
                {/* <img src="images/user/avatar/sign-in.png" alt="" />
                <div class="name">
                  <span class="icon-keyboard_arrow_down"></span>
                </div> */}
                {/* <div class="sub-account"> */}
                  <div class="sub-account-item">
                  <a href="/register" style={{ color: '#1967d2', backgroundColor: 'white', border: '1px solid #1967d2', padding: '5px 10px', borderRadius: '5px', display: 'inline-flex', alignItems: 'center' }}>
  <span className="icon-resumes" style={{color: '#1967d2 !important', marginRight: '5px', fontSize: '1.2em',filter: 'brightness(1) invert(0) sepia(1) saturate(5) hue-rotate(175deg)' }}></span>
  Register
</a>
                  </div>
                  <div class="sub-account-item">
                  <a href="/login" style={{ color: 'white', backgroundColor: '#1967d2', border: '1px solid #1967d2', padding: '5px 10px', borderRadius: '5px', display: 'inline-flex', alignItems: 'center' }}>
  <span className="icon-profile" style={{ color: 'white', marginRight: '5px', filter: 'brightness(0) invert(1)', fontSize: '1.2em'  }}></span>
  Login
</a>
                  </div>
                  {/* <div class="sub-account-item">
                    <a href="/recruiterlogin"><span class="icon-profile"></span>Recruiter's Login</a>
                  </div> */}
                {/* </div> */}
              </div>
                {/* <div className="header-customize-item button">
                  <a href="/recruiterlogin">Recruiter Login</a>
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
    </header>
  </div>
</>


  </div>


  );
};

export default Nav;
