import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApplicantAPIService, { apiUrl } from '../../services/ApplicantAPIService';
import { useUserContext } from '../common/UserProvider';
import { Link } from 'react-router-dom';
const ApplicantViewProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const { user } = useUserContext();
  const id = user.id;
 
  useEffect(() => {
    axios.get(`${apiUrl}/applicantprofile/getdetails/${id}`)
      .then(response => {
        setProfileData(response.data);
      })
      .catch(error => {
        console.error('Error fetching applicant profile:', error);
      });
 
      axios.get(`${apiUrl}/applicant-image/getphoto/${id}`, { responseType: 'arraybuffer' })
      .then(imageResponse => {
        const base64Image = btoa(
          new Uint8Array(imageResponse.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        );
        setImageSrc(`data:${imageResponse.headers['content-type']};base64,${base64Image}`);
      })
      .catch(imageError => {
        console.error('Error fetching applicant image:', imageError);
      });
  }, [user]);
 
  if (!profileData) {
    return <div>Loading...</div>;
  }
 
  return (
    <div className="dashboard__content">
  <section className="page-title-dashboard">
    <div className="themes-container">
      <div className="row">
        <div className="col-lg-12 col-md-12 ">
          <div className="title-dashboard">
            <div className="title-dash flex2">Overview</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="flat-dashboard-user flat-dashboard-profile">
    <div className="themes-container">
      <div className="row">
        <div className="col-lg-12 col-md-12 ">
          <div className="wrap-profile flex2 bg-white">
            <div className="box-profile flex2">
              <div className="images">
                <img src={imageSrc} alt="" width="150px" height="50px" />
              </div>
              <div className="content">
                <h5 style={{ fontSize: '24px' }} className="fw-6 color-3 ">Applicant</h5>
                <div className="check-box flex2">
                  <h3>{profileData.basicDetails.firstName} {profileData.basicDetails.lastName}</h3>
                  
                  {/* <div className="status-wrap">
                    <div className="button-status fs-12 color-3 style-bt">
                      {" "}
                      Available now
                    </div>
                  </div> */}
                </div>
                <div className="tag-wrap flex">
                <div className="tag-box flex" style={{ fontSize: '18px' }}> 
                    {profileData.skillsRequired.map(skill => (
                      <div key={skill.id} className="tag-box-item flex">
                        <span><a href="#"><ul className="job-tag"><li>{skill.skillName}</li></ul></a></span>
                      </div>
                    ))}
                  </div>
                  <div className="map color-4" style={{ fontSize: '18px' }} flex>{profileData.basicDetails.city}</div>
                  <div className="dolar color-4"style={{ fontSize: '18px' }} flex>{profileData.basicDetails.State}</div>
                </div>
              </div>
            </div>
            <div className="tt-button">
            <Link to="/applicant-update-profile">Edit Profile</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="flat-dashboard-overview flat-dashboard-about">
    <div className="themes-container">
      <div className="row">
        <div className="col-lg-12 col-md-12 ">
          <div className="wrap-about flex">
            <div className="side-bar">
              <div className="sidebar-map bg-white">
                 <div className="title-box flex">
                  <div className="p-16">Location</div>
                  <h4>{profileData.basicDetails.city} ,{profileData.basicDetails.state}</h4>
                </div>
                <div className="title-box flex">
                  <div className="p-16">Phone Number</div>
                  <h4>{profileData.basicDetails.alternatePhoneNumber} </h4>
                </div>
                <div className="title-box flex">
                  <div className="p-16">Email</div>
                  <h4>
                  {profileData.basicDetails.email}
                  </h4>
                </div>
               
                <div className="title-box flex">
                  <div className="p-16">Experience time</div>
                  <h4>2</h4>
                </div>
                               
                <div className="title-box flex">
                  <div className="p-16">Qualification</div>
                  <h4> {profileData.graduationDetails.gprogram}</h4>
                </div>
                {/* <div className="wrap-icon">
                  <h4>Socials:</h4>
                  <div className="box-icon flex">
                    <a href="#" className="icon-facebook" />
                    <a href="#" className="icon-linkedin2" />
                    <a href="#" className="icon-twitter" />
                    <a href="#" className="icon-pinterest" />
                    <a href="#" className="icon-instagram1" />
                    <a href="#" className="icon-youtube" />
                  </div>
                </div> */}
              </div>
           
            </div>
            <div className="post-about widget-dash-video bg-white">
             
              <p className="text-3">            
              </p>
              <h3 className="title-education">Education</h3>
              <div className="education-wrap">
                <div className="education-box"> <h4 style={{fontWeight:'bold',color:'orange'}}> Graducation:</h4>
                  <div className="title-box flex2">
                    <div className="subtitle-1 fw-7">University: {profileData.graduationDetails.gboard}</div>
                    <div className="subtitle-1 fw-7">Branch: {profileData.graduationDetails.gprogram}</div>
                   
                    <div className="subtitle-2 fw-7 fw-5">Percentage: {profileData.graduationDetails.gpercentage}</div>
                    <div className="subtitle-2 fw-7 fw-5">Year of Passing: {profileData.graduationDetails.gyearOfPassing}</div>
                  </div>
                 
                </div>
                <div className="education-box"><h4 style={{fontWeight:'bold',color:'orange'}}> Intermediate Details:</h4>
                  <div className="title-box flex2">
                    <div className="subtitle-1 fw-7">Board:{profileData.intermediateDetails.iboard} </div>
                    <div className="subtitle-1 fw-7">Branch:{profileData.intermediateDetails.iprogram} </div>
                    <div className="subtitle-1 fw-7">Percentage: {profileData.intermediateDetails.ipercentage} </div>
                    <div className="subtitle-1 fw-7">Year of Passing:{profileData.intermediateDetails.iyearOfPassing} </div>
                   </div>                
                </div>
                <div className="education-box"><h4 style={{fontWeight:'bold',color:'orange'}}> SSC Details:</h4>
                  <div className="title-box flex2">
                    <div className="subtitle-1 fw-7">Board:{profileData.xClassDetails.xboard} </div>
                    <div className="subtitle-1 fw-7">SSC/CBSE/ICSE{profileData.xClassDetails.xprogram} </div>
                    <div className="subtitle-1 fw-7">Percentage:{profileData.xClassDetails.xpercentage} </div>
                    <div className="subtitle-1 fw-7">Year of Passing:{profileData.xClassDetails.xyearOfPassing} </div>
                   </div>                
                </div>
              </div>
         </div>
          </div>
         
        </div>
      </div>
    </div>
  </section>
  
</div>
 
  );
};
 
export default ApplicantViewProfile;