import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logoCompany1 from '../../images/cty12.png';
import ApplicantAPIService, { apiUrl } from '../../services/ApplicantAPIService';
import { useUserContext } from '../common/UserProvider';
 
function ApplicantViewJob({ selectedJobId }) {
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applied, setApplied] = useState(false);
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
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`${apiUrl}/viewjob/applicant/viewjob/${selectedJobId}/${user.id}`);
        const {body} = response.data;
        setLoading(false);
        if (body) {
          setJobDetails(body);
 
          // Set the applied status in local storage
          const appliedStatus = localStorage.getItem(`appliedStatus-${selectedJobId}`);
          if (appliedStatus) {
            setApplied(appliedStatus === 'true');
          }
        }
      } catch (error) {
        console.error('Error fetching job details:', error);
      } finally {
        setLoading(false);
      }
    };
 
    // Call the fetchJobDetails function
    fetchJobDetails();
  }, [selectedJobId]);
 
  const fetchJobDetails = async () => {
    try {
      const response = await axios.get(`${apiUrl}/viewjob/applicant/viewjob/${selectedJobId}/${user.id}`);
      const {body} = response.data;
      setLoading(false);
      if (body) {
        setJobDetails(body);
 
        // Set the applied status in local storage
        const appliedStatus = localStorage.getItem(`appliedStatus-${selectedJobId}`);
        if (appliedStatus) {
          setApplied(appliedStatus === 'true');
        }
      }
    } catch (error) {
      console.error('Error fetching job details:', error);
    } finally {
      setLoading(false);
    }
  };
  const handleApplyNow = async () => {
    try {
      setApplied(true);
 
      const response = await axios.post(`${apiUrl}/applyjob/applicants/applyjob/${applicantId}/${selectedJobId}`);
      const { applied } = response.data;
 
      window.alert('Job applied successfully');
     
      // Update local storage
      localStorage.setItem(`appliedStatus-${selectedJobId}`, 'true');
 
      // Update the state based on the response
      setApplied(applied);
 
      // Fetch job details again to reflect the changes
      fetchJobDetails();
    } catch (error) {
      console.error('Error applying for the job:', error);
     
      // You may want to show a different alert for cases where the job has already been applied
      window.alert('Job has already been applied by the applicant');
     
      // Reset the state to false in case of an error
      setApplied(false);
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
                    <div className="title-dash flex2">Full Job Details</div>
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
                  <article className="job-article">
                    {/* Render job details using the jobDetails state */}
                    {jobDetails && (
                      <div className="top-content">
                        {/* Render job details based on the structure of your API response */}
                        <div className="features-job style-2 stc-apply">
                          <div className="job-archive-header">
                            <div className="inner-box">
                              {/* <div className="logo-company">
                                <img src="images/logo-company/cty12.png" alt="images/logo-company/cty12.png" />
                              </div> */}
                               <div className="logo-company">                             
                               {jobDetails.logoFile ? ( <img src={`data:image/png;base64,${jobDetails.logoFile}`} alt="Company Logo" /> ) 
                               : (<img src="images/logo-company/cty12.png" alt={`Default Company Logo`} /> )}
                            </div>
                              <div className="box-content">
                                <h4>
                                  <a href="#">{jobDetails.companyname}</a>
                                </h4>
                                <h3>
                                  <a href="#">{jobDetails.jobTitle}</a>
                                 
                                </h3>
                                <ul>
                                  <li>
                                    <span className="icon-map-pin"></span>
                                    {jobDetails.location}
                                  </li>
                                  <li>
                                    <span className="icon-calendar"></span>
                                    {formatDate(jobDetails.creationDate)}
                                  </li>
                                </ul>
                                <div className="button-readmore">
                                 
                                  <a className="btn-apply btn-popup">
           
<button
      className={`btn-apply btn-popup ${applied ? 'applied' : ''}`}
      onClick={handleApplyNow}
      disabled={jobDetails.jobStatus === 'Already Applied'}
      style={{
        // backgroundColor: applied ? 'green' : '',
        backgroundColor: jobDetails.jobStatus === 'Already Applied' ? 'green' : '',
        cursor: applied ? 'not-allowed' : 'pointer',
      }}
    >
      <span className="icon-send"></span>
      {jobDetails.jobStatus}
      {/* {applied ? 'Already Applied' : 'Apply Now'} */}
    </button>
 
            </a>&nbsp;
            <a
  href="/applicant-find-jobs"
  className="btn-apply btn-popup"
  style={{
    display: 'inline-block',
    padding: '5px 20px',
    backgroundColor: '#1967d2',  // Set your desired blue color here
    color: 'white',  // Set the text color
    textDecoration: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
   
  }}
>
  Cancel
</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="job-archive-footer">
                            <div className="job-footer-left">
                              <ul className="job-tag">
                                <li>
                                  <a href="#">{jobDetails.employeeType}</a>
                                </li>
                                <li>
                                  <a href="#">{jobDetails.remote ? 'Remote' : 'Office-based'}</a>
                                </li>
                              </ul>
                              <div className="star">
                                {Array.from({ length: jobDetails.starRating }).map((_, index) => (
                                  <span key={index} className="icon-star-full"></span>
                                ))}
                              </div>
                            </div>
                            <div className="job-footer-right">
                              <div className="price">
                                <span></span>Package :  &nbsp;
                                <p>&#x20B9; {jobDetails.minSalary} - &#x20B9; {jobDetails.maxSalary} / year</p>
                              </div>
                              {/* <p className="days">{jobDetails.daysLeft} days left to apply</p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
 
                    {jobDetails && (
                      <div className="inner-content">
                        <h5>Full Job Description</h5>
                        <p>{jobDetails.description}</p>
                      </div>
                    )}
                  </article>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
 
export default ApplicantViewJob;