import React from 'react'
import { useUserContext } from '../common/UserProvider';
import{ useState,useEffect } from "react";
import axios from 'axios';
import ApplicantAPIService,{ apiUrl } from '../../services/ApplicantAPIService';
import logoCompany1 from '../../images/cty12.png';
import { Link } from 'react-router-dom';

function RecruiterJobOpenings({setSelectedJobId}) {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('jobTitle'); // Default filter
    const user1 = useUserContext();
    const user=user1.user;
  
    useEffect(() => {
      const jwtToken = localStorage.getItem('jwtToken');
      if (jwtToken) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
      }
  
      // You may need to replace 'userId' with the appropriate identifier for your user
      axios
      .get(`${apiUrl}/job/recruiters/viewJobs/${user.id}`)
        .then((response) => {
          setJobs(response.data);
        })
        .catch((error) => {
          console.error('Error fetching job details:', error);
        });
    }, []); // Replace with the actual user identifier
  
    const handleButtonClick = (jobId) => {
      // Perform any logic you need when the button is clicked
      // For example, set the selected job ID in your component's state
      setSelectedJobId(jobId);
    };

  return (
    <div>
    
        <div className="dashboard__content">
        <section className="page-title-dashboard">
          <div className="themes-container">
            <div className="row">
              <div className="col-lg-12 col-md-12 ">
                <div className="title-dashboard">
                  <div className="title-dash flex2">Job Openings</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flat-dashboard-setting flat-dashboard-setting2">
            <div className="themes-container bg-white">
              <div className="content-tab">
                <div className="inner">
                  <br />
                  <div className="group-col-2">
                    {jobs.map((job) => (
                      <div className="features-job cl2" key={job.id}>
                        <div className="job-archive-header">
                          <div className="inner-box">
                            <div className="logo-company">
                              <img src={logoCompany1} alt={`Company Logo ${job.id}`} />
                            </div>
                            <div className="box-content">
                              <h4>
                                <a href="jobs-single.html">{job.companyname}</a>
                              </h4>
                              <h3>
                                <a href="jobs-single.html">
                                  {job.jobTitle}
                                  <span className="icon-bolt"></span>
                                </a>
                              </h3>
                              <ul>
                                <li>
                                  <span className="icon-map-pin"></span>
                                  {job.location}
                                </li>
                                <li>
                                  <span className="icon-calendar"></span>
                                  Posted on{job.datePosted}
                                </li>
                              </ul>
                              <span class="icon-heart"></span>
                            </div>
                          </div>
                        </div>
                        <div className="job-archive-footer">
                            <div className="job-footer-left">
                              <ul className="job-tag">
                                <li>
                                  <a href="#">{job.employeeType}</a>
                                </li>
                                <li>
                                  <a href="#">{job.remote ? 'Remote' : 'Office-based'}</a>
                                </li>
                              </ul>
                              <div className="star">
                                {Array.from({ length: job.starRating }).map((_, index) => (
                                  <span key={index} className="icon-star-full"></span>
                                ))}
                              </div>
                            </div>
                            <div className="job-footer-right">
                              <div className="price">
                                <span></span>
                                <p>&#x20B9; {job.minSalary} - &#x20B9; {job.maxSalary} / year</p>
                              </div>
                              {/* <p className="days">{jobDetails.daysLeft} days left to apply</p> */}
                              {/* <Link to="/applicant-interview-status" onClick={() => setSelectedJobId(job.id)}>
                              <button type="button" style={{borderRadius:20}} className="btn-primary">Check Status</button>
                              </Link> */}
                              {/* {job && (<Link to="/applicant-interview-status" onClick={() => setSelectedJobId(job.id)}>Check Status</Link> )} */}

                              <Link to="/recruiter-appliedapplicants" onClick={() => handleButtonClick(job.id)}>
                              <button type="button" style={{borderRadius:20}} className="btn-primary">View Applicants</button>
                              </Link>
                            </div>
                          </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
         </div>
       
     </div>
  )
}

export default RecruiterJobOpenings;