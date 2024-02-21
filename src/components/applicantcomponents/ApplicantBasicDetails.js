import React, { useState,useEffect } from 'react';
import axios from 'axios';
import ApplicantAPIService, { apiUrl } from '../../services/ApplicantAPIService';
import { useUserContext } from '../common/UserProvider';
import { useNavigate } from 'react-router-dom';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
 
 

const ApplicantBasicDetails = () => {
  const { user } = useUserContext();
  const[applicant,setApplicant]=useState({
    name:"",
    email:"",
    mobilenumber:"",
   });
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState([]);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [qualification, setQualification] = useState('');
  const [passingYear, setPassingYear] = useState('');
  const [resume, setResume] = useState(null);
  const[fullName, setFullName]=useState(null);
  const[mobileNumber, setMobileNumber]=useState(null);
  const[email,setEmail]=useState(null);
   const [phone, setPhone] = useState('');
   const [specialization, setSpecialization] = useState('');
  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [cityError, setCityError] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [skillsError, setSkillsError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [skillsRequired, setSkillsRequired] = useState([]);
  const [preferredJobLocations, setPreferredJobLocations] = useState([]);
  const yearsOptions = Array.from({ length: 16 }, (_, i) => i); // 0 to 10
 
  const qualificationsOptions = [
    'B.Tech',
    'MCA',
    'Degree',
    'Intermediate',
    'Diploma',
  ];

  

  const validateForm = () => {
    const newErrors = {};
 
    if (!experience) {
      newErrors.experience = 'Experience is required';
    }
 
    if (!qualification) {
      newErrors.qualification = 'Qualification is required';
    }
      if (!specialization) {
        newErrors.specialization = 'Specialization is required';
      }
      if (preferredJobLocations.length === 0) {
        newErrors.city = 'City is required';
      }
    
    setErrors(newErrors);
 
    return Object.keys(newErrors).length === 0;
  };
 

    const handleQualificationChange = (e) => {
    const selectedQualification = e.target.value;
    setQualification(selectedQualification);
    setSpecialization(''); // Reset specialization when qualification changes
  };

  const handleCityChange = (selected) => {
    setSelectedCities(selected);
    if (selected.length > 0) {
      setCityError('');
    } else {
      setCityError('Please select at least one city.');
    }
  };

  const specializationsByQualification = {
    'B.Tech': ['Computer Science and Engineering (CSE)', 
                'Electronics and Communication Engineering (ECE)', 
                'Electrical and Electronics Engineering (EEE)', 
                'Mechanical Engineering (ME)',
                'Civil Engineering (CE)',
                'Aerospace Engineering',
                'Information Technology(IT)',
                 'Chemical Engineering',
                 'Biotechnology Engineering'],
    'MCA': ['Software Engineering', 'Data Science','Artificial Intelligence','Machine Learning','Information Security',
             'Cloud Computing','Mobile Application Development','Web Development','Database Management','Network Administration',
            'Cyber Security','IT Project Management'],
    'Degree': ['Bachelor of Science (B.Sc) Physics','Bachelor of Science (B.Sc) Mathematics','Bachelor of Science (B.Sc) Statistics',
               'Bachelor of Science (B.Sc) Computer Science','Bachelor of Science (B.Sc) Electronics','Bachelor of Science (B.Sc) Chemistry',
               'Bachelor of Commerce (B.Com)'],
    'Intermediate': ['MPC','BiPC','CEC','HEC'],
    'Diploma': ['Mechanical Engineering','Civil Engineering','Electrical Engineering','Electronics and Communication Engineering',
                'Computer Engineering','Automobile Engineering','Chemical Engineering','Information Technology','Instrumentation Engineering',
                 'Mining Engineering','Metallurgical Engineering','Agricultural Engineering','Textile Technology','Architecture',
                  'Interior Designing','Fashion Designing','Hotel Management and Catering Technology','Pharmacy','Medical Laboratory Technology',
                 'Radiology and Imaging Technology'],          
    
  };
  
  const cities = [
    'Chennai',
    'Thiruvananthapuram',
    'Bangalore',
    'Hyderabad',
    'Coimbatore',
    'Kochi',
    'Madurai',
    'Mysore',
    'Thanjavur',
    'Pondicherry',
    'Vijayawada',
  ];

  const handleSkillsChange = (selected) => {
    const skillsWithNames = selected.map(skill => ({ skillName: skill.skill }));
    setSelectedSkills(skillsWithNames);
    
    if (skillsWithNames.length > 0) {
      setSkillsError('');
    } else {
      setSkillsError('Please select at least one skill.');
    }
  };
  

  // Assuming skillsOptions is an array of skill names
  const skillsOptions = [
    'Java',
    'C',
    'C+',
    'C Sharp',
    'Python',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'React',
    'Vue',
    'JSP',
    'Servlets',
    'Spring',
    'Spring Boot',
    'Hibernate',
    '.Net',
    'Django',
    'Flask',
    'SQL',
    'MySQL',
    'SQL-Server',
    'Mongo DB',
    'Selenium',
    'Regression Testing',
    'Manual Testing'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
    
    if (!isFormValid) {
      return;
    }
  
    const formData = {
      experience,
      qualification,
      specialization,
      preferredJobLocations: preferredJobLocations.map((location) => location.city),
      skills: skillsRequired.map((skill) => skill.skill),
    };
    console.log("Form Data", formData);
    try {
      const jwtToken = localStorage.getItem('jwtToken');
      const response = await axios.post(`${apiUrl}/applicantprofile/createprofile/${user.id}`,formData,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      console.log('API Response:', response.data);
      window.alert('Profile saved successfully!');
      navigate('/applicant-find-jobs');
    } catch (error) {
      console.error('Error submitting form data:', error);
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
            <div className="title-dash flex2">Application Form</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <form onSubmit={handleSubmit}>
  <section className="flat-dashboard-post flat-dashboard-setting">
  
    <div className="themes-container">
      <div className="row">
        <div className="col-lg-12 col-md-12 ">
          <div className="post-new profile-setting bg-white">
 
            <div className="row">
          <div className="col-lg-6 col-md-12">
              <div id="item_1" className="dropdown titles-dropdown info-wd">
                <select
                  value={experience}
                  className="input-form"
                  onChange={(e) => setExperience(e.target.value)}
                  style={{ color: experience ? 'black' : 'lightgrey' }}
                >
                  <option value="" disabled>*Experience</option>
                  {yearsOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                {errors.experience && (
                  <div className="error-message">{errors.experience}</div>
                )}
              </div>

              </div>
              <div className="col-lg-6 col-md-12">
        <div id="item_4" className="dropdown titles-dropdown info-wd">
          <select
            value={qualification}
            className="input-form"
            onChange={handleQualificationChange}
            style={{ color: qualification ? 'black' : 'lightgrey' }}
          >
            <option value="" disabled>*Qualification</option>
            {qualificationsOptions.map((qual) => (
              <option key={qual} value={qual}>
                {qual}
              </option>
            ))}
          </select>
          {errors.qualification && (
            <div className="error-message">{errors.qualification}</div>
          )}
        </div>
      </div>
      <div className="col-lg-6 col-md-12">
        <div id="item_4" className="dropdown titles-dropdown info-wd">
          <select
            value={specialization}
            className="input-form"
            onChange={(e) => setSpecialization(e.target.value)}
            style={{ color: specialization ? 'black' : 'lightgrey' }}
            disabled={!qualification} // Disable if no qualification selected
          >
            <option value="" disabled>*Specialization</option>
            {specializationsByQualification[qualification]?.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
          {errors.specialization && (
            <div className="error-message">{errors.specialization}</div>
          )}
        </div>
      </div>
  <div className="col-lg-6 col-md-12">
      <div id="item_3" className="dropdown titles-dropdown info-wd">
      <Typeahead
  id="cityTypeahead"
  labelKey="city"  // Specify the property to be used as the label
  multiple
  placeholder="*Preferred Job Location(s)"
  options={cities.map(city => ({ city }))}
  onChange={(selectedCities) => setPreferredJobLocations(selectedCities)}
  selected={preferredJobLocations}
  inputProps={{
    className: 'input-form',
  }}
/>
        {errors.city && (
          <div className="error-message">{errors.city}</div>
        )}
      </div>
    </div>  
              <div className="col-lg-6 col-md-12">
      <div id="item_2" className="dropdown titles-dropdown info-wd">
      <Typeahead
  id="skillsTypeahead"
  labelKey="skillName" 
  multiple
  placeholder="*Skills"
  options={skillsOptions.map(skill => ({ skillName: skill }))}
  onChange={(selectedSkills) => setSkillsRequired(selectedSkills)}
  selected={skillsRequired}
  inputProps={{
    className: 'input-form',
  }}
/>

        {errors.skills && (
          <div className="error-message">{errors.skills}</div>
        )}
      </div>
    </div>             
              </div>
            <div className="form-infor flex flat-form">
              <div className="info-box info-wd">
             </div>
            </div>
            <div className="form-group">
            <button type="submit" className='button-status'>Submit</button>
              </div>
          </div>
        </div>
      </div>
    </div>

  </section>
  </form>
</div>
</div>
  )
};
 
export default ApplicantBasicDetails;