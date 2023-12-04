import React from 'react';
import ApplicantAPIService,{ apiUrl } from '../../services/ApplicantAPIService';
import { useUserContext } from '../common/UserProvider';
import { useState, useEffect,useRef } from "react";
import axios from 'axios';

function RecruiterPostJob() {
  const [jobTitle, setJobTitle] = useState("");
  const [minimumExperience, setMinimumExperience] = useState("");
  const [maximumExperience, setMaximumExperience] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [location, setLocation] = useState("");
  const [employeeType, setEmployeeType] = useState("");
  const [industryType, setIndustryType] = useState("");
  const [minimumQualification, setMinimumQualification] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [skillsRequired, setSkillsRequired] = useState([
    { skillName: "", minimumExperience: "" },
  ]);
  const [jobHighlights, setJobHighlights] = useState("");
  const [description, setDescription] = useState("");
  const [uploadDocument, setUploadDocument] = useState(null);
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file")
  const fileInputRef = useRef(null);
  const user1 = useUserContext();
  const user = user1.user;
  // Handle form submission
  const handleSubmit = (e) => {

    e.preventDefault();
    // Prepare the form data to send to the server

    const formData = {

      jobTitle,

      minimumExperience,

      maximumExperience,

      minSalary,

      maxSalary,

      location,

      employeeType,

      industryType,

      minimumQualification,

      specialization,

      skillsRequired,

      jobHighlights,

      description,

      uploadDocument,

    };

    // Get the JWT token from local storage
    const jwtToken = localStorage.getItem('jwtToken');
    // Configure the headers with the JWT token
    const headers = {

      Authorization: `Bearer ${jwtToken}`,

      'Content-Type': 'application/json', // Set the content type as needed

    };
    // Make the API call to your backend with the JWT token in the headers

    axios

      .post(`${apiUrl}/job/recruiters/saveJob/${user.id}`, formData, { headers })

      .then((response) => {

        // Handle the successful response here, such as showing a success message or redirecting the user
        
        console.log('API Response:', response.data);

        window.alert('job saved successfully');
      })

      .catch((error) => {

        // Handle any errors that occur during the API call, such as displaying an error message

        console.error('API Error:', error);

      });

  };
// Validation function
const validateForm = () => {
  let isValid = true;

  // Job Title Validation
  if (!jobTitle.trim()) {
    isValid = false;
    window.alert('Job Title is required.');
    return isValid;
  }

  // Minimum Experience Validation
  if (!minimumExperience.trim()) {
    isValid = false;
    window.alert('Minimum Experience is required.');
    return isValid;
  }

  // Maximum Experience Validation
  if (!maximumExperience.trim()) {
    isValid = false;
    window.alert('Maximum Experience is required.');
    return isValid;
  }

  // Minimum Salary Validation
  if (!minSalary.trim()) {
    isValid = false;
    window.alert('Minimum Salary is required.');
    return isValid;
  }

  // Location Validation
  if (!location.trim()) {
    isValid = false;
    window.alert('Location is required.');
    return isValid;
  }

  // Minimum Qualification Validation
  if (!minimumQualification.trim()) {
    isValid = false;
    window.alert('Minimum Qualification is required.');
    return isValid;
  }

  // Specialization Validation
  if (!specialization.trim() || specialization.trim().length < 3) {
    isValid = false;
    window.alert('Specialization is required and must be at least 3 characters long.');
    return isValid;
  }

  // Skills Required Validation
  for (const skill of skillsRequired) {
    if (!skill.skillName.trim() || !skill.minimumExperience.trim()) {
      isValid = false;
      window.alert('All Skills fields are required.');
      return isValid;
    }
  }

  // Job Highlights Validation
  if (!jobHighlights.trim() || jobHighlights.trim().length < 3) {
    isValid = false;
    window.alert('Job Highlights are required and must be at least 3 characters long.');
    return isValid;
  }

  // Description Validation
  if (!description.trim() || description.trim().length < 15) {
    isValid = false;
    window.alert('Description is required and must be at least 15 characters long.');
    return isValid;
  }

  return isValid;
};
 

  const handleExperienceChange = (e, index, field) => {

    const updatedSkillsRequired = [...skillsRequired];

    updatedSkillsRequired[index][field] = e.target.value;

    setSkillsRequired(updatedSkillsRequired);

  };

 

  const addExperience = () => {

    setSkillsRequired([...skillsRequired, { skillName: "", minimumExperience: "" }]);

  };

 

  const handleFileChange = (e) => {

    const file = e.target.files[0];

    if (file) {

      // Check if the file type is allowed (PDF or DOC)

      if (file.type === "application/pdf" || file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {

        setFileName(file.name);

        setImage(URL.createObjectURL(file));

      } else {

        // Handle invalid file type

        alert("Please select a valid PDF or DOC file.");

        e.target.value = null; // Clear the file input

      }

    }

  };

 

  const handleBrowseClick = () => {

    // Trigger a click event on the hidden file input element

    if (fileInputRef.current) {

      fileInputRef.current.click();

    }

  };
  return (
    <div>
       <div className="dashboard__content">
  <section className="page-title-dashboard">
    <div className="themes-container">
      <div className="row">
        <div className="col-lg-12 col-md-12 ">
          <div className="title-dashboard">
            <div className="title-dash flex2">Post A New Job</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="flat-dashboard-post flat-dashboard-setting">
  <form onSubmit={handleSubmit}>
    <div className="themes-container">
      <div className="row">
        <div className="col-lg-12 col-md-12 ">
          <div className="post-new profile-setting bg-white">
            
            <div className="wrap-titles">
              <h3 className="title-img">
                Job Title <span className="color-red">*</span>{" "}
              </h3>
              <fieldset className="info-wd">
              <input
                      type="text" 
                      placeholder="Job Role | Job Designation"
                      className="input-form"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      required />
              </fieldset>
            </div>
            <div className="text-editor-wrap">
              <h3 className="title-img">
                Job Description <span className="color-red">*</span>{" "}
              </h3>
              <div className="text-editor-main">
                <textarea
                    className="input-form"
                    placeholder="Job Description at least 50 words"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required

                  />
              </div>
            </div>
            <div className="form-infor flex flat-form">
              <div className="info-box info-wd">
                <div id="item_category" className="dropdown titles-dropdown">
                 <label className="title-user fw-7">Minimum Experience<span className="color-red">*</span></label>
                  <input  type="number"
                          placeholder="Min"
                          className="input-form"
                          value={minimumExperience}
                          onChange={(e) => setMinimumExperience(e.target.value)}
                          required
                  />
                </div>
                <fieldset>
                  <label className="title-user fw-7">Minimum Salary<span className="color-red">*</span></label>
                  <input type="number"
                         placeholder="Min"
                         className="input-form"
                         value={minSalary}
                         onChange={(e) => setMinSalary(e.target.value)}
                         required
                 />

                </fieldset>
                <div id="item_apply" className="dropdown titles-dropdown">
                  <label className="title-user fw-7">Location<span className="color-red">*</span></label>
                  <input type="text"
                         className="input-form"
                         value={location}
                         placeholder="City"
                         onChange={(e) => setLocation(e.target.value)}
                        required
                  />
                </div>
                <fieldset>
                  <label className="title-user fw-7">Industry Type</label>
                  <input
                        type="text"
                        value={industryType}
                        className="input-form"
                        placeholder="Sector"
                        onChange={(e) => setIndustryType(e.target.value)}
                        
                      />
                </fieldset>
                <fieldset>
                  <label className="title-user fw-7">Specialization</label>
                  <input 
                            type="text"
                            value={specialization}
                            className="input-form"
                            placeholder="Other courses"
                            onChange={(e) => setSpecialization(e.target.value)}
                  />
                </fieldset>
                <fieldset class="">
                        <label class="title-user fw-7">Skills<span className="color-red">*</span></label>
                        {skillsRequired.map((skill, index) => (
  <div key={index} className="experience-table">
    <div>
      <input
        type="text"
        placeholder="Skill"
        className="input-form"
        value={skill.skillName}
        onChange={(e) => handleExperienceChange(e, index, "skillName")}
        required
      />
    </div>
    <div>
      <input
        type="text"
        placeholder="Experience"
        className="input-form"
        value={skill.minimumExperience}
        onChange={(e) => handleExperienceChange(e, index, "minimumExperience")}
        required
      />
    </div>
    {index === skillsRequired.length - 1 && (
      <button type="button" onClick={addExperience}>
        Add Skill
      </button>
    )}
  </div>
))}
                      </fieldset>
              </div>
              <div className="info-box info-wd">
                <div id="item_1" className="dropdown titles-dropdown ">
                  <label className="title-user fw-7">Minimum Experience<span className="color-red">*</span></label>
                  <input type="number" 
                         placeholder="Max"
                         className="input-form"
                         value={maximumExperience}
                         onChange={(e) => setMaximumExperience(e.target.value)}
                         required
                  />
                </div>
                <div id="item_2" className="dropdown titles-dropdown ">
                  <label className="title-user fw-7">Maximum Salary<span className="color-red">*</span></label>
                  <input
                             type="number"
                             placeholder="Max"
                             className="input-form"
                             value={maxSalary}
                             onChange={(e) => setMaxSalary(e.target.value)}
                             required
                  />
                </div>
                <fieldset>
                  <label className="title-user fw-7">
                    Employee Type<span className="color-red">*</span>
                  </label>
                  <select value={employeeType}
                          className="input-form"
                          onChange={(e) => setEmployeeType(e.target.value)}
                          required>
                       <option value="">Select</option>
                       <option value="Full-time">Full-time</option>
                       <option value="Part-time">Part-time</option>
                       <option value="Contract">Contract</option>
                 </select>
                </fieldset>
                <div id="item_3" className="dropdown titles-dropdown ">
                  <label className="title-user fw-7">Minimum Qualification</label>
                  <input
                             type="text"
                             value={minimumQualification}
                             className="input-form"
                             placeholder="B tech"
                             onChange={(e) => setMinimumQualification(e.target.value)} 
                             required
                 />
                </div>
                <fieldset>
                  <label className="title-user fw-7">Job Highlights</label>
                  <input type="text"
                         className="input-form"
                         placeholder="Job Key points"
                         value={jobHighlights}
                         onChange={(e) => setJobHighlights(e.target.value)}
                  />
                </fieldset>
             </div>
            </div>
            <div className="form-group">
                <button type="submit">Post Job</button>
              </div>
          </div>
        </div>
      </div>
    </div>
    </form>
  </section>
</div>
</div>
  )
}

export default RecruiterPostJob;