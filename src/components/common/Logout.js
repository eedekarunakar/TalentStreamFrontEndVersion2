import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApplicantAPIService, { apiUrl } from '../../services/ApplicantAPIService';
 
const Logout = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const navigate = useNavigate();
 
  useEffect(() => {
    const signOutUser = async () => {
      try {
        const response = await fetch(`${apiUrl}/applicant/applicantsignOut`, {
          method: 'POST',
          credentials: 'include',
        });
 
       
 
        if (response.status === 204) {
          setIsLoggedOut(true);
 
         
        } else {
          // Handle the error, e.g., display an error message
          console.error('Sign-out request failed.');
          setIsLoggedOut(true); // If there's an error, still consider the user as logged out
        }
      } catch (error) {
        // Handle network or other errors
        console.error('Error signing out:', error);
        setIsLoggedOut(true); // If there's an error, still consider the user as logged out
      }
    };
 
    signOutUser();
  }, []); // Empty dependency array means this effect runs once after the initial render
 
  return (
    <div>
      {isLoggedOut ? (
        <div>
        {(() => {
         
          localStorage.removeItem('jwtToken');
          localStorage.removeItem('user');
          navigate('/');
         
        })()}
      </div>
      ) : (
        <p>Logging out...</p>
      )}
    </div>
  );
};
 
export default Logout;
