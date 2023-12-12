// import React, { useState, useEffect } from 'react';
// import { useUserContext } from '../common/UserProvider';
// import ApplicantAPIService,{ apiUrl } from '../../services/ApplicantAPIService';
// import axios from 'axios';

// function RecruiterAllApplicants() {
//   const [applicants, setApplicants] = useState([]);
//   const { user } = useUserContext();


//   useEffect(() => {
//     const jwtToken = localStorage.getItem('jwtToken');
//     if (jwtToken) {
//       axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
//     }

//     axios
//       .get(`${apiUrl}/applyjob/recruiter/${user.id}/appliedapplicants`)
//       .then((response) => {
//         setApplicants(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching job details:', error);
//       });
//   }, [user.id]);

//   return (
//     <div>
//       <div className="dashboard__content">
//   <section className="page-title-dashboard">
//     <div className="themes-container">
//       <div className="row">
//         <div className="col-lg-12 col-md-12 ">
//           <div className="title-dashboard">
//             <div className="title-dash flex2">All Applicants</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//   <section className="flat-dashboard-setting">
//   <div className="themes-container">
//       <div className="row">
//         <div className="col-lg-12 col-md-12 ">
//           <div className="profile-setting bg-white">
//           <div className="table-container-wrapper">
//           <div className="table-container">
//         <table className="responsive-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Mobile Number</th>
//               <th>Job Title</th>
//               <th>Applicant Status</th>
//               <th>Experience</th>
//               <th>Skill Name</th>
//               <th>Qualification</th>
//               <th>Location</th>
//             </tr>
//           </thead>
//           <tbody>
//           {applicants.map((application) => (
//                             <tr key={application.email}>
//                               <td>{application.name}</td>
//                               <td>{application.email}</td>
//                               <td>{application.mobilenumber}</td>
//                               <td>{application.jobTitle}</td>
//                               <td>{application.applicantStatus}</td>
//                               <td>{application.minimumExperience}</td>
//                               <td>{application.skillName}                           
//                               </td>
//                               <td>{application.minimumQualification}</td>
//                               <td>{application.location}</td>
//                             </tr>
//                           ))}
//           </tbody>
//         </table>
//       </div>
//       </div>
//       </div>
//       </div>
//       </div>
//       </div>
//       </section>
//       </div>
//       </div>
//   );
// }

// export default RecruiterAllApplicants;
import React, { useState, useEffect } from 'react';
import { useUserContext } from '../common/UserProvider';
import { apiUrl } from '../../services/ApplicantAPIService';
import axios from 'axios';
 
function RecruiterAllApplicants() {
  const [applicants, setApplicants] = useState([]);
  const { user } = useUserContext();
  const [selectedApplicant, setSelectedApplicant] = useState(null); // State to manage selected applicant for status change
  const [selectedStatus, setSelectedStatus] = useState(''); // State to manage selected status
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility
  
 
 
 
  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    }
 
    axios
      .get(`${apiUrl}/applyjob/recruiter/${user.id}/appliedapplicants`)
      .then((response) => {
        setApplicants(response.data);
      })
      .catch((error) => {
        console.error('Error fetching job details:', error);
      });
     // fetchApplicants('All');
  }, [user.id]);
  // // Function to fetch applicants based on the selected filter
  // const fetchApplicants = (status) => {
  //   let apiUrl = `${apiUrl}/applyjob/recruiter/${user.id}/appliedapplicants`;

  //   if (status !== 'All') {
  //     // If the filter is not 'All', update the API URL
  //     apiUrl = `${apiUrl}/applyjob/recruiter/${user.id}/interviews/${status}`;
  //   }

  //   axios
  //     .get(apiUrl)
  //     .then((response) => {
  //       setApplicants(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching applicants:', error);
  //     });
  // };
  // Define the handleFilterChange function
  const handleFilterChange = (status) => {
    setSelectedStatus(''); // Reset selected status
    setSelectedApplicant(null); // Reset selected applicant
   // fetchApplicants(status);
  };
  const handleStatusChange = () => {
    if (selectedApplicant && selectedStatus) {
      const { applyJobId } = selectedApplicant;

      // Call your API to update the status
      axios
        .put(`${apiUrl}/applyjob/recruiters/applyjob-update-status/${applyJobId}/${selectedStatus}`)
        .then(() => {
          // Handle success
          // You may want to update local state or trigger a re-fetch if needed
          // For demonstration purposes, updating local state directly
          const updatedApplicants = applicants.map((application) => {
            if (application.applyJobId === applyJobId) {
              return { ...application, applicantStatus: selectedStatus };
            }
            return application;
          });

          setApplicants(updatedApplicants);
          setShowDropdown(false); // Close the dropdown after selection
          setSelectedStatus(''); // Reset selected status
          setSelectedApplicant(null); // Reset selected applicant
        })
        .catch((error) => {
          console.error('Error updating status:', error);
          // Handle error if needed
        });
    }
  };
  useEffect(() => {
  handleStatusChange();
}, [selectedStatus]);
return (
  <div className="dashboard__content">
    <section className="page-title-dashboard">
      <div className="themes-container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="title-dashboard">
              <div className="title-dash flex2">All Applicants</div>
            </div>
          </div>
        </div>
      </div>
    </section>
{/*    
  <div className="dashboard__content"> */}
    <section className="flat-dashboard-setting bg-white">
      <div className="themes-container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            {/* 1st part: Menu */}
            <div className="menu-list">
              <div className="menu-item" onClick={() => handleFilterChange("All")}>All</div>
              <div className="menu-item" onClick={() => handleFilterChange("screening")}>Screening</div>
              <div className="menu-item" onClick={() => handleFilterChange("shortlisted")}>Shortlisted</div>
              <div className="menu-item" onClick={() => handleFilterChange("interviewing")}>Interviewing</div>
              <div className="menu-item" onClick={() => handleFilterChange("selected")}>Selected</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            {/* 2nd part: Filter option */}
            <div className="filter-option">
              {/* Add your filter options here */}
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            {/* 3rd part: Dropdown */}
            <div className="dropdown-container">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="" disabled>
                  Change Status
                </option>
                <option value="screening">Screening</option>
                <option value="shortlisted">Shortlisted</option>
                <option value="interviewing">Interviewing</option>
                <option value="selected">Selected</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Displaying applicants section */}
    <section className="flat-dashboard-setting bg-white">
      <div className="themes-container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="profile-setting">
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
                      <tr key={application.email}>
                        <td>
                          <input
                            type="radio"
                            value={application.applyJobId}
                            checked={
                              selectedApplicant &&
                              selectedApplicant.applyJobId ===
                                application.applyJobId
                            }
                            onChange={() =>
                              setSelectedApplicant(application)
                            }
                          />
                        </td>
                        <td>{application.name}</td>
                        <td>{application.email}</td>
                        <td>{application.mobilenumber}</td>
                        <td>{application.jobTitle}</td>
                        <td>{application.applicantStatus}</td>
                        <td>{application.minimumExperience}</td>
                        <td>{application.skillName}</td>
                        <td>{application.minimumQualification}</td>
                        <td>{application.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>


);


}
 
export default RecruiterAllApplicants;