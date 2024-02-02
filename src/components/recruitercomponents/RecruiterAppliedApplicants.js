import React, { useState, useEffect,useRef } from 'react';
import { useUserContext } from '../common/UserProvider';
import ApplicantAPIService,{ apiUrl } from '../../services/ApplicantAPIService';
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';
import $ from 'jquery';
import ApplicantPopup from './ApplicantPopup';

function RecruiterAppliedApplicants({selectedJobId}) {
  const [applicants, setApplicants] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null); // State for selected applicant
  const { user } = useUserContext();
  const { jobId } = useParams();
  const isMounted = useRef(true);
  const tableref=useRef(null);
  

  const fetchAllAppliedApplicants = async () => {
    try {
      const response = await axios.get(`${apiUrl}/applyjob/appliedapplicants/${selectedJobId}`);
       
        setApplicants(response.data);
        const $table= window.$(tableref.current);
   // $table.DataTable().destroy();
     const timeoutId = setTimeout(() => {  
      $table.DataTable().destroy();
       $table.DataTable({responsive:true});
 
             }, 250);
   
    return () => {
       isMounted.current = false;
     // $table.DataTable().destroy(true);
    };
    } catch (error) {
      console.error('Error fetching applicants:', error);
    }
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    }
    fetchAllAppliedApplicants();
    
  }, [selectedJobId]);

  const handleNameClick = (applicant) => {
    setSelectedApplicant(applicant); // Set selected applicant when their name is clicked
  };

  const handleClosePopup = () => {
    setSelectedApplicant(null); // Close the popup by resetting selected applicant to null
  };

  // useEffect(() => {
  //   const jwtToken = localStorage.getItem('jwtToken');
  //   if (jwtToken) {
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
  //   }

  //   axios
  //     .get(`${apiUrl}/applyjob/appliedapplicants/${selectedJobId}`)
  //     .then((response) => {
  //       setApplicants(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching job details:', error);
  //     });
  // }, [user.id]);

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
          {applicants.length === 0 ? (
                        <p>No Applied applicants are available.</p>
                      ) : (
        <table  ref={tableref} className="responsive-table">
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
                                <td onClick={() => handleNameClick(application.applicant)}>{application.applicant.name}</td>
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
                      )}
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
      {selectedApplicant && (
        <ApplicantPopup
          applicant={selectedApplicant}
          onClose={handleClosePopup}
        />
      )}
      </div>
  );
}

export default RecruiterAppliedApplicants;
