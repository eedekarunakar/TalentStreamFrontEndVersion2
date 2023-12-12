import React from 'react'



function RecruiterNavBar() {
  return (
  
<div>
  <a id="scroll-top" />
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
        <a href="candidates-dashboard.html">Post a Job</a>
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
              <a href="tel:0123456678">001-1234-88888</a>
            </h6>
          </div>
        </div>
        <div className="wd-social d-flex aln-center">
          <ul className="list-social d-flex aln-center">
            <li>
              <a href="#">
                <i className="icon-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-linkedin2" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-pinterest" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-instagram1" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
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
              <div className="header-customize-item help">
                <a href="../term-of-use.html">
                  <span className="icon-help-circle" />
                </a>
              </div>
              <div className="header-customize-item bell">
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
              </div>
              <div className="header-customize-item account">
                <img src="../images/user/avatar/image-01.jpg" alt="" />
                <div className="name">
                  Candidates
                  <span className="icon-keyboard_arrow_down" />
                </div>
                <div className="sub-account">
                  <div className="sub-account-item">
                    <a href="candidates-profile-setting.html">
                      <span className="icon-profile" /> Profile
                    </a>
                  </div>
                  <div className="sub-account-item">
                    <a href="candidates-change-passwords.html">
                      <span className="icon-change-passwords" /> Change
                      Passwords
                    </a>
                  </div>
                  <div className="sub-account-item">
                    <a href="candidates-delete-profile.html">
                      <span className="icon-trash" /> Delete Profile
                    </a>
                  </div>
                  <div className="sub-account-item">
                    <a href="/logout">
                      <span className="icon-log-out" /> Log Out
                    </a>
                  </div>
                </div>
              </div>
              <div className="header-customize-item button">
                <a href="/recruiter-postjob">Post a Job</a>
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
      <span className="hamburger-icon">
        <span />
        <span />
        <span />
      </span>
    </div>
  </header>
</div>

  )
}

export default RecruiterNavBar;