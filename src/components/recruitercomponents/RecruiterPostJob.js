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
    if (!validateForm()) {
      return;
    }
 
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
        clearForm();
      })
 
      .catch((error) => {
 
        // Handle any errors that occur during the API call, such as displaying an error message
 
        console.error('API Error:', error);
 
      });
 
  };
  const [formErrors, setFormErrors] = useState({
    jobTitle: '',
    minSalary: '',
    maxSalary: '',
    minimumExperience: '',
    maximumExperience: '',
    location: '',
    minimumQualification: '',
    description: '',
    skillsRequired: [{ skillName: '', minimumExperience: '' }],
    jobHighlights: '',
    description: '',
    uploadDocument: '',
    specialization: '',
  });
  const clearForm = () => {
    setJobTitle('');
    setMinimumExperience('');
    setMaximumExperience('');
    setMinSalary('');
    setMaxSalary('');
    setLocation('');
    setEmployeeType('');
    setIndustryType('');
    setMinimumQualification('');
    setSpecialization('');
    setSkillsRequired([{ skillName: '', minimumExperience: '' }]);
    setJobHighlights('');
    setDescription('');
    setUploadDocument(null);
    setFileName('No selected file');
    setImage(null);
  };
 
  const validateForm = () => {
    let isValid = true;
    const errors = {};
 
    // Job Title Validation
    if (!jobTitle.trim()) {
      isValid = false;
      errors.jobTitle = 'Job title is required.';
     
    } else {
      errors.jobTitle = '';
    }
 
   
 
    if (!minimumExperience.trim()) {
      isValid = false;
      errors.minimumExperience = 'Minimum experience is required.';
    } else {
      errors.minimumExperience = '';
    }
     
    // Maximum Experience Validation
    if (!maximumExperience.trim()) {
      errors.maximumExperience = 'Maximum experience is required.';
      isValid = false;
    } else if (parseInt(minimumExperience) > parseInt(maximumExperience)) {
      errors.maximumExperience = 'Maximum experience should be greater than or equal to minimum experience.';
      isValid = false;
    } else {
      errors.maximumExperience = '';
    }
     
        // Minimum Salary Validation
    if (!minSalary.trim()) {
      errors.minSalary = 'Minimum salary is required.';
      isValid = false;
    } 
    else {
      errors.minSalary = '';
    }
     
    // Maximum Salary Validation
    if (!maxSalary.trim()) {
      errors.maxSalary = 'Maximum salary is required.';
      isValid = false;
    } else if (parseInt(minSalary) > parseInt(maxSalary)) {
      errors.maxSalary = 'Maximum salary should be greater than or equal to minimum salary.';
      isValid = false;
    } else {
      errors.maxSalary = '';
    }
    if (!location.trim()) {
      errors.location = 'Location is required.';
      isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(location.trim())) {
      errors.location = 'Location should contain only alphabets.';
      isValid = false;
    } else {
      errors.location = '';
    }
    // Employee Type Validation
    if (!employeeType.trim()) {
      errors.employeeType = 'Job type is required.';
      isValid = false;
    } else {
      errors.employeeType = '';
    }
 
   
 
    // Minimum Qualification Validation
    if (!minimumQualification.trim()) {
      errors.minimumQualification = 'Minimum qualification is required.';
      isValid = false;
    } else {
      errors.minimumQualification = '';
    }
 
   
 
    // Skills Required Validation
    const skillsErrors = [];
    skillsRequired.forEach((skill, index) => {
      const skillErrors = {};
      if (!skill.skillName.trim()) {
        skillErrors.skillName = 'Skill name is required.';
        isValid = false;
      } else {
        skillErrors.skillName = '';
      }
      if (!skill.minimumExperience.trim()) {
        skillErrors.minimumExperience = 'Experience is required.';
        isValid = false;
      } 
      else if (!/^\d+$/.test(skill.minimumExperience.trim())) {
        skillErrors.minimumExperience = 'Experience should contain only digits.';
        isValid = false;
      }
      else {
        skillErrors.minimumExperience = '';
      }
      skillsErrors[index] = skillErrors;
    });
    errors.skillsRequired = skillsErrors;
 
    if (industryType && industryType.trim().length < 2) {
      isValid = false;
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        industryType: 'Industry type must be at least 2 characters long.',
      }));
      return isValid;
    }
 
   // Specialization Validation (Optional)
    if (specialization && specialization.trim().length < 3) {
      isValid = false;
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        specialization: 'Specialization must be at least 3 characters long.',
      }));
      return isValid;
    }  
 
    // Job Highlights Validation (Optional)
    if (jobHighlights && jobHighlights.trim().length < 3) {
      isValid = false;
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        jobHighlights: 'Job highlights must be at least 3 characters long.',
      }));
      return isValid;
    }
 
 
    // Description Validation
    if (!description.trim() || description.trim().length < 15) {
      errors.description = 'Description is required and must be at least 15 characters long.';
      isValid = false;
    } else {
      errors.description = '';
    }
 
    setFormErrors(errors);
    return isValid;
  };
 
  // Handle method for Job Title
