import React, { useState, useEffect , useRef} from 'react';
import { useUserContext } from '../common/UserProvider';
import { apiUrl } from '../../services/ApplicantAPIService';
import ScheduleInterviewPopup from './ScheduleInterviewPopup';
import axios from 'axios';

function RecruiterAllApplicants() {
  const [applicants, setApplicants] = useState([]);
  const { user } = useUserContext();
  const [selectedApplicant, setSelectedApplicant] = useState(null); // State to manage selected applicant for status change
  const [selectedStatus, setSelectedStatus] = useState(''); // State to manage selected status
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility
  const [selectedMenuOption, setSelectedMenuOption] = useState('All'); // New state for tracking the selected menu option
  const isMounted = useRef(true);
  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('jobTitle'); // Default filter
  const [showPopup, setShowPopup] = useState(false);

  const fetchApplicants = async () => {
    try {
      const params = {
        [selectedFilter]: search,
      };

      let apiUrlEndpoint = '/job/search';
      const filters = {};


      if (selectedFilter === 'jobTitle') {
        filters.jobTitle = search;
      } else if (selectedFilter === 'location') {
        filters.location = search;
      } else if (selectedFilter === 'skillName') {
        filters.skillName = search;
      }
      // Add other filter conditions as needed

      const response = await axios.get(apiUrl + apiUrlEndpoint, { params });

      if (isMounted.current) {
        setApplicants(response.data);
      }
    } catch (error) {
      console.error('Error fetching job details:', error);
    }
  };

 
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
      return () => {
        isMounted.current = false;
      };
  }, [user.id]);
 
  const handleFilterChange = (status) => {
    setSelectedStatus(''); // Reset selected status
    setSelectedApplicant(null); // Reset selected applicant
    setSelectedMenuOption(status); // Update selected menu option
 
  };
  const handleStatusChange = () => {
    if (selectedApplicant && selectedStatus) {
      const applyJobId =
      selectedApplicant.applyjobid;
      console.log(applyJobId);
 
      // Call your API to update the status
      axios
        .put(`${apiUrl}/applyjob/recruiters/applyjob-update-status/${applyJobId}/${selectedStatus}`)
        .then(() => {
          if (isMounted.current) {
            // Handle success
            // You may want to update local state or trigger a re-fetch if needed
            // For demonstration purposes, updating local state directly
            const updatedApplicants = applicants.map((application) => {
              if (application.applyjobid === applyJobId) {
                return { ...application, applicantStatus: selectedStatus };
              }
              return application;
            });
 
            setApplicants(updatedApplicants);
            console.log(updatedApplicants.status);
            setShowDropdown(false); // Close the dropdown after selection
            setSelectedStatus(''); // Reset selected status
            setSelectedApplicant(null); // Reset selected applicant
          }
        })
        .catch((error) => {
          console.error('Error updating status:', error);
          // Handle error if needed
        });
    }
  };
//   useEffect(() => {
//   handleStatusChange();
// }, [selectedStatus]);


useEffect(() => {
  const jwtToken = localStorage.getItem('jwtToken');
  if (jwtToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
  }


 fetchApplicants();

  return () => {
    isMounted.current = false;
  };
}, [user.id, search, selectedFilter]);

const [showPopupArray, setShowPopupArray] = useState([]);

// ...

// Update the state when a row's "Schedule" button is clicked
const handleShowPopup = (index) => {
  const newShowPopupArray = [...showPopupArray];
  newShowPopupArray[index] = true;
  setShowPopupArray(newShowPopupArray);
};

const handleClosePopup = (index) => {
  const newShowPopupArray = [...showPopupArray];
  newShowPopupArray[index] = false;
  setShowPopupArray(newShowPopupArray);
};

const handleAddTeamMember = (formData) => {
  // Handle adding a team member here
};


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
          <div
            className={`menu-item ${selectedMenuOption === 'All' ? 'active' : ''}`}
            onClick={() => handleFilterChange("All")}
          >
            All
          </div>
          <div
            className={`menu-item ${selectedMenuOption === 'screening' ? 'active' : ''}`}
            onClick={() => handleFilterChange("screening")}
          >
            Screening
          </div>
          <div
            className={`menu-item ${selectedMenuOption === 'shortlisted' ? 'active' : ''}`}
            onClick={() => handleFilterChange("shortlisted")}
          >
            Shortlisted
          </div>
          <div
            className={`menu-item ${selectedMenuOption === 'interviewing' ? 'active' : ''}`}
            onClick={() => handleFilterChange("interviewing")}
          >
            Interviewing
          </div>
          <div
            className={`menu-item ${selectedMenuOption === 'selected' ? 'active' : ''}`}
            onClick={() => handleFilterChange("selected")}
          >
            Selected
          </div>
        </div>
      </div>
          <div className="col-lg-4 col-md-4">
          <div className="dropdown-container">
          <input
                  type="text"
                  placeholder={`Search by ${selectedFilter}`}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div className="filter-option">
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                  >
                    <option value="jobTitle">Job Title</option>
                    <option value="location">Location</option>
                    <option value="skillName">Skill Name</option>
                    {/* Add other filter options as needed */}
                  </select>
                  <button onClick={fetchApplicants}>Apply Filter</button>
            </div>
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
              <button onClick={handleStatusChange}>Update Status</button>
             
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
            <div className="table-container-wrapper">
              <div className="table-container">
                <table className="responsive-table">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile Number</th>
                      <th>Job Title</th>
                      <th>Applicant Status</th>
                      <th>Schedule Interview</th>
                      <th>Experience</th>
                      <th>Skill Name</th>
                      <th>Qualification</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applicants.map((application,index) => (
                      <tr key={application.email}>
                        <td>
                          <input
                            type="radio"
                            value={application.applyjobid}
                            checked={
                              selectedApplicant &&
                              selectedApplicant.applyjobid ===
                                application.applyjobid
                            }
                            onChange={() =>
                              setSelectedApplicant(application)
                            }
                            name={`applicantRadio-${application.applyjobid}`} // Unique name for each radio button
                          />
                        </td>
                   
                        <td>{application.name}</td>
                        <td>{application.email}</td>
                        <td>{application.mobilenumber}</td>
                        <td>{application.jobTitle}</td>
                        <td>{application.applicantStatus}</td>
                        <td>
                        <button onClick={() => setShowPopup(true)}>Schedule</button>
          <ScheduleInterviewPopup
            show={showPopup}
            handleClose={() => setShowPopup(false)}
            handleAddTeamMember={handleAddTeamMember}
            applyjobid={application.applyjobid}
          />
                            </td>
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
      </div>
    </section>
    </div>
  );
}
 
 
export default RecruiterAllApplicants;

