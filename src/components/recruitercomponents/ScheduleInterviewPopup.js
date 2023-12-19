import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import axios from "axios";
import { useUserContext } from '../common/UserProvider';
import ApplicantAPIService,{ apiUrl } from '../../services/ApplicantAPIService';

const ScheduleInterviewPopup = ({ show, handleClose, handleAddTeamMember,applyjobid }) => {

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
      .post(`${apiUrl}/applyjob/scheduleInterview/${applyjobid}`, interviewData, { headers })
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
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: 'blue' }}>Schedule Interview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <div>
              <label>Interview Title</label>
              <input
                type="text"
                name="interviewTitle"
                value={interviewData.interviewTitle}
                onChange={handleFormChange}
                placeholder="Enter interview title"
              />
            </div><br></br>
<div>
          <div>
            <label style={{ marginRight: '60px' }}>Interview Person</label>
            <label style={{ marginRight: '60px' }}>Type of Interview</label>
            <label>Round</label>
          </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="text"
                name="interviewPerson"
                value={interviewData.interviewPerson}
                onChange={handleFormChange}
                placeholder="Enter interview person"
              />
              <input
                type="text"
                name="typeOfInterview"
                value={interviewData.typeOfInterview}
                onChange={handleFormChange}
                placeholder="Enter type of interview"
              />
              <select
                name="round"
                value={interviewData.round}
                onChange={handleFormChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div><br></br>
 
 
          <div>
            <label style={{ marginRight: '150px' }}>Time and Date</label>
            <label style={{ marginRight: '60px' }}>Mode of Interview</label>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
          <input
                  type="datetime-local"
                  name="timeAndDate"
                  value={interviewData.timeAndDate}
                  onChange={handleFormChange}
                />
 
            <select
                  name="modeOfInterview"
                  value={interviewData.modeOfInterview}
                  onChange={handleFormChange}
                >
                  <option value="Online">Online</option>
                  <option value="Face-to-Face">Face-to-Face</option>
                </select>
 
                </div><br></br>
          <div>
            <label style={{ marginRight: '190px' }}>Location</label>
            <label style={{ marginRight: '60px' }}>Interview Link</label>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
              <input
                  type="text"
                  name="location"
                  value={interviewData.location}
                  onChange={handleFormChange}
                  placeholder="Enter interview location"
                />
 
                <input
                  type="text"
                  name="interviewLink"
                  value={interviewData.interviewLink}
                  onChange={handleFormChange}
                  placeholder="Enter interview link"
                />
 
          </div>
            <div className="modal-footer">
             
              <button type="submit" style={{ color: 'white', backgroundColor: 'blue' }}>Schedule</button>
 
              <button type="button" onClick={handleClose}>
                Close
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ScheduleInterviewPopup;
