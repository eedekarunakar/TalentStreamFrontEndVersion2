import React from 'react';

const ApplicantPopup = ({ applicantion, onClose }) => {
  return (
    // <div className="popup">
    //   <div className="popup-content">
    //     {/* Close button */}
    //     <button className="close-btn" onClick={onClose}>Close</button>
    //     {/* Display applicant profile details */}
    //     <h2>{applicant.name}'s Profile Details</h2>
    //     <p>Email: {applicant.email}</p>
    //     <p>Mobile Number: {applicant.mobilenumber}</p>
    //     <p>{ApplicantJobAlerts.}</p>
    //     {/* Add more profile details here */}
    //   </div>
    // </div>
    <div className="popup">
      <div className="popup-content">
        {/* Close button */}
        <button className="close-btn" onClick={onClose}>Close</button>
        {/* Display applicant profile details */}
        <h2>{applicantion.applicant.name}'s Profile Details</h2>
        <p>Email: {applicantion.applicant.email}</p>
        <p>Mobile Number: {applicantion.applicant.mobilenumber}</p>
        {/* <p>Address:{applicant.}</p> */}
        {/* Education Details
        <h3>Education</h3>
        {applicant.education.map((edu, index) => (
          <div key={index}>
            <p>{edu.degree}: {edu.institution}, {edu.year}</p>
          </div>
        ))}
         Experience Details 
        <h3>Experience</h3>
        {applicant.experience.map((exp, index) => (
          <div key={index}>
            <p>{exp.title} at {exp.company}, {exp.duration}</p>
          </div>
        ))}
         Skills Details 
        <h3>Skills</h3>
        <ul>
          {applicant.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default ApplicantPopup;
