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
        <a href="">Post a Job</a>
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
                <img src="../images/user/avatar/image-01.jpg" alt="" />
                <div className="name">
                  {/* Candidates */}
                  <span className="icon-keyboard_arrow_down" />
                </div>
                <div className="sub-account">
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