const handleJobTitleChange = (e) => {
  setJobTitle(e.target.value);
  setFormErrors((prevErrors) => ({
    ...prevErrors,
    jobTitle: '', // Clear previous error when the input changes
  }));
};
 
// Handle method for Minimum Experience
const handleMinimumExperienceChange = (e) => {
  setMinimumExperience(e.target.value);
  setFormErrors((prevErrors) => ({
    ...prevErrors,
    minimumExperience: '', // Clear previous error when the input changes
  }));
};
 
// Handle method for Maximum Experience
const handleMaximumExperienceChange = (e) => {
  setMaximumExperience(e.target.value);
  setFormErrors((prevErrors) => ({
    ...prevErrors,
    maximumExperience: '', // Clear previous error when the input changes
  }));
};
 
// Handle method for Minimum Salary
const handleMinSalaryChange = (e) => {
  setMinSalary(e.target.value);
  setFormErrors((prevErrors) => ({
    ...prevErrors,
    minSalary: '', // Clear previous error when the input changes
  }));
};
 
// Handle method for Location
const handleLocationChange = (e) => {
  setLocation(e.target.value);
  setFormErrors((prevErrors) => ({
    ...prevErrors,
    location: '', // Clear previous error when the input changes
  }));
};
 
// Handle method for Employee Type
const handleEmployeeTypeChange = (e) => {
  setEmployeeType(e.target.value);
  setFormErrors((prevErrors) => ({
    ...prevErrors,
    employeeType: '', // Clear previous error when the input changes
  }));
};
 
// Handle method for Industry Type
const handleIndustryTypeChange = (e) => {
  setIndustryType(e.target.value);
  setFormErrors((prevErrors) => ({
    ...prevErrors,
    industryType: '', // Clear previous error when the input changes
  }));
};
 
// Handle method for Minimum Qualification
const handleMinimumQualificationChange = (e) => {
  setMinimumQualification(e.target.value);
  setFormErrors((prevErrors) => ({
    ...prevErrors,
    minimumQualification: '', // Clear previous error when the input changes
  }));
};
 
// Handle method for Specialization
const handleSpecializationChange = (e) => {
  setSpecialization(e.target.value);
  setFormErrors((prevErrors) => ({
    ...prevErrors,
    specialization: '', // Clear previous error when the input changes
  }));
};
 
// Handle method for Skills (inside the map function)
const handleSkillChange = (e, index, field) => {
  const updatedSkillsRequired = [...skillsRequired];
  updatedSkillsRequired[index][field] = e.target.value;
  setSkillsRequired(updatedSkillsRequired);
 
  // Clear the error message when the input changes
  setFormErrors((prevErrors) => ({
    ...prevErrors,
    skillsRequired: '', // Clear previous error when the input changes
  }));
};
 
// Handle method for Job Highlights
const handleJobHighlightsChange = (e) => {
  setJobHighlights(e.target.value);
  setFormErrors((prevErrors) => ({
    ...prevErrors,
    jobHighlights: '', // Clear previous error when the input changes
  }));
};
 
// Handle method for Description
const handleDescriptionChange = (e) => {
  setDescription(e.target.value);
  setFormErrors((prevErrors) => ({
    ...prevErrors,
    description: '', // Clear previous error when the input changes
  }));
};
 
const handleExperienceChange = (e, index, field) => {
  const updatedSkillsRequired = [...skillsRequired];
  updatedSkillsRequired[index][field] = e.target.value;
  setSkillsRequired(updatedSkillsRequired);
 
  // Clear the error message when the input changes
  setFormErrors((prevErrors) => ({
    ...prevErrors,
    skillsRequired: '', // Clear previous error when the input changes
  }));
};
 
