import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import ApplicantAPIService, { apiUrl } from '../../services/ApplicantAPIService';
import { useUserContext } from '../common/UserProvider';
import logoCompany1 from '../../images/cty12.png';

function ApplicantFindJobs({ setSelectedJobId }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useUserContext();
  const userId = user.id;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${apiUrl}/recommendedjob/findrecommendedjob/${userId}`);
        const jobData = response.data;
        setJobs(jobData);
      } catch (error) {
        console.error('Error fetching job data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [userId]);

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

  const handleSaveJob = async (jobId) => {
    try {
      const response = await axios.post(`${apiUrl}/savedjob/applicants/savejob/${userId}/${jobId}`);
      // Assuming the API response contains the message "Job Saved Successfully"
      const { message } = response.data;
       if(response.status =200){
        window.alert('Job Saved successfully');
       }
       fetchJobs();
    } catch (error) {
      window.alert('Job has already been saved by the applicant');
      console.error('Error saving job:', error);
    }
  };
  const fetchJobs = async () => {
    try {
      const response = await axios.get(`${apiUrl}/recommendedjob/findrecommendedjob/${userId}`);
      const jobData = response.data;
      setJobs(jobData);
    } catch (error) {
      console.error('Error fetching job data:', error);
    } finally {
      setLoading(false);
    }
  };

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    return formattedDate;
  }

  return (
    <div>
      {loading ? null : (
       <div className="dashboard__content">
       <section className="page-title-dashboard">
         <div className="themes-container">
           <div className="row">
             <div className="col-lg-12 col-md-12 ">
               <div className="title-dashboard">
                 <div className="title-dash flex2">Recommended jobs for you!</div>
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
                      <div style={{marginLeft:30}}><h4>Kindly Update your profile, and as per your skill set, you will get job recommendations.</h4><br/></div>
                    ) : (
                      jobs.map((job) => (
                        <div className="features-job cl2" key={job.id}>
                          <div className="job-archive-header">
                            <div className="inner-box">
                            <div className="logo-company">                             
                               {job.logoFile ? ( <img src={`data:image/png;base64,${job.logoFile}`} alt="Company Logo" /> ) 
                               : (<img src={logoCompany1} alt={`Default Company Logo ${job.id}`} /> )}
                            </div>
                              <div className="box-content">
                                <h4>
                                  <a href="jobs-single.html">{job.companyname}</a>
                                </h4>
                                <h3>
                                  <a href="jobs-single.html">
                                    {job.jobTitle}
                                    {/* <span className="icon-bolt"></span> */}
                                  </a>
                                </h3>
                                <ul>
                                  <li>
                                    <span className="icon-map-pin"></span>
                                    {job.location}
                                  </li>
                                  <li>
                                    <span className="icon-calendar"></span>
                                    Posted on {formatDate(job.creationDate)}
                                  </li>
                                </ul>
                                {/* <span class="icon-heart"></span> */}
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
                                {/* <button class="button-status">
                                {job && (<Link to="/applicant-interview-status" style={{color:'white'}} onClick={() => setSelectedJobId(job.id)}>Check Status</Link> )}
                                </button> */}
                                
  <ul className="job-tag">
    <li>
      {job && (
        <Link
          to="/applicant-view-job"
          onClick={() => setSelectedJobId(job.id)}
          className="button-status1"
        >
          View Job
        </Link>
      )}
    </li>
    <li>
        {/* Conditional rendering of Save Job button */}
        {job.saveJobStatus==='saved' ? (
            <button
            disabled
            className="button-status1"
            style={{ backgroundColor: 'green', color: 'white' }}
          >
            Already&nbsp;Saved
          </button>
           ) : (
            <button
              onClick={() => handleSaveJob(job.id)}
              className="button-status1"
            >
              Save Job
            </button>
          )}
 
    </li>
  </ul>

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

export default ApplicantFindJobs;
