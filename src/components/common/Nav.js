import React from 'react';
import { useNavigate } from 'react-router-dom';


const Nav = () => {

  const navigate = useNavigate();

  return (
    <div>
  <div class="menu-mobile-popup">
    <div class="modal-menu__backdrop"></div>
    <div class="widget-filter">
      <div class="mobile-header">
        <div id="logo" class="logo">
          <a href="home-01.html">
            <img class="site-logo" src="images/logo.png" alt="Image" />
          </a>
        </div>
        <a class="title-button-group"><i class="icon-close"></i></a>
      </div>

      <div class="tf-tab">
        <div class="menu-tab">
          <div class="user-tag active">Menu</div>
        </div>
        <div class="content-tab">
          <div class="header-ct-center menu-moblie">
            <div class="nav-wrap">
              <nav class="main-nav mobile">
                <ul id="menu-primary-menu" class="menu">
                  <li>
                    <a class="iteam-menu">Home</a>
                  </li>
                  <li>
                    <a class="iteam-menu" href='/aboutus'>About Us </a>
                  </li>

                  <li>
                    <a class="iteam-menu">Candidate</a>
                  </li>
                  <li>
                    <a class="iteam-menu">Recruiter</a>
                  </li>
                  <li>
                    <a class="iteam-menu" href='/contactus'>Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div class="header-customize-item login">
        <a href="login.html">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg></span>
          <ul class="item-login">
            <li><a href="login.html">Login</a></li>
            <li><a href="create-account.html">register</a></li>
          </ul>
        </a>
      </div>

      <div class="mobile-footer">
        <div class="icon-infor d-flex aln-center">
          <div class="icon">
            <span class="icon-call-calling"><span class="path1"></span><span class="path2"></span><span
                class="path3"></span><span class="path4"></span></span>
          </div>
          <div class="content">
            <p>Need help? 24/7</p>
            <h6><a href="tel:0123456678">001-1234-88888</a></h6>
          </div>
        </div>
        <div class="wd-social d-flex aln-center">
          <ul class="list-social d-flex aln-center">
            <li>
              <a href="#"><i class="icon-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="icon-linkedin2"></i></a>
            </li>
            <li>
              <a href="#"><i class="icon-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="icon-pinterest"></i></a>
            </li>
            <li>
              <a href="#"><i class="icon-instagram1"></i></a>
            </li>
            <li>
              <a href="#"><i class="icon-youtube"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="boxed">

  <header id="header" class="header header-default header-fixed">
    <div class="tf-container ct2">
      <div class="row">
        <div class="col-md-12">
          <div class="sticky-area-wrap">
            <div class="header-ct-left">
              <div id="logo" class="logo">
                <a href="/">
                  <img class="site-logo" src="images/logo.png" alt="Image" />

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
                      <a href='/aboutus'>About Us </a>
                    </li>

                    <li>
                      <a href="/login">Find Jobs</a>
                    </li>
                    <li>
                      <a href="/login">Find Candidate</a>
                    </li>
                    <li>
                      <a href='/contactus'>Contact Us</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-ct-right">
      <div className="header-customize-item help">
        <a href="term-of-use.html">
          <span className="icon-help-circle"></span>
        </a>
      </div>
      <div className="header-customize-item bell">
        <span className="icon-bell"></span>
        <div className="sub-notification">
          <div className="sub-notification-heading">
            <div className="sub-notification-title">Notification</div>
            <span>5 New</span>
          </div>
          <div className="sub-notification-content">
            <div className="sub-notification-item icon-plus">
              <div className="time">Last day</div>
              <div className="content">
                Your submit job <span className="name">Graphic Design</span> is{' '}
                <span className="status">Success</span>
              </div>
            </div>
            <div className="sub-notification-item icon-plus">
              <div className="time">5 Day ago</div>
              <div className="content">
                A new application is submitted on your job{' '}
                <span className="name">Graphic Design</span> by{' '}
                <span className="name">Maverick Nguyen</span>
              </div>
            </div>
            <div className="sub-notification-item icon-plus">
              <div className="time">5 Day ago</div>
              <div className="content">
                A new application is submitted on your job{' '}
                <span className="name">Graphic Design</span> by{' '}
                <span className="name">Maverick Nguyen</span>
              </div>
            </div>
            <div className="sub-notification-item icon-plus">
              <div className="time">Last day</div>
              <div className="content">
                Your submit job <span className="name">Graphic Design</span> is{' '}
                <span className="status">Success</span>
              </div>
            </div>
            <div className="sub-notification-item icon-plus">
              <div className="time">5 Day ago</div>
              <div className="content">
                A new application is submitted on your job{' '}
                <span className="name">Graphic Design</span> by{' '}
                <span className="name">Maverick Nguyen</span>
              </div>
            </div>
          </div>
          <div className="sub-notification-button">
            <a href="#">Read All</a>
          </div>
        </div>
      </div>
    </div>
    <div className="header-customize-item login">
  <a href="/login">
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
          stroke="#121212"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
          stroke="#121212"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </a>
  <ul className="item-login">
    <a href="login.html"></a>
    <li>
      <a href="login.html" />
      <a href="/login">Login</a>
    </li>
    <li>
      <a href="/register">&nbsp;register</a>
    </li>
  </ul>
</div>
    <div class="header-ct-right">
              <div class="header-customize-item button">
                <a href="/recruiterlogin">Recruiter Login</a>
              </div>
            </div>   
            <div class="nav-filter">
              <div class="nav-mobile"><span></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  </div>

  </div>


  );
};

export default Nav;
