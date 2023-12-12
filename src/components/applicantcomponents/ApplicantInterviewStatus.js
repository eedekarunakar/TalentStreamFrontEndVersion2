import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logoCompany1 from '../../images/cty12.png';
import { useUserContext } from '../common/UserProvider';
import { apiUrl } from '../../services/ApplicantAPIService';

const ApplicantInterviewStatus = ({ selectedJobId }) => {
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useUserContext();
  const applicantId = user.id;

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
        const response = await axios.get(`${apiUrl}/viewjob/applicant/viewjob/${selectedJobId}`);
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

  return (
    <div>
      {loading ? null : (
        <div className="dashboard__content">
          <section className="page-title-dashboard">
            <div className="themes-container">
              <div className="row">
                <div className="col-lg-12 col-md-12 ">
                  <div className="title-dashboard">
                    <div className="title-dash flex2">Interview Status</div>
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
                    {jobDetails ? (
                      <>
                        {/* Job Details */}
                        <div className="features-job cl2">
                          <div className="job-archive-header">
                            <div className="inner-box">
                              <div className="logo-company">
                                <img src={logoCompany1} alt={`Company Logo ${jobDetails.id}`} />
                              </div>
                              <div className="box-content">
                                <h4>
                                  <a href="jobs-single.html">{jobDetails.companyname}</a>
                                </h4>
                                <h3>
                                  <a href="jobs-single.html">
                                    {jobDetails.jobTitle}
                                    <span className="icon-bolt"></span>
                                  </a>
                                </h3>
                                <ul>
                                  <li>
                                    <span className="icon-map-pin"></span>
                                    {jobDetails.location}
                                  </li>
                                  <li>
                                    <span className="icon-calendar"></span>
                                    Posted on {jobDetails.datePosted}
                                  </li>
                                </ul>
                                <span className="icon-heart"></span>
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
                                <span></span>
                                <p>&#x20B9; {jobDetails.minSalary} - &#x20B9; {jobDetails.maxSalary} / year</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <p>No job details available.</p>
                    )}

                    {/* Interview Status Timeline */}
                    {/* Add your timeline rendering logic here */}
                  </div>
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
