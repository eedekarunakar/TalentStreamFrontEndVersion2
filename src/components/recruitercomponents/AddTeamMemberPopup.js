import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useUserContext } from '../common/UserProvider';
import ApplicantAPIService,{ apiUrl } from '../../services/ApplicantAPIService';
 
const AddTeamMemberPopup = ({ show, handleClose, handleAddTeamMember,userId }) => {
    const user = useUserContext();
   
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
    });
   
    const [validationErrors, setValidationErrors] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
      });
 
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
 
    const validateForm = () => {
        const errors = {};
        // Define validation rules using a switch statement
    switch (true) {
        case !formData.name.trim():
          errors.name = "Name cannot be empty.";
          break;
        case !/^[A-Za-z]+$/.test(formData.name.trim()):
          errors.name = "Please enter only letters in the Name field.";
          break;
        // Add more cases for other fields
      }
 
      switch (true) {
        case !formData.email.trim():
          errors.email = "Email cannot be empty.";
          break;
        case !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()):
          errors.email = "Please enter a valid email address.";
          break;
        // Add more cases for other fields
      }
 
      switch (true) {
        case formData.password.trim().length < 6:
          errors.password = "Password must be at least 6 characters long.";
          break;
        // Add more cases for other fields
      }
 
      // Set the errors and return
      setValidationErrors(errors);
      return errors;
    };
 
 
    const handleFormSubmit = (e) => {
        e.preventDefault();
 
    // // Add your validation logic here
    // const errors = {};
 
    const errors = validateForm();
 
   
    if (Object.keys(errors).length > 0) {
      return;
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
        .post(`${apiUrl}/team/add/${userId}/team-members`, formData, { headers })
            .then((response) => {
                // Handle the successful response here, such as showing a success message or redirecting the user
                console.log('API Response:', response.data);
                window.alert('Team member added successfully');
            })
            .catch((error) => {
                // Handle any errors that occur during the API call, such as displaying an error message
                console.error('API Error:', error);
            });
    };
 
return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: 'blue' }}>Add Team Member</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name" style={{ marginRight: '30px'}}>Name<span style={{ color: 'red' }}>*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter Name"
              style={{ width: '385px' }} // Adjust the width as needed
            />
           
          </div>
          {validationErrors.name && (
              <div style={{ color: "red", fontSize: "0.8rem", marginTop: "5px" }}>
                {validationErrors.name}
              </div>
            )}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ marginRight: '33px' }}>Email<span style={{ color: 'red' }}>*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Email"
              style={{ width: '385px' }} // Adjust the width as needed
            />
           
          </div>
          {validationErrors.email && (
              <div style={{ color: 'red', fontSize: '0.8rem', marginTop: '5px' }}>
                {validationErrors.email}
              </div>
            )}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ marginRight: '10px' }}>Password<span style={{ color: 'red' }}>*</span></label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter Password"
              style={{ width: '385px' }} // Adjust the width as needed
            />
           
          </div>
          {validationErrors.password && (
              <div style={{ color: 'red', fontSize: '0.8rem', marginTop: '5px' }}>
                {validationErrors.password}
              </div>
            )}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="role" style={{ marginRight: '40px' }}>Role<span style={{ color: 'red' }}>*</span></label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              style={{ width: '385px' }} // Adjust the width as needed
            >
              <option value="">Select Role</option>
              <option value="Admin">HR</option>
              <option value="Recruiter">Recruiter</option>
            </select>
          </div>
 

          <br />
       
 
<div style={{ marginTop: '10px' }}>
  <Button variant="primary" type="submit" style={{ marginRight: '20px' }}>
    Add Team Member
  </Button>
  <Button variant="primary" type="button" onClick={handleClose}>
    Close
  </Button>
</div>
         
        </Form>
      </Modal.Body>
    </Modal>
  );
 
};
 
export default AddTeamMemberPopup;