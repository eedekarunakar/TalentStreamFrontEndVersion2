import React from 'react'

function ApplicantOverview() {
  return (
    <div><div className="dashboard__content">
    <section className="page-title-dashboard">
      <div className="themes-container">
        <div className="row">
          <div className="col-lg-12 col-md-12 ">
            <div className="title-dashboard">
              <div className="title-dash flex2">Overview</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="flat-dashboard-user flat-dashboard-profile">
      <div className="themes-container">
        <div className="row">
          <div className="col-lg-12 col-md-12 ">
            <div className="wrap-profile flex2 bg-white">
              <div className="box-profile flex2">
                <div className="images">
                  <img src="../images/dashboard/overview-user.jpg" alt="" />
                </div>
                <div className="content">
                  <h5 className="fw-6 color-3">Graphic Designer</h5>
                  <div className="check-box flex2">
                    <h3>Maverick Nguyen</h3>
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                        fill="#504CFE"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.9099 3.73218C11.052 3.77687 11.1762 3.86573 11.2643 3.98583C11.3524 4.10593 11.3999 4.25102 11.3999 4.39998V7.89998H14.1999C14.328 7.89992 14.4536 7.93499 14.5631 8.00136C14.6726 8.06773 14.7618 8.16286 14.821 8.2764C14.8801 8.38994 14.9071 8.51754 14.8988 8.64532C14.8905 8.77309 14.8473 8.89614 14.7739 9.00108L9.87392 16.0011C9.78864 16.1233 9.6666 16.215 9.52556 16.2631C9.38452 16.3111 9.23183 16.3129 9.08971 16.2681C8.94759 16.2234 8.82345 16.1344 8.73537 16.0143C8.64728 15.8941 8.59983 15.749 8.59992 15.6V12.1H5.79992C5.67188 12.1 5.54627 12.065 5.43677 11.9986C5.32727 11.9322 5.23808 11.8371 5.17889 11.7236C5.1197 11.61 5.09279 11.4824 5.10108 11.3546C5.10937 11.2269 5.15255 11.1038 5.22592 10.9989L10.1259 3.99888C10.2113 3.87693 10.3334 3.78539 10.4744 3.73755C10.6154 3.68972 10.7679 3.68808 10.9099 3.73288V3.73218Z"
                        fill="white"
                      />
                    </svg>
                    <div className="status-wrap">
                      <div className="button-status fs-12 color-3 style-bt">
                        {" "}
                        Available now
                      </div>
                    </div>
                  </div>
                  <div className="tag-wrap flex">
                    <div className="tag-box flex">
                      <a href="#">Blender</a>
                      <a href="#">Sketch</a>
                      <a href="#">Adobe XD</a>
                      <a href="#">Figma</a>
                    </div>
                    <div className="map color-4">Tokyo, Japan</div>
                    <div className="dolar color-4">$300/day</div>
                  </div>
                </div>
              </div>
              <div className="tt-button">
                <a href="#">Edit Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="flat-dashboard-overview flat-dashboard-about">
      <div className="themes-container">
        <div className="row">
          <div className="col-lg-12 col-md-12 ">
            <div className="wrap-about flex">
              <div className="side-bar">
                <div className="sidebar-map bg-white">
                  <div className="title-box flex">
                    <div className="p-16">Career Finding</div>
                    <h4 className="color-">UI UX Designer</h4>
                  </div>
                  <div className="title-box flex">
                    <div className="p-16">Location</div>
                    <h4>Tokyo, Japan </h4>
                  </div>
                  <div className="title-box flex">
                    <div className="p-16">Phone Number</div>
                    <h4>123 456 7890 </h4>
                  </div>
                  <div className="title-box flex">
                    <div className="p-16">Email</div>
                    <h4>
                      <a
                        href="https://themesflat.co/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="a4cccd8ac5d2cdd0c1dce4c3c9c5cdc88ac7cbc9"
                      >
                        [email&nbsp;protected]
                      </a>
                    </h4>
                  </div>
                  <div className="title-box flex">
                    <div className="p-16">Offered Salary</div>
                    <h4>$2500/Month</h4>
                  </div>
                  <div className="title-box flex">
                    <div className="p-16">Experience time</div>
                    <h4>5 Years</h4>
                  </div>
                  <div className="title-box flex">
                    <div className="p-16">Language</div>
                    <h4>English, Vietnamese </h4>
                  </div>
                  <div className="title-box flex">
                    <div className="p-16">Age</div>
                    <h4>26 Years Old</h4>
                  </div>
                  <div className="title-box flex">
                    <div className="p-16">Qualification</div>
                    <h4>Master Degree</h4>
                  </div>
                  <div className="wrap-icon">
                    <h4>Socials:</h4>
                    <div className="box-icon flex">
                      <a href="#" className="icon-facebook" />
                      <a href="#" className="icon-linkedin2" />
                      <a href="#" className="icon-twitter" />
                      <a href="#" className="icon-pinterest" />
                      <a href="#" className="icon-instagram1" />
                      <a href="#" className="icon-youtube" />
                    </div>
                  </div>
                </div>
                <div className="sidebar-extended">
                  <h4 className="fw-7">Extended</h4>
                  <div className="month-box flex">
                    <span className="fw-6">$79.00</span>
                    <h5>/month</h5>
                  </div>
                  <p>Upgrade your plan from a Free trial, to ‘Premium Plan’</p>
                  <div className="tt-button">
                    <a href="#" className="btn-3">
                      Upgrade Plan
                    </a>
                  </div>
                </div>
              </div>
              <div className="post-about widget-dash-video bg-white">
                <h3 className="title-about">About Me</h3>
                <p className="text-1">
                  Are you a User Experience Designer with a track record of
                  delivering intuitive digital experiences that drive results? Are
                  you a strategic storyteller and systems thinker who can concept
                  and craft smart, world-class campaigns across a variety of
                  mediums?
                </p>
                <p className="text-3">
                  Deloitte's Green Dot Agency is looking to add a Lead User
                  Experience Designer to our experience design team. We want a
                  passionate creative who's inspired by new trends and emerging
                  technologies, and is able to integrate them into memorable user
                  experiences. A problem solver who is entrepreneurial,
                  collaborative, hungry, and humble; can deliver beautifully
                  designed, leading-edge experiences under tight deadlines; and
                  who has demonstrated proven expertise.
                </p>
                <h3 className="title-education">Education</h3>
                <div className="education-wrap">
                  <div className="education-box">
                    <div className="title-box flex2">
                      <div className="subtitle-1 fw-7">FPT University</div>
                      <div className="subtitle-2 fs-12 fw-5">2019 - 2021</div>
                    </div>
                    <h4 className="fw-7">Graphic Design</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos.
                    </p>
                  </div>
                  <div className="education-box">
                    <div className="title-box flex2">
                      <div className="subtitle-1 fw-7">TB Course</div>
                      <div className="subtitle-2 fs-12 fw-5">2019 - 2021</div>
                    </div>
                    <h4 className="fw-7">UX Design</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos.
                    </p>
                  </div>
                </div>
                <h3 className="title-user">User Activity Timeline</h3>
                <div className="timeline-wrap">
                  <div className="timeline-box">
                    <div className="title-box flex2">
                      <div className="inner flex2">
                        <svg
                          width={18}
                          height={36}
                          viewBox="0 0 18 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            opacity="0.12"
                            cx={9}
                            cy="18.1016"
                            r={9}
                            fill="#EB4D4D"
                          />
                          <circle cx={9} cy="18.1016" r={6} fill="#EB4D4D" />
                        </svg>
                        <h4 className="titles fw-7">Applied To Jobs</h4>
                      </div>
                      <div className=" fw-5 color-4">12 min ago</div>
                    </div>
                    <div className="content">
                      <div className="texts color-4">
                        Invoices have been paid to the company
                      </div>
                      <div className="icon-box flex2">
                        <span className="icon-file-pdf" />
                        <span className="fw-7 color-4">CV_ TONY.pdf</span>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-box">
                    <div className="title-box flex2">
                      <div className="inner flex2">
                        <svg
                          width={18}
                          height={36}
                          viewBox="0 0 18 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            opacity="0.12"
                            cx={9}
                            cy="18.1016"
                            r={9}
                            fill="#37B853"
                          />
                          <circle cx={9} cy="18.1016" r={6} fill="#37B853" />
                        </svg>
                        <h4 className="titles fw-7">Meeting With John</h4>
                      </div>
                      <div className=" fw-5 color-4">45 min ago</div>
                    </div>
                    <div className="content">
                      <div className="texts color-4">
                        Interview meeting with john @10:15am
                      </div>
                      <div className="image-box flex">
                        <div className="images">
                          <img
                            src="../images/dashboard/overview-timeline.jpg"
                            alt=""
                          />
                        </div>
                        <div className="title-content">
                          <div className="title-client fw-7 color-4 font-1">
                            John Doe (Client)
                          </div>
                          <div className=" color-4 font-1">
                            Interview meeting with john @10:15am
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-box">
                    <div className="title-box flex2">
                      <div className="inner flex2">
                        <svg
                          width={18}
                          height={36}
                          viewBox="0 0 18 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            opacity="0.12"
                            cx={9}
                            cy="18.1016"
                            r={9}
                            fill="#504CFE"
                          />
                          <circle cx={9} cy="18.1016" r={6} fill="#504CFE" />
                        </svg>
                        <h4 className="titles fw-7">Upload CV</h4>
                      </div>
                      <div className=" fw-5 color-4">5 day ago</div>
                    </div>
                    <div className="content">
                      <div className="color-4">
                        Weekly review of freshly prepared design for our new app.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flat-dashboard-candidates flat-dashboard-applicants style-overview">
              <div className="applicants bg-white">
                <h3 className="title-appli">Job Applied Recently</h3>
                <div className="table-content">
                  <div className="wrap-applicants table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>JObs</th>
                          <th>Status</th>
                          <th className="center">Date Applied</th>
                          <th className="center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* col 1 */}
                        <tr className="file-delete">
                          <td>
                            <div className="candidates-wrap flex2">
                              <div className="images">
                                <img
                                  src="../images/dashboard/logo-company-1.png"
                                  alt=""
                                />
                              </div>
                              <div className="content">
                                <h3>UI UX Designer</h3>
                                <div className="now-box flex2">
                                  <div className="map color-4">
                                    Los Angeles Office
                                  </div>
                                  <div className="days"> 2 days ago </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="status-wrap">
                              <div className="button-status style-bt style-2">
                                {" "}
                                Seen
                              </div>
                            </div>
                          </td>
                          <td className="center">
                            <div className="title-day color-1">
                              December 18, 2023
                            </div>
                          </td>
                          <td className="center">
                            <div
                              id="items_1"
                              className="dropdown titles-dropdown"
                            >
                              <a className="btn-selector nolink flex">
                                <span className="more-icon" />
                                <span className="more-icon" />
                                <span className="more-icon" />
                              </a>
                              <ul>
                                <li>
                                  <span className="icon-eye more-ic" />{" "}
                                  <span>View Job</span>
                                </li>
                                <li className="remove-file">
                                  <span className="icon-trash more-ic" />
                                  <span>Remove Job</span>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        {/* col 2 */}
                        <tr className="file-delete">
                          <td>
                            <div className="candidates-wrap flex2">
                              <div className="images">
                                <img
                                  src="../images/dashboard/logo-company-2.png"
                                  alt=""
                                />
                              </div>
                              <div className="content">
                                <h3>Human Resource</h3>
                                <div className="now-box flex2">
                                  <div className="map color-4">Paris Office</div>
                                  <div className="days"> 2 days ago </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="status-wrap">
                              <div className="button-status style-bt color-3">
                                Responded
                              </div>
                            </div>
                          </td>
                          <td className="center">
                            <div className="title-day color-1">
                              December 18, 2023
                            </div>
                          </td>
                          <td className="center">
                            <div
                              id="items_2"
                              className="dropdown titles-dropdown"
                            >
                              <a className="btn-selector nolink flex">
                                <span className="more-icon" />
                                <span className="more-icon" />
                                <span className="more-icon" />
                              </a>
                              <ul>
                                <li>
                                  <span className="icon-eye more-ic" />{" "}
                                  <span>View Job</span>
                                </li>
                                <li className="remove-file">
                                  <span className="icon-trash more-ic" />
                                  <span>Remove Job</span>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        {/* col 3 */}
                        <tr className="file-delete">
                          <td>
                            <div className="candidates-wrap flex2">
                              <div className="images">
                                <img
                                  src="../images/dashboard/logo-company-3.png"
                                  alt=""
                                />
                              </div>
                              <div className="content">
                                <h3>Python Developer</h3>
                                <div className="now-box flex2">
                                  <div className="map color-4">
                                    Bellevue Office
                                  </div>
                                  <div className="days"> 2 days ago </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="status-wrap">
                              <div className="button-status style-bt style">
                                Pending
                              </div>
                            </div>
                          </td>
                          <td className="center">
                            <div className="title-day color-1">
                              December 18, 2023
                            </div>
                          </td>
                          <td className="center">
                            <div
                              id="items_3"
                              className="dropdown titles-dropdown"
                            >
                              <a className="btn-selector nolink flex">
                                <span className="more-icon" />
                                <span className="more-icon" />
                                <span className="more-icon" />
                              </a>
                              <ul>
                                <li>
                                  <span className="icon-eye more-ic" />{" "}
                                  <span>View Job</span>
                                </li>
                                <li className="remove-file">
                                  <span className="icon-trash more-ic" />
                                  <span>Remove Job</span>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        {/* col 4 */}
                        <tr className="file-delete">
                          <td>
                            <div className="candidates-wrap flex2">
                              <div className="images">
                                <img
                                  src="../images/dashboard/logo-company-4.png"
                                  alt=""
                                />
                              </div>
                              <div className="content">
                                <h3>PHP Developer</h3>
                                <div className="now-box flex2">
                                  <div className="map color-4">US HQ NYC</div>
                                  <div className="days"> 2 days ago </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="status-wrap">
                              <div className="button-status style-bt color-3">
                                Responded
                              </div>
                            </div>
                          </td>
                          <td className="center">
                            <div className="title-day color-1">
                              December 18, 2023
                            </div>
                          </td>
                          <td className="center">
                            <div
                              id="items_4"
                              className="dropdown titles-dropdown"
                            >
                              <a className="btn-selector nolink flex">
                                <span className="more-icon" />
                                <span className="more-icon" />
                                <span className="more-icon" />
                              </a>
                              <ul>
                                <li>
                                  <span className="icon-eye more-ic" />{" "}
                                  <span>View Job</span>
                                </li>
                                <li className="remove-file">
                                  <span className="icon-trash more-ic" />
                                  <span>Remove Job</span>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  </div>
  )
}

export default ApplicantOverview;