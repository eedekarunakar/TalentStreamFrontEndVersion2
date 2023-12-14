import React, { useState, useEffect , useRef} from 'react';
import { useUserContext } from '../common/UserProvider';
import { apiUrl } from '../../services/ApplicantAPIService';
import { Modal, Button, Form, Col } from "react-bootstrap";
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
  const [show, setShow] = useState(false);

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

const [showForm, setShowForm] = useState(false);

const handleShowForm = (application) => {
  setSelectedApplicant(application);
  setShowForm(true);
};

const handleCloseForm = () => {
  setShowForm(false);
};

const handleSaveForm = () => {
  // Handle saving the form data here
  setShowForm(false);
};
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                    {applicants.map((application) => (
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
                        <button variant="primary" onClick={handleShow}>
        <i className="bi bi-clock">Button</i>
      </button>
              <ScheduleInterviewPopup
                show={showForm}
                handleClose={() => setShowForm(false)}
                handleSave={handleSaveForm}
                applyJobId={application.applyjobid}
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

const ScheduleInterviewPopup = ({ applyJobId }) => {

  const [show, setShow] = useState(false);
  const user1 = useUserContext();

  const user = user1.user;

  const [interviewData, setInterviewData] = useState({
    interviewTitle: "",
    interviewPerson: "",
    typeOfInterview: "",
    round: "1",
    timeAndDate: "",
    modeOfInterview: "Online",
    location: "",
    interviewLink: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setInterviewData({
      ...interviewData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Get the JWT token from local storage
    const jwtToken = localStorage.getItem('jwtToken');

    // Configure the headers with the JWT token
    const headers = {
      Authorization: `Bearer ${jwtToken}`,
      'Content-Type': 'application/json', // Set the content type as needed
    };

    // Make the API call to your backend with the JWT token in the headers
    axios
      .post(`${apiUrl}/applyjob/recruiters/scheduleInterview/${applyJobId}`, interviewData, { headers })
      .then((response) => {
        // Handle the successful response here, such as showing a success message or redirecting the user
        console.log('API Response:', response.data);
        window.alert('Interview shedule has been done');
        handleClose(); // Close the modal after successful submission
      })
      .catch((error) => {
        // Handle any errors that occur during the API call, such as displaying an error message
        console.error('API Error:', error);
      });
  };

  return (
    <div>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Schedule Interview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="interviewTitle">
              <Form.Label>Interview Title</Form.Label>
              <Form.Control
                type="text"
                name="interviewTitle"
                value={interviewData.interviewTitle}
                onChange={handleFormChange}
                placeholder="Enter interview title"
              />
            </Form.Group>
            <Form.Group controlId="interviewPerson">
              <Form.Label>Interview Person</Form.Label>
              <Form.Control
                type="text"
                name="interviewPerson"
                value={interviewData.interviewPerson}
                onChange={handleFormChange}
                placeholder="Enter interview person"
              />
            </Form.Group>
            <Form.Group controlId="typeOfInterview">
              <Form.Label>Type of Interview</Form.Label>
              <Form.Control
                type="text"
                name="typeOfInterview"
                value={interviewData.typeOfInterview}
                onChange={handleFormChange}
                placeholder="Enter type of interview"
              />
            </Form.Group>
            <Form.Group controlId="round">
              <Form.Label>Round</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="timeAndDate">
              <Form.Label>Time and Date</Form.Label>
              <Form.Control
                type="datetime-local"
                name="timeAndDate"
                value={interviewData.timeAndDate}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group controlId="modeOfInterview">
              <Form.Label>Mode of Interview</Form.Label>
              <Form.Control as="select">
                <option>Online</option>
                <option>Face-to-Face</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={interviewData.location}
                onChange={handleFormChange}
                placeholder="Enter interview location"
              />
            </Form.Group>
            <Form.Group controlId="interviewLink">
              <Form.Label>Interview Link</Form.Label>
              <Form.Control
                type="text"
                name="interviewLink"
                value={interviewData.interviewLink}
                onChange={handleFormChange}
                placeholder="Enter interview link"
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Schedule
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};