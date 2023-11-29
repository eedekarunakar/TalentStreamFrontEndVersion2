import React from 'react'
import SearchBar from './SearchBar';


function ApplicantNavBar() {
  return (
    <div>
<a id="scroll-top"></a>

<div class="menu-mobile-popup">
  <div class="modal-menu__backdrop"></div>
  <div class="widget-filter">
    <div class="mobile-header">
      <div id="logo" class="logo">
        <a href="/">
          <img class="site-logo" src="../images/logo.png" alt="Image" />
        </a>
      </div>
      <a class="title-button-group"><i class="icon-close"></i></a>
    </div>

    <div class="tf-tab">
      <div class="menu-tab">
        <div class="user-tag active">Menu</div>
        <div class="user-tag">Categories</div>
      </div>

      <div class="content-tab">

        <div class="header-ct-center menu-moblie">
          <div class="nav-wrap">
            <nav class="main-nav mobile">
              <ul id="menu-primary-menu" class="menu">
                <li class="menu-item menu-item-has-children-mobile">
                  <a class="iteam-menu">Home</a>
                </li>
                <li class="menu-item menu-item-has-children-mobile">
                  <a class="iteam-menu">Find jobs </a>
                </li>
                <li class="menu-item menu-item-has-children-mobile">
                  <a class="iteam-menu">Employers</a>
                </li>
                <li class="menu-item menu-item-has-children-mobile">
                  <a class="iteam-menu">Candidates</a>
                </li>
                <li class="menu-item menu-item-has-children-mobile">
                  <a class="iteam-menu">Pages</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="header-customize-item button">
      <a href="candidates-dashboard.html">Upload Resume</a>
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
          <li><a href="#"><i class="icon-facebook"></i></a></li>
          <li><a href="#"><i class="icon-linkedin2"></i></a></li>
          <li><a href="#"><i class="icon-twitter"></i></a></li>
          <li><a href="#"><i class="icon-pinterest"></i></a></li>
          <li><a href="#"><i class="icon-instagram1"></i></a></li>
          <li><a href="#"><i class="icon-youtube"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
<header id="header" class="header header-default ">
  <div class="tf-container ct2">
    <div class="row">
      <div class="col-md-12">
        <div class="sticky-area-wrap">
          <div class="header-ct-left">
            <div id="logo" class="logo">
              <a href="/">
                <img class="site-logo" src="../images/logo.png" alt="Image" />
              </a>
            </div>
          </div>
          <div class="header-ct-center">
           {/* <SearchBar /> */}
            {/* <div class="nav-wrap">
              <nav id="main-nav" class="main-nav">
                <ul id="menu-primary-menu" class="menu">
                  <li class="menu-item menu-item-has-children">
                    <a href="#">Home </a>
                  </li>
                  <li class="menu-item menu-item-has-children">
                    <a href="#">Find jobs </a>
                  </li>

                  <li class="menu-item menu-item-has-children">
                    <a href="#">Employers</a>
                  </li>
                  <li class="menu-item menu-item-has-children current-item">
                    <a href="#">Candidates</a>
                  </li>
                  <li class="menu-item menu-item-has-children">
                    <a href="#">Pages</a>
                  </li>
                </ul>
              </nav>
            </div> */}
          </div>
          <div class="header-ct-right">
            <div class="header-customize-item help">
              <a href="../term-of-use.html"><span class="icon-help-circle"></span></a>
            </div>
            <div class="header-customize-item bell">
              <span class="icon-bell"></span>
              <div class="sub-notification">
                <div class="sub-notification-heading">
                  <div class="sub-notification-title">Notification</div>
                  <span>5 New</span>
                </div>
                <div class="sub-notification-content">
                  <div class="sub-notification-item icon-plus">
                    <div class="time">Last day</div>
                    <div class="content">
                      Your submit job <span class="name">Graphic Design</span> is
                      <span class="status">Success</span>
                    </div>
                  </div>
                  <div class="sub-notification-item icon-plus">
                    <div class="time">5 Day ago</div>
                    <div class="content">
                      A new application is submitted on your job
                      <span class="name">Graphic Design</span> by
                      <span class="name">Maverick Nguyen</span>
                    </div>
                  </div>
                  <div class="sub-notification-item icon-plus">
                    <div class="time">5 Day ago</div>
                    <div class="content">
                      A new application is submitted on your job
                      <span class="name">Graphic Design</span> by
                      <span class="name">Maverick Nguyen</span>
                    </div>
                  </div>
                  <div class="sub-notification-item icon-plus">
                    <div class="time">Last day</div>
                    <div class="content">
                      Your submit job <span class="name">Graphic Design</span> is
                      <span class="status">Success</span>
                    </div>
                  </div>
                  <div class="sub-notification-item icon-plus">
                    <div class="time">5 Day ago</div>
                    <div class="content">
                      A new application is submitted on your job
                      <span class="name">Graphic Design</span> by
                      <span class="name">Maverick Nguyen</span>
                    </div>
                  </div>
                </div>
                <div class="sub-notification-button">
                  <a href="#">Read All</a>
                </div>
              </div>
            </div>
            <div class="header-customize-item account">
              <img src="../images/user/avatar/image-01.jpg" alt="" />
              <div class="name">
                Candidates<span class="icon-keyboard_arrow_down"></span>
              </div>
              <div class="sub-account">
               
                <div class="sub-account-item">
                  <a href="/applicant-update-profile"><span class="icon-profile"></span> Profile</a>
                </div>
                <div class="sub-account-item">
                  <a href="/applicant-change-password"><span class="icon-change-passwords"></span> Change
                    Password</a>
                </div>
                <div class="sub-account-item">
                  <a href="/applicant-delete-profile"><span class="icon-trash"></span> Delete Profile</a>
                </div>
                <div class="sub-account-item">
                  <a href="/logout"><span class="icon-log-out"></span> Log Out</a>
                </div>
              </div>
            </div>
            <div class="header-customize-item button">
              <a href="candidates-dashboard.html">Upload Resume</a>
            </div>
          </div>
          <div class="nav-filter">
            <div class="nav-mobile"><span></span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="btn header-item " id="left-menu-btn">
    <span class="hamburger-icon">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div> 
</header>
</div>

  )
}

export default ApplicantNavBar;