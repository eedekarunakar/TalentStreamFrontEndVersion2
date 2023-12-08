import React, { useState, useEffect } from 'react';
import { useUserContext } from '../common/UserProvider';
import ApplicantAPIService,{ apiUrl } from '../../services/ApplicantAPIService';
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';

function RecruiterAppliedApplicants({selectedJobId}) {
  const [applicants, setApplicants] = useState([]);
  const { user } = useUserContext();
  const { jobId } = useParams();

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    }

    axios
      .get(`${apiUrl}/applyjob/appliedapplicants/${selectedJobId}`)
      .then((response) => {
        setApplicants(response.data);
      })
      .catch((error) => {
        console.error('Error fetching job details:', error);
      });
  }, [user.id]);

  return (
    <div>
      <div className="dashboard__content">
  <section className="page-title-dashboard">
    <div className="themes-container">
      <div className="row">
        <div className="col-lg-12 col-md-12 ">
          <div className="title-dashboard">
            <div className="title-dash flex2">Applied Applicants</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="flat-dashboard-setting">
  <div className="themes-container">
      <div className="row">
        <div className="col-lg-12 col-md-12 ">
          <div className="profile-setting bg-white">
          <div className="table-container-wrapper">
          <div className="table-container">
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Job Title</th>
              <th>Applicant Status</th>
              <th>Experience</th>
              <th>Skill Name</th>
              <th>Qualification</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
          {applicants.map((application) => (
                            <tr key={application.applicant.email}>
                              <td>{application.applicant.name}</td>
                              <td>{application.applicant.email}</td>
                              <td>{application.applicant.mobilenumber}</td>
                              <td>{application.job.jobTitle}</td>
                              <td>{application.applicantStatus}</td>
                              <td>{application.job.maximumExperience}</td>
                              <td>
                                {application.job.skillsRequired.map((skill) => (
                                  <span key={skill.id}>{skill.skillName}, </span>
                                ))}
                              </td>
                              <td>{application.job.minimumQualification}</td>
                              <td>{application.job.location}</td>
                            </tr>
                          ))}
          </tbody>
        </table>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
      </div>
  );
}

export default RecruiterAppliedApplicants;
