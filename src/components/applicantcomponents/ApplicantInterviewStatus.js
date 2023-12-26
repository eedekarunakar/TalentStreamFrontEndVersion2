import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logoCompany1 from '../../images/cty12.png';
import { useUserContext } from '../common/UserProvider';
import { apiUrl } from '../../services/ApplicantAPIService';
import { useLocation } from 'react-router-dom';

const ApplicantInterviewStatus = ({ selectedJobId }) => {
  const [jobDetails, setJobDetails] = useState(null);
  const [jobStatus, setJobStatus] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUserContext();
  const applicantId = user.id;
  const location = useLocation();
  const jobId = new URLSearchParams(location.search).get('jobId');

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 50));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`${apiUrl}/viewjob/applicant/viewjob/${jobId}`);
        const {body} = response.data;
        setLoading(false);
        if (body) {
          setJobDetails(body);
        }
      } catch (error) {
        console.error('Error fetching job details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [selectedJobId]);


  useEffect(() => {
    const fetchJobStatus = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/applyjob/recruiters/applyjob-status-history/${selectedJobId}`
        );
        const body = response.data;
        setLoading(false);
        if (Array.isArray(body) && body.length > 0) {
          setJobStatus(body[0]); // Access the first element of the array
        }
      } catch (error) {
        console.error('Error fetching job status:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobStatus();
  }, [selectedJobId]);

  
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
                  <div className="title-dash flex2">Job Status</div>
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
                            <div className="logo-company">
                              <img src="images/logo-company/cty12.png" alt="images/logo-company/cty12.png" />
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


{jobStatus && (
<ul class="events">
  <li>
    <time datetime="10:03">Date:{formatDate(jobStatus.changeDate)}</time> 
    <span><strong>Status:{jobStatus.status}</strong> </span></li>
</ul>
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
};

export default ApplicantInterviewStatus;
