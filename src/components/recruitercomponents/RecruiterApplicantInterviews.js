import React, { useState, useEffect } from 'react';
import { useUserContext } from '../common/UserProvider';
import ApplicantAPIService,{ apiUrl } from '../../services/ApplicantAPIService';
import axios from 'axios';


function RecruiterApplicantInterviews() {
  const [applicants, setApplicants] = useState([]);
  const { user } = useUserContext();
  
  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    }

    // You may need to replace 'userId' with the appropriate identifier for your user
    axios
    .get(`${apiUrl}/applyjob/recruiter/${user.id}/interviews/shortlisted`)
      .then((response) => {
        setApplicants(response.data);
      })
      .catch((error) => {
        console.error('Error fetching job details:', error);
      });
  }, []); // Replace with the actual user identifier

  return (
    <div>
      <div className="dashboard__content">
  <section className="page-title-dashboard">
    <div className="themes-container">
      <div className="row">
        <div className="col-lg-12 col-md-12 ">
          <div className="title-dashboard">
            <div className="title-dash flex2">Scheduled Interviews</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="flat-dashboard-setting">
  <div className="themes-container">
  {applicants.length > 0 ? (
              <ScheduleInterviewTable interview={applicants} />
            ) : (
              <p>No Interviews are Scheduled</p>
            )}
      </div>
      </section>
      </div>
      </div>
  );
}

export default RecruiterApplicantInterviews;

function ScheduleInterviewTable({ interview }) {
    return (
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Applicant Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Job Title</th>
              <th>Date & Time</th>
              <th>Location</th>
              <th>Mode of Interview</th>
              <th>Round</th>
              <th>Interviewer Link</th>
              <th>Interviewer Name</th>
            </tr>
          </thead>
          <tbody>
            {interview.map((applicant, index) => (
              <tr key={index}>
                <td>{applicant.name}</td>
                <td>{applicant.email}</td>
                <td>{applicant.mobilenumber}</td>
                <td>{applicant.jobTitle}</td>
                <td>{applicant.timeAndDate}</td>
                <td>{applicant.location}</td>
                <td>{applicant.modeOfInterview}</td>
                <td>{applicant.round}</td>
                <td>
                  <a href={applicant.interviewLink} target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                </td>
                <td>{applicant.interviewPerson}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }