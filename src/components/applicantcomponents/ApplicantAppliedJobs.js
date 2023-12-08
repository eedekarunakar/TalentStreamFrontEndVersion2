import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { apiUrl } from '../../services/ApplicantAPIService';  // Adjust the import path based on your project structure
import { useUserContext } from '../common/UserProvider';
import logoCompany1 from '../../images/cty12.png';

function ApplicantAppliedJobs({setSelectedJobId}) {
    const [jobs, setJobs] = useState([]);
//   const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUserContext();
  const applicantId = user.id;

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data from an API)
    const fetchData = async () => {
      try {
        // Simulate fetching data after a delay (replace this with your actual data fetching logic)
        await new Promise(resolve => setTimeout(resolve, 50));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // Set loading to false to indicate the end of the operation, whether successful or not
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        // Fetch the list of applied jobs for the current applicant
        const response = await axios.get(`${apiUrl}/applyjob/getAppliedJobs/${applicantId}`);  // Make sure to have applicantId
        const jobsData = response.data;
        setJobs(jobsData);
      } catch (error) {
        console.error('Error fetching applied jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetchAppliedJobs function
    fetchAppliedJobs();
  }, []);

  return (
    <div>
    {loading ? null : (
        <div className="dashboard__content">
          <section className="page-title-dashboard">
            <div className="themes-container">
              <div className="row">
                <div className="col-lg-12 col-md-12 ">
                  <div className="title-dashboard">
                    <div className="title-dash flex2">My Applied Jobs</div>
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
                  {jobs.length === 0 ? (
                      <div style={{marginLeft:30}}>No Applied jobs available</div>
                    ) : (
                    jobs.map((job) => (
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
                              {job && (<Link to="/applicant-interview-status" onClick={() => setSelectedJobId(job.id)} className="button-status">Check Status</Link> )}
                            </div>
                          </div>
                      </div>
                    )))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>

       )}

    </div>
  );
}

export default ApplicantAppliedJobs;
