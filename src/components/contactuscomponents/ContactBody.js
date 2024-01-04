import React, { useState } from 'react';
import './ContactStyle.css';
import ApplicantAPIService, { apiUrl } from '../../services/ApplicantAPIService';
import axios from 'axios';

export default function ContacBody() {
    const [formData, setFormData] = useState({
      name: '',
      subject: '',
      email: '',
      questions: '',
    });

    const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate that all required fields are filled
    if (!formData.name || !formData.subject || !formData.email || !formData.questions) {
         // You can show an alert or error message to the user here if needed
        window.alert("Please complete all the fields.");
    
     
      return;
    }
  
    try {
      const response = await axios.post(`${apiUrl}/send-message`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        // Show alert for successful submission and clear the form
        window.alert('Message sent successfully!We will get back you soon');
  
        setFormData({
          name: '',
          subject: '',
          email: '',
          questions: '',
        });
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  

 

  return (
    <div>
     {/* <section className="bg-f5">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-title">
                <div className="widget-menu-link">
                  <ul> */}
                    {/* <li><a href="/">Home</a></li>
                    <li><a href="/contactus">Contact Us</a></li> */}
                  {/* </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
     <section>
     <div className="tf-container">
      <div class="row">
                <div class="col-lg-12">
                    <div class="group-contact-us">
                        <div class="infor-contact-v1">
                            <div class="icon-inforr">
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 52 52" fill="none">
                                        <path d="M10.4978 34.5661C15.6267 40.6971 21.8007 45.5242 28.8475 48.9399C31.5305 50.2114 35.1186 51.7198 39.1161 51.9784C39.3639 51.9892 39.601 52 39.8488 52C42.5318 52 44.6868 51.0733 46.4431 49.1662C46.4538 49.1554 46.4754 49.1339 46.4862 49.1123C47.1111 48.3581 47.8223 47.6792 48.5657 46.9573C49.0722 46.4724 49.5894 45.966 50.085 45.4488C52.3801 43.0568 52.3801 40.0182 50.0635 37.7016L43.5877 31.2259C42.4887 30.0837 41.1741 29.4803 39.7949 29.4803C38.4157 29.4803 37.0904 30.0837 35.959 31.2151L32.1016 35.0725C31.746 34.8678 31.3797 34.6846 31.0349 34.5122C30.6039 34.2967 30.2052 34.092 29.8496 33.8657C26.337 31.6353 23.1476 28.7261 20.0983 24.9872C18.5575 23.0369 17.5231 21.3991 16.8011 19.729C17.814 18.8131 18.7622 17.8541 19.678 16.9167C20.0013 16.5827 20.3353 16.2487 20.6693 15.9146C21.833 14.7509 22.458 13.4041 22.458 12.0356C22.458 10.6672 21.8438 9.32035 20.6693 8.15665L17.4584 4.94571C17.0813 4.56859 16.7257 4.20224 16.3594 3.82511C15.6482 3.09242 14.9047 2.33817 14.172 1.65935C13.0622 0.571073 11.7584 0 10.3792 0C9.01083 0 7.69628 0.571073 6.54336 1.67012L2.51352 5.69996C1.04812 7.16535 0.218451 8.94322 0.0460513 11.0012C-0.158673 13.5765 0.315426 16.3133 1.54377 19.6212C3.42939 24.7393 6.27398 29.4911 10.4978 34.5661ZM2.67514 11.2275C2.80444 9.79445 3.35397 8.59842 4.38836 7.56403L8.39665 3.55574C9.0216 2.95234 9.7112 2.63987 10.3792 2.63987C11.0365 2.63987 11.7046 2.95234 12.3187 3.57729C13.0407 4.24534 13.7195 4.94571 14.4522 5.68918C14.8185 6.06631 15.1957 6.44343 15.5728 6.83133L18.7837 10.0423C19.4518 10.7103 19.7966 11.3891 19.7966 12.0572C19.7966 12.7252 19.4518 13.4041 18.7837 14.0721C18.4497 14.4061 18.1157 14.7509 17.7817 15.085C16.7796 16.0978 15.8422 17.0568 14.8078 17.9726C14.7862 17.9942 14.7754 18.005 14.7539 18.0265C13.8596 18.9208 13.9996 19.7721 14.2151 20.4186C14.2259 20.4509 14.2367 20.4724 14.2475 20.5048C15.0771 22.4981 16.2301 24.3945 18.0295 26.6573C21.262 30.644 24.6669 33.7364 28.4165 36.1177C28.8799 36.4194 29.3755 36.6564 29.8388 36.8935C30.2698 37.109 30.6685 37.3137 31.0241 37.54C31.0672 37.5615 31.0995 37.5831 31.1426 37.6046C31.4982 37.7878 31.843 37.874 32.1878 37.874C33.0498 37.874 33.6101 37.3245 33.7933 37.1413L37.8231 33.1115C38.448 32.4865 39.1269 32.1525 39.7949 32.1525C40.6138 32.1525 41.2819 32.6589 41.7021 33.1115L48.1994 39.598C49.4924 40.891 49.4816 42.2918 48.1671 43.6602C47.7145 44.145 47.2404 44.6084 46.734 45.0932C45.9798 45.8259 45.1932 46.5802 44.482 47.4314C43.2429 48.7675 41.7667 49.3925 39.8596 49.3925C39.6764 49.3925 39.4824 49.3817 39.2993 49.3709C35.7651 49.1446 32.4787 47.7654 30.0112 46.591C23.3092 43.3477 17.4261 38.7468 12.545 32.9068C8.52595 28.0688 5.82144 23.5649 4.03279 18.7377C2.92297 15.7746 2.50274 13.3933 2.67514 11.2275Z" fill="white"/>
                                        </svg>
                                </div>
                                <div class="content">
                                    <h6>Call Us</h6>
                                    <p>+91-9966662524</p>
                                </div>
                            </div>
                            <div class="icon-inforr">
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="30" viewBox="0 0 52 40" fill="none">
                                        <path d="M47.125 0.5H4.87503C2.18677 0.5 0 2.68678 0 5.37504V34.625C0 37.3133 2.18677 39.5001 4.87503 39.5001H47.125C49.8132 39.5001 52 37.3133 52 34.625V5.37504C52 2.68678 49.8132 0.5 47.125 0.5ZM47.125 3.74999C47.3457 3.74999 47.5558 3.7958 47.7478 3.87579L26 22.7248L4.25209 3.87579C4.4441 3.7959 4.65414 3.74999 4.87493 3.74999H47.125ZM47.125 36.25H4.87503C3.97844 36.25 3.24999 35.5216 3.24999 34.6249V7.30944L24.9352 26.1033C25.2415 26.3682 25.6207 26.5 26 26.5C26.3793 26.5 26.7585 26.3684 27.0648 26.1033L48.75 7.30944V34.625C48.7499 35.5216 48.0216 36.25 47.125 36.25Z" fill="white"/>
                                        </svg>
                                </div>
                                <div class="content">
                                    <h6>Email</h6>
                                    <p><a mailto="support@tekworks.in">support@tekworks.in</a></p>
                                </div>
                            </div>
                            <div class="icon-inforr">
                                <div class="icon">
                                    <svg width="28" height="42" viewBox="0 0 38 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.0811 0C9.00077 0 0.799805 8.20097 0.799805 18.2812C0.799805 21.687 1.74322 25.0108 3.52869 27.8943L18.0404 51.2798C18.3184 51.7278 18.8082 52 19.3349 52C19.3389 52 19.3429 52 19.3469 52C19.8782 51.9958 20.369 51.7152 20.6419 51.2594L34.7837 27.6473C36.4707 24.8247 37.3623 21.586 37.3623 18.2812C37.3623 8.20097 29.1613 0 19.0811 0ZM32.169 26.0831L19.3118 47.5501L6.11833 26.289C4.63216 23.8889 3.82637 21.1199 3.82637 18.2812C3.82637 9.88102 10.6808 3.02656 19.0811 3.02656C27.4813 3.02656 34.3256 9.88102 34.3256 18.2812C34.3256 21.0357 33.5729 23.7339 32.169 26.0831Z" fill="white"/>
                                        <path d="M19.0811 9.14062C14.0409 9.14062 9.94043 13.2411 9.94043 18.2812C9.94043 23.2892 13.9742 27.4219 19.0811 27.4219C24.2509 27.4219 28.2217 23.2341 28.2217 18.2812C28.2217 13.2411 24.1212 9.14062 19.0811 9.14062ZM19.0811 24.3953C15.7034 24.3953 12.967 21.6498 12.967 18.2812C12.967 14.9212 15.721 12.1672 19.0811 12.1672C22.4411 12.1672 25.185 14.9212 25.185 18.2812C25.185 21.6006 22.5122 24.3953 19.0811 24.3953Z" fill="white"/>
                                        </svg>
                                </div>
                                <div class="content">
                                    <h6>Address</h6>
                                    <p>54-15-18E, Gurunanak Colony Road,
                                       3rd Floor, Sai Odessey Complex,
                                        Gurunanak Colony, Vijayawada</p>
                                </div>
                            </div>
                            <ul class="list-social d-flex aln-center">
                            <li>
                    <a href="https://www.facebook.com/tekworks.in"><i class="icon-facebook"></i></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/tekworks-in"><i class="icon-linkedin2"></i></a>
                  </li>
                  {/* <li>
                    <a href="#"><i class="icon-twitter"></i></a>
                  </li> */}
                  <li>
                    <a href="https://www.instagram.com/tekworks_hiring"><i class="icon-instagram1"></i></a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@TekWorks-in"><i class="icon-youtube"></i></a>
                  </li>
                            </ul>
                        </div>
                        <div class="form-candidate">
                        <h5>Want To Know More About Us And Our Services?</h5>
<p style={{'fontFamily':'Plus Jakarta Sans'}}><b>Fill in the form and our executives will get back to you to help you with your requirements</b></p><br />
        <form onSubmit={handleSubmit}>
          <div class="group-input">
            <div class="ip">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div class="ip">
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div class="ip out s1">
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div class="ip out">
            <textarea
              placeholder="Your question..."
              name="questions"
              value={formData.questions}
              onChange={handleInputChange}
            ></textarea>
             <span style={{'color':'red'}}>*All fields are required</span><br />
          </div>
         
          <button type="submit">send Message</button>
        </form>
      </div>
                    </div>
                </div>
            </div>
          </div>
            </section>
        
   
    </div>
  )
}