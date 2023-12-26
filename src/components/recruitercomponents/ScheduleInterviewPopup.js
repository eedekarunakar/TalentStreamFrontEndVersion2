import React, { useState } from "react";
 
import axios from "axios";
import { useUserContext } from '../common/UserProvider';
import ApplicantAPIService,{ apiUrl } from '../../services/ApplicantAPIService';
import Modal from 'react-bootstrap/Modal';
 
import Form from 'react-bootstrap/Form';
 
 
const ScheduleInterviewPopup = ({ show, handleClose, handleAddTeamMember,applyjobid }) => {
  //const [validationError, setValidationError] = useState(""); 
  const [validationError, setValidationError] = useState({
    interviewTitle: '',
    interviewPerson: '',
    timeAndDate: '',
    modeOfInterview: '',
    location: '',
    interviewLink: '',
  });
 
  // Add touchedFields state
  const [touchedFields, setTouchedFields] = useState({
    interviewLink: false,
 
  });
 
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
    // const errors = {};
    const { name, value } = e.target;
 
  // Mark the field as touched
  setTouchedFields((prevTouchedFields) => ({
    ...prevTouchedFields,
    [name]: true,
  }));
 
 
  switch (name) {
    case 'interviewTitle':
      const isValidTitle = /^[a-zA-Z\s]*$/.test(value);
      setValidationError((prevErrors) => ({
        ...prevErrors,
        //interviewTitle: value.trim() ? '' : 'Interview title cannot be empty.',
        interviewTitle: isValidTitle ? '' : 'Interview title should have only alphabetical characters.',
        // Check for empty or whitespace
    ...(value.trim() ? {} : { interviewTitle: 'Field cannot be empty.' }),
      }));
      break;
 
    case 'interviewPerson':
      const isValidPerson = /^[a-zA-Z\s]*$/.test(value);
      setValidationError((prevErrors) => ({
        ...prevErrors,
        interviewPerson: isValidPerson ? '' : 'The name should have only alphabetical characters.',
        // Check for empty or whitespace
    ...(value.trim() ? {} : { interviewPerson: 'Field cannot be empty.' }),
      }));
      break;
 
     
  case 'timeAndDate':
  const currentDate = new Date();
  const selectedDate = new Date(value);
 
  // Check for empty field
  if (touchedFields[name] && !value.trim()) {
    setValidationError((prevErrors) => ({
      ...prevErrors,
      timeAndDate: 'Please select a date and time for the interview.',
    }));
  }
  // Check if the selected date is in the future
  else if (selectedDate <= currentDate) {
    setValidationError((prevErrors) => ({
      ...prevErrors,
      timeAndDate: 'Please select a future date and time for the interview.',
    }));
  } else {
    setValidationError((prevErrors) => ({
      ...prevErrors,
      timeAndDate: '',
    }));
  }
  break;
 
 
      
  case 'interviewLink':
  // Check for empty field
  if (touchedFields[name] && !value.trim()) {
    setValidationError((prevErrors) => ({
      ...prevErrors,
      interviewLink: 'Field cannot be empty.',
    }));
  }
  // Validate if the interviewLink is a valid URL
  else {
    const isValidURL = /^(ftp|http|https):\/\/[^ "]+$/.test(value);
    setValidationError((prevErrors) => ({
      ...prevErrors,
      interviewLink: isValidURL ? '' : 'Please enter a valid interview link.',
    }));
  }
  break;
 
 
    // Add more validation cases for other fields
 
    default:
      // Generic check for empty values
    setValidationError((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() ? '' : 'This field cannot be empty.',
    }));
      break;
  }
 

    setInterviewData({
      ...interviewData,
      [name]: value,
    });
  };
 
  const handleFormSubmit = (e) => {
    e.preventDefault();
 
  // Check if any required fields are not filled
  const hasEmptyFields = Object.keys(validationError).some(
    (field) => validationError[field] || !touchedFields[field]
  );
 
  if (hasEmptyFields) {
    console.log('Form submission aborted due to validation errors.');
    return;
  }
 
    console.log('Validation Error:', validationError);
 
    // Check for any remaining validation errors before submitting the form
  for (const key in validationError) {
    if (validationError[key]) {
      console.log('Form submission aborted due to validation errors.');
      return;
    }
  }
 
 
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
<label>Interview Title<span style={{ color: 'red' }}>*</span></label>
<input
                type="text"
                name="interviewTitle"
                value={interviewData.interviewTitle}
                onChange={handleFormChange}
                placeholder="Enter interview title"
                // required
              />
              {validationError.interviewTitle && (
<div style={{ color: 'red', fontSize: '0.8rem', marginTop: '5px' }}>
    {validationError.interviewTitle}
</div>
)}
</div><br></br>

 
<div>

 
          <div>
<label style={{ marginRight: '60px' }}>Interview Person</label>
<label style={{ marginRight: '60px' }}>Type of Interview<span style={{ color: 'red' }}>*</span></label>
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
 
            {validationError.interviewPerson && (
<div style={{ color: 'red', fontSize: '0.8rem', marginTop: '5px' }}>
    {validationError.interviewPerson}
</div>
)}
</div><br></br>
 
 
          <div>
<label style={{ marginRight: '150px' }}>Time and Date<span style={{ color: 'red' }}>*</span></label>
<label style={{ marginRight: '60px' }}>Mode of Interview<span style={{ color: 'red' }}>*</span></label>
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
 
                </div>
                {validationError.timeAndDate && (
<div style={{ color: 'red', fontSize: '0.8rem', marginTop: '5px' }}>
      {validationError.timeAndDate}
</div>
  )}
 
 
                <br></br>
 
            
 
          <div>
<label style={{ marginRight: '190px' }}>Location<span style={{ color: 'red' }}>*</span></label>
<label style={{ marginRight: '60px' }}>Interview Link<span style={{ color: 'red' }}>*</span></label>
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
              className={validationError.interviewLink && !touchedFields.interviewTitle ? 'error' : ''}
                />

 
          </div>
 
          {validationError.interviewLink && touchedFields.interviewLink &&(
<div style={{ color: 'red', fontSize: '0.8rem', marginTop: '5px', marginLeft: '250px' }}>
      {validationError.interviewLink}
</div>
  )}

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