const handleMaxSalaryChange = (e) => {
  setMaxSalary(e.target.value);
 
  // Clear the error message when the input changes
  setFormErrors((prevErrors) => ({
    ...prevErrors,
    maxSalary: '', // Clear previous error when the input changes
  }));
};
 
 
  const addExperience = () => {
 
    setSkillsRequired([...skillsRequired, { skillName: "", minimumExperience: "" }]);
 
  };
 
  const removeExperience = () => {
    // Check if there are skills to remove
    if (skillsRequired.length > 1) {
      // Create a copy of the skillsRequired array without the last item
      const updatedSkills = [...skillsRequired.slice(0, -1)];
      // Update the state with the new skills array
      setSkillsRequired(updatedSkills);
    }
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
            <div className="title-dash flex2">Post Job</div>
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
            <label className="title-user fw-7">Job Title<span className="color-red">*</span></label>
              <fieldset className="info-wd">
              <input
                      type="text"
                      placeholder="Job Role | Job Designation"
                      className="input-form"
                      value={jobTitle}
                      onChange={handleJobTitleChange}
                      required />
                      {formErrors.jobTitle && (
                  <div className="error-message">{formErrors.jobTitle}</div>
                )}
              </fieldset>
            </div>
            <div className="text-editor-wrap">
            <label className="title-user fw-7">Job Description<span className="color-red">*</span></label>
              <div className="text-editor-main">
                <textarea
                    className="input-form"
                    placeholder="Job Description at least 15 characters"
                    value={description}
                    onChange={handleDescriptionChange}
                    required
                  />
                  {formErrors.description && (
                  <div className="error-message">{formErrors.description}</div>
                )}
              </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                <div id="item_category" className="dropdown titles-dropdown info-wd">
                 <label className="title-user fw-7">Minimum Experience<span className="color-red">*</span></label>
                  <input  type="number"
                          placeholder="Min"
                          className="input-form"
                          value={minimumExperience}
                          onChange={handleMinimumExperienceChange}
                          required
                  />
                  {formErrors.minimumExperience && (
                  <div className="error-message">{formErrors.minimumExperience}</div>
                )}
                </div>
                </div>

                <div className="col-lg-6 col-md-6">
                <div id="item_1" className="dropdown titles-dropdown info-wd">
                  <label className="title-user fw-7">Maximum Experience<span className="color-red">*</span></label>
                  <input type="number"
                         placeholder="Max"
                         className="input-form"
                         value={maximumExperience}
                         onChange={handleMaximumExperienceChange}
                     
                         required
                  />
                   {formErrors.maximumExperience&& (
                  <div className="error-message">{formErrors.maximumExperience}</div>
                )}
                </div>
                </div>

                <div className="col-lg-6 col-md-12">
                <div id="item_1" className="dropdown titles-dropdown info-wd">
                  <label className="title-user fw-7">Minimum Salary<span className="color-red">*</span></label>
                  <input type="text"
                         placeholder="Min"
                         className="input-form"
                         value={minSalary}
                         onChange={handleMinSalaryChange}
                         required
                 />
                 {formErrors.minSalary && (
                  <div className="error-message">{formErrors.minSalary}</div>
                )}
 
                </div>
                </div>
                <div className="col-lg-6 col-md-12">
                <div id="item_2" className="dropdown titles-dropdown info-wd">
                  <label className="title-user fw-7">Maximum Salary<span className="color-red">*</span></label>
                  <input
                             type="text"
                             placeholder="Max"
                             className="input-form"
                             value={maxSalary}
                             onChange={handleMaxSalaryChange}
                         
                             required
                  />
                  {formErrors.maxSalary && (
                  <div className="error-message">{formErrors.maxSalary}</div>
                )}
                </div>
                </div>
                
                <div className="col-lg-6 col-md-12">
                <div id="item_3" className="dropdown titles-dropdown info-wd">
                  <label className="title-user fw-7">Minimum Qualification<span className="color-red">*</span></label>
                  <input
                             type="text"
                             value={minimumQualification}
                             className="input-form"
                             placeholder="BTech"
                             onChange={handleMinimumQualificationChange}
                           
                             required
                 />
                  {formErrors.minimumQualification && (
                  <div className="error-message">{formErrors.minimumQualification}</div>
                )}
                </div>
                </div>

                <div className="col-lg-6 col-md-12">
                <div id="item_1" className="dropdown titles-dropdown info-wd">
                  <label className="title-user fw-7">Specialization</label>
                  <input
                            type="text"
                            value={specialization}
                            className="input-form"
                            placeholder="Other courses"
                            onChange={handleSpecializationChange}
                         
                  />
                  {formErrors.specialization && (
                  <div className="error-message">{formErrors.specialization}</div>
                )}
                </div>
                </div>

                <div className="col-lg-6 col-md-12">
                <div id="item_apply" className="dropdown titles-dropdown info-wd">
                  <label className="title-user fw-7">Location<span className="color-red">*</span></label>
                  <input type="text"
                         className="input-form"
                         value={location}
                         placeholder="City"
                         onChange={ handleLocationChange}
                        required
                  />
                  {formErrors.location && (
                  <div className="error-message">{formErrors.location}</div>
                )}
                </div>
                </div>

                <div className="col-lg-6 col-md-12">
                <div id="item_1" className="dropdown titles-dropdown info-wd">
                  <label className="title-user fw-7">Industry Type</label>
                  <input
                        type="text"
                        value={industryType}
                        className="input-form"
                        placeholder="Sector"
                        onChange={handleIndustryTypeChange}
                       
                       
                      />
                       {formErrors.industryType && (
                  <div className="error-message">{formErrors.industryType}</div>
                )}
                </div>
                </div>

                <div className="col-lg-6 col-md-12">
                <div id="item_1" className="dropdown titles-dropdown info-wd">
                  <label className="title-user fw-7">
                    Job Type<span className="color-red">*</span>
                  </label>
                  <select value={employeeType}
                          className="input-form"
                          onChange={handleEmployeeTypeChange}
                          style={{ color: employeeType ? 'black' : 'lightgrey' }}
                          required>
                       <option value="">Select</option>
                       <option value="Full-time">Full-time</option>
                       <option value="Part-time">Part-time</option>
                       <option value="Contract">Contract</option>
                 </select>
                 {formErrors.employeeType && (
                  <div className="error-message">{formErrors.employeeType}</div>
                )}
                </div>
                </div>
                
                <div className="col-lg-6 col-md-12">
                <div id="item_1" className="dropdown titles-dropdown info-wd">
                  <label className="title-user fw-7">Job Highlights</label>
                  <input type="text"
                         className="input-form"
                         placeholder="Job key points"
                         value={jobHighlights}
                         onChange={handleJobHighlightsChange}
                       
                  />
                  {formErrors.jobHighlights && (
                  <div className="error-message">{formErrors.jobHighlights}</div>
                )}
                </div>
                </div>

                <div className="col-lg-6 col-md-12">
                <div id="item_1" className="dropdown titles-dropdown info-wd">
                  <label className="title-user fw-7">Skills<span className="color-red">*</span></label>
                  {skillsRequired.map((skill, index) => (
                    <div key={index} className="experience-table">
                      <div>
                        <input
                          type="text"
                          placeholder="Skill"
                          className="input-form"
                          value={skill.skillName}
                          onChange={(e) => handleSkillChange(e, index, "skillName")}
                          required
                        />
                        {formErrors.skillsRequired && formErrors.skillsRequired[index] && formErrors.skillsRequired[index].skillName && (
                          <div className="error-message">{formErrors.skillsRequired[index].skillName}</div>
                        )}
                      </div><br />
                      <div>
                        <input
                          type="text"
                          placeholder="Experience"
                          className="input-form"
                          value={skill.minimumExperience}
                          onChange={(e) => handleExperienceChange(e, index, "minimumExperience")}
                          required
                        />
                        {formErrors.skillsRequired && formErrors.skillsRequired[index] && formErrors.skillsRequired[index].minimumExperience && (
                          <div className="error-message">{formErrors.skillsRequired[index].minimumExperience}</div>
                        )}
                      </div>
                      {index === skillsRequired.length - 1 && (
                        <button type="button" onClick={addExperience} style={{'color':'#FFFFFF','backgroundColor':'#1967d2'}}>
                          +
                        </button>
                      )} &nbsp;
                      {index === skillsRequired.length - 1 && (
                        <button type="button" onClick={removeExperience} style={{'color':'#FFFFFF','backgroundColor':'#FF0000'}}>
                          -
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                </div>
              </div>
            <div className="form-infor flex flat-form">
              
              
              <div className="info-box info-wd">
                
                
                
                
                
             </div>
            </div>
            <div className="form-group">
                <button type="submit" onClick={handleSubmit} className='button-status'>Post Job</button>
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