import React from 'react'

export default function Footer() {
  return (
    <div>

<footer class="footer">
      <div class="top-footer">
        <div class="tf-container">
          <div class="row">
            <div class="col-lg-2 col-md-4">
              <div class="footer-logo">
                <img src="images/logo.png" alt="images" />
              </div>
            </div>
            <div class="col-lg-10 col-md-8">
              <div class="wd-social d-flex aln-center">
                <span>Follow Us:</span>
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
      </div>
      <div class="inner-footer">
        <div class="tf-container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="footer-cl-1">
                <div class="icon-infor d-flex aln-center">
                  <div class="icon">
                    <span class="icon-call-calling"><span class="path1"></span><span class="path2"></span><span
                        class="path3"></span><span class="path4"></span></span>
                  </div>
                  <div class="content">
                    <p>Need help? 24/7</p>
                    <h6><a href="tel:9966662524">+91-9966662524</a></h6>
                  </div>
                </div>
                <p>
                  Job Searching Just Got Easy. Use TalentSteram to run a hiring site
                  and earn money in the process!
                </p>
                <div class="ft-icon">
                  <i class="icon-map-pin"></i> 54-15-18E, Gurunanak Colony Road, 3rd Floor, Sai Odessey Complex, Gurunanak Colony, Vijayawada
                </div>
                <form action="#" id="subscribe-form">
                  <input type="email" placeholder="Your email address" required="" id="subscribe-email" />
                  <button class="tf-button" type="submit" id="subscribe-button">
                    <i class="icon-paper-plane-o"></i>
                  </button>
                </form>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-6">
              <div class="footer-cl-2">
                <h6 class="ft-title">Quick Links</h6>
                <ul class="navigation-menu-footer">
                  <li><a href="/aboutus">About</a></li>
                  <li><a href="/login">Find Jobs</a></li>
                  <li><a href="/recruiterlogin">Find Candidates</a></li>
                  <li><a href="/contactus">Contact</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-6">
              <div class="footer-cl-3">
                <h6 class="ft-title">Quick Links</h6>
                <ul class="navigation-menu-footer">
                  <li><a href="/login">Terms Of Services</a></li>
                  <li><a href="/login">Privacy Policy</a></li>
                  <li>
                    <a href="/login">Cookie Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-6">
                           
               <img src="images/review/jobsearch.gif" width="350px" alt="images" />
                         </div>
            {/* <div class="col-lg-2 col-md-4 col-6">
               <div class="footer-cl-5">
                <h6 class="ft-title">Download App</h6>
                <ul class="ft-download">
                  <li>
                    <a href="#"><img src="images/review/btn3.png" alt="images" /></a>
                  </li>
                  <li>
                    <a href="#"><img src="images/review/btn4.png" alt="images" /></a>
                  </li>
                </ul>
              </div> 
              <img src="images/review/jobsearch.gif" width="600px" alt="images" />
            </div> */}
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="tf-container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="bt-left">
                <div class="copyright">
                  ©2023 TekWorks. All Rights Reserved.
                </div>
                {/* <span class="select-language">
                  <select class="image-select">
                    <option data-thumbnail="images/review/flag.png">
                      English
                    </option>
                    <option data-thumbnail="images/review/flag3.png">
                      USA
                    </option>
                    <option data-thumbnail="images/review/flag2.png">
                      VN
                    </option>
                  </select>
                </span> */}
              </div>
            </div>
            {/* <div class="col-lg-6 col-md-6">
              <ul class="menu-bottom d-flex aln-center">
                <li><a href="term-of-use.html">Terms Of Services</a></li>
                <li><a href="pricing.html">Privacy Policy</a></li>
                <li><a href="contact-us.html">Cookie Policy</a></li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </footer>


     </div>
  )
}
