import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import ApplicantAPIService,{ apiUrl } from '../../services/ApplicantAPIService';
import { useUserContext } from '../common/UserProvider';
 
function ApplicantUpdateProfile() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user1 = useUserContext();
  const user=user1.user;
  let error = "";
 
  const [errors, setErrors] = useState({
    basicDetails: {},
    xClassDetails: {},
    intermediateDetails: {},
    graduationDetails: {},
    skillsRequired: [],
    experienceDetails: [],
  });
 
  // Validation function
  const validateForm = () => {
    const newErrors = {
      basicDetails: {},
      xClassDetails: {},
      intermediateDetails: {},
      graduationDetails: {},
      skillsRequired: [],
      experienceDetails: [],
    };
 
    // Basic Details
   /* if (!basicDetails.firstName.trim()) {
      newErrors.basicDetails.firstName = 'First Name is required';
    }  */
 
    if (!basicDetails.dateOfBirth.trim()) {
      newErrors.basicDetails.dateOfBirth = 'Date of Birth is required';
    }
 
    if (!basicDetails.city.trim()) {
      newErrors.basicDetails.city = 'City is required';
    }
 
    if (!basicDetails.address.trim()) {
      newErrors.basicDetails.address = 'Address is required';
    }
 
    if (!basicDetails.pincode.trim()) {
      newErrors.basicDetails.pincode = 'Pin Code is required';
    }
 
    if (!basicDetails.state.trim()) {
      newErrors.basicDetails.state = 'State is required';
    }
 
   /* if (!basicDetails.address.trim()) {
      newErrors.basicDetails.pincode = 'Address is required';
    } */
    // Add similar validations for other basic details...
 
    // X Class Details
    if (!xClassDetails.xschoolName.trim()) {
      newErrors.xClassDetails.xschoolName = 'School Name is required';
    }
 
    if (!xClassDetails.xboard.trim()) {
      newErrors.xClassDetails.xboard = 'Board is required';
    }
 
    if (!xClassDetails.xpercentage.trim()) {
      newErrors.xClassDetails.xpercentage = 'Percentage is required';
    }
 
    if (!xClassDetails.xPincode.trim()) {
      newErrors.xClassDetails.xPincode = 'Pin Code is required';
    }
 
    if (!xClassDetails.xyearOfPassing.trim()) {
      newErrors.xClassDetails.xyearOfPassing = 'Year of Passing is required';
    }
 
    if (!xClassDetails.xCity.trim()) {
      newErrors.xClassDetails.xCity = 'City is required';
    }
    if (!xClassDetails.xState.trim()) {
      newErrors.xClassDetails.xState = 'State is required';
    }
    // Add similar validations for other X Class details...
 
    // Intermediate Details
    if (!intermediateDetails.icollegeName.trim()) {
      newErrors.intermediateDetails.icollegeName = 'College Name is required';
    }
 
    if (!intermediateDetails.iboard.trim()) {
      newErrors.intermediateDetails.iboard = 'Board Name is required';
    }
 
    if (!intermediateDetails.iprogram.trim()) {
      newErrors.intermediateDetails.iprogram = 'Program is required';
    }
    if (!intermediateDetails.ipercentage.trim()) {
      newErrors.intermediateDetails.ipercentage = 'Percentage is required';
    }
    if (!intermediateDetails.iyearOfPassing.trim()) {
      newErrors.intermediateDetails.iyearOfPassing = 'Year of passing is required';
    }
 
    if (!intermediateDetails.iCity.trim()) {
      newErrors.intermediateDetails.iCity = 'City is required';
    }
    if (!intermediateDetails.iState.trim()) {
      newErrors.intermediateDetails.iState = 'State is required';
    }
    // Graduation Details
    if (!graduationDetails.gcollegeName.trim()) {
      newErrors.graduationDetails.gcollegeName = 'College Name is required';
    }
 
    if (!graduationDetails.gboard.trim()) {
      newErrors.graduationDetails.gboard = 'Board Name is required';
    }
 
    if (!graduationDetails.gprogram.trim()) {
      newErrors.graduationDetails.gprogram = 'Program is required';
    }
    if (!graduationDetails.gpercentage.trim()) {
      newErrors.graduationDetails.gpercentage = 'Percentage is required';
    }
    if (!graduationDetails.gyearOfPassing.trim()) {
      newErrors.graduationDetails.gyearOfPassing = 'Year of passing is required';
    }
 
    if (!graduationDetails.gCity.trim()) {
      newErrors.graduationDetails.gCity = 'City is required';
    }
    if (!graduationDetails.gState.trim()) {
      newErrors.graduationDetails.gState = 'State is required';
    }
 
    // Add similar validations for other Graduation details...
 
    // Skills
    skillsRequired.forEach((skill, index) => {
      if (!skill.skillName.trim()) {
        newErrors.skillsRequired[index] = { skillName: 'Skill Name is required' };
      }
 
      if (!skill.experience.trim()) {
        newErrors.skillsRequired[index].experience = 'Experience is required';
      }
    });
 
    // Experience
    experienceDetails.forEach((experience, index) => {
      if (!experience.company.trim()) {
        newErrors.experienceDetails[index] = { company: 'Company Name is required' };
      }
 
      if (!experience.position.trim()) {
        newErrors.experienceDetails[index].position = 'Position is required';
      }
 
      if (!experience.startDate.trim()) {
        newErrors.experienceDetails[index].startDate = 'Start Date is required';
      }
 
      if (!experience.endDate.trim()) {
        newErrors.experienceDetails[index].endDate = 'End Date is required';
      }
    });
 
    setErrors(newErrors);
 
    // Check if there are no errors
    return Object.keys(newErrors).every(key => Object.keys(newErrors[key]).length === 0);
  };
 
 
  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data from an API)
    const fetchData = async () => {
      try {
        // Simulate fetching data after a delay (replace this with your actual data fetching logic)
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // Set loading to false to indicate the end of the operation, whether successful or not
        setLoading(false);
      }
    };
 
    // Call the fetchData function
    fetchData();
  }, []);
 
  const [basicDetails, setBasicDetails] = useState({
 
    firstName: "",
 
    lastName: "",
 
    dateOfBirth: "",
 
    address: "",
 
    city: "",
 
    state: "",
 
    pincode: "",
 
    alternatePhoneNumber: "",
 
  });
 
 
 
  const [xClassDetails, setXClassDetails] = useState({
 
    xschoolName: "",
 
    xboard: "",
 
    xpercentage: "",
 
    xyearOfPassing: "",
 
    xCity: "",
 
    xState: "",
 
    xPincode: "",
 
  });
 
 
 
  const [intermediateDetails, setIntermediateDetails] = useState({
 
    icollegeName: "",
 
    iboard: "",
 
    iprogram: "",
 
    ipercentage: "",
 
    iyearOfPassing: "",
 
    iCity: "",
 
    iState: "",
 
  });
 
 
 
  const [graduationDetails, setGraduationDetails] = useState({
 
    gcollegeName: "",
 
    gboard: "",
 
    gprogram: "",
 
    gpercentage: "",
 
    gyearOfPassing: "",
 
    gCity: "",
 
    gState: "",
 
  });
 
  const [skillsRequired, setSkillsRequired] = useState([
 
    { skillName: "", experience: "" },
 
  ]);
  const [experienceDetails, setExperienceDetails] = useState([
    {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
    },
  ]);
 
 
 
  const [resumeFile, setResumeFile] = useState(null);
  const [dragging, setDragging] = useState(false);
 
  const [selectedSkill, setSelectedSkill] = useState("");
 
  const handleSkillChange = (e, index, field) => {
 
    const updatedSkillsRequired = [...skillsRequired];
 
    updatedSkillsRequired[index][field] = e.target.value;
 
    setSkillsRequired(updatedSkillsRequired);
 
  };
 
 
 
  const addSkills = () => {
 
    setSkillsRequired([...skillsRequired, { skillName: "", experience: "" }]);
 
  };
 
 
 
  const handleExperienceChange = (e, index, field) => {
    const newExperienceDetails = [...experienceDetails];
    newExperienceDetails[index][field] = e.target.value;
    setExperienceDetails(newExperienceDetails);
  };
  const addExperience = () => {
    setExperienceDetails([
      ...experienceDetails,
      { company: "", position: "", startDate: "", endDate: "" }
    ]);
  };
 
 
 
 
  const handleFileDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    setResumeFile(file);
  };
 
 
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    // Validate the form
    const isFormValid = validateForm();
 
    // If the form is not valid, prevent submission
    if (!isFormValid) {
      return;
    }
    // Prepare data to be sent
    const userData = {
      basicDetails,
      xClassDetails,
      intermediateDetails,
      graduationDetails,
      skillsRequired,
      experienceDetails,
      user,
    };
 
   /* try {
      // Get the JWT token from local storage
      const jwtToken = localStorage.getItem('jwtToken');
       console.log('jwt token new',jwtToken);
      // Make a POST request to the sign-out endpoint on your backend
      const response = await axios.post(`${apiUrl}/applicantprofile/createprofile/${user.id}`, userData, {
        headers: {
          Authorization: `Bearer ${jwtToken}`, // Include the JWT token in the Authorization header
        },
      });
 
     
      if (response.status === 200) {
        // Successful response
        if (response.data === 'Profile saved successfully') {
          console.log(response.body);
          window.alert('Profile sent successfully!');
          navigate('/applicanthome');
        } else if (response.data === 'your Profile was updated already') {
          // Handle duplicate entry error (HTTP 409 Conflict)
          window.alert("Your profile has already been updated.");
        } else {
          console.error('An unexpected success response:', response.body);
        }
      } else {
        // Handle other error cases
        console.error('An error occurred:', response.status, response.body);
      }
     
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };  */
 
  try {
    // Get the JWT token from local storage
    const jwtToken = localStorage.getItem('jwtToken');
     console.log('jwt token new',jwtToken);
    // Make a POST request to the sign-out endpoint on your backend
    const response = await axios.post(`${apiUrl}/applicantprofile/createprofile/${user.id}`, userData, {
      headers: {
        Authorization: `Bearer ${jwtToken}`, // Include the JWT token in the Authorization header
      },
    });
 
   
    if (response.status === 201) {
      // Successful response
      if (response.data === 'profile saved sucessfully') {
        console.log(response.body);
        window.alert('Profile saved successfully!');
        navigate('/applicanthome');
      }  else {
        console.error('An unexpected success response:', response.body);
      }
       
    }
   
   
    else {
      // Handle other error cases
      console.error('An error occurred:', response.status, response.body);
    }
   
  } catch (error) {
 
   
      window.alert("Your profile has already been updated.");
      navigate('/applicanthome');
    console.error('An error occurred:', error);
  }
};
 
 
 
  return (
    <div>
       {loading ? null : (
      <form className="profile-form-container" onSubmit={handleSubmit}>
<div className="dashboard__content">
  <section className="page-title-dashboard">
    <div className="themes-container">
      <div className="row">
        <div className="col-lg-12 col-md-12 ">
          <div className="title-dashboard">
            <div className="title-dash flex2">Profile Setting</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="flat-dashboard-setting flat-dashboard-setting2">
    <div className="themes-container">
      <div className="row">
        <div className="col-lg-12 col-md-12 ">
          <div className="profile-setting bg-white">
          <div class="author-profile flex2 border-bt">
 
<div class="wrap-img flex2">
  <div class="img-box relative">
    <img class="avatar " id="profileimg" src="../images/dashboard/image-up.jpg" alt="" />
  </div>
  <div id="upload-profile">
    <h5 class="fw-6">Upload a new avatar: </h5>
    <h6>JPG 80x80px</h6>
    <input class="up-file" id="tf-upload-img" type="file" name="profile" required="" />
  </div>
</div>
<div class="wrap-img flex2">
  <div class="img-box relative">
    <img class="avatar " id="profileimg" src="../images/dashboard/image-up.jpg" alt="" />
  </div>
  <div id="upload-profile">
    <h5 class="fw-6">Upload Your Resume: </h5>
    <h6>Doc or PFD</h6>
    <input class="up-file" id="tf-upload-img" type="file" name="profile" required="" />
  </div>
</div>
<div>
 
  {/*  <input type="submit" class="submit-button"  value="Save Profile"  /> */}
  <button type="submit" className='button-status'>Save Profile</button>
  </div>
</div>
            <div className="form-infor-profile">
              <h3 className="title-info">Information</h3>
              <div className="form-infor flex flat-form">
                <div className="info-box info-wd">
                  <fieldset>
                  <label class="title-user fw-7">Date of Birth <span className="color-red">*</span></label>
                     <input
                             type="date"
                             placeholder="Date of Birth"
                             id="dateOfBirth"
                             className="input-form"
                             onfocus="(this.type='date')"
                             onblur="(this.type='text')"
                             value={basicDetails.dateOfBirth}
                             onChange={(e) =>
                             setBasicDetails({...basicDetails,dateOfBirth: e.target.value,})}
                             
                       />
                        {errors.basicDetails.dateOfBirth && (
              <div className="error-message">{errors.basicDetails.dateOfBirth}</div>
            )}
                  </fieldset>
                  <fieldset>
                  <label class="title-user fw-7">City <span className="color-red">*</span></label>
                    <input type="text"
                           placeholder="City"
                           className="input-form"
                           value={basicDetails.city}
                           onChange={(e) =>
                           setBasicDetails({ ...basicDetails, city: e.target.value })}
                  />
                   {errors.basicDetails.city && (
              <div className="error-message">{errors.basicDetails.city}</div>
            )}
                  </fieldset>
                  <div id="item_date" className="dropdown titles-dropdown">
                  <label class="title-user fw-7">Pin Code <span className="color-red">*</span></label>
                    <input
                            type="text"
                            placeholder="Pin Code"
                            className="input-form"
                            value={basicDetails.pincode}
                            onChange={(e) =>
                            setBasicDetails({ ...basicDetails, pincode: e.target.value })}
                    />
                     {errors.basicDetails.pincode && (
              <div className="error-message">{errors.basicDetails.pincode}</div>
            )}
                  </div>
                </div>
                <div className="info-box info-wd">
                  <fieldset>
                  <label class="title-user fw-7">Address <span className="color-red">*</span></label>
                    <input
                            type="text"
                            placeholder="Address"
                            className="input-form"
                            value={basicDetails.address}
                            onChange={(e) =>
                            setBasicDetails({ ...basicDetails, address: e.target.value })}
                     />
                      {errors.basicDetails.address && (
              <div className="error-message">{errors.basicDetails.address}</div>
            )}
                  </fieldset>
                  <fieldset>
                  <label class="title-user fw-7">State <span className="color-red">*</span></label>
                    <input
                        type="text"
                        placeholder="State"
                        className="input-form"
                        value={basicDetails.state}
                        onChange={(e) =>
                        setBasicDetails({ ...basicDetails, state: e.target.value })}
                   />
                    {errors.basicDetails.state && (
              <div className="error-message">{errors.basicDetails.state}</div>
            )}
                  </fieldset>
                  <div id="item_size" className="dropdown titles-dropdown ">
                  <label class="title-user fw-7">Alternate Phone Number</label>
                    <input
                             type="text"
                             placeholder="Alternate Phone Number"
                             className="input-form"
                             value={basicDetails.alternatePhoneNumber}
                             onChange={(e) =>
                             setBasicDetails({...basicDetails,alternatePhoneNumber: e.target.value,})}
                    />
                  </div>
                </div>
               
              </div>
             </div>
             <div className="form-infor-profile">
              <h3 className="title-info">Education- X Class <span className="color-red">*</span></h3>
              <div className="form-infor flex flat-form">
                <div className="info-box info-wd">
                  <fieldset>
                  <input
 
                         type="text"
                          placeholder="School Name"
                          className="input-form"
                          value={xClassDetails.xschoolName}
                          onChange={(e) =>
                           setXClassDetails({...xClassDetails,xschoolName: e.target.value,})}
                  />
                  <div className="validation-errors">
            {errors.xClassDetails.xschoolName && (
              <div className="error-message">{errors.xClassDetails.xschoolName}</div>
            )}
          </div>
                  </fieldset>
                  <fieldset>
                    <input
                           type="text"
                           placeholder="Board"
                           className="input-form"
                           value={xClassDetails.xboard}
                           onChange={(e) =>
                           setXClassDetails({ ...xClassDetails, xboard: e.target.value })}
              />
              <div className="validation-errors">
            {errors.xClassDetails.xboard && (
              <div className="error-message">{errors.xClassDetails.xboard}</div>
            )}
          </div>
                  </fieldset>
                  <div id="item_date" className="dropdown titles-dropdown">
                    <input type="text"
                          placeholder="Percentage"
                          className="input-form"
                          value={xClassDetails.xpercentage}
                          onChange={(e) =>setXClassDetails({...xClassDetails,xpercentage: e.target.value,})}
                   />
                   <div className="validation-errors">
            {errors.xClassDetails.xpercentage && (
              <div className="error-message">{errors.xClassDetails.xpercentage}</div>
            )}
          </div>
                  </div>
                  <div id="item_date" className="dropdown titles-dropdown">
                  <input
                         type="text"
                         placeholder="Pincode"
                         className="input-form"
                         value={xClassDetails.xPincode}
                         onChange={(e) =>setXClassDetails({...xClassDetails,xPincode: e.target.value,})}
                  />
                   <div className="validation-errors">
            {errors.xClassDetails.xPincode && (
              <div className="error-message">{errors.xClassDetails.xPincode}</div>
            )}
            </div>
                  </div>
                </div>
                <div className="info-box info-wd">
                  <fieldset>
                    <input
                           type="text"
                           placeholder="Year of passing"
                           className="input-form"
                           value={xClassDetails.xyearOfPassing}
                           onChange={(e) =>
                           setXClassDetails({...xClassDetails,xyearOfPassing: e.target.value,})}
                  />
                   <div className="validation-errors">
            {errors.xClassDetails.xyearOfPassing && (
              <div className="error-message">{errors.xClassDetails.xyearOfPassing}</div>
            )}
            </div>
                  </fieldset>
                  <fieldset>
                  <input  type="text"
                          placeholder="City"
                          className="input-form"
                          value={xClassDetails.xCity}
                          onChange={(e) =>
                          setXClassDetails({ ...xClassDetails, xCity: e.target.value })}
                  />
                  <div className="validation-errors">
            {errors.xClassDetails.xCity && (
              <div className="error-message">{errors.xClassDetails.xCity}</div>
            )}
            </div>
                  </fieldset>
                  <div id="item_size" className="dropdown titles-dropdown ">
                  <input  type="text"
                          placeholder="State"
                          className="input-form"
                          value={xClassDetails.xState}
                          onChange={(e) =>
                          setXClassDetails({ ...xClassDetails, xState: e.target.value })}
                   />
                   <div className="validation-errors">
            {errors.xClassDetails.xState && (
              <div className="error-message">{errors.xClassDetails.xState}</div>
            )}
            </div>
                  </div>
                </div>
               
              </div>
             </div>
             <div className="form-infor-profile">
              <h3 className="title-info">Education- Inter/Diploma Details <span className="color-red">*</span></h3>
              <div className="form-infor flex flat-form">
                <div className="info-box info-wd">
                  <fieldset>
                  <input
 
                         type="text"
                          placeholder="Name of college"
                          className="input-form"
                          value={intermediateDetails.icollegeName}
                          onChange={(e) =>
                            setIntermediateDetails({
                              ...intermediateDetails,
                              icollegeName: e.target.value,})}      
                  />
                 
                  <div className="validation-errors">
            {errors.intermediateDetails.icollegeName && (
              <div className="error-message">{errors.intermediateDetails.icollegeName}</div>
            )}
          </div>
                  </fieldset>
                  <fieldset>
                    <input
                           type="text"
                           placeholder="Board"
                           className="input-form"
                           value={intermediateDetails.iboard}
                           onChange={(e) =>
                             setIntermediateDetails({...intermediateDetails,iboard: e.target.value,})}
                    />
                    <div className="validation-errors">
            {errors.intermediateDetails.iboard && (
              <div className="error-message">{errors.intermediateDetails.iboard}</div>
            )}
          </div>
                  </fieldset>
                  <div id="item_date" className="dropdown titles-dropdown">
                    <input type="text"
                          placeholder="Program"
                          className="input-form"
                          value={intermediateDetails.iprogram}
                          onChange={(e) =>
                            setIntermediateDetails({...intermediateDetails,iprogram: e.target.value,})
                          }    
                   />
                   <div className="validation-errors">
            {errors.intermediateDetails.iprogram && (
              <div className="error-message">{errors.intermediateDetails.iprogram}</div>
            )}
          </div>
                  </div>
                  <div id="item_date" className="dropdown titles-dropdown">
                  <input
                          type="text"
                          placeholder="Percentage"
                          className="input-form"
                          value={intermediateDetails.ipercentage}
                          onChange={(e) =>
                          setIntermediateDetails({...intermediateDetails,ipercentage: e.target.value,})}
                   />
                   <div className="validation-errors">
            {errors.intermediateDetails.ipercentage && (
              <div className="error-message">{errors.intermediateDetails.ipercentage}</div>
            )}
          </div>
                  </div>
                </div>
                <div className="info-box info-wd">
                  <fieldset>
                    <input
                           type="text"
                           placeholder="Year of passing"
                           className="input-form"
                           value={intermediateDetails.iyearOfPassing}
                           onChange={(e) =>
                            setIntermediateDetails({...intermediateDetails,iyearOfPassing: e.target.value,})}
                  />
                  <div className="validation-errors">
            {errors.intermediateDetails.iyearOfPassing && (
              <div className="error-message">{errors.intermediateDetails.iyearOfPassing}</div>
            )}
          </div>
                  </fieldset>
                  <fieldset>
                  <input  type="text"
                          placeholder="City"
                          className="input-form"
                          value={intermediateDetails.iCity}
                          onChange={(e) =>
                            setIntermediateDetails({ ...intermediateDetails, iCity: e.target.value })}
                         
                  />
                  <div className="validation-errors">
            {errors.intermediateDetails.iCity && (
              <div className="error-message">{errors.intermediateDetails.iCity}</div>
            )}
          </div>
                  </fieldset>
                  <div id="item_size" className="dropdown titles-dropdown ">
                  <input  type="text"
                          placeholder="State"
                          className="input-form"
                          value={intermediateDetails.iState}
                          onChange={(e) =>
                            setIntermediateDetails({ ...intermediateDetails, iState: e.target.value })}
                   />
                   <div className="validation-errors">
            {errors.intermediateDetails.iState && (
              <div className="error-message">{errors.intermediateDetails.iState}</div>
            )}
          </div>
                  </div>
                </div>
               
              </div>
             </div>
             <div className="form-infor-profile">
              <h3 className="title-info">Education- Graduation Details <span className="color-red">*</span></h3>
              <div className="form-infor flex flat-form">
                <div className="info-box info-wd">
                  <fieldset>
                  <input
                           type="text"
                           placeholder="Name of college"
                           className="input-form"
                           value={graduationDetails.gcollegeName}
                           onChange={(e) =>setGraduationDetails({...graduationDetails,gcollegeName: e.target.value,})}
                  />
                   <div className="validation-errors">
            {errors.graduationDetails.gcollegeName && (
              <div className="error-message">{errors.graduationDetails.gcollegeName}</div>
            )}
          </div>
                  </fieldset>
                  <fieldset>
                    <input
                           type="text"
                           placeholder="Board"
                           className="input-form"
                           value={graduationDetails.gboard}
                           onChange={(e) =>setGraduationDetails({...graduationDetails,gboard: e.target.value,})}
                    />
                    <div className="validation-errors">
            {errors.graduationDetails.gboard && (
              <div className="error-message">{errors.graduationDetails.gboard}</div>
            )}
          </div>
                  </fieldset>
                  <div id="item_date" className="dropdown titles-dropdown">
                    <input type="text"
                          placeholder="Program"
                          className="input-form"
                          value={graduationDetails.gprogram}
                          onChange={(e) =>setGraduationDetails({
                              ...graduationDetails,
                              gprogram: e.target.value,
                            })
                          }
                   />
                   <div className="validation-errors">
            {errors.graduationDetails.gprogram && (
              <div className="error-message">{errors.graduationDetails.gprogram}</div>
            )}
          </div>
                  </div>
                  <div id="item_date" className="dropdown titles-dropdown">
                  <input
                          type="text"
                          placeholder="Percentage"
                          className="input-form"
                          value={graduationDetails.gpercentage}
                onChange={(e) =>setGraduationDetails({
                    ...graduationDetails,gpercentage: e.target.value,})}
                   />
                   <div className="validation-errors">
            {errors.graduationDetails.gpercentage && (
              <div className="error-message">{errors.graduationDetails.gpercentage}</div>
            )}
          </div>
                  </div>
                </div>
                <div className="info-box info-wd">
                  <fieldset>
                    <input
                           type="text"
                           placeholder="Year of passing"
                           className="input-form"
                           value={graduationDetails.gyearOfPassing}
                           onChange={(e) =>setGraduationDetails({...graduationDetails,gyearOfPassing: e.target.value,})}
                  />
                  <div className="validation-errors">
            {errors.graduationDetails.gyearOfPassing && (
              <div className="error-message">{errors.graduationDetails.gyearOfPassing}</div>
            )}
          </div>
                  </fieldset>
                  <fieldset>
                  <input  type="text"
                          placeholder="City"
                          className="input-form"
                          value={graduationDetails.gCity}
                          onChange={(e) =>
                            setGraduationDetails({...graduationDetails,gCity: e.target.value,})}
                  />
                  <div className="validation-errors">
            {errors.graduationDetails.gCity && (
              <div className="error-message">{errors.graduationDetails.gCity}</div>
            )}
          </div>
                  </fieldset>
                  <div id="item_size" className="dropdown titles-dropdown ">
                  <input  type="text"
                          placeholder="State"
                          className="input-form"
                          value={graduationDetails.gState}
                          onChange={(e) =>setGraduationDetails({...graduationDetails,gState: e.target.value,})}
                   />
                   <div className="validation-errors">
            {errors.graduationDetails.gState && (
              <div className="error-message">{errors.graduationDetails.gState}</div>
            )}
          </div>
                  </div>
                </div>
               
              </div>
             </div>
    <div class="contact-wrap info-wd">
                  <h3>Experience & Skills</h3>
 
                 <div class="form-social form-wg flex flat-form">
                    <div class="form-box  wg-box">
                      <div id="item_category2" class="dropdown titles-dropdow">
                        <label class="title-user color-1 fw-7">Experience</label>
                        {experienceDetails.map((experience, index) => (
            <div key={index}>
              <fieldset>
              <label class="title-user color-1 fw-7">Compnay Name</label>
                <input
                  type="text"
                  className="input-form"
                  placeholder="ABC Pvt Ltd"
                  value={experience.company}
                  onChange={(e) => handleExperienceChange(e, index, "company")}
                />
              </fieldset>
              <fieldset>
              <label class="title-user color-1 fw-7">Position</label>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Java Developer"
                  value={experience.position}
                  onChange={(e) => handleExperienceChange(e, index, "position")}
                />
              </fieldset>
              <div id="item_date" className="dropdown titles-dropdown">
                <label htmlFor={`startDate-${index}`}>Start Date</label>
                <input
                  type="date"
                  className="input-form"
                  id={`startDate-${index}`}
                  value={experience.startDate}
                  onChange={(e) => handleExperienceChange(e, index, "startDate")}
                />
              </div>
              <div id="item_date" className="dropdown titles-dropdown">
                <label htmlFor={`endDate-${index}`}>End Date</label>
                <input
                  type="date"
                  className="input-form"
                  id={`endDate-${index}`}
                  value={experience.endDate}
                  onChange={(e) => handleExperienceChange(e, index, "endDate")}
                />
              </div>
            </div>
          ))}
          <button type="button" onClick={addExperience}>
            Add Experience
          </button>
                      </div>
                    </div>
                    <div class="form-box  wg-box">
                      <fieldset class="">
                        <label class="title-user fw-7">Skills</label>
                        {skillsRequired.map((skill, index) => (
<div key={index} className="experience-table">
<div>
<label class="title-user fw-7">Your Skill</label>
<input
  type="text"
  placeholder="Java"
  className="input-form"
  value={skill.skillName}
  onChange={(e) => handleSkillChange(e, index, "skillName")}
/>
{errors.skillsRequired[index]?.skillName && (
                    <div className="error-message">{errors.skillsRequired[index].skillName}</div>
                  )}
</div>
<div>
<label class="title-user fw-7">Your Experience</label>
<input
  type="text"
  placeholder="5"
  className="input-form"
  value={skill.experience}
  onChange={(e) => handleSkillChange(e, index, "experience")}
/>
{errors.skillsRequired[index]?.experience && (
                    <div className="error-message">{errors.skillsRequired[index].experience}</div>
                  )}
</div>
{index === skillsRequired.length - 1 && (
<button type="button" onClick={addSkills} className="btn-3">
  Add Skill
</button>
)}
</div>
))}
                      </fieldset>
                    </div>
                  </div>
                 
                </div>
 
                <div className="tt-button button-style">
             
                {/* <button type="submit" className="btn-3">Submit</button> */}
               
              </div>
 
 
    </div>
   
    </div>
   
    </div>
    </div>
    </section>
    </div>
    </form>
   
    )
  }
    </div>
                 
 
  )
}
 
export default ApplicantUpdateProfile;