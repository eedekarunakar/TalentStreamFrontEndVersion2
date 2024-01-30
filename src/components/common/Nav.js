import React, { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
const Nav = () => {
  const navigate = useNavigate();
 
  const handleResize = () => {
    // Check the screen size with a media query
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
 
    // If the screen size is mobile, reload the page
    if (isMobile) {
      window.location.reload();
    }
  };
 
  // Attach the resize event listener when the component mounts
  useEffect(() => {
    window.addEventListener('resize', handleResize);
 
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
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
        </div>
  </div>
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
              <div className="header-ct-center">
              <div className="nav-wrap">
                <nav id="main-nav" className="main-nav">
                  <ul id="menu-primary-menu" className="menu">
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
                <div class="header-customize-item account">
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
              </div>
                 </div>
                 <div className="nav-filter">
          <div className="nav-mobile" >
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