import React from 'react'
import { useState, useEffect } from 'react';
import { useUserContext } from '../common/UserProvider';
import ApplicantAPIService,{ apiUrl } from '../../services/ApplicantAPIService';

function RecruiterMyOrganization() {

    const [companyName, setCompanyName] = useState('');
    const [website, setWebsite] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [socialProfiles, setSocialProfiles] = useState({
      twitter: '',
      instagram: '',
      youtube: '',
    });
    const [token, setToken] = useState('');
    const [headOffice, setHeadOffice] = useState('');
    const [twitter, setTwitter] = useState('');
    const [instagram, setInstagram] = useState('');
    const [youtube, setYoutube] = useState('');
    const [formErrors, setFormErrors] = useState({
      companyName: '',
      website: '',
      phoneNumber: '',
      email: '',
      headOffice: '',
      instagram: '',
    });
  
    const user1 = useUserContext();
    const user = user1.user;
  
    useEffect(() => {
      const storedToken = localStorage.getItem('jwtToken');
      if (storedToken) {
        setToken(storedToken);
      }
    }, []);
    const validateForm = () => {
      let isValid = true;
      const errors = {};
  
      // Company Name Validation (Mandatory, At least 3 characters)
      if (!companyName.trim()) {
        errors.companyName = 'Company name is required';
        isValid = false;
      } else if (companyName.trim().length < 3) {
        errors.companyName = 'Company name must be at least 3 characters';
        isValid = false;
      }
  
      // Website Validation (Mandatory, Ends with .com, .in, or .org)
      if (!website.trim()) {
        errors.website = 'Website is required';
        isValid = false;
      } else {
        const websiteRegex = /\.(com|in|org)$/;
        if (!websiteRegex.test(website.trim())) {
          errors.website = 'Website should end with .com, .in, or .org';
          isValid = false;
        }
      }
  
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(phoneNumber.trim())) {
        errors.phoneNumber = 'Invalid phone number';
        isValid = false;
      }
      if (!headOffice.trim()) {
        errors.headOffice = 'Head office address is required';
      }
  
      // if (!instagram.trim()) {
      //   errors.instagram = 'Instagram handle is required';
      // }
  
      setFormErrors(errors);
      return isValid;
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
         // Prevent the default form submission behavior
         if (!validateForm()) {
          return;
        }
        try {
          const requestData = {
            companyName,
            website,
            phoneNumber,
            email,
            socialProfiles: [
                twitter,
                instagram,
                youtube,
            ],
            headOffice,
          };
    
          const response = await fetch(`${apiUrl}/companyprofile/recruiters/company-profiles/${user.id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(requestData),
          });
    
          if (response.status === 200) {
            const responseData = await response.text();
            console.log('Success:', responseData);
            if (responseData === 'CompanyProfile was already updated.') {
              window.alert('CompanyProfile was already updated.');
            } else {
              window.alert('Profile saved successfully');
            }
          } else {
            console.error('API request failed');
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      };
    
  
    // const handleCancel = () => {
    //   // Handle cancel action here
    // };
  
    // const handleSocialProfileChange = (network, value) => {
    //   setSocialProfiles((prevProfiles) => {
    //     const updatedProfiles = [...prevProfiles];
    //     const index = updatedProfiles.findIndex((profile) => profile.network === network);
  
    //     if (index !== -1) {
    //       updatedProfiles[index].value = value;
    //     } else {
    //       updatedProfiles.push({ network, value });
    //     }
  
    //     return updatedProfiles;
    //   });
    // };
  return (
    <div>
<div className="dashboard__content">
  <section className="page-title-dashboard">
    <div className="themes-container">
      <div className="row">
        <div className="col-lg-12 col-md-12 ">
          <div className="title-dashboard">
            <div className="title-dash flex2">My Organization</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="flat-dashboard-setting">
    <form name="f1">
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
                  <h5 className="fw-6">Upload a Logo:</h5>
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
              <div className="wrap-img flex2">
              </div>
              <div className="tt-button button-style">
               
                  <button type="submit"  onClick={handleSubmit}>Save Profile</button>
               
              </div>
            </div>
            <div className="form-infor-profile">
              <h3 className="title-info">Information</h3>
              <div className="form-infor flex flat-form">
                <div className="info-box info-wd">
                  <fieldset>
                    <label className="title-user fw-7">Company Full Name<span className="color-red">*</span></label>
                    <input
                  type="text"
                  id="companyName"
                  className="input-form"
                  placeholder="ABC Company Pvt. Ltd"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
                  </fieldset>
                  <fieldset>
                    <label className="title-user fw-7">Alternate Phone Number</label>
                    <input
                             type="text"
                            id="phoneNumber"
                            className="input-form"
                           placeholder="Alternate Phone Number"
                          value={phoneNumber}
                       onChange={(e) => setPhoneNumber(e.target.value)}
                />
                  </fieldset>
                </div>
                <div className="info-box info-wd">
                  <fieldset>
                    <label className="title-user fw-7">Alternate Email</label>
                    <input
                  type="text"
                  id="email"
                  className="input-form"
                  placeholder="support@abc.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                  </fieldset>
                  <fieldset>
                    <label className="title-user fw-7">Website<span className="color-red">*</span></label>
                    <input
                  type="text"
                  id="website"
                  className="input-form"
                  placeholder="www.abc.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  required
                />
                  </fieldset>
                </div>
              </div>
              <div className="text-editor-wrap border-bt">
                <h3>Head Office Address<span className="color-red">*</span></h3>
                <input
                  type="text"
                  id="address"
                  className="input-form2"
                  placeholder="Head Office Address"
                  value={headOffice}
                  onChange={(e) => setHeadOffice(e.target.value)}
                  required
                />
              </div>
              
              <div className="social-wrap">
                <h3>Social Network</h3>
                <div className="form-social form-wg flex flat-form">
                  <div className="form-box info-wd wg-box">
                    <fieldset className="flex2">
                    <span className="icon-youtube" />
                    <input
                    type="text"
                    id="youtube"
                    className="input-form2"
                    placeholder="YouTube"
                    value={youtube}
                    onChange={(e) => setYoutube(e.target.value)}
                  />
                    </fieldset>
                    <fieldset className="flex2">
                      <span className="icon-twitter" />
                      <input
                    type="text"
                    id="twitter"
                    className="input-form2"
                    placeholder="Twitter"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                  />
                    </fieldset>
                    <fieldset className="flex2">
                      <span className="icon-instagram1" />
                      <input
                    type="text"
                    id="instagram"
                    className="input-form2"
                    placeholder="Instagram"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    required
                  />
                    </fieldset>
                  </div>
                 
                </div>
              </div>
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

export default RecruiterMyOrganization;