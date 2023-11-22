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

      
      if (response.status === 200) {
        // Successful response
        if (response.data === 'Profile saved successfully') {
          console.log(response.body);
          console.log('Data sent successfully!');
          navigate('/applicanthome?success=profile-updated');
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
            <div className="author-profile flex2 border-bt">
              <div className="wrap-img flex2">
                <div className="img-box relative">
                  <img
                    className="avatar "
                    id="profileimg"
                    src="../images/dashboard/image-up.jpg"
                    alt=""
                  />
                </div>
                <div id="upload-profile">
                  <h5 className="fw-6">Upload a new avatar: </h5>
                  <h6>JPG 80x80px</h6>
                  <input
                    className="up-file"
                    id="tf-upload-img"
                    type="file"
                    name="profile"
                    required=""
                  />
                </div>
              </div>
             
            </div>
            <div className="form-infor-profile">
              <h3 className="title-info">Information</h3>
              <div className="form-infor flex flat-form">
                <div className="info-box info-wd">
                  <fieldset>
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
                  </fieldset>
                  <fieldset>
                    <input type="text"
                           placeholder="City"
                           className="input-form"
                           value={basicDetails.city}
                           onChange={(e) =>
                           setBasicDetails({ ...basicDetails, city: e.target.value })
                     }
                  />
                  </fieldset>
                  <div id="item_date" className="dropdown titles-dropdown">
                    <input
                            type="text"
                            placeholder="Pin Code"
                            className="input-form"
                            value={basicDetails.pincode}
                            onChange={(e) =>
                            setBasicDetails({ ...basicDetails, pincode: e.target.value })}
                    />
                  </div>
                </div>
                <div className="info-box info-wd">
                  <fieldset>
                    <input
                            type="text"
                            placeholder="Address"
                            className="input-form"
                            value={basicDetails.address}
                            onChange={(e) =>
                            setBasicDetails({ ...basicDetails, address: e.target.value })}
                     />
                  </fieldset>
                  <fieldset>
                    <input
                        type="text"
                        placeholder="State"
                        className="input-form"
                        value={basicDetails.state}
                        onChange={(e) =>
                        setBasicDetails({ ...basicDetails, state: e.target.value })}
                   />
                  </fieldset>
                  <div id="item_size" className="dropdown titles-dropdown ">
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
              <h3 className="title-info">Education- X Class</h3>
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
                  </fieldset>
                  <fieldset>
                    <input
                           type="text"
                           placeholder="Board"
                           className="input-form"
                           value={xClassDetails.xboard}
                           onChange={(e) =>
                           setXClassDetails({ ...xClassDetails, xboard: e.target.value })
                }
              />
                  </fieldset>
                  <div id="item_date" className="dropdown titles-dropdown">
                    <input type="text"
                          placeholder="Percentage"
                          className="input-form"
                          value={xClassDetails.xpercentage}
                          onChange={(e) =>setXClassDetails({...xClassDetails,xpercentage: e.target.value,})}
                   />
                  </div>
                  <div id="item_date" className="dropdown titles-dropdown">
                  <input
                         type="text"
                         placeholder="Pincode"
                         className="input-form"
                         value={xClassDetails.xPincode}
                         onChange={(e) =>setXClassDetails({...xClassDetails,xPincode: e.target.value,})}

                  />
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
                  </fieldset>
                  <fieldset>
                  <input  type="text"
                          placeholder="City"
                          className="input-form"
                          value={xClassDetails.xCity}
                          onChange={(e) =>
                          setXClassDetails({ ...xClassDetails, xCity: e.target.value })}
                  />
                  </fieldset>
                  <div id="item_size" className="dropdown titles-dropdown ">
                  <input  type="text"
                          placeholder="State"
                          className="input-form"
                          value={xClassDetails.xState}
                          onChange={(e) =>
                          setXClassDetails({ ...xClassDetails, xState: e.target.value })}

                   />
                  </div>
                </div>
                
              </div>
             </div>
             <div className="form-infor-profile">
              <h3 className="title-info">Education- Inter/Diploma Details</h3>
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
                  </fieldset>
                  <fieldset>
                  <input  type="text"
                          placeholder="City"
                          className="input-form"
                          value={xClassDetails.xCity}
                          onChange={(e) =>
                          setXClassDetails({ ...xClassDetails, xCity: e.target.value })}
                  />
                  </fieldset>
                  <div id="item_size" className="dropdown titles-dropdown ">
                  <input  type="text"
                          placeholder="State"
                          className="input-form"
                          value={xClassDetails.xState}
                          onChange={(e) =>
                          setXClassDetails({ ...xClassDetails, xState: e.target.value })}

                   />
                  </div>
                </div>
                
              </div>
             </div>
             <div className="form-infor-profile">
              <h3 className="title-info">Education- Graduation Details</h3>
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
                  </fieldset>
                  <fieldset>
                    <input
                           type="text"
                           placeholder="Board"
                           className="input-form"
                           value={graduationDetails.gboard}
                           onChange={(e) =>setGraduationDetails({...graduationDetails,gboard: e.target.value,})}
                    />
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
                  </fieldset>
                  <fieldset>
                  <input  type="text"
                          placeholder="City"
                          className="input-form"
                          value={graduationDetails.gCity}
                          onChange={(e) =>
                            setGraduationDetails({...graduationDetails,gCity: e.target.value,})}
                  />
                  </fieldset>
                  <div id="item_size" className="dropdown titles-dropdown ">
                  <input  type="text"
                          placeholder="State"
                          className="input-form"
                          value={graduationDetails.GState}
                          onChange={(e) =>setGraduationDetails({...graduationDetails,gState: e.target.value,})}
                   />
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
                <input
                  type="text"
                  className="input-form"
                  placeholder="Company"
                  value={experience.company}
                  onChange={(e) => handleExperienceChange(e, index, "company")}
                />
              </fieldset>
              <fieldset>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Position"
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
<input
  type="text"
  placeholder="Skill"
  className="input-form"
  value={skill.skillName}
  onChange={(e) => handleSkillChange(e, index, "skillName")}
/>
</div>
<div>
<input
  type="text"
  placeholder="Experience"
  className="input-form"
  value={skill.experience}
  onChange={(e) => handleSkillChange(e, index, "experience")}
/>
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
              
                <button type="submit" className="btn-3">Submit</button>
                